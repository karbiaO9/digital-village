"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

type Choice = {
  text: string
  stats: {
    autonomy?: number
    dependency?: number
    sustainability?: number
  }
  correct: boolean
}

type Event = {
  id: number
  title: string
  choices: Choice[]
}

const GAME_DURATION = 120
const INITIAL_STATS = {
  autonomy: 50,
  dependency: 50,
  sustainability: 50,
}

const EVENTS = [
  {
    id: 1,
    title: "Pourquoi reconditionner un ordinateur au lieu d'en acheter un neuf ?",
    choices: [
      { text: "A. Pour réduire les déchets électroniques", stats: { autonomy: 5, sustainability: 5 }, correct: false },
      { text: "B. Pour économiser de l'argent", stats: { autonomy: 5, sustainability: 5 }, correct: false },
      { text: "C. Pour allonger la durée de vie du matériel", stats: { autonomy: 5, sustainability: 5 }, correct: false },
      { text: "D. Toutes les réponses ci-dessus", stats: { autonomy: 10, sustainability: 15 }, correct: true },
    ],
  },
  {
    id: 2,
    title: "Quel système d'exploitation favorise le numérique durable ?",
    choices: [
      { text: "A. Windows 11", stats: { autonomy: -5, dependency: 5 }, correct: false },
      { text: "B. macOS", stats: { autonomy: -5, dependency: 5 }, correct: false },
      { text: "C. Linux", stats: { autonomy: 15, dependency: -10, sustainability: 10 }, correct: true },
      { text: "D. Android", stats: { autonomy: -3, dependency: 3 }, correct: false },
    ],
  },
  {
    id: 3,
    title: "Que signifie \"logiciel open-source\" ?",
    choices: [
      { text: "A. Un logiciel gratuit", stats: { autonomy: 0, dependency: 0 }, correct: false },
      { text: "B. Un logiciel dont le code source est ouvert et modifiable", stats: { autonomy: 12, sustainability: 10 }, correct: true },
      { text: "C. Un logiciel réservé aux experts", stats: { autonomy: -5, dependency: 5 }, correct: false },
      { text: "D. Un logiciel dangereux", stats: { autonomy: -10, dependency: 10 }, correct: false },
    ],
  },
  {
    id: 4,
    title: "Quelle action réduit la dépendance aux Big Tech ?",
    choices: [
      { text: "A. Utiliser des alternatives libres", stats: { autonomy: 15, dependency: -15, sustainability: 10 }, correct: true },
      { text: "B. Accepter tous les comptes Google par défaut", stats: { autonomy: -10, dependency: 15 }, correct: false },
      { text: "C. Acheter un nouvel iPhone chaque année", stats: { autonomy: -15, dependency: 20, sustainability: -10 }, correct: false },
      { text: "D. Centraliser toutes les données sur un cloud américain", stats: { autonomy: -12, dependency: 18 }, correct: false },
    ],
  },
  {
    id: 5,
    title: "Qu'est-ce que l'obsolescence programmée ?",
    choices: [
      { text: "A. Une panne accidentelle", stats: { autonomy: 0, sustainability: 0 }, correct: false },
      { text: "B. Une mise à jour qui rend le système plus rapide", stats: { autonomy: 0, sustainability: 0 }, correct: false },
      { text: "C. Le fait de rendre un appareil inutilisable avant l'heure", stats: { autonomy: 8, sustainability: 12 }, correct: true },
      { text: "D. Un bug temporaire", stats: { autonomy: 0, sustainability: 0 }, correct: false },
    ],
  },
  {
    id: 6,
    title: "Quelle est la priorité d'une école numérique responsable ?",
    choices: [
      { text: "A. Utiliser les outils les plus chers", stats: { autonomy: -5, dependency: 5, sustainability: -5 }, correct: false },
      { text: "B. Former des utilisateurs libres et éclairés", stats: { autonomy: 12, dependency: -8, sustainability: 15 }, correct: true },
      { text: "C. Forcer les élèves à utiliser un seul fournisseur", stats: { autonomy: -10, dependency: 15 }, correct: false },
      { text: "D. Acheter le matériel le plus récent", stats: { autonomy: -8, dependency: 8, sustainability: -8 }, correct: false },
    ],
  },
  {
    id: 7,
    title: "Quel geste simple améliore la durabilité numérique ?",
    choices: [
      { text: "A. Effacer les applications inutilisées", stats: { autonomy: 5, sustainability: 10 }, correct: true },
      { text: "B. Laisser les appareils allumés H24", stats: { autonomy: -5, sustainability: -10 }, correct: false },
      { text: "C. Accepter toutes les cookies tracking", stats: { autonomy: -8, dependency: 10 }, correct: false },
      { text: "D. Acheter plus d'abonnements cloud", stats: { autonomy: -5, dependency: 8, sustainability: -5 }, correct: false },
    ],
  },
  {
    id: 8,
    title: "Quel est l'avantage d'installer Linux dans une école ?",
    choices: [
      { text: "A. C'est plus stable et léger", stats: { autonomy: 12, dependency: -10, sustainability: 10 }, correct: true },
      { text: "B. Ça casse les ordinateurs", stats: { autonomy: -10, dependency: 10 }, correct: false },
      { text: "C. Ça bloque Internet", stats: { autonomy: -5, dependency: 5 }, correct: false },
      { text: "D. C'est illégal", stats: { autonomy: -10, dependency: 10 }, correct: false },
    ],
  },
  {
    id: 9,
    title: "Une bonne pratique pour protéger les données personnelles ?",
    choices: [
      { text: "A. Utiliser des mots de passe simples", stats: { autonomy: -5, dependency: 5 }, correct: false },
      { text: "B. Partager son identifiant sur Discord", stats: { autonomy: -10, dependency: 10 }, correct: false },
      { text: "C. Désactiver le chiffrement", stats: { autonomy: -8, dependency: 8 }, correct: false },
      { text: "D. Utiliser des outils libres et sécurisés", stats: { autonomy: 12, dependency: -8, sustainability: 10 }, correct: true },
    ],
  },
  {
    id: 10,
    title: "Quel est l'esprit de la démarche NIRD ?",
    choices: [
      { text: "A. Subir le numérique", stats: { autonomy: -10, dependency: 15 }, correct: false },
      { text: "B. Résister, comprendre et agir", stats: { autonomy: 15, dependency: -12, sustainability: 15 }, correct: true },
      { text: "C. Dépenser plus", stats: { autonomy: -8, dependency: 10, sustainability: -8 }, correct: false },
      { text: "D. Aucun des choix", stats: { autonomy: -5, dependency: 5 }, correct: false },
    ],
  },
]

export default function DigitalVillagePage() {
  const [gameState, setGameState] = useState<"landing" | "playing" | "ended">("landing")
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION)
  const [stats, setStats] = useState(INITIAL_STATS)
  const [currentEvent, setCurrentEvent] = useState<Event | null>(null)
  const [score, setScore] = useState(0)
  const [eventHistory, setEventHistory] = useState<Array<{ eventId: number; correct: boolean }>>([])

  // Timer effect
  useEffect(() => {
    if (gameState !== "playing") return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setGameState("ended")
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [gameState])

  // Trigger random events
  useEffect(() => {
    if (gameState !== "playing" || currentEvent) return

    const eventTimer = setTimeout(
      () => {
        const randomEvent = EVENTS[Math.floor(Math.random() * EVENTS.length)]
        setCurrentEvent(randomEvent)
      },
      2000 + Math.random() * 3000,
    )

    return () => clearTimeout(eventTimer)
  }, [gameState, currentEvent])

  // Calculate final score
  const calculateScore = () => {
    const avg = (stats.autonomy + (100 - stats.dependency) + stats.sustainability) / 3
    return Math.round(avg * 10)
  }

  const handleChoice = (choiceStats: Choice["stats"], isCorrect: boolean) => {
    if (!currentEvent) return
    
    const newStats = {
      autonomy: Math.max(0, Math.min(100, stats.autonomy + (choiceStats.autonomy || 0))),
      dependency: Math.max(0, Math.min(100, stats.dependency + (choiceStats.dependency || 0))),
      sustainability: Math.max(0, Math.min(100, stats.sustainability + (choiceStats.sustainability || 0))),
    }
    setStats(newStats)
    setEventHistory([...eventHistory, { eventId: currentEvent.id, correct: isCorrect }])
    setCurrentEvent(null)
    setScore(calculateScore())
  }

  const startGame = () => {
    setGameState("playing")
    setTimeLeft(GAME_DURATION)
    setStats(INITIAL_STATS)
    setScore(0)
    setEventHistory([])
    setCurrentEvent(null)
  }

  const resetGame = () => {
    setGameState("landing")
    setTimeLeft(GAME_DURATION)
    setStats(INITIAL_STATS)
    setScore(0)
    setEventHistory([])
    setCurrentEvent(null)
  }

  // Landing screen
  if (gameState === "landing") {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md text-center"
        >
          <div className="mb-8">
            <h1 className="text-5xl font-bold text-emerald-700 mb-2">🛡️ Défendez le Village Numérique</h1>
            <p className="text-lg text-gray-600">Protégez votre autonomie numérique contre la domination des Big Tech</p>
          </div>

          <div className="card-backdrop rounded-lg shadow-lg p-6 mb-6">
            <p className="text-gray-700 mb-4">
              Prenez des décisions stratégiques pour maintenir l'équilibre de votre village numérique. Gérez trois métriques clés :
            </p>
            <ul className="text-left space-y-2 text-sm text-gray-600">
              <li>
                🟢 <strong>Autonomie</strong> - Contrôlez votre propre infrastructure
              </li>
              <li>
                🔴 <strong>Dépendance</strong> - Dépendance aux plateformes externes
              </li>
              <li>
                🔵 <strong>Durabilité</strong> - Viabilité à long terme
              </li>
            </ul>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={startGame}
            className="w-full bg-emerald-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-emerald-700 transition"
          >
            Démarrer le jeu
          </motion.button>
        </motion.div>
      </div>
    )
  }

  // Game screen
  if (gameState === "playing") {
    return (
      <div className="min-h-screen p-6 relative">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-emerald-700 mb-4">Défendez le Village Numérique</h1>

            <div className="card-backdrop rounded-lg p-4 shadow mb-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-700">Temps restant</span>
                <motion.span
                  key={timeLeft}
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  className={`text-3xl font-bold ${timeLeft > 30 ? "text-emerald-600" : "text-red-600"}`}
                >
                  {timeLeft}s
                </motion.span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <motion.div
                  className="bg-emerald-600 h-2 rounded-full"
                  initial={{ width: "100%" }}
                  animate={{ width: `${(timeLeft / GAME_DURATION) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <motion.div
              className="card-backdrop rounded-lg p-4 shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-sm text-gray-600 mb-2">Autonomie</p>
              <p className="text-3xl font-bold text-emerald-600 mb-2">{stats.autonomy}</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  className="bg-emerald-600 h-2 rounded-full"
                  animate={{ width: `${stats.autonomy}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>

            <motion.div
              className="card-backdrop rounded-lg p-4 shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-sm text-gray-600 mb-2">Dépendance</p>
              <p className="text-3xl font-bold text-red-600 mb-2">{stats.dependency}</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  className="bg-red-600 h-2 rounded-full"
                  animate={{ width: `${stats.dependency}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>

            <motion.div
              className="card-backdrop rounded-lg p-4 shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-sm text-gray-600 mb-2">Durabilité</p>
              <p className="text-3xl font-bold text-blue-600 mb-2">{stats.sustainability}</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  className="bg-blue-600 h-2 rounded-full"
                  animate={{ width: `${stats.sustainability}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          </div>

          {/* Event Card */}
          {currentEvent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="card-backdrop rounded-lg shadow-lg p-6 mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{currentEvent.title}</h2>

              <div className="space-y-3">
                {currentEvent.choices.map((choice, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleChoice(choice.stats, choice.correct)}
                    className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition border-2 border-emerald-700"
                  >
                    {choice.text}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="card-backdrop rounded-lg shadow p-6 text-center text-gray-600"
            >
              En attente de la prochaine question...
            </motion.div>
          )}
        </div>
      </div>
    )
  }

  if (gameState === "ended") {
    const finalScore = calculateScore()
    let result = "Neutre"
    let resultColor = "text-gray-600"

    if (stats.autonomy > 70 && stats.dependency < 30 && stats.sustainability > 60) {
      result = "Victoire ! Village Numérique sécurisé ! 🎉"
      resultColor = "text-emerald-600"
    } else if (stats.autonomy < 30 || stats.dependency > 70) {
      result = "Défaite ! Les GAFAM (Google, Apple, Facebook, Amazon, Microsoft) ont gagné 🔴"
      resultColor = "text-red-600"
    }

    return (
      <div className="min-h-screen flex items-center justify-center p-4 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md text-center"
        >
          <h1 className={`text-4xl font-bold mb-4 ${resultColor}`}>{result}</h1>

          <div className="card-backdrop rounded-lg shadow-lg p-6 mb-6">
            <p className="text-5xl font-bold text-emerald-600 mb-4">{finalScore}</p>
            <p className="text-gray-600 mb-4">Score final</p>

            <div className="space-y-3 text-left">
              <p className="text-gray-700">
                <strong>Autonomie :</strong> {stats.autonomy}
              </p>
              <p className="text-gray-700">
                <strong>Dépendance :</strong> {stats.dependency}
              </p>
              <p className="text-gray-700">
                <strong>Durabilité :</strong> {stats.sustainability}
              </p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={resetGame}
            className="w-full bg-emerald-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-emerald-700 transition"
          >
            Rejouer
          </motion.button>
        </motion.div>
      </div>
    )
  }
}

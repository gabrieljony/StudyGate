import React, { useState } from 'react'
import './ReduxRoadmap.css'

const levels = [
  {
    title: 'Básico',
    items: [
      'O que é Redux',
      'Store',
      'State',
      'Actions',
      'Reducers'
    ]
  },
  {
    title: 'Intermediário',
    items: [
      'Redux Toolkit',
      'Hooks do Redux',
      'Middleware (thunk)',
      'Organização de slices',
      'Loading/Error/Success states'
    ]
  },
  {
    title: 'Avançado',
    items: [
      'Selectors',
      'Persistência de state',
      'Middleware avançado (saga, observable)',
      'Normalização de state',
      'Time-travel / DevTools',
      'Patterns de arquitetura'
    ]
  }
]

export default function ReduxRoadmap() {
  const [currentLevel, setCurrentLevel] = useState(0)
  const [checkedItems, setCheckedItems] = useState({})

  const handleCheck = (levelIndex, itemIndex) => {
    setCheckedItems(prev => ({
      ...prev,
      [levelIndex]: {
        ...prev[levelIndex],
        [itemIndex]: !prev[levelIndex]?.[itemIndex]
      }
    }))
  }

  const nextLevel = () => setCurrentLevel((prev) => (prev + 1) % levels.length)
  const prevLevel = () => setCurrentLevel((prev) => (prev - 1 + levels.length) % levels.length)

  return (
    <div className="roadmap-container">
      <h2>{levels[currentLevel].title}</h2>

      <ul className="roadmap-list">
        {levels[currentLevel].items.map((item, idx) => (
          <li key={idx}>
            <label>
              <input
                type="checkbox"
                checked={checkedItems[currentLevel]?.[idx] || false}
                onChange={() => handleCheck(currentLevel, idx)}
              />
              {item}
            </label>
          </li>
        ))}
      </ul>

      <div className="roadmap-controls">
        <button onClick={prevLevel}>Anterior</button>
        <button onClick={nextLevel}>Próximo</button>
      </div>
    </div>
  )
}

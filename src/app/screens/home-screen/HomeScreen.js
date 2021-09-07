import React, { useCallback } from 'react'
import Home from './Home'

const HomeScreen = ({ navigation }) => {
  const handleStartGame = useCallback(
    (mode) => {
      navigation.navigate('Game', { mode })
    },
    [navigation],
  )
  return <Home onStartGame={handleStartGame} />
}

export default HomeScreen

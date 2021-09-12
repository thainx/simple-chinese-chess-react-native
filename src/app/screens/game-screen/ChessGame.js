import React, { useRef } from 'react'
import { GameEngine } from 'react-native-game-engine'

// width: wWidth - 2 * 10

function ChessGame() {
  const engine = useRef()

  return (
    <GameEngine
      ref={engine}
      style={{
        backgroundColor: 'burlywood',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {/* <ChessBoard /> */}
    </GameEngine>
  )
}

export default ChessGame

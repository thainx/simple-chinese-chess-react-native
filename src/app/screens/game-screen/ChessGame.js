import React, { useRef } from 'react'
import { StyleSheet } from 'react-native'
import { GameEngine } from 'react-native-game-engine'
import ChessBoard from './ChessBoard'
import useChessBoardDimensions from './useChessBoardDimensions'

function ChessGame() {
  const engine = useRef()

  const {
    position,
    width: boardWidth,
    height: boardHeight,
  } = useChessBoardDimensions()

  return (
    <GameEngine
      ref={engine}
      entities={{
        chessBoard: {
          position: [position.x, position.y],
          size: [boardWidth, boardHeight],
          renderer: <ChessBoard />,
        },
      }}
      style={styles.container}>
      {/* <ChessBoard /> */}
    </GameEngine>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'burlywood',
  },
})

export default ChessGame

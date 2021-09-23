import React from 'react'
import { StyleSheet, View } from 'react-native'

function ChessBoard({ position: [x, y], size: [width, height] }) {
  return (
    <View
      style={[
        styles.container,
        {
          left: x,
          top: y,
          width,
          height,
        },
      ]}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'white',
  },
})

export default ChessBoard

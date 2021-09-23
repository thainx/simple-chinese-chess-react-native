// width: wWidth - 2 * 10

import { useWindowDimensions } from 'react-native'

function useChessBoardDimensions() {
  const { width, height } = useWindowDimensions()

  const isLandscape = width > height

  let boardWidth = 0,
    boardHeight = 0,
    gridSize = 0,
    position = { x: 0, y: 0 }

  if (isLandscape) {
    boardHeight = height - 2 * 10
    gridSize = boardHeight / 10.5
    boardWidth = gridSize * 9.5
  } else {
    boardWidth = width - 2 * 10
    gridSize = boardWidth / 9.5
    boardHeight = gridSize * 10.5
  }

  position = { x: (width - boardWidth) / 2, y: (height - boardHeight) / 2 }

  return { width: boardWidth, height: boardHeight, gridSize, position }
}

export default useChessBoardDimensions

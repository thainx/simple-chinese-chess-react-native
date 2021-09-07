import React, { useCallback } from 'react'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FillButton from './components/FilledButton'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  title: { textAlign: 'center' },
  button: {
    marginHorizontal: 50,
  },
})

const Home = ({ onStartGame }) => {
  const handleStartPvp = useCallback(() => {
    onStartGame('pvp')
  }, [onStartGame])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Simple Chinese Chess</Text>
      <FillButton
        label="PvP"
        color="black"
        onPress={handleStartPvp}
        style={styles.button}
      />
    </SafeAreaView>
  )
}

export default Home

import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
  label: { color: 'white', fontWeight: 'bold' },
})

const FillButton = ({ label, color, style, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        style,
        {
          borderRadius: 8,
          borderWidth: 2,
          backgroundColor: color,
          paddingHorizontal: 14,
          paddingVertical: 10,
          alignItems: 'center',
          opacity: pressed ? 0.5 : 1,
        },
      ]}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  )
}

export default FillButton

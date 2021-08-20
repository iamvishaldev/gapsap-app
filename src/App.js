import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import SignUp from './Screens/SignUp/SignUp'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="green" />
      <View style={styles.container}>
        <SignUp />
      </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5'
  }
})

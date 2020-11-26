import React, { Component } from 'react'
import { StyleSheet } from 'react-native';

import GameComponent from '../components/GameComponent';
import { View } from '../components/Themed';

interface MainProps {
}
  
interface MainState{
}


export default class MainScreen extends Component<MainProps, MainState> {
  
  render() {
    return (
      <View style={styles.container}>
        <GameComponent/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

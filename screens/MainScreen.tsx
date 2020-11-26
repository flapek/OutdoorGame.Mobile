import * as React from 'react';
import { StyleSheet } from 'react-native';

import GameComponent from '../components/GameComponent';
import { View } from '../components/Themed';

import GameRepository from '../Repositories/GameRepository'

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <GameComponent/>
    </View>
  );
}
var repository = new GameRepository();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

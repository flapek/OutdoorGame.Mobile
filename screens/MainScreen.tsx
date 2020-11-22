import * as React from 'react';
import { Button, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import GameRepository from '../Repositories/GameRepository'
import GameView from '../view/GameView'

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <GameView data={[]} loading={true}></GameView>
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

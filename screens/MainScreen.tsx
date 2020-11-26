import * as React from 'react';
import { StyleSheet } from 'react-native';

import GameComponent from '../components/GameComponent';
import { View } from '../components/Themed';

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <GameComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

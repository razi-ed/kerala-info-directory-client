import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
  },
});

const App = () => (
  <View style={styles.container}>
    <Header title="Home" />
  </View>
);

export default App;

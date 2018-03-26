import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppHeader from './Header'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppHeader title={"Home"}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
  },
});

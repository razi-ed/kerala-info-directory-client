import React from 'react';
import { Header } from 'react-native-elements'
import { StyleSheet, Text, View } from 'react-native';

export default class AppHeader extends React.Component {
  render() {
    return (
      <Header
        placement="left"
        backgroundColor="#2DBD60"
        leftComponent={{ icon: 'menu', color: '#888888' }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#f5f5f5' } }}
        rightComponent={{ icon: 'home', color: '#888888' }}
      />
    );
  }
}

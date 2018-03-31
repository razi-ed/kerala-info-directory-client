import React, { Component } from 'react';
import { View } from 'react-native';
import { withTheme, Text } from 'react-native-paper';
import PropTypes from 'prop-types';

class KeralaTourism extends Component {
  state = {};
  render() {
    return (
      <View>
        <Text>KeralaTourism</Text>
      </View>
    );
  }
}

KeralaTourism.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withTheme(KeralaTourism);

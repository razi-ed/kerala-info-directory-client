import React, { Component } from 'react';
import { View } from 'react-native';
import { withTheme, Text } from 'react-native-paper';
import PropTypes from 'prop-types';

class KeralaInfo extends Component {
  state = {};
  static navigationOptions = {
    title: "Kerala Info"
  }
  render() {
    return (
      <View>
        <Text>KeralaInfo</Text>
      </View>
    );
  }
}

KeralaInfo.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withTheme(KeralaInfo);

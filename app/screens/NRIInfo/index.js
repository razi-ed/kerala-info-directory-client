import React, { Component } from 'react';
import { View } from 'react-native';
import { withTheme, Text } from 'react-native-paper';
import PropTypes from 'prop-types';

class NRIInfo extends Component {
  state = {};
  render() {
    return (
      <View>
        <Text>NRIInfo</Text>
      </View>
    );
  }
}

NRIInfo.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withTheme(NRIInfo);
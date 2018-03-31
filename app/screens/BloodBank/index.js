import React, { Component } from 'react';
import { View } from 'react-native';
import { withTheme, Text } from 'react-native-paper';
import PropTypes from 'prop-types';

class BloodBank extends Component {
  state = {};
  render({ theme }) {
    const { colors } = theme;
    return (
      <View>
        <Text>BloodBank</Text>
      </View>
    );
  }
}

BloodBank.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withTheme(BloodBank);

import React, { Component } from 'react';
import { View } from 'react-native';
import { withTheme, Text } from 'react-native-paper';
import PropTypes from 'prop-types';

class GovtInfo extends Component {
  state = {};
  render() {
    return (
      <View>
        <Text>GovtInfo</Text>
        <Text>{JSON.stringify(this.props, 2, 2)}</Text>
      </View>
    );
  }
}

GovtInfo.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withTheme(GovtInfo);

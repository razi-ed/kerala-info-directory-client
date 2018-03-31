import React, { Component } from 'react';
import { View } from 'react-native';
import { withTheme, Text, Button } from 'react-native-paper';
import PropTypes from 'prop-types';

class Home extends Component {
  state = {};
  render() {
    return (
      <View>
        <Text>Home</Text>
        <Button primary onPress={() => this.props.navigation.navigate('Home')}>
          Home
        </Button>
        <Button primary onPress={() => this.props.navigation.navigate('BloodBank')}>
          Blood Bank
        </Button>
        <Button primary onPress={() => this.props.navigation.navigate('KeralaTourism')}>
          Kerala Tourism
        </Button>
        <Button primary onPress={() => this.props.navigation.navigate('KeralaInfo')}>
          Kerala Info
        </Button>
        <Button primary onPress={() => this.props.navigation.navigate('News')}>
          News
        </Button>
        <Button primary onPress={() => this.props.navigation.navigate('NRIInfo')}>
          NRI Info
        </Button>
      </View>
    );
  }
}

Home.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withTheme(Home);

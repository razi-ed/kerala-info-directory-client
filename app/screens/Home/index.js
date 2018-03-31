import React, { Component } from 'react';
import { View } from 'react-native';
import { withTheme, Text, Button } from 'react-native-paper';
import PropTypes from 'prop-types';

import LargeButton from '../../components/LargeIconButton';
import LargeButtonContent from '../../components/ImageAndTitle';

class Home extends Component {
  state = {};
  
  _handleNavigation = RouteKey => this.props.navigation.navigate(RouteKey);
  _buttonContent = (image, text) => <LargeButtonContent image={image} title={title} />;
  static navigationOptions = {
    title: "Home"
  }
  render() {
    return (
      <View>
        <Text>Home</Text>
        {/* <LargeButton
          oncePressed={() => this._handleNavigation('BloodBank')}
          image={require('../../../public/assets/icons/blood-donation.png')}
          title={'Blood Bank'}
        /> */}  
        <Button primary onPress={() => this.props.navigation.navigate('GovtInfo')} />
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

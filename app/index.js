// import React from 'react';
// import { View } from 'react-native';
// import { withTheme } from 'react-native-paper';
// import PropTypes from 'prop-types';
import { StackNavigator } from 'react-navigation';

// import Header from './components/Header';
import BloodBankScreen from './screens/BloodBank';
import GovtInfoScreen from './screens/GovtInfo';
import HomeScreen from './screens/Home';
import KeralaInfoScreen from './screens/KeralaInfo';
import KeralaTourismScreen from './screens/KeralaTourism';
import NewsScreen from './screens/News';
import NRIInfoScreen from './screens/NRIInfo';

// function App(props) {
//   const { colors } = props.theme;

//   return (
//     <View style={{ backgroundColor: colors.background }}>
//       <Header title="Home" />
//     </View>
//   );
// }

// App.propTypes = {
//   theme: PropTypes.object.isRequired,
// };

export default StackNavigator(
  {
    GovtInfo: {
      screen: GovtInfoScreen,
    },
    Home: {
      screen: HomeScreen,
    },
    BloodBank: {
      screen: BloodBankScreen,
    },
    KeralaInfo: {
      screen: KeralaInfoScreen,
    },
    KeralaTourism: {
      screen: KeralaTourismScreen,
    },
    News: {
      screen: NewsScreen,
    },
    NRIInfo: {
      screen: NRIInfoScreen,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

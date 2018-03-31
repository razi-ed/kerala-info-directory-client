import React, { PureComponent } from 'react';
import { Image, View, Text } from 'react-native';

export default class ImageAndTitle extends PureComponent {
  render({ image, title }) {
    const resizeMode = 'center';
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#eee',
        }}
      >
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <Image
            style={{
              flex: 1,
              resizeMode,
            }}
            source={image}
          />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              fontSize: 40,
            }}
          >
            {title}
          </Text>
        </View>
      </View>
    );
  }
}

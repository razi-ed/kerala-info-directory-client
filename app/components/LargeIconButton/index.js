import React, { Component } from 'react';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';

import Content from '../ImageAndTitle';

class LargeIconButton extends Component {
  render({ oncePressed, title, image }) {
    return (
      <Button Raised onPress={oncePressed}>
        <Content image={image} title={title} />
      </Button>
    );
  }
}

LargeIconButton.prototype = {
  oncePressed: PropTypes.func.isRequired,
};

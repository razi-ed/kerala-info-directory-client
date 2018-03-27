import React from 'react';
import PropTypes from 'prop-types';
import { Toolbar, ToolbarBackAction, ToolbarContent, ToolbarAction } from 'react-native-paper';

const Header = ({ _goBack, _onMore, title }) => (
  <Toolbar>
    <ToolbarBackAction onPress={_goBack} />
    <ToolbarContent title={title} />
    <ToolbarAction icon="more-vert" onPress={_onMore} />
  </Toolbar>
);

Header.propTypes = {
  _goBack: PropTypes.func.isRequired,
  _onMore: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;

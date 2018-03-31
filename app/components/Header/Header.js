import React from 'react';
import PropTypes from 'prop-types';
import {
  Toolbar,
  ToolbarBackAction,
  ToolbarContent,
  ToolbarAction,
  withTheme,
} from 'react-native-paper';

const Header = ({
  _goBack, _onMore, title, theme,
}) => (
  <Toolbar theme={theme}>
    <ToolbarBackAction onPress={_goBack} />
    <ToolbarContent title={title} theme={theme} dark />
    <ToolbarAction icon="more-vert" onPress={_onMore} />
  </Toolbar>
);

Header.propTypes = {
  _goBack: PropTypes.func.isRequired,
  _onMore: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withTheme(Header);

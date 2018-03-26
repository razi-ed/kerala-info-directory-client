import React, { Component } from 'react';
import { Toolbar, ToolbarBackAction, ToolbarContent, ToolbarAction } from 'react-native-paper';

export default class AppHeader extends Component {
  _goBack = () => {}
  _onMore = () => {}

  render() {
    return (
      <Toolbar>
        <ToolbarBackAction
          onPress={this._goBack}
        />
        <ToolbarContent
          title={this.props.title}
        />
        <ToolbarAction icon="more-vert" onPress={this._onMore} />
      </Toolbar>
    );
  }
}
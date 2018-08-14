import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import Header from './Header';

export default class AnimatedHeader extends React.PureComponent {
  
  _onScroll = (e) => {
    this.header.onScroll(e);
  }

  render() {
    const arr = React.Children.toArray(this.props.children);
    if (arr.length === 0) {
      console.error('AnimatedHeader must have ScrollView or FlatList as a child');
    }
    if (arr.length > 1) {
      console.error('Invalid child, only 1 child accepted')
    }
    const { headerMaxHeight } = this.props;
    const child = React.cloneElement(arr[0], {
      style: {flex: 1},
      ref: (r) => this.scrollView = r,
      scrollEventThrottle: 16,
      onScroll: this._onScroll,
      contentContainerStyle: { paddingTop: headerMaxHeight || 200 }
    });
    return (
      <View style={this.props.style}>
        {child}
        <Header 
          {...this.props}
          ref={(r) => {this.header = r;}} 
        />
      </View>
    );
  }
}
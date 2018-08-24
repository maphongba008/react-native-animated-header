
[![Version](https://img.shields.io/npm/v/react-native-animated-header.svg)](https://www.npmjs.com/package/react-native-animated-header)
[![NPM](https://img.shields.io/npm/dm/react-native-animated-header.svg)](https://www.npmjs.com/package/react-native-animated-header)


# react-native-animated-form

Collapsing toolbar for Android and iOS

## Installation

```bash
npm install --save react-native-animated-header
or
yarn add react-native-animated-header
```

## Demo

Android<br>
![Android](https://raw.githubusercontent.com/maphongba008/react-native-animated-header/master/demo/android-gif.gif)
<br>
iOS<br>
![iOS](https://raw.githubusercontent.com/maphongba008/react-native-animated-header/master/demo/ios-gif.gif)
iPhone X<br>
![iPhoneX]<br>(https://raw.githubusercontent.com/maphongba008/react-native-animated-header/master/demo/ipx.gif)

## Usage

```javascript
import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Icon } from 'native-base';
import AnimatedHeader from 'react-native-animated-header';
import Bg from './assets/bg.jpg';

getListItems = count => {
  const items = [];
  let i = 0;

  while (i < count) {
    i++;
    items.push(
      <View key={i} style={{ backgroundColor: i % 2 === 0 ? '#eee5ff' : '#ceebfd', height: 64 }}>
        <Text style={{ color: '#999' }}>{`List Item ${i}`}</Text>
      </View>
    );
  }

  return items;
};

export default class App extends Component {

  render() {
    return (
      <AnimatedHeader 
        style={{flex: 1 }}
        backText='Back'
        title='Happy coding'
        renderLeft={() => (<Icon name='arrow-back' style={{ marginLeft: 20 }} />)}
        renderRight={() => (<Icon name='add' style={{ marginRight: 20 }} />)}
        backStyle={{ marginLeft: 10 }}
        backTextStyle={{fontSize: 14, color: '#000'}}
        titleStyle={{ fontSize: 22, left: 20, bottom: 20, color: '#000' }}
        headerMaxHeight={200}
        imageSource={Bg}
        toolbarColor='#FFF'
        disabled={false}
      >
        <ScrollView>
          {getListItems(20)}
        </ScrollView>
      </AnimatedHeader>
    );
  }
  }

```

## Properties

name | description | type | isOptional | default
:---- |:----------- | :----| ---- | :-------
backText  | Back text, leave it empty to hide |   String | Yes | `undefined`
title    | Header title  |   String | Yes | `undefined`
renderLeft | To render icon on the left | Function | Yes | `undefined`
renderRight | To render icon on the right | Function | Yes | `undefined`
backStyle | Style of back container | Object | Yes | { marginLeft: 10 }
backTextStyle | Style of back text | Object | Yes | { fontSize: 16 }
titleStyle | Style of title, use `left` and `bottom` for positioning the text | Object | Yes | { fontSize: 20, left: 40, bottom: 30 }
toolbarColor | Toolbar background color | String | Yes | `#FFF`
headerMaxHeight | Height of header when expanded | Number | Yes | `200`
disabled | Do not allow header to collapse | Boolean | Yes | `false`
noBorder | Hide header separator | Boolean | Yes | `false`
imageSource | Image background for header | Image | Yes | `undefined`

## Warning

`AnimatedHeader` only accept 1 child, `ScrollView` or `FlatList`

## Copyright and License

MIT License

Copyright (c) 2018 maphongba008

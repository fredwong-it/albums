// Index.ios.js - place code in here for IOS!!!!

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a Component
// const App = () => {
//   return (
//     <Text>Some Text</Text>
//   );
// };

const App = () => (
  <View>
    <Header headerText={'Albums'}/>
    <AlbumList></AlbumList>
  </View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);

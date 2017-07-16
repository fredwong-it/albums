import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

//const AlbumList = () => {
class AlbumList extends Component {
  // one time initalize
  state = { albums: [] }

  // initalize data loading process
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      // <Text key={album.title}>{album.title}</Text>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);

    return (
        <View>
          {this.renderAlbums()}
        </View>
    );
  }
}

export default AlbumList;

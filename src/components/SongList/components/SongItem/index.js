/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

export default class SongItem extends Component {
  static propTypes = {
    song: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      author: PropTypes.string,
      thumbnail: PropTypes.string,
    }).isRequired,
    style: View.propTypes.style,
    onPress: PropTypes.func.isRequired,
  };

  static defaultProps = {
    style: {},
  };

  static state = {}

  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={this.props.onPress}
        style={[styles.container, this.props.style]}
      >
        <Image
          style={styles.image}
          source={{ uri: this.props.song.thumbnail }}
        />

        <View style={styles.songInfo}>
          <Text style={styles.title}>{this.props.song.title}</Text>
          <Text style={styles.description}>{this.props.song.author}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

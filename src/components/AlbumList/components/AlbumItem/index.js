/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { TouchableOpacity, Image, Text, View } from 'react-native';

/* Redux */
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import styles from './styles';

export class AlbumItem extends Component {
  static propTypes = {
    album: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      author: PropTypes.string,
      thumbnail: PropTypes.string,
    }).isRequired,
    style: View.propTypes.style,
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    style: {},
  };

  static state = {}

  navigateToAlbum = () => {
    const { album, dispatch } = this.props;

    return dispatch(NavigationActions.navigate({
      routeName: 'Album',
      params: { album },
    }));
  }

  render() {
    return (
      <TouchableOpacity
        style={[styles.container, this.props.style]}
        onPress={this.navigateToAlbum}
        activeOpacity={0.6}
      >
        <Image
          style={styles.image}
          source={{ uri: this.props.album.thumbnail }}
        />

        <Text style={styles.title}>{this.props.album.title}</Text>
        <Text style={styles.description}>{this.props.album.author}</Text>
      </TouchableOpacity>
    );
  }
}

export default connect()(AlbumItem);

/* Core */
import React from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, ScrollView, ImageBackground } from 'react-native';
import Header from 'components/Header';
import SongListComponent from 'components/SongList';
import { AlbumItem } from 'components/AlbumList/components/AlbumItem';

import styles from './styles';

const Album = (props) => {
  const { album } = props.navigation.state.params;

  return (
    <View style={styles.container}>
      <Header title="Álbum" backEnabled />
      <ScrollView
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
      >
        <ImageBackground
          style={styles.background}
          source={{ uri: album.thumbnail }}
          blurRadius={6}
        >
          <View style={styles.contentContainer}>
            <Text style={styles.title}>{album.title}</Text>
            <Text style={styles.author}>{album.author}</Text>
          </View>
        </ImageBackground>

        <SongListComponent
          title="Músicas do Álbum"
          songs={album.songs}
        />
      </ScrollView>
    </View>
  );
};

Album.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        album: PropTypes.shape(AlbumItem.propTypes.album),
      }),
    }),
  }).isRequired,
};

export default Album;

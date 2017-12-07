/* Core */
import React from 'react';
// import PropTypes from 'prop-types';

/* Presentational */
import { View, TouchableOpacity, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import styles from './styles';

const Player = () => (
  <View style={styles.player}>
    <View style={styles.content}>
      <View style={styles.leftContent}>
        <Image
          style={styles.thumbnail}
          source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/41ELXpn6gZL.jpg' }}
        />
        <View style={styles.current}>
          <Text style={styles.title}>Música tocando</Text>
          <Text style={styles.description}>Into the Black</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {}}
      >
        <Icon name="controller-play" size={20} color="#FFF" />
      </TouchableOpacity>
    </View>
  </View>
);

export default Player;

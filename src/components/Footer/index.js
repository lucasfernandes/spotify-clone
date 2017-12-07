/* Core */
import React from 'react';
// import PropTypes from 'prop-types';

/* Presentational */
import { View } from 'react-native';
import NavigationTabs from './components/NavigationTabs';
import Player from './components/Player';

import styles from './styles';


const Footer = props => (
  <View style={styles.footerContainer}>
    <Player />
    <NavigationTabs {...props} />
  </View>
);

export default Footer;

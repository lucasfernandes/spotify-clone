/* Core */
import React from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View } from 'react-native';
import TabItem from './components/TabItem';

import styles from './styles';

const tabs = [
  { index: 0, title: 'Em alta', icon: 'chart' },
  { index: 1, title: 'Busca', icon: 'search' },
];

const NavigationTabs = ({ navigationState, jumpToIndex }) => (
  <View style={styles.tabBar}>
    { tabs.map(tab => (
      <TabItem
        key={tab.index}
        title={tab.title}
        icon={tab.icon}
        active={(tab.index === navigationState.index)}
        onPress={() => jumpToIndex(tab.index)}
      />
    ))}
  </View>
);

NavigationTabs.propTypes = {
  navigationState: PropTypes.shape({
    index: PropTypes.number,
  }).isRequired,
  jumpToIndex: PropTypes.func.isRequired,
};

export default NavigationTabs;

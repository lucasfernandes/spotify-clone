import { StyleSheet } from 'react-native';
import { general, metrics } from 'styles';

const styles = StyleSheet.create({
  ...general,

  listSection: {
    marginHorizontal: 0,
  },

  listItem: {
    marginHorizontal: metrics.smallMargin,
  },

  'listItem-first': {
    marginLeft: metrics.baseMargin,
  },

  'listItem-last': {
    marginRight: metrics.baseMargin,
  },
});

export default styles;

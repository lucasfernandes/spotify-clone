import { StyleSheet } from 'react-native';
import { general, metrics, colors, fonts } from 'styles';

const styles = StyleSheet.create({
  ...general,

  listItem: {
    marginTop: metrics.baseMargin,
  },

  listItemFirst: {
    marginTop: 0,
  },

  emptyList: {
    color: colors.regular,
    fontSize: fonts.small,
    alignSelf: 'center',
  },
});

export default styles;

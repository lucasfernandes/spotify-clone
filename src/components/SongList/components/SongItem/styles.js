import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
  },

  image: {
    width: 50,
    resizeMode: 'cover',
    borderRadius: metrics.baseRadius,
  },

  songInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: metrics.smallMargin,
  },

  title: {
    color: colors.white,
  },

  description: {
    color: colors.regular,
    fontSize: fonts.small,
  },
});

export default styles;

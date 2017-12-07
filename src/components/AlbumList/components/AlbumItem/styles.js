import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    width: 150,
    overflow: 'hidden',
    justifyContent: 'flex-start',
  },

  image: {
    height: 150,
    resizeMode: 'contain',
    borderRadius: metrics.baseRadius,
  },

  title: {
    color: colors.white,
    fontWeight: 'bold',
    marginTop: metrics.smallMargin,
    alignSelf: 'center',
  },

  description: {
    color: colors.regular,
    fontSize: fonts.small,
    alignSelf: 'center',
  },
});

export default styles;

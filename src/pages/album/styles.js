import { StyleSheet } from 'react-native';
import { general, colors, fonts } from 'styles';

const styles = StyleSheet.create({
  ...general,

  background: {
    width: '100%',
    height: 150,
  },

  contentContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.darkTransparent,
  },

  title: {
    color: colors.white,
    fontSize: fonts.big,
    fontWeight: 'bold',
    backgroundColor: colors.transparent,
  },

  author: {
    fontSize: fonts.small,
    color: colors.regular,
    marginTop: 5,
    backgroundColor: colors.transparent,
  },
});

export default styles;

import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'styles';

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: metrics.statusBarHeight,
    paddingHorizontal: metrics.baseMargin,
    height: metrics.navBarHeight + metrics.statusBarHeight,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.darker,
    flexDirection: 'row',
  },

  title: {
    color: colors.white,
    fontSize: fonts.regular,
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  leftButton: {
    width: 20,
  },

  rightHidden: {
    width: 20,
  },
});

export default styles;

import { StyleSheet } from 'react-native';
import { colors, fonts } from 'styles';

const styles = StyleSheet.create({
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },

  title: {
    fontSize: fonts.smaller,
  },

  activeTitle: {
    color: colors.white,
  },

  inactiveTitle: {
    color: colors.regular,
  },

  activeIcon: {
    color: colors.white,
  },

  inactiveIcon: {
    color: colors.regular,
  },

});

export default styles;

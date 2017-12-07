import { StyleSheet } from 'react-native';
import { metrics, colors } from 'styles';

const styles = StyleSheet.create({
  tabBar: {
    height: metrics.tabBarHeight,
    backgroundColor: colors.darker,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
});

export default styles;

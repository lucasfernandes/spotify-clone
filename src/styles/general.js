import metrics from './metrics';
import colors from './colors';
import fonts from './fonts';

const general = {
  safeArea: {
    flex: 1,
    backgroundColor: colors.darker,
  },

  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  section: {
    margin: metrics.baseMargin,
  },

  sectionTitle: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fonts.regular,
    alignSelf: 'center',
    marginBottom: metrics.baseMargin,
  },
};

export default general;

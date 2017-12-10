import React from 'react';
import { SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import Routes from './routes';
import styles from './styles';

const Navigator = ({ dispatch, nav }) => (
  <SafeAreaView style={styles.safeArea}>
    <Routes
      navigation={addNavigationHelpers({
        dispatch,
        state: nav,
      })}
    />
  </SafeAreaView>
);

Navigator.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.shape({
    index: PropTypes.number,
    routes: PropTypes.array,
  }).isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(Navigator);

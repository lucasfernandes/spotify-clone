/* Core */
import React from 'react';
// import PropTypes from 'prop-types';

/* Presentational */
import { View } from 'react-native';
import NavigationTabs from 'components/Footer/components/NavigationTabs';
import PlayerComponent, { Player } from 'components/Footer/components/Player';

/* Redux */
import { connect } from 'react-redux';

const Footer = props => (
  <View>
    { props.player.song && <PlayerComponent /> }
    <NavigationTabs {...props} />
  </View>
);

Footer.propTypes = {
  player: Player.propTypes.player,
};

Footer.defaultProps = {
  player: {},
};

const mapStateToProps = state => ({
  player: state.player,
});

export default connect(mapStateToProps)(Footer);

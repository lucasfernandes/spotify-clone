/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

/* Redux */
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import styles from './styles';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.element,
    backEnabled: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    title: null,
    children: null,
    backEnabled: false,
  };

  static state = {}

  navigateBack = () => {
    const { dispatch } = this.props;

    return dispatch(NavigationActions.back());
  }

  renderHeaderTitle = () => (
    <View style={styles.headerContainer}>
      <View style={styles.leftButton}>
        { this.props.backEnabled &&
          <TouchableOpacity onPress={this.navigateBack}>
            <Icon name="angle-left" size={20} color="#FFF" />
          </TouchableOpacity> }
      </View>

      <Text style={styles.title}>{this.props.title}</Text>
      <View style={styles.rightHidden} />
    </View>
  );

  render() {
    if (!this.props.children) {
      return this.renderHeaderTitle();
    }

    return (
      <View style={styles.headerContainer}>
        { this.props.children }
      </View>
    );
  }
}


export default connect()(Header);

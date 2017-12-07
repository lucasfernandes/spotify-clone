/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, TextInput, ScrollView } from 'react-native';
import Header from 'components/Header';
import SongList from 'components/SongList';

import styles from './styles';

class Search extends Component {
  state = {
    searchText: '',
  }

  inputChangedText = (searchText) => {
    this.setState({ searchText });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar músicas"
            placeholderTextColor="#999"
            onChangeText={this.inputChangedText}
            underlineColorAndroid="transparent"
          />
        </Header>

        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <SongList songs={[]} showTitle={false} />
        </ScrollView>
      </View>
    );
  }
}

export default Search;

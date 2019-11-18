import React, {Component} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#4f6d7a" barStyle="light-content" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4f6d7a',
  },
});

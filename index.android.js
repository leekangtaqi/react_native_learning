/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text
} from 'react-native';
import Page1 from './Page1';
class AwesomeProject extends Component {
  static defaultProps = {
    title: 'hello world'
  }
  render() {
    return (
      <Navigator 
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={(route, navigator) => (
            <Page1
              title={ this.props.title }
              // Function to call when a new scene should be displayed           
              onForward={ () => {
                console.warn(JSON.stringify(route));    
                const nextIndex = route.index + 1;
                navigator.push({
                  title: 'Scene ' + nextIndex,
                  index: nextIndex,
                });
              }}

              // Function to call to go back to the previous scene
              onBack={() => {
                if (route.index > 0) {
                  navigator.pop();
                }
              }}
            />
          )
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

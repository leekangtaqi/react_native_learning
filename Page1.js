import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, TouchableNativeFeedback, Image } from 'react-native';

export default class Page1 extends Component {
  render() {
		
    return (
      <View>
        <Text>Current Scene: { this.props.title }</Text>
				<Image source={{uri: 'http://pic1.ooopic.com/uploadfilepic/sheji/2009-09-14/OOOPIC_chaogou_20090914e2b478dd899b638f.jpg'}} style={{width: 40, height: 40}}>
					<Text>Inside</Text>
				</Image>
        <TouchableNativeFeedback onPress={this.props.onForward}>
					<View>
						<Text>Tap me to load the next scene</Text>
					</View>
        </TouchableNativeFeedback>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text>Tap me to go back</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
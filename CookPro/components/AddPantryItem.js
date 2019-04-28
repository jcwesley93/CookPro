import React from 'react';
import styles from '../stylesheet';
import { TextInput, View, CheckBox } from 'react-native';

export default class AddPantryItem extends React.Component {

  render() {
    return (
      <View style={[styles.displayChildrenInline, styles.greyBackground]}>
        <TextInput
          style={styles.minHeight}
          style={styles.textInput}
          onChangeText={() => this.props.update()}
          // value={this.props.text}
        />
        <CheckBox
          value={this.props.check}
          onChange={() => this.props.toggle()}
        />
    </View>
    );
  }
}
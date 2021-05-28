import React, {Component} from 'react';
import styles from "./styles";
import { View, Text, Alert, Button } from "react-native";

import PrimaryButton from "../../components/PrimaryButton";

export default class RequestConfirmScreen extends Component {
  render() {
    return (
      <View style={styles.viewOuter}>
        <View style={styles.container}>
          <Text>Thanks!</Text>
          <Text>
            We’ll let you know as soon as your wash request is confirmed.
          </Text>
          <View style={styles.spacer30} />
          <PrimaryButton
            onPress={() =>
              this.props.navigation.reset({
                index: 0,
                routes: [{ name: "Root" }],
              })
            }
            title="Return Home"
          />
        </View>
      </View>
    );
  }
}

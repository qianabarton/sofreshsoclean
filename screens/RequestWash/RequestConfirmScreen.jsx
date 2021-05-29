import React, { Component } from "react";
import styles from "./styles";
import { View, Text, Alert, Button, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import PrimaryButton from "../../components/PrimaryButton";
var confirmVector = require("../../assets/images/confirm-vector.png");

export default class RequestConfirmScreen extends Component {
  render() {
    return (
      <View style={styles.requestView}>
        <View style={styles.flexbox}>
          <View style={styles.confirmFlex1}>
            <View style={styles.confirmImageView}>
              <Image style={styles.confirmImage} source={confirmVector} resizeMode="contain" />
            </View>
            <Text style={styles.confirmTitle}>Thanks!</Text>
            <Text style={styles.confirmSubtitle}>
              We’ll let you know as soon as your wash request is confirmed.
            </Text>
          </View>
          <View style={styles.flex2}>
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
      </View>
    );
  }
}

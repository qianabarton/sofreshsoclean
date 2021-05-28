import React, { Component } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Alert, Button, TouchableOpacity } from "react-native";
import PrimaryButton from "../../components/PrimaryButton";
import styles from "./styles";

export default class HomeScreen extends Component {
  constructor() {
    super();

    this.state = {
      address: "1550 SW Main St, Los Angeles CA",
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.flexView}>
        <View style={styles.container}>
          <View>
            <Text style={styles.subtitle}>Hello Paul,</Text>
            <Text style={styles.title}>Request a Wash</Text>
          </View>
          <View style={styles.spacer30} />
          <View>
            <Text style={styles.label}>Address</Text>
            <Text style={styles.sublabel}>1{this.state.address}</Text>
          </View>
          <View style={styles.spacer30} />
          <PrimaryButton
            onPress={() => {
              this.props.navigation.navigate('RequestScreen', {
                address: this.state.address
              });
            }}
            title="Request"
          />
        </View>
      </SafeAreaView>
    );
  }
}

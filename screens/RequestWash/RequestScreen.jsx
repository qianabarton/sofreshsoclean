import React, { Component } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SelectMultiple from "react-native-select-multiple";
import styles from "./styles";
import reqstyles from "../../assets/styles/RequestStyles";
import {
  View,
  Text,
  Alert,
  Button,
  Image,
  TextInput,
  TouchableHighlight,
} from "react-native";

import PrimaryButton from "../../components/PrimaryButton";

var checked = require("../../assets/images/checked.png");
var unchecked = require("../../assets/images/unchecked.png");
var car = require("../../assets/images/car.png");
var washIcon = require("../../assets/images/wash-icon.png");

const vehicles = ["Car", "SUV", "Truck"];
const washes = ["Wash Package 1", "Wash Package 2", "Wash Package 3"];

export default class RequestScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vehicle: vehicles[0],
      wash: washes[0],
      viewIndex: 0,
    };

    this.views = [];
    this.nextButton = [
      "Next: Select Wash",
      "Next: Select Time",
      "Next: Enter Payment",
      "Request Wash",
    ];

    this.address = this.props.route.params.address;

    this.returnView = this.returnView.bind(this);
    this.onPressNext = this.onPressNext.bind(this);
    this.returnButtonText = this.returnButtonText.bind(this);
    this.updateVehicle = this.updateVehicle.bind(this);
    this.updateWash = this.updateWash.bind(this);
  }

  updateVehicle(selection) {
    this.setState({ vehicle: selection });
  }

  updateWash(selection) {
    this.setState({ wash: selection });
  }

  returnButtonText(index) {
    return this.nextButton[index];
  }

  // return selected view
  returnView(index) {
    return this.views[index];
  }

  onPressNext() {
    // make sure this button can only be pressed once until action is completed
    if (this.state.viewIndex < 3) {
      this.setState({ viewIndex: this.state.viewIndex + 1 });
    } else {
      this.props.navigation.navigate("RequestConfirmScreen");
    }
  }

  render() {
    this.views = [
      <SelectVehicle
        vehicle={this.state.vehicle}
        updateVehicle={this.updateVehicle}
      />,
      <SelectWash wash={this.state.wash} updateWash={this.updateWash} />,
      <SelectTime />,
      <SelectPayment />,
    ];

    return (
      <SafeAreaView style={styles.flexView}>
        <View style={styles.container}>
          <View>
            <Text>{this.address}</Text>
            <Text>{this.state.vehicle}</Text>
            <Text>{this.state.wash}</Text>
            <Text>Time</Text>

            <View style={styles.spacer30} />
            <>{this.returnView(this.state.viewIndex)}</>
            <View style={styles.spacer30} />

            <PrimaryButton
              onPress={() => this.onPressNext()}
              title={this.returnButtonText(this.state.viewIndex)}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

function parseSelection(selection) {
  // Converts to plain string
  var newVehicle = JSON.stringify(selection[0].label);
  newVehicle = newVehicle.replace(/['"]+/g, "");
  return newVehicle;
}

class SelectVehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [this.props.vehicle],
    };
  }

  onSelectionsChange = (selection) => {
    // selectedVehicle is array of { label, value }
    // disables deselection and only allows 1 selection max
    if (selection.length == 1) {
      this.setState({ selection });
      this.props.updateVehicle(parseSelection(selection));
    }
    if (selection.length > 1) {
      selection.splice(0, 1);
      this.setState({ selected: selection });
      this.props.updateVehicle(parseSelection(selection));
    }
  };

  render() {
    return (
      <View>
        <Text style={styles.title}>Select a vehicle</Text>
        <View style={styles.spacer10} />
        <View style={reqstyles.selectView}>
          <SelectMultiple
            items={vehicles}
            maxSelect={2}
            renderLabel={renderVehicleLabel}
            selectedItems={this.state.selected}
            onSelectionsChange={this.onSelectionsChange}
            rowStyle={reqstyles.rowStyle}
            selectedRowStyle={reqstyles.selectedRowStyle}
            checkboxSource={unchecked}
            selectedCheckboxSource={checked}
          />
        </View>
      </View>
    );
  }
}

const renderVehicleLabel = (label, style) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View style={reqstyles.textView}>
        <Text style={reqstyles.optionTitle}>{label}</Text>
      </View>
      <View style={reqstyles.imageView}>
        <Image
          style={reqstyles.vehicleImage}
          source={car}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

class SelectWash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [this.props.wash],
    };
  }

  onSelectionsChange = (selection) => {
    // selectedVehicle is array of { label, value }
    // disables deselection and only allows 1 selection max
    if (selection.length == 1) {
      this.setState({ selection });
      this.props.updateWash(parseSelection(selection));
    }
    if (selection.length > 1) {
      selection.splice(0, 1);
      this.setState({ selected: selection });
      this.props.updateWash(parseSelection(selection));
    }
  };

  render() {
    return (
      <View>
        <Text style={styles.title}>Select a wash</Text>
        <View style={styles.spacer10} />
        <View style={reqstyles.selectView}>
          <SelectMultiple
            items={washes}
            maxSelect={2}
            renderLabel={renderWashLabel}
            selectedItems={this.state.selected}
            onSelectionsChange={this.onSelectionsChange}
            rowStyle={reqstyles.rowStyle}
            selectedRowStyle={reqstyles.selectedRowStyle}
            checkboxSource={unchecked}
            selectedCheckboxSource={checked}
          />
        </View>
      </View>
    );
  }
}

const renderWashLabel = (label, style) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-end",
      }}
    >
      <View style={reqstyles.textView}>
        <Text style={reqstyles.optionTitle}>{label}</Text>
        <Text style={reqstyles.optionDesc} numberOfLines={10}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>
      <View style={reqstyles.imageView}>
        <Image
          style={reqstyles.washIcon}
          source={washIcon}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

class SelectTime extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>Select a time</Text>
        <View style={styles.spacer30} />
      </View>
    );
  }
}

class SelectPayment extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>Enter Payment</Text>
        <View style={styles.spacer30} />
      </View>
    );
  }
}

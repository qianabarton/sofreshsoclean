import React, {Component} from 'react';
import SelectMultiple from 'react-native-select-multiple';

import styles from '../assets/styles/Styles';
import reqstyles from '../assets/styles/RequestStyles';
import {
    View,
    Text,
    Alert,
    Button,
    Image,
    TouchableHighlight
} from 'react-native';

import PrimaryButton from '../components/PrimaryButton';
import checked from '../assets/images/checked.png';
import unchecked from '../assets/images/unchecked.png';
import car from '../assets/images/car.png';

const vehicles = ['Car', 'SUV', 'Truck']

const renderLabel = (label, style) => {
    return (
        <View
            style={{
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <View style={{
                marginRight: 100
            }}>
                <Text style={reqstyles.optionTitle}>{label}</Text>
            </View>
            <View style={reqstyles.imageView}>            
            <Image
                style={reqstyles.vehicleImage}
                source={car}
                resizeMode="contain"
                /></View>

        </View>
    )
}

export default class RequestScreen extends Component {
    state = {
        selectedVehicle: [vehicles[0]]
    }

    onSelectionsChange = (selectedVehicle) => {
        // selectedVehicle is array of { label, value }
        // disables deselection and only allows 1 selection max
        if(selectedVehicle.length == 1) {
            this.setState({selectedVehicle})
        }
        if (selectedVehicle.length > 1) {
            selectedVehicle.splice(0, 1);
            this.setState({selectedVehicle})
        }
    }

    render() {
        return (
            <View style={styles.viewOuter}>
                <View style={styles.container}>
                    <Text>Address</Text>
                    <View style={styles.spacer30}/>
                    <View>
                        <Text style={styles.title}>Select a vehicle</Text>
                        <View style={styles.spacer30}/>

                        <View>
                            <SelectMultiple
                                items={vehicles}
                                maxSelect={2}
                                renderLabel={renderLabel}
                                selectedItems={this.state.selectedVehicle}
                                onSelectionsChange={this.onSelectionsChange}
                                rowStyle={reqstyles.rowStyle}
                                selectedRowStyle={reqstyles.selectedRowStyle}
                                checkboxSource={unchecked}
                                selectedCheckboxSource={checked}/>
                        </View>

                    </View>
                    <View style={styles.spacer30}/>

                    <PrimaryButton title="Next: Select Wash"/>
                </View>
            </View>
        );
    }
}

class VehicleRow extends Component {
    render() {
        return (
            <View style={reqstyles.vehicleRow}>
                <Text>Car</Text>
                <Text>Carpic</Text>
            </View>
        );
    }
}
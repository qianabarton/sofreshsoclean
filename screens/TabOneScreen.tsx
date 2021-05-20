import * as React from 'react';
import styles from '../assets/styles/Styles';
import {View, Text, Alert, Button, TouchableOpacity} from 'react-native';

import PrimaryButton from '../components/PrimaryButton';

export default function TabOneScreen({navigation}) {
    return (

        <View style={styles.viewOuter}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.subtitle}>Hello Paul,</Text>
                    <Text style={styles.title}>Request a Wash</Text>
                </View>
                <View style={styles.spacer30}/>
                <View>
                    <Text style={styles.label}>Address</Text>
                    <Text style={styles.sublabel}>1500 Main St Palmdale CA</Text>
                </View>
                <View style={styles.spacer30}/>
                <PrimaryButton
                    onPress={() => navigation.navigate('RequestScreen')}
                    title="Request"/>
            </View>
        </View>
    );
}

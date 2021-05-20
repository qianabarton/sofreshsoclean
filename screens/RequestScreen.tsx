import * as React from 'react';
import styles from '../assets/styles/Styles';
import {View, Text, Alert, Button} from 'react-native';

import PrimaryButton from '../components/PrimaryButton';

export default function RequestScreen({ navigation }) {
    return (
        <View style={styles.viewOuter}>
            <View style={styles.container}>

                <View style={styles.spacer30}/>
                <PrimaryButton                
                onPress={() => navigation.navigate('RequestConfirmScreen')} 
                title="Next: Select Wash"/>
            </View>
        </View>
    );
}

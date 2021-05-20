import * as React from 'react';
import styles from '../assets/styles/Styles';
import {View, Text, Alert, Button} from 'react-native';

import PrimaryButton from '../components/PrimaryButton';

export default function RequestConfirmScreen({ navigation }) {
    return (
        <View style={styles.viewOuter}>
            <View style={styles.container}>
                <Text>Thanks!</Text>
                <Text>We’ll let you know as soon as your wash request is confirmed.</Text>
                <View style={styles.spacer30}/>
                <PrimaryButton 
                onPress={() => navigation.reset({
                    index: 0,
                    routes: [{ name: 'TabOne' }],
                  })}
                title="Return Home"/>
            </View>
        </View>
    );
}

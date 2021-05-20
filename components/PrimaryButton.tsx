import * as React from 'react';
import styles from '../assets/styles/Styles';
import {Text, TouchableOpacity} from 'react-native';

const PrimaryButton = ({onPress, title}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>{title}</Text>
        </TouchableOpacity>
    );
}

export default PrimaryButton;
import { StyleSheet } from 'react-native';
import theme from './theme.style.js';

export default StyleSheet.create({
    vehicleRow: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: theme.PRIMARY_BG
    },
    optionTitle: {
        fontSize: 16,
        fontWeight: theme.FONT_WEIGHT_BOLD,
    },
    imageView: {
        width: '70px',
        height: '50px'
    },
    vehicleImage: {
        height: '100%',
    },
    rowStyle: {
        opacity: 0.3
    },
    selectedRowStyle: {
        opacity: 1
    },
    labelStyle: {
        color: '#383838'
    },
    selectedLabelStyle: {
        color: '#383838'
    }

});
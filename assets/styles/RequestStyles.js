import { StyleSheet } from 'react-native';
import theme from './theme.style.js';

export default StyleSheet.create({
    selectView: {
        flex: 0,
        flexDirection: 'column'
        },
    vehicleRow: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: theme.PRIMARY_BG
    },
    textView: {
        flex: 2,
        flexDirection: 'column',
        marginLeft: 20
    },
    optionTitle: {
        fontSize: 16,
        fontWeight: theme.FONT_WEIGHT_BOLD,
    },
    optionDesc: {
        fontSize: 12,
        marginTop: 10
    },
    imageView: {
        width: 70,
        height: 30,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    vehicleImage: {
        height: '100%',
    },
    washIcon: {
        height: '70%',
    },
    rowStyle: {
        opacity: 0.3,
        borderBottomWidth: 0,
        marginVertical: 5
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
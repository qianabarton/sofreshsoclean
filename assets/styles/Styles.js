import { StyleSheet } from 'react-native';
import theme from './theme.style.js';

export default StyleSheet.create({
    viewOuter: {
        flex: 1,
        backgroundColor: theme.PRIMARY_BG
    },
    container: {
        alignItems: 'left',
        backgroundColor: theme.PRIMARY_BG,
        margin: '20px'
    },
    subtitle: {
        fontSize: theme.FONT_SIZE_SM,
        fontWeight: theme.FONT_WEIGHT_BOLD,
        color: theme.FONT_DARK,
        textTransform: 'uppercase',
        textAlign: 'left'
    },
    title: {
        fontSize: theme.FONT_SIZE_LG,
        fontWeight: theme.FONT_WEIGHT_BOLD,
        color: theme.FONT_DARK,
        textAlign: 'left',
        lineHeight: '50px'
    },
    label: {
        fontSize: theme.FONT_SIZE_MD,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
        color: theme.FONT_DARK,
        textAlign: 'left'
    },
    sublabel: {
        fontSize: theme.FONT_SIZE_SM,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
        color: theme.FONT_DARK,
        opacity: 0.6,
        textAlign: 'left'
    },
    primaryButton: {
        height: '40px',
        backgroundColor: theme.PRIMARY_COLOR,
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '5px'
    },
    primaryButtonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: theme.FONT_WEIGHT_SEMI
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    spacer30: {
        height: '30px'
    }
});
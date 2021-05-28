import { StyleSheet } from 'react-native';
import theme from '../../assets/styles/theme.style.js';

export default StyleSheet.create({
    flexView: {
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: theme.PRIMARY_BG,
        paddingHorizontal: 20
    },

    container: {
        width: '100%'
    },
    subtitle: {
        fontSize: theme.FONT_SIZE_SM,
        fontWeight: theme.FONT_WEIGHT_BOLD,
        color: '#383838',
        textTransform: 'uppercase',
        textAlign: 'left'
    },
    title: {
        fontSize: theme.FONT_SIZE_LG,
        fontWeight: theme.FONT_WEIGHT_BOLD,
        color: theme.FONT_DARK,
        textAlign: 'left',
        lineHeight: 50
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
        height: 40,
        backgroundColor: theme.PRIMARY_COLOR,
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 5
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
        height: 30
    },
    spacer10: {
        height: 10
    }
})
import { StyleSheet } from 'react-native'
import { SUB_TITLE_FONTSIZE, TITLE_FONTSIZE, TITLE_WEIGHT } from '../../../../shared/constants/styles/stylesConstants'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        width: '100%'
    },
    main: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: "#e7e7e7",
        borderBottomWidth: 1,
        paddingHorizontal: 15,
    },
    label: {
        fontSize: 14,
        color: "#7a7a7a",
    },
    customInput: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    customInputHalf: {
        width: '50%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputStyle: {
        flex: 1
    }
})

export default styles
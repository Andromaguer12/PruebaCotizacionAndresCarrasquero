import { StyleSheet } from 'react-native'
import { SUB_TITLE_FONTSIZE, TITLE_FONTSIZE, TITLE_WEIGHT } from '../../../../shared/constants/styles/stylesConstants'

const styles = StyleSheet.create({
    createQuoteContainer: {
        alignItems: 'center'
    },
    titles: {
        width: "100%",
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    title1: {
        fontSize: TITLE_FONTSIZE,
        fontWeight: TITLE_WEIGHT,
        color: 'black',
        width: '100%'
    },
    text: {
        fontSize: SUB_TITLE_FONTSIZE,
        fontWeight: "400",
        color: "#7a7a7a",
    },
    title2: {
        fontSize: TITLE_FONTSIZE,
        fontWeight: TITLE_WEIGHT,
        color: 'black',
        width: '100%',
        marginBottom: 20
    },
    buttonContainer: {
        width: "100%",
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        marginBottom: 20
    },
    recentQuotes: {
        width: "100%",
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    confirmButtons: {
        width: '100%',
        alignItems: 'center',
        padding: 20,
    }
})

export default styles
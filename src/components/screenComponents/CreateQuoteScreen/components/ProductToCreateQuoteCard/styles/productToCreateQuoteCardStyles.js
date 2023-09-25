import { StyleSheet } from 'react-native'
import { SUB_TITLE_FONTSIZE, TITLE_FONTSIZE, TITLE_WEIGHT } from '../../../../../../shared/constants/styles/stylesConstants'

const styles = StyleSheet.create({
    cardContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 7,
        backgroundColor: "#ffffff",
        marginBottom: 10
    },
    avatar: {
        backgroundColor: "#7a7a7a",
        width: 50,
        height: 50,
        borderRadius: 40,
        marginRight: 15
    },
    userAndDate: {
        flexDirection: "row",
        alignItems: "center"
    },
    nameAndDate: {
        alignItems: 'flex-start'
    },
    qty: {
        alignItems: 'center'
    },
    title1: {
        fontSize: TITLE_FONTSIZE,
        fontWeight: TITLE_WEIGHT,
        color: 'black',
        width: '100%',
    },
    text: {
        fontSize: SUB_TITLE_FONTSIZE,
        fontWeight: "400",
        color: "#7a7a7a",
    },
    userNames: {
        fontWeight: "600",
        fontSize: 12.5,
    },
    price: {
        fontWeight: "400",
        fontSize: 12.5,
        color: 'green'
    },
    desiredQty: {
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 40,
        height: 40,
        borderRadius: 5,
        textAlign: 'center'
    }
})

export default styles
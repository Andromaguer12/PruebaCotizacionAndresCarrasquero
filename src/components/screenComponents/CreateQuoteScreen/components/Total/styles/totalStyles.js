import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    label: {
        fontSize: 14,
        color: "#7a7a7a",
    }, 
    number: {
        fontSize: 18,
        fontWeight: "700",
        color: "lightblue",
    }
})

export default styles
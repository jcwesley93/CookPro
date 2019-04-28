import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: '#EDEDED'
    },
    displayChildrenInline: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20
    },
    minHeight: {
        minHeight: 50
    },
    navBar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    textInput: {
        minHeight: 40,
        minWidth: 200,
        borderColor: '#E2FF98',
        borderWidth: 1,
        backgroundColor: 'white'
    },
    greyBackground: {
        backgroundColor: '#EDEDED'
    }
});
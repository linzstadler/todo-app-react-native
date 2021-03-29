import {StyleSheet, Dimensions} from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height';
export default StyleSheet.create({

    container: {
        paddingHorizontal: 10,
        paddingVertical: 30,
        backgroundColor: '#f9faff',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        marginTop: getStatusBarHeight(),
        textAlign: 'center'
    },
    welcome: {
        textAlign: 'center'
    },
    button: {
        backgroundColor: 'red',
        color: 'red',
        width: 100,
    }
});
//888fac
//1c2a54

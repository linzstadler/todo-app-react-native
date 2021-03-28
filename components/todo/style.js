import {StyleSheet, Dimensions} from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height';
export default StyleSheet.create({

    container: {
        backgroundColor: '#f9faff',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        marginTop: getStatusBarHeight()
    },
    welcome: {
        textAlign: 'center'
    }
});
//888fac
//1c2a54

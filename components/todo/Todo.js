import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Button, Input} from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';
import {BoxShadow} from 'react-native-shadow'
import styles from './style';
import globalStyles from "../../globalStyles";

export default function Todo() {
    const [visible, setVisible] = useState(false)

    return (

        <View style={styles.container}>
            <Input
                placeholder='Next todo'
                inputContainerStyle = {globalStyles.primaryInput}
            />

            <View style={globalStyles.textAlignCenter}>
                <Button title="Add" buttonStyle={globalStyles.primaryButton} containerStyle = {globalStyles.primaryButtonContainer}/>
            </View>
            <Text style={styles.myState}>
                sad
            </Text>
        </View>

    );
}

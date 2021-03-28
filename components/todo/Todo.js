import React, {useState} from 'react';
import { View} from 'react-native';
import styles from './style'

import {Input, ThemeProvider, Button} from "react-native-elements";

export default function Todo() {
    const [visible, setVisible] = useState(false)

    return (

            <View style={styles.container}>
                <Button title="My Button"/>
                <Input
                    placeholder="Commسent"
                    leftIcon={{type: 'font-awesome', name: 'comment'}}

                    onChangeText={value => this.setState({comment: value})}
                />
            </View>

    );
}


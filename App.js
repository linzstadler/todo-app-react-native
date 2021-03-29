import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Todo from "./components/todo/Todo";


export default function App() {
    return (
        <View>

            <Todo/>

            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#f9faff" translucent={true}/>
        </View>

    );
}

const styles = StyleSheet.create({});

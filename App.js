import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Todo from "./components/todo/Todo";
import {ThemeProvider} from "react-native-elements";
const theme = {
    Button: {
        backgroundColor: 'red',
        titleStyle: {
            color: 'red',
            backgroundColor: 'red',
        },

    },
    Input: {
        containerStyle: {
            backgroundColor: 'red'
        }
    }
};
export default function App() {
  return (
      <ThemeProvider theme={theme}>
          <View>

              <Todo/>

              <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#f9faff" translucent = {true} />
          </View>

      </ThemeProvider>

  );
}

const styles = StyleSheet.create({

});

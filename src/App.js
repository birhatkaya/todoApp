import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import SaveButton from "./components/SaveButton";

export default function App() {




  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>Yapılacaklar</Text>
        <Text style={styles.adet}>0</Text>
      </View>
      <SaveButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: "#323259",
    marginTop: StatusBar.currentHeight,
    justifyContent: "space-between",
  },
  text: {
    color: "orange",
    marginLeft: 7,
    fontSize: 35,
  },
  adet: {
    color: "orange",
    fontSize: 35,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between' 
  }
});

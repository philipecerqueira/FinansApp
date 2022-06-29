import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({name} : {name:any}) {
  return (
    <View style={styles.container}>
      <StatusBar style="light"/>
      <View style={styles.content}>
        <Text style={styles.userName}>Olá, {name}</Text>
        <TouchableOpacity activeOpacity={0.6} style={styles.buttonUser}>
          <Feather name="user" size={27} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8000ff",
    paddingTop: statusBarHeight,
    flexDirection: "row",
    paddingStart: 15,
    paddingEnd: 15,
    paddingBottom: 70,
  },
  content: {
    flex: 1,
    alignItems: "center",
    flexDirection:"row",
    justifyContent: "space-between",
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: '#fff',

  },
  buttonUser: {
    width: 45,
    height: 45,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 45/2,
  }
});

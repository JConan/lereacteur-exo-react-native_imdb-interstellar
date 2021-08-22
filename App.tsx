import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={{ ...styles.container }}>
      <View
        style={{
          backgroundColor: "#393939",
          height: 60,
          marginTop: 20,
          paddingLeft: 10,
        }}
      >
        <Image
          source={require("./assets/logo.png")}
          resizeMode="contain"
          style={{ flex: 1, aspectRatio: 1 }}
        />
      </View>
      <Text style={{ color: "white", fontSize: 28, margin: 10 }}>
        Interstellar
      </Text>
      <Text
        style={{ color: "#999999", fontSize: 14, margin: 10, marginBottom: 30 }}
      >
        2014 PG-13 2h49min Adventure, Drama, Sci-Fi
      </Text>
      <View
        style={{
          height: 200,
          flexDirection: "row",
          marginLeft: -22,
        }}
      >
        <Image
          source={require("./assets/interstellar-poster.jpg")}
          resizeMode="contain"
          style={{ flex: 0.6, aspectRatio: 1 }}
        />
        <View style={{ flex: 0.4, marginLeft: -25, padding: 2 }}>
          <Text style={{ color: "white", marginBottom: 15 }}>
            A team of explorers travel through a wormhole in space in an attempt
            to ensure humanity's survival.
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#0277BD",
              padding: 10,
              justifyContent: "center",
              borderRadius: 5,
            }}
          >
            <Text style={{ color: "white" }}>+ ADD TO WATCHLIST</Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
  },
});

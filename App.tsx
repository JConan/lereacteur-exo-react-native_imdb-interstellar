import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const LogoBar = () => (
  <View
    style={{
      backgroundColor: "#393939",
      height: 60,
      marginTop: Constants.statusBarHeight,
      paddingLeft: 15,

      shadowColor: "black",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
    }}
  >
    <Image
      source={require("./assets/logo.png")}
      resizeMode="contain"
      style={{ height: 64, aspectRatio: 1 }}
    />
  </View>
);

export default function App() {
  return (
    <View style={{ ...styles.container }}>
      <StatusBar style="light" />

      <LogoBar />

      <Text
        style={{
          ...styles.centeredContainer,
          color: "white",
          fontSize: 28,
          marginTop: 10,
        }}
      >
        Interstellar
      </Text>
      <Text
        style={{
          ...styles.centeredContainer,
          color: "#999999",
          fontSize: 14,
          marginTop: 10,
          marginBottom: 30,
        }}
      >
        2014 PG-13 2h49min Adventure, Drama, Sci-Fi
      </Text>
      <View
        style={{
          ...styles.centeredContainer,
          flexDirection: "row",
          alignSelf: "flex-start",
          justifyContent: "space-between",
          position: "relative",
          marginBottom: 40,
        }}
      >
        <Image
          source={require("./assets/interstellar-poster.jpg")}
          style={{ height: 150, width: 100 }}
        />
        <View style={{ flex: 1, paddingLeft: 10 }}>
          <Text
            style={{
              color: "white",
              marginBottom: 30,
            }}
          >
            A team of explorers travel through a wormhole in space in an attempt
            to ensure humanity's survival.
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                borderRadius: 5,
                padding: 10,
                backgroundColor: "#0277BD",
                color: "white",
                textAlign: "center",
              }}
            >
              + ADD TO WATCHLIST
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          ...styles.centeredContainer,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <View
          style={{
            height: 60,
            flex: 0.3,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <AntDesign name="star" size={32} color="#E6B91E" />
          <Text
            style={{
              color: "white",
              fontSize: 18,
              marginTop: 5,
              marginBottom: 5,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>8.6</Text>
            /10
          </Text>
          <Text style={{ color: "#999999", fontSize: 13 }}>1.1M</Text>
        </View>
        <View
          style={{
            height: 60,
            flex: 0.3,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <AntDesign name="staro" size={32} color="#999999" />
          <Text
            style={{
              color: "#999999",
              marginTop: 5,
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            RATE THIS
          </Text>
        </View>
        <View
          style={{
            height: 60,
            flex: 0.3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              marginTop: 5,
              fontSize: 18,
              backgroundColor: "#62C74F",
              padding: 2,
            }}
          >
            74
          </Text>
          <Text
            style={{
              color: "white",
              marginTop: 5,
              marginBottom: 5,
              fontSize: 18,
            }}
          >
            Metascore
          </Text>
          <Text style={{ color: "#999999", fontSize: 13 }}>
            46 critic reviews
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredContainer: {
    marginLeft: 15,
    marginRight: 15,
  },
  container: {
    flex: 1,
    backgroundColor: "#1D1D1D",
  },
});

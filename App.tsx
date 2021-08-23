import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { Shadow } from "react-native-shadow-2";

const LogoBar = () => (
  <Shadow
    startColor={"#191919"}
    distance={15}
    sides={["bottom"]}
    corners={[]}
    viewStyle={{ alignSelf: "stretch" }}
  >
    <View
      style={{
        backgroundColor: "#393939",
        height: 60,
        marginTop: Constants.statusBarHeight,
        paddingLeft: 15,
      }}
    >
      <Image
        source={require("./assets/logo.png")}
        resizeMode="contain"
        style={{ height: 64, aspectRatio: 1 }}
      />
    </View>
  </Shadow>
);

export default function App() {
  const Test = () => (
    <View
      style={{
        backgroundColor: "#636363",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Shadow distance={50} sides={["bottom"]} corners={[]}>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "black",
          }}
        ></View>
      </Shadow>
    </View>
  );

  const sandbox = false;

  return sandbox ? (
    <Test />
  ) : (
    <View style={{ ...styles.container }}>
      <StatusBar style="light" />

      <LogoBar />

      <Shadow
        startColor={"#191919"}
        finalColor={"#191919"}
        distance={20}
        sides={["bottom"]}
        corners={[]}
        viewStyle={{ alignSelf: "stretch" }}
      >
        <>
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
                A team of explorers travel through a wormhole in space in an
                attempt to ensure humanity's survival.
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
              marginBottom: 30,
            }}
          >
            <View
              style={{
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
        </>
      </Shadow>
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

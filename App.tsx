import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageProps,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { Shadow } from "react-native-shadow-2";
import { useState } from "react";

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

interface ActorStickerProps {
  fullname: string;
  character: string;
  imageProps: ImageProps;
}

const ActorSticker = (props: ActorStickerProps) => {
  const imagePath = `./assets/actors/${props.character.toLowerCase()}.jpg`;
  return (
    <View style={{ width: 150, backgroundColor: "#2A2A2A", marginRight: 15 }}>
      <Image source={props.imageProps} style={{ width: 150, height: 222 }} />
      <View style={{ padding: 10 }}>
        <Text
          style={{ color: "white", marginBottom: 5 }}
          ellipsizeMode={"tail"}
          numberOfLines={1}
        >
          {props.fullname}
        </Text>
        <Text style={{ color: "#999999" }}>{props.character}</Text>
      </View>
    </View>
  );
};

export default function App() {
  const [towatchlist, setToWatchlist] = useState(false);

  return (
    <ScrollView style={{ ...styles.container }}>
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
          <TouchableOpacity onPress={() => setToWatchlist(!towatchlist)}>
            <Text
              style={{
                borderRadius: 5,
                padding: 10,
                backgroundColor: "#0277BD",
                color: "white",
                textAlign: "center",
              }}
            >
              {!towatchlist ? "+ ADD TO WATCHLIST" : "- REMOVE FROM WATCHLIST"}
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

      <View
        style={{ height: 20, backgroundColor: "#191919", marginBottom: 30 }}
      ></View>

      <View
        style={{
          ...styles.centeredContainer,
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <Text style={{ color: "white", fontSize: 22 }}>Top Billed Cast</Text>
        <Text style={{ color: "#03A8F6", fontWeight: "bold" }}>SEE ALL</Text>
      </View>

      <ScrollView
        style={{
          flexDirection: "row",
          padding: 15,
        }}
        horizontal={true}
      >
        <ActorSticker
          character="Cooper"
          fullname="Matthew McConaughey"
          imageProps={require("./assets/actors/cooper.jpg")}
        />
        <ActorSticker
          character="Brand"
          fullname="Anne Hathaway"
          imageProps={require("./assets/actors/brand.jpg")}
        />
        <ActorSticker
          character="Murph"
          fullname="Jessica Chastain"
          imageProps={require("./assets/actors/murph.jpg")}
        />
        <ActorSticker
          character="Murph (10 Yrs.)"
          fullname="Mackenzie Foy"
          imageProps={require("./assets/actors/murph-10yrs.jpg")}
        />
        <ActorSticker
          character="Murph (Older)"
          fullname="Ellen Burstyn"
          imageProps={require("./assets/actors/murph-older.jpg")}
        />
        <ActorSticker
          character="Donald"
          fullname="John Lithgow"
          imageProps={require("./assets/actors/donald.jpg")}
        />
        <ActorSticker
          character="Tom (15 Yrs.)"
          fullname="Timothée Chalamet"
          imageProps={require("./assets/actors/tom-15yrs.jpg")}
        />
        <ActorSticker
          character="School Principal"
          fullname="David Oyelowo"
          imageProps={require("./assets/actors/school-principal.jpg")}
        />
        <ActorSticker
          character="Ms. Hanley"
          fullname="Collette Wolfe"
          imageProps={require("./assets/actors/ms-hanley.jpg")}
        />
        <ActorSticker
          character="Boots"
          fullname="Francis X. McCarthy"
          imageProps={require("./assets/actors/boots.jpg")}
        />
        <ActorSticker
          character="TARS (voice)"
          fullname="Bill Irwin"
          imageProps={require("./assets/actors/tars-voice.jpg")}
        />
        <ActorSticker
          character="Smith"
          fullname="Andrew Borba"
          imageProps={require("./assets/actors/smith.jpg")}
        />
        <ActorSticker
          character="Doyle"
          fullname="Wes Bentley"
          imageProps={require("./assets/actors/doyle.jpg")}
        />
        <ActorSticker
          character="Williams"
          fullname="William Devane"
          imageProps={require("./assets/actors/williams.jpg")}
        />
        <ActorSticker
          character="Professeur Brand"
          fullname="Michael Caine"
          imageProps={require("./assets/actors/professor-brand.jpg")}
        />
        <ActorSticker
          character="Romilly"
          fullname="David Gyasi"
          imageProps={require("./assets/actors/romilly.jpg")}
        />
        <ActorSticker
          character="CASE (voice)"
          fullname="Josh Stewart"
          imageProps={require("./assets/actors/case-voice.jpg")}
        />
        <ActorSticker
          character="Tom"
          fullname="Casey Affleck"
          imageProps={require("./assets/actors/tom.jpg")}
        />
      </ScrollView>

      <View style={{ padding: 15, height: 200 }}>
        <Text style={{ color: "white", marginBottom: 5 }}>Director</Text>
        <Text style={{ color: "#999999", marginBottom: 30 }}>
          Christopher Nolan
        </Text>
        <Text style={{ color: "white", marginBottom: 5 }}>Writers</Text>
        <Text style={{ color: "#999999" }}>
          Jonathan Nolan (written by) and Christopher Nolan (written by)
        </Text>
      </View>
    </ScrollView>
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

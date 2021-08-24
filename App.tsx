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
  imageUrl: string;
}

const ActorSticker = (props: ActorStickerProps) => {
  const imagePath = `./assets/actors/${props.character.toLowerCase()}.jpg`;
  return (
    <View style={{ width: 150, backgroundColor: "#2A2A2A", marginRight: 15 }}>
      <Image
        source={{ uri: props.imageUrl }}
        style={{ width: 150, height: 222 }}
      />
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
          imageUrl="https://m.media-amazon.com/images/M/MV5BMTg0MDc3ODUwOV5BMl5BanBnXkFtZTcwMTk2NjY4Nw@@._V1_UX178_CR0,0,178,264_AL_.jpg"
        />
        <ActorSticker
          character="Brand"
          fullname="Anne Hathaway"
          imageUrl="https://m.media-amazon.com/images/M/MV5BMTRhNzQ3NGMtZmQ1Mi00ZTViLTk3OTgtOTk0YzE2YTgwMmFjXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_UY264_CR17,0,178,264_AL_.jpg"
        />
        <ActorSticker
          character="Murph"
          fullname="Jessica Chastain"
          imageUrl="https://m.media-amazon.com/images/M/MV5BMTU1MDM5NjczOF5BMl5BanBnXkFtZTcwOTY2MDE4OA@@._V1_UX178_CR0,0,178,264_AL_.jpg"
        />
        <ActorSticker
          character="Murph (10 Yrs.)"
          fullname="Mackenzie Foy"
          imageUrl="https://m.media-amazon.com/images/M/MV5BYTIyMzExODgtNzllNy00OWQwLTlhM2QtMWU1ZTI2MjgwMTQxXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UY264_CR5,0,178,264_AL_.jpg"
        />
        <ActorSticker
          character="Murph (Older)"
          fullname="Ellen Burstyn"
          imageUrl="https://m.media-amazon.com/images/M/MV5BMTU4MjYxMDc3MF5BMl5BanBnXkFtZTYwNzU3MDIz._V1_UX214_CR0,0,214,317_AL_.jpg"
        />
        <ActorSticker
          character="Donald"
          fullname="John Lithgow"
          imageUrl="https://m.media-amazon.com/images/M/MV5BMTQzMzUyNDkzNF5BMl5BanBnXkFtZTcwNTMwNTU5MQ@@._V1_UY317_CR19,0,214,317_AL_.jpg"
        />
        <ActorSticker
          character="Tom (15 Yrs.)"
          fullname="Timothée Chalamet"
          imageUrl="https://m.media-amazon.com/images/M/MV5BOWU1Nzg0M2ItYjEzMi00ODliLThkODAtNGEyYzRkZTBmMmEzXkEyXkFqcGdeQXVyNDk2Mzk2NDg@._V1_UY317_CR13,0,214,317_AL_.jpg"
        />
        <ActorSticker
          character="School Principal"
          fullname="David Oyelowo"
          imageUrl="https://m.media-amazon.com/images/M/MV5BOTMyODkxMzktNWMwMy00MjRlLTlmNjUtM2I0NTczZDU3YjE0XkEyXkFqcGdeQXVyOTkyMDQ2Mw@@._V1_UY317_CR15,0,214,317_AL_.jpg"
        />
        <ActorSticker
          character="Ms. Hanley"
          fullname="Collette Wolfe"
          imageUrl="https://m.media-amazon.com/images/M/MV5BMjIwMDc5Mzk5MV5BMl5BanBnXkFtZTcwMjMzMTUxMw@@._V1_UY317_CR1,0,214,317_AL_.jpg"
        />
        <ActorSticker
          character="Boots"
          fullname="Francis X. McCarthy"
          imageUrl="https://m.media-amazon.com/images/M/MV5BMzE5OTg2MzA4Nl5BMl5BanBnXkFtZTcwMTc3NDM1Nw@@._V1_UY317_CR132,0,214,317_AL_.jpg"
        />
        <ActorSticker
          character="TARS (voice)"
          fullname="Bill Irwin"
          imageUrl="https://m.media-amazon.com/images/M/MV5BMTU3NjI4MzM4NV5BMl5BanBnXkFtZTYwNzk4NTc4._V1_UY317_CR1,0,214,317_AL_.jpg"
        />
        <ActorSticker
          character="Smith"
          fullname="Andrew Borba"
          imageUrl="https://m.media-amazon.com/images/M/MV5BMTEyODY4NjExMjVeQTJeQWpwZ15BbWU3MDQ5MjA3Njk@._V1_UX214_CR0,0,214,317_AL_.jpg"
        />
        <ActorSticker
          character="Doyle"
          fullname="Wes Bentley"
          imageUrl="https://m.media-amazon.com/images/M/MV5BOTgyOTY5OTA5OF5BMl5BanBnXkFtZTcwNzM1MjM1Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg"
        />
        <ActorSticker
          character="Williams"
          fullname="William Devane"
          imageUrl="https://m.media-amazon.com/images/M/MV5BMTkwOTE2NDIyNV5BMl5BanBnXkFtZTgwOTE1MTQ2NjE@._V1_UY317_CR12,0,214,317_AL_.jpg"
        />
        <ActorSticker
          character="Professeur Brand"
          fullname="Michael Caine"
          imageUrl="https://m.media-amazon.com/images/M/MV5BMjAwNzIwNTQ4Ml5BMl5BanBnXkFtZTYwMzE1MTUz._V1_UY317_CR7,0,214,317_AL_.jpg"
        />
        <ActorSticker
          character="Romilly"
          fullname="David Gyasi"
          imageUrl="https://m.media-amazon.com/images/M/MV5BOWIyNjg5YzUtZmVlOC00YTYyLWIxMjgtMGRlY2U3MDljZjg5XkEyXkFqcGdeQXVyMjI3NzY0NTA@._V1_UY317_CR15,0,214,317_AL_.jpg"
        />
        <ActorSticker
          character="CASE (voice)"
          fullname="Josh Stewart"
          imageUrl="https://m.media-amazon.com/images/M/MV5BMGU3YmYzMDMtNGVjOC00MjQ0LWFiMjMtMjc3YWZmOGI4NzJjXkEyXkFqcGdeQXVyMzA5MDIzOTE@._V1_UY317_CR12,0,214,317_AL_.jpg"
        />
        <ActorSticker
          character="Tom"
          fullname="Casey Affleck"
          imageUrl="https://m.media-amazon.com/images/M/MV5BMTY3Nzc0MDg1OF5BMl5BanBnXkFtZTgwMzk5OTk2OTE@._V1_UY317_CR129,0,214,317_AL_.jpg"
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

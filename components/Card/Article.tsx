import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, ImageBackground, View } from "react-native";
import Colors from "../../constants/Colors";
import CsButton from "../Button";
import Title from "../Typo/Title";
type Props = {};

function Article({}: Props) {
  return (
    <View
      style={{
        margin: 16,
      }}
    >
      <ImageBackground
        source={require("../../assets/images/frame_2.png")}
        resizeMode="cover"
        style={{
          backgroundColor: Colors.light.white,
          borderRadius: 8,
          overflow: "hidden",
          width: 313,
          height: 142,
          padding: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Title color={Colors.light.white} weight="medium">
            02 July 2022
          </Title>
          <Ionicons
            name="bookmark-outline"
            size={24}
            color={Colors.light.white}
          />
        </View>
        <Title
          color={Colors.light.white}
          weight="semiBold"
          type="t6"
          style={{
            marginTop: 18,
          }}
        >
          COVID- 19 Vaccine
        </Title>
        <View
          style={{
            marginTop: 8,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Title type="t8" color={Colors.dark.white}>
            Official public service announcement on coronavirus from the world
            health
          </Title>
          <Ionicons
            name="arrow-forward-outline"
            size={24}
            color={Colors.dark.white}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

export default Article;

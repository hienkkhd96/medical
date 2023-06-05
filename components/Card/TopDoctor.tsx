import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, View, ViewStyle } from "react-native";
import { Shadow } from "react-native-shadow-2";
import Colors from "../../constants/Colors";
import CsButton from "../Button";
import Title from "../Typo/Title";
type Props = {
  width?: number | string;
  style?: ViewStyle;
};

function TopDoctor({ width, style }: Props) {
  return (
    <View
      style={[
        {
          margin: 16,
        },
        style,
      ]}
    >
      <Shadow
        distance={11}
        offset={[3, 3]}
        startColor="#00000020"
        endColor="#00000000"
        style={{
          backgroundColor: Colors.light.white,
          borderRadius: 12,
          padding: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 16,
          }}
        >
          <Image source={require("../../assets/images/doctor1.png")} />
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                paddingHorizontal: 4,
                alignItems: "center",
                width: 60,
                backgroundColor: "#FFEAE5",
                borderRadius: 8,
              }}
            >
              <Ionicons name="heart" size={24} color="red" />
              <Title color="red">4.9</Title>
            </View>
            <Title weight="bold" type="t6">
              Dr. Abram George
            </Title>
            <Title>General Physician</Title>
          </View>
        </View>
        <View
          style={{
            marginTop: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            height: 36,
            backgroundColor: "#DEF2FF",
            borderRadius: 4,
            paddingHorizontal: 8,
            width: width ? width : 272,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              name="time-outline"
              size={16}
              color={Colors.light.background}
            />
            <Title
              weight="semiBold"
              type="t8"
              style={{
                marginLeft: 8,
              }}
            >
              Monday, May 12
            </Title>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Title
              weight="regular"
              type="t8"
              style={{
                marginLeft: 8,
              }}
            >
              11:00 - 12:00 Am
            </Title>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Title type="t6" weight="bold">
            $ 100
          </Title>
          <CsButton mode="text" icon={"calendar-outline"}>
            Book Appointment
          </CsButton>
        </View>
      </Shadow>
    </View>
  );
}

export default TopDoctor;

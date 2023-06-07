import { Ionicons } from "@expo/vector-icons";
import { default as React } from "react";
import { Image } from "react-native";
import { View } from "../../components/Themed";
import Title from "../../components/Typo/Title";
import Colors from "../../constants/Colors";

type Props = {};

function Doctor({}: Props) {
  return (
    <View
      style={{
        marginTop: 16,
        flexDirection: "column",
        paddingHorizontal: 16,
      }}
    >
      <View
        style={{
          padding: 16,
          shadowColor: "#000",
          shadowOffset: { width: 1, height: 3 },
          shadowOpacity: 0.2,
          shadowRadius: 11,
          elevation: 10,
          borderRadius: 12,
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
            <Title weight="semiBold" type="t6">
              Dr. Abram George
            </Title>
            <Title
              style={{
                marginTop: 2,
                color: Colors.light.gray2,
              }}
            >
              General Physician
            </Title>
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
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "transparent",
            }}
          >
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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "transparent",
            }}
          >
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
      </View>
    </View>
  );
}

export default Doctor;

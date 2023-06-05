import { Ionicons } from "@expo/vector-icons";
import { usePathname } from "expo-router";
import { default as React } from "react";
import { Image, ImageBackground, Platform } from "react-native";
import CsButton from "../../components/Button";
import Header from "../../components/Header/Header";
import AppLayout from "../../components/Layout";
import { View } from "../../components/Themed";
import Heading from "../../components/Typo/Heading";
import Title from "../../components/Typo/Title";
import Colors from "../../constants/Colors";
type Props = {};

function AppointmentDetail({}: Props) {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <AppLayout>
      <View
        style={{
          marginTop: 60,
          flex: 1,
          paddingHorizontal: 16,
        }}
      >
        <Header
          arrowBack
          title={
            <Heading
              type="h4"
              style={{
                fontFamily: "ManropeBold",
              }}
            >
              Sesion Detail
            </Heading>
          }
        />
        <View
          style={{
            marginTop: 16,
            flexDirection: "column",
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
        <View >
          <ImageBackground
            source={require("../../assets/images/frame_1.png")}
            resizeMode="cover"
            resizeMethod="resize"
            style={{
              marginTop: 36,
              marginHorizontal: 16,
              borderRadius: 8,
              width: "100%",
              height: "auto",
            }}
          >
            <View
              style={{
                paddingTop: "62%",
              }}
            ></View>
            <CsButton
              mode="text"
              style={{
                position: "absolute",
                bottom: "10%",
                width: "100%",
              }}
            >
              <Title
                color={Colors.light.white}
                type={Platform.OS == "web" ? "t4" : "t6"}
                weight="regular"
              >
                Download Prescription
              </Title>
            </CsButton>
          </ImageBackground>
        </View>
      </View>
    </AppLayout>
  );
}

export default AppointmentDetail;

import { Ionicons } from "@expo/vector-icons";
import { usePathname } from "expo-router";
import { default as React } from "react";
import { Image, ImageBackground, Platform, ScrollView } from "react-native";
import CsButton from "../../components/Button";
import Header from "../../components/Header/Header";
import AppLayout from "../../components/Layout";
import { View } from "../../components/Themed";
import Heading from "../../components/Typo/Heading";
import Title from "../../components/Typo/Title";
import Colors from "../../constants/Colors";
import { Card, Divider, List } from "react-native-paper";
import Doctor from "../../components/Card/Doctor";
type Props = {};

function AppointmentDetail({}: Props) {
  const pathname = usePathname();
  console.log(pathname.split("/")[pathname.split("/").length - 1]);

  return (
    <AppLayout>
      <ScrollView
        style={{
          flex: 1,
        }}
      >
        <Header
          style={{
            marginTop: 58,
            paddingHorizontal: 16,
          }}
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
        <Doctor />
        <View
          style={{
            marginTop: 16,
            paddingHorizontal: 16,
          }}
        >
          <ImageBackground
            source={require("../../assets/images/frame_1.png")}
            resizeMode="cover"
            resizeMethod="auto"
            style={[
              {
                marginTop: 16,
                width: "auto",
                paddingTop: "58%",
              },
              Platform.OS == "web" ? { height: 300 } : {},
            ]}
          >
            <View></View>
            <CsButton
              mode="text"
              style={{
                position: "absolute",
                bottom: Platform.OS == "web" ? 30 : 12,
                width: "100%",
                paddingHorizontal: 30,
              }}
              onPress={() => {
                console.log("clicked");
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
        <View
          style={{
            marginTop: 24,
            margin: 16,
          }}
        >
          <Title type="t6" weight="bold">
            Patient
          </Title>

          <Card
            style={{
              backgroundColor: Colors.light.white,
              borderRadius: 12,
              padding: 16,
              marginTop: 16,
            }}
          >
            <View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <Image source={require("../../assets/images/doctor1.png")} />
                <View>
                  <Title type="t6" weight="semiBold">
                    Alicent Hightower
                  </Title>
                  <Title type="t8" weight="regular" color={Colors.light.gray1}>
                    Migranes
                  </Title>
                </View>
              </View>
              <Divider
                style={{
                  marginTop: 16,
                }}
              />

              <List.Accordion
                title="Details"
                description="Sent you by Dr. Emma Mia, your last check up session prescription. Please download "
                descriptionStyle={{
                  fontSize: 12,
                  fontFamily: "ManropeMedium",
                  color: Colors.light.gray3,
                }}
                titleStyle={{
                  fontSize: 14,
                  fontFamily: "ManropeSemiBold",
                  color: Colors.light.text,
                }}
              >
                <List.Item title="First item" />
              </List.Accordion>
            </View>
          </Card>
        </View>
      </ScrollView>
    </AppLayout>
  );
}

export default AppointmentDetail;

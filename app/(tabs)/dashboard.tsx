import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  View,
  Platform,
} from "react-native";
import CsButton from "../../components/Button";
import TopDoctor from "../../components/Card/TopDoctor";
import AppLayout from "../../components/Layout";
import Title from "../../components/Typo/Title";
import Colors from "../../constants/Colors";
import Article from "../../components/Card/Article";
import { List } from "react-native-paper";

type Props = {};

function Dashboard({}: Props) {
  return (
    <AppLayout
      style={{
        backgroundColor: Colors.light.darkPurle,
      }}
    >
      <ScrollView
        style={{
          paddingTop: 68,
        }}
      >
        <View
          style={{
            paddingHorizontal: 16,
          }}
        >
          <Title
            type="t4"
            style={{
              color: Colors.light.white,
            }}
          >
            Hey, Emily!
          </Title>
          <Title
            type="t7"
            style={{
              color: Colors.light.white,
            }}
          >
            You have an upcoming appointment
          </Title>
          <View
            style={{
              flexDirection: "row",
              marginTop: 24,
            }}
          >
            <Image source={require("../../assets/images/avatar.png")} />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Title
                type="t5"
                style={{
                  color: Colors.light.white,
                }}
              >
                Dr. Emma Mia
              </Title>
              <Title
                type="t8"
                style={{
                  color: Colors.light.white,
                }}
              >
                General Physician
              </Title>
            </View>
            <View>
              <CsButton>Attend Now</CsButton>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: 68,
            backgroundColor: Colors.light.white,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
          }}
        >
          <View
            style={{
              position: "absolute",
              top: -25,
              width: "100%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                height: 50,
                marginHorizontal: 16,
                backgroundColor: "#DEF2FF",
                borderRadius: 8,
                paddingHorizontal: 16,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons
                  name="ios-calendar-sharp"
                  size={24}
                  color={Colors.light.background}
                />
                <Title
                  weight="bold"
                  style={{
                    marginLeft: 8,
                  }}
                >
                  Monday, May 12
                </Title>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons
                  name="time-outline"
                  size={24}
                  color={Colors.light.background}
                />
                <Title
                  weight="bold"
                  style={{
                    marginLeft: 8,
                  }}
                >
                  11:00 - 12:00 Am
                </Title>
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: 47,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 16,
                alignItems: "center",
              }}
            >
              <Title type="t6" weight="bold">
                Top Doctors
              </Title>
              <Title color={Colors.light.gray1}>See All</Title>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <TopDoctor />
              <TopDoctor />
              <TopDoctor />
            </ScrollView>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
              paddingHorizontal: 16,
            }}
          >
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
          <View
            style={{
              marginTop: 36,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 16,
                alignItems: "center",
              }}
            >
              <Title type="t6" weight="bold">
                Health Articles
              </Title>
              <Title color={Colors.light.gray1}>See All</Title>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Article />
              <Article />
              <Article />
            </ScrollView>
          </View>
          <View
            style={{
              marginTop: 20,
              paddingHorizontal: 16,
              marginBottom: 140,
            }}
          >
            <Title type="t6" weight="bold">
              Book Appointments in 3 easy steps
            </Title>
            <View>
              <List.Section style={{ margin: 0, padding: 0 }}>
                <List.Item
                  style={{
                    marginVertical: -10,
                  }}
                  title={
                    <Title weight="regular">
                      Search for doctors by speciality , service or diease
                    </Title>
                  }
                  titleNumberOfLines={2}
                  left={(props) => (
                    <View
                      style={{
                        width: 36,
                        height: 36,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 8,
                        backgroundColor: Colors.light.background,
                      }}
                    >
                      <Ionicons
                        name="search-outline"
                        size={20}
                        color={Colors.light.white}
                      />
                    </View>
                  )}
                />
                <List.Item
                  style={{
                    marginVertical: -10,
                  }}
                  title={
                    <Title weight="regular">
                      Search for doctors by speciality , service or diease
                    </Title>
                  }
                  titleNumberOfLines={2}
                  left={(props) => (
                    <View
                      style={{
                        width: 36,
                        height: 36,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 8,
                        backgroundColor: Colors.light.background,
                      }}
                    >
                      <Ionicons
                        name="bookmark-outline"
                        size={20}
                        color={Colors.light.white}
                      />
                    </View>
                  )}
                />
                <List.Item
                  style={{
                    marginVertical: -10,
                  }}
                  title={
                    <Title weight="regular">
                      Search for doctors by speciality , service or diease
                    </Title>
                  }
                  titleNumberOfLines={2}
                  left={(props) => (
                    <View
                      style={{
                        width: 36,
                        height: 36,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 8,
                        backgroundColor: Colors.light.background,
                      }}
                    >
                      <Ionicons
                        name="checkmark-circle-outline"
                        size={20}
                        color={Colors.light.white}
                      />
                    </View>
                  )}
                />
              </List.Section>
            </View>
          </View>
        </View>
      </ScrollView>
    </AppLayout>
  );
}

export default Dashboard;

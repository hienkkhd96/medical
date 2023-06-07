import { ScrollView, StyleSheet } from "react-native";

import { usePathname } from "expo-router";
import { Chip } from "react-native-paper";
import Appointment from "../../components/Card/Appointment";
import AppLayout from "../../components/Layout";
import { View } from "../../components/Themed";
import Title from "../../components/Typo/Title";
import Colors from "../../constants/Colors";

export default function TabTwoScreen() {
  return (
    <AppLayout
      style={{
        backgroundColor: Colors.light.white,
      }}
    >
      <View style={styles.container}>
        <View
          style={{
            marginTop: 50,
          }}
        >
          <Title type="t6" weight="semiBold">
            October 2022
          </Title>
          <ScrollView
            horizontal
            style={{
              marginTop: 16,
            }}
            showsHorizontalScrollIndicator={false}
          >
            <View
              style={{
                width: 78,
                height: 94,
                backgroundColor: Colors.light.darkPurle,
                borderRadius: 8,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 8,
              }}
            >
              <Title
                color={Colors.light.white}
                type="t5"
                weight="bold"
                style={{
                  marginBottom: 4,
                }}
              >
                9
              </Title>
              <Title color={Colors.light.white}>Mon</Title>
              <Title color={Colors.light.white} type="t8">
                . . .
              </Title>
            </View>
            <View
              style={{
                width: 78,
                height: 94,
                backgroundColor: Colors.light.darkPurle,
                borderRadius: 8,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 8,
              }}
            >
              <Title
                color={Colors.light.white}
                type="t5"
                weight="bold"
                style={{
                  marginBottom: 4,
                }}
              >
                9
              </Title>
              <Title color={Colors.light.white}>Mon</Title>
              <Title color={Colors.light.white} type="t8">
                . . .
              </Title>
            </View>
            <View
              style={{
                width: 78,
                height: 94,
                backgroundColor: Colors.light.darkPurle,
                borderRadius: 8,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 8,
              }}
            >
              <Title
                color={Colors.light.white}
                type="t5"
                weight="bold"
                style={{
                  marginBottom: 4,
                }}
              >
                9
              </Title>
              <Title color={Colors.light.white}>Mon</Title>
              <Title color={Colors.light.white} type="t8">
                . . .
              </Title>
            </View>
            <View
              style={{
                width: 78,
                height: 94,
                backgroundColor: Colors.light.darkPurle,
                borderRadius: 8,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 8,
              }}
            >
              <Title
                color={Colors.light.white}
                type="t5"
                weight="bold"
                style={{
                  marginBottom: 4,
                }}
              >
                9
              </Title>
              <Title color={Colors.light.white}>Mon</Title>
              <Title color={Colors.light.white} type="t8">
                . . .
              </Title>
            </View>
            <View
              style={{
                width: 78,
                height: 94,
                backgroundColor: Colors.light.darkPurle,
                borderRadius: 8,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 8,
              }}
            >
              <Title
                color={Colors.light.white}
                type="t5"
                weight="bold"
                style={{
                  marginBottom: 4,
                }}
              >
                9
              </Title>
              <Title color={Colors.light.white}>Mon</Title>
              <Title color={Colors.light.white} type="t8">
                . . .
              </Title>
            </View>
            <View
              style={{
                width: 78,
                height: 94,
                backgroundColor: Colors.light.darkPurle,
                borderRadius: 8,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 8,
              }}
            >
              <Title
                color={Colors.light.white}
                type="t5"
                weight="bold"
                style={{
                  marginBottom: 4,
                }}
              >
                9
              </Title>
              <Title color={Colors.light.white}>Mon</Title>
              <Title color={Colors.light.white} type="t8">
                . . .
              </Title>
            </View>
            <View
              style={{
                width: 78,
                height: 94,
                backgroundColor: Colors.light.darkPurle,
                borderRadius: 8,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 8,
              }}
            >
              <Title
                color={Colors.light.white}
                type="t5"
                weight="bold"
                style={{
                  marginBottom: 4,
                }}
              >
                9
              </Title>
              <Title color={Colors.light.white}>Mon</Title>
              <Title color={Colors.light.white} type="t8">
                . . .
              </Title>
            </View>
          </ScrollView>
        </View>
        <View>
          <Title
            style={{
              marginTop: 24,
            }}
            type="t6"
            weight="semiBold"
          >
            03 Appointments
          </Title>
          <View
            style={{ flexDirection: "row", marginTop: 16, marginBottom: 16 }}
          >
            <Chip
              style={{
                borderRadius: 8,
                backgroundColor: Colors.dark.orange,
              }}
              textStyle={{
                fontFamily: "ManropeMedium",
                fontSize: 12,
                fontWeight: "500",
                color: Colors.light.background,
              }}
              onPress={() => console.log("Pressed")}
            >
              All
            </Chip>
            <Chip
              style={{
                borderRadius: 8,
                backgroundColor: Colors.dark.white,
              }}
              textStyle={{
                fontFamily: "ManropeMedium",
                fontSize: 12,
                fontWeight: "500",
                color: Colors.light.gray2,
              }}
              onPress={() => console.log("Pressed")}
            >
              Upcoming
            </Chip>
            <Chip
              style={{
                borderRadius: 8,
                backgroundColor: Colors.dark.white,
              }}
              textStyle={{
                fontFamily: "ManropeMedium",
                fontSize: 12,
                fontWeight: "500",
                color: Colors.light.gray2,
              }}
              onPress={() => console.log("Pressed")}
            >
              Completed
            </Chip>
            <Chip
              style={{
                borderRadius: 8,
                backgroundColor: Colors.dark.white,
              }}
              textStyle={{
                fontFamily: "ManropeMedium",
                fontSize: 12,
                fontWeight: "500",
                color: Colors.light.gray2,
              }}
              onPress={() => console.log("Pressed")}
            >
              Canceled
            </Chip>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              marginBottom: 80,
            }}
          >
            <Appointment />
            <Appointment />
            <Appointment />
            <Appointment />
          </View>
        </ScrollView>
      </View>
    </AppLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: Colors.light.white,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

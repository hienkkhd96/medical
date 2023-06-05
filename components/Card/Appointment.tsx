import { Image } from "react-native";

import { Card } from "react-native-paper";
import CsButton from "../../components/Button";
import { View } from "../../components/Themed";
import Title from "../../components/Typo/Title";
import Colors from "../../constants/Colors";
import { useRouter } from "expo-router";

type Props = {};

function Appointment({}: Props) {
  const router = useRouter();
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "transparent",
        borderRadius: 12,
        flexDirection: "row",
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column-reverse",
          flex: 1,
          marginTop: 16,
        }}
      >
        <Title
          type="t8"
          weight="bold"
          color={Colors.light.gray2}
          style={{
            padding: 0,
            marginTop: -8,

            transform: [{ rotate: "-90deg" }],
          }}
        >
          1
        </Title>
        <Title
          type="t8"
          weight="bold"
          color={Colors.light.gray2}
          style={{
            padding: 0,
            marginTop: -8,

            transform: [{ rotate: "-90deg" }],
          }}
        >
          0
        </Title>
        <Title
          type="t8"
          weight="bold"
          color={Colors.light.gray2}
          style={{
            padding: 0,
            marginTop: -8,

            transform: [{ rotate: "-90deg" }],
          }}
        >
          :
        </Title>
        <Title
          type="t8"
          weight="bold"
          color={Colors.light.gray2}
          style={{
            padding: 0,
            marginTop: -8,

            transform: [{ rotate: "-90deg" }],
          }}
        >
          0
        </Title>
        <Title
          type="t8"
          weight="bold"
          color={Colors.light.gray2}
          style={{
            padding: 0,
            marginTop: -8,

            transform: [{ rotate: "-90deg" }],
          }}
        >
          a
        </Title>
        <Title
          type="t8"
          weight="bold"
          color={Colors.light.gray2}
          style={{
            padding: 0,
            marginTop: -8,

            transform: [{ rotate: "-90deg" }],
          }}
        >
          m
        </Title>
        <Title
          type="t8"
          weight="bold"
          color={Colors.light.gray2}
          style={{
            padding: 0,
            marginTop: -8,

            transform: [{ rotate: "-90deg" }],
          }}
        >
          -
        </Title>
        <Title
          type="t8"
          weight="bold"
          color={Colors.light.gray2}
          style={{
            padding: 0,
            marginTop: -8,

            transform: [{ rotate: "-90deg" }],
          }}
        >
          1
        </Title>
        <Title
          type="t8"
          weight="bold"
          color={Colors.light.gray2}
          style={{
            padding: 0,
            marginTop: -8,

            transform: [{ rotate: "-90deg" }],
          }}
        >
          0
        </Title>
        <Title
          type="t8"
          weight="bold"
          color={Colors.light.gray2}
          style={{
            padding: 0,
            marginTop: -8,

            transform: [{ rotate: "-90deg" }],
          }}
        >
          :
        </Title>
        <Title
          type="t8"
          weight="bold"
          color={Colors.light.gray2}
          style={{
            padding: 0,
            marginTop: -8,

            transform: [{ rotate: "-90deg" }],
          }}
        >
          3
        </Title>
        <Title
          type="t8"
          weight="bold"
          color={Colors.light.gray2}
          style={{
            padding: 0,
            marginTop: -8,

            transform: [{ rotate: "-90deg" }],
          }}
        >
          0
        </Title>
        <Title
          type="t8"
          weight="bold"
          color={Colors.light.gray2}
          style={{
            padding: 0,
            marginTop: -8,

            transform: [{ rotate: "-90deg" }],
          }}
        >
          a
        </Title>
        <Title
          type="t8"
          weight="bold"
          color={Colors.light.gray2}
          style={{
            padding: 0,
            marginTop: -8,

            transform: [{ rotate: "-90deg" }],
          }}
        >
          m
        </Title>
      </View>
      <View
        style={{
          paddingTop: 16,
          paddingHorizontal: 8,
          paddingBottom: 8,
          width: "94%",
          borderRadius: 12,
        }}
      >
        <Card
          style={{
            shadowColor: "#000",
            padding: 16,
            overflow: "hidden",
            backgroundColor: Colors.light.white,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <Image
              style={{
                width: 60,
                height: 60,
              }}
              source={require("../../assets/images/doctor1.png")}
            />
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <Title
                type="t6"
                weight="bold"
                style={{
                  width: "100%",
                }}
              >
                Dr. Emma Mia
              </Title>
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 6,
                  marginTop: 2,
                }}
              >
                <Title type="t8" color={Colors.light.gray2} weight="semiBold">
                  General Physician
                </Title>
                <View
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: 50,
                    backgroundColor: Colors.light.gray2,
                  }}
                ></View>
                <Title type="t8" color={Colors.light.gray2} weight="semiBold">
                  Online visit
                </Title>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  paddingHorizontal: 8,
                  backgroundColor: Colors.dark.orange,
                  height: 20,
                  borderRadius: 4,
                  marginTop: 8,
                }}
              >
                <Title
                  type="t8"
                  weight="semiBold"
                  color={Colors.light.background}
                >
                  Upcoming
                </Title>
              </View>
            </View>
          </View>
          <CsButton
            style={{
              marginTop: 16,
            }}
            onPress={() => {
              router.push("/appointment/123");
            }}
          >
            Attend Now
          </CsButton>
        </Card>
      </View>
    </View>
  );
}

export default Appointment;

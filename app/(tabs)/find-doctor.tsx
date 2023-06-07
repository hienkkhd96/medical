import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Badge, TouchableRipple } from "react-native-paper";
import CsButton from "../../components/Button";
import Doctor from "../../components/Card/Doctor";
import Header from "../../components/Header/Header";
import CsInput from "../../components/Input";
import AppLayout from "../../components/Layout";
import Heading from "../../components/Typo/Heading";
import Title from "../../components/Typo/Title";
import Colors from "../../constants/Colors";

type Props = {};

function FindDoctor({}: Props) {
  const form = useForm({});
  return (
    <AppLayout>
      <Header
        style={{
          marginTop: 56,
          marginHorizontal: 16,
        }}
        arrowBack
        title={<Heading type="h4">Find Doctor</Heading>}
      />
      <View
        style={{
          marginTop: 16,
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 16,
          gap: 8,
        }}
      >
        <View style={{ flex: 1 }}>
          <FormProvider {...form}>
            <CsInput
              inputStyle={{
                borderRadius: 4,
              }}
              leftIcon="magnify"
              name="search"
              label="Search"
              placeHolder="Search Doctor"
            />
          </FormProvider>
        </View>
        <View>
          <CsButton
            style={{
              marginTop: 6,
            }}
          >
            <Ionicons name="filter-outline" size={22} />
          </CsButton>
          <Badge
            style={{
              position: "absolute",
              left: -4,
              top: -4,
            }}
          >
            3
          </Badge>
        </View>
      </View>
      <View
        style={{
          marginTop: 16,
          marginHorizontal: 16,
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        <TouchableRipple
          style={{
            borderRadius: 8,
          }}
        >
          <Title
            style={{
              paddingVertical: 8,
              color: "#FF7900",
              paddingRight: 12,
            }}
          >
            Clear All
          </Title>
        </TouchableRipple>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            paddingHorizontal: 12,
            borderRadius: 8,
            backgroundColor: "#FFF5E5",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
            }}
          >
            <Title color={Colors.light.gray1}>Ratings</Title>
            <Title color="#FF7900">4+</Title>
            <TouchableOpacity
              style={{
                padding: 4,
              }}
              onPress={() => {
                console.log("remove");
              }}
            >
              <Title type="t5" weight="semiBold">
                x
              </Title>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            paddingHorizontal: 12,
            borderRadius: 8,
            backgroundColor: "#FFF5E5",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
            }}
          >
            <Title color={Colors.light.gray1}>Price</Title>
            <Title color="#FF7900">Low to Hight</Title>
            <TouchableOpacity
              style={{
                padding: 4,
              }}
              onPress={() => {
                console.log("remove");
              }}
            >
              <Title type="t5" weight="semiBold">
                x
              </Title>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Doctor />
        <Doctor />
        <Doctor />
        <Doctor />
        <Doctor />
      </ScrollView>
    </AppLayout>
  );
}

export default FindDoctor;

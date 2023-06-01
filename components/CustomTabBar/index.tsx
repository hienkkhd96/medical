import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { TabActions } from "@react-navigation/native";
import React, { useEffect, useRef } from "react";
import { Animated, Pressable, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/Colors";
import Title from "../Typo/Title";
import ButtonTab from "./ButtonTab";

export default function CustomTabBar({
  descriptors,
  state,
  navigation: rootNavigation,
}: BottomTabBarProps) {
  const viewRef = useRef(null);
  const animation = { 0: { scale: 0 }, 1: { scale: 1 } };
  return (
    <View
      style={{
        position: "absolute",
        bottom: 16,
        zIndex: 1000,
        width: "100%",
      }}
    >
      <View
        style={{
          backgroundColor: Colors.light.background,
          height: 58,
          padding: 9,
          marginHorizontal: 16,
          borderRadius: 16,
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
          alignItems: "center",
          overflow: "hidden",
          gap: 10,
        }}
      >
        {state.routes?.map((item) => {
          const { options, navigation } = descriptors[item.key];
          const isForcused = navigation.isFocused();

          return (
            <ButtonTab
              key={item.key}
              options={options}
              state={state}
              rootNavigation={rootNavigation}
              isForcused={isForcused}
              item={item}
            />
          );
        })}
      </View>
    </View>
  );
}

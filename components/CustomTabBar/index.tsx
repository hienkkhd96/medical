import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { TabActions } from "@react-navigation/native";
import React from "react";
import { Pressable, View } from "react-native";
import Colors from "../../constants/Colors";
import Title from "../Typo/Title";

export default function CustomTabBar({
  descriptors,
  state,
  navigation: rootNavigation,
}: BottomTabBarProps) {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
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
          justifyContent: "space-evenly",
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
            <Pressable
              style={{
                width: isForcused ? "36%" : "18%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: isForcused
                  ? "#FF9100"
                  : Colors.light.background,
                borderRadius: 8,
                overflow: "hidden",
              }}
              onPress={() => {
                const event = rootNavigation.emit({
                  type: "tabPress",
                  target: item.key,
                  canPreventDefault: true,
                });

                if (!event.defaultPrevented) {
                  rootNavigation.dispatch({
                    ...TabActions.jumpTo(item.name),
                    target: state.key,
                  });
                }
              }}
              key={item.key}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                {options.tabBarIcon && <options.tabBarIcon color="white" />}
                {isForcused && (
                  <Title color={Colors.light.white}>{options.title}</Title>
                )}
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

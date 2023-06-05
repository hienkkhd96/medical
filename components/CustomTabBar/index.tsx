import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { View } from "react-native";
import Colors from "../../constants/Colors";
import { WEB_MAXWIDTH } from "../../constants/DefaultValue";
import ButtonTab from "./ButtonTab";
import { useNavigation, usePathname, useRouter } from "expo-router";

export default function CustomTabBar({
  descriptors,
  state,
  navigation: rootNavigation,
}: BottomTabBarProps) {
  
  return (
    <View
      style={{
        position: "absolute",
        bottom: 10,
        zIndex: 1000,
        width: "100%",
        paddingHorizontal: 16,
      }}
    >
      <View
        style={{
          backgroundColor: Colors.light.darkPurle,
          height: 58,
          padding: 9,
          marginHorizontal: "auto",
          borderRadius: 16,
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
          alignItems: "center",
          maxWidth: "100%",
          width: WEB_MAXWIDTH - 32,
          overflow: "hidden",
          gap: 10,
        }}
      >
        {state.routes?.map((item) => {
          const { options, navigation } = descriptors[item.key];
          const isForcused = navigation.isFocused();
          if (item.name !== "index") {
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
          }
        })}
      </View>
    </View>
  );
}

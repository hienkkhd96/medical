import { TabActions } from "@react-navigation/native";
import React from "react";
import { Animated, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/Colors";

type Props = {
  item: any;
  isForcused: boolean;
  rootNavigation: any;
  options: any;
  state: any;
};

function ButtonTab({
  item,
  isForcused,
  rootNavigation,
  options,
  state,
}: Props) {
  const textAni = new Animated.Value(0);
  const opacityAni = new Animated.Value(0);

  const textInter = textAni.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });
  const opacityInter = opacityAni.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  if (isForcused) {
    Animated.timing(textAni, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(opacityAni, {
      toValue: 0,
      duration: 0,
      useNativeDriver: false,
    }).start();
    Animated.timing(opacityAni, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  } else {
    Animated.timing(textAni, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(opacityAni, {
      toValue: 1,
      duration: 0,
      useNativeDriver: false,
    }).start();
  }

  return (
    <Animated.View
      style={[
        {
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: isForcused ? "#FF9100" : Colors.light.background,
          borderRadius: 8,
          overflow: "hidden",
          opacity: opacityInter,
          paddingHorizontal: 8,
        },
      ]}
      key={item.key}
    >
      <TouchableOpacity
        style={[
          {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          },
        ]}
        disabled={isForcused}
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
      >
        {options.tabBarIcon &&
          options.tabBarIcon({
            focused: false,
            size: 24,
            color: Colors.light.white,
          })}
        {isForcused && (
          <View>
            <Animated.Text
              style={{
                width: textInter,
                color: Colors.light.white,
                fontFamily: "ManropeBold",
              }}
              numberOfLines={1}
            >
              {options.title}
            </Animated.Text>
          </View>
        )}
      </TouchableOpacity>
    </Animated.View>
  );
}

export default ButtonTab;

import React, { CSSProperties, ReactElement } from "react";
import { StyleProp, Text, TextStyle } from "react-native";
import Colors from "../../constants/Colors";

type TypeHeading = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type Props = {
  type?: TypeHeading;
  children: string;
};
const TypeMap: Record<TypeHeading, StyleProp<TextStyle>> = {
  h1: {
    fontSize: 48,
    lineHeight: 66,
  },
  h2: {
    fontSize: 38,
    lineHeight: 52,
  },
  h3: {
    fontSize: 30,
    lineHeight: 41,
  },
  h4: {
    fontSize: 24,
    lineHeight: 32,
  },
  h5: {
    fontSize: 20,
    lineHeight: 27,
  },
  h6: {
    fontSize: 16,
    lineHeight: 22,
  },
};
export default function Heading({ type = "h3", children }: Props) {
  return (
    <Text
      style={[
        TypeMap[type],
        {
          fontFamily: "ManropeSemiBold",
          color: Colors.light.text,
        },
      ]}
    >
      {children}
    </Text>
  );
}

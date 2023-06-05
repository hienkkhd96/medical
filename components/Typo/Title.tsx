import React, { CSSProperties, ReactElement } from "react";
import { StyleProp, Text, TextProps, TextStyle } from "react-native";
import Colors from "../../constants/Colors";

type TypeTitle = "t1" | "t2" | "t3" | "t4" | "t5" | "t6" | "t7" | "t8" | "t9";
type WeightTitle = "bold" | "semiBold" | "medium" | "regular";
type Props = {
  type?: TypeTitle;
  weight?: WeightTitle;
  children: string | ReactElement | ReactElement[] | undefined;
  style?: TextStyle;
  color?: string;
  numberOfLines?: number;
};
const TypeMap: Record<TypeTitle, StyleProp<TextStyle>> = {
  t1: {
    fontSize: 40,
    lineHeight: 55,
  },
  t2: {
    fontSize: 36,
    lineHeight: 50,
  },
  t3: {
    fontSize: 32,
    lineHeight: 43,
  },
  t4: {
    fontSize: 24,
    lineHeight: 32,
  },
  t5: {
    fontSize: 20,
    lineHeight: 27,
  },
  t6: {
    fontSize: 16,
    lineHeight: 22,
  },
  t7: {
    fontSize: 14,
    lineHeight: 19,
  },
  t8: {
    fontSize: 12,
    lineHeight: 16,
  },
  t9: {
    fontSize: 10,
    lineHeight: 12,
  },
};
const WeightMap: Record<WeightTitle, StyleProp<TextStyle>> = {
  bold: {
    fontFamily: "ManropeBold",
  },
  semiBold: {
    fontFamily: "ManropeSemiBold",
  },
  medium: {
    fontFamily: "ManropeMedium",
  },
  regular: {
    fontFamily: "ManropeRegular",
  },
};
export default function Title({
  type = "t7",
  weight = "medium",
  children,
  style,
  color,
  numberOfLines,
}: Props) {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        TypeMap[type],
        WeightMap[weight],
        {
          color: color ? color : Colors.light.text,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

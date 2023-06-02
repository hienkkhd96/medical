import React from "react";
import { Button, ButtonProps } from "react-native-paper";
import Colors from "../../constants/Colors";
import Title from "../Typo/Title";
type Props = {
  mode?: "text" | "outlined" | "contained" | "elevated" | "contained-tonal";
  backgroundColor?: string;
  children: string;
  disabled?: boolean;
  icon?: string;
};

export default function CsButton({
  mode = "contained",
  backgroundColor = Colors.light.background,
  icon,
  children,
  disabled,
  style,
  ...rest
}: Props & ButtonProps) {
  return (
    <Button
      disabled={disabled}
      mode={mode}
      style={[
        {
          paddingVertical: 4,
          borderRadius: 8,
        },
        style,
      ]}
      theme={{
        colors: {
          primary: backgroundColor,
          outline: backgroundColor,
          surfaceDisabled: Colors.dark.gray5,
        },
      }}
      icon={icon}
      {...rest}
    >
      <Title
        type="t6"
        style={{
          width: "100%",
          color: disabled
            ? "rgba(28, 27, 31, 0.38)"
            : mode === "contained"
            ? Colors.light.white
            : backgroundColor,
        }}
      >
        {children}
      </Title>
    </Button>
  );
}

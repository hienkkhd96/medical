import React from "react";
import { Button, TextInput } from "react-native-paper";
import Colors from "../../constants/Colors";
import Title from "../Typo/Title";
type Props = {
  mode?: "text" | "outlined" | "contained" | "elevated" | "contained-tonal";
  backgroundColor?: string;
  children: string;
  disabled?: boolean;
};

export default function CsButton({
  mode = "contained",
  backgroundColor = Colors.light.background,
  children,
  disabled,
}: Props) {
  return (
    <Button
      disabled={disabled}
      mode={mode}
      style={{
        paddingVertical: 4,
        borderRadius: 8,
      }}
      theme={{
        colors: {
          primary: backgroundColor,
          outline: backgroundColor,
          surfaceDisabled: Colors.dark.gray5,
        },
      }}
      icon={"plus"}
      onPress={console.log}
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

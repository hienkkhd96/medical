import React, { useState } from "react";
import { Controller, useForm, useFormContext } from "react-hook-form";
import { Button, View, ViewStyle } from "react-native";
import { HelperText, TextInput } from "react-native-paper";
import Colors from "../../constants/Colors";

type Props = {
  name: string;
  label: string;
  rules?: any;
  isPassword?: boolean;
  helperText?: string;
  leftIcon?: string;
  containerStyle?: ViewStyle;
  inputStyle?: ViewStyle;
  placeHolder?: string;
};

export default function CsInput({
  name,
  rules,
  isPassword = false,
  helperText,
  label,
  containerStyle,
  inputStyle,
  leftIcon,
  placeHolder,
}: Props) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const onSubmit = (data: any) => console.log(data);
  return (
    <View style={containerStyle}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            mode="outlined"
            style={[
              {
                width: "100%",
              },
              inputStyle,
            ]}
            label={label}
            placeholder={placeHolder}
            onChangeText={onChange}
            onBlur={onBlur}
            secureTextEntry={isPassword && showPassword}
            value={value}
            right={
              isPassword ? (
                <TextInput.Icon
                  icon={!showPassword ? "eye-outline" : "eye-off-outline"}
                  forceTextInputFocus={false}
                  onPress={(e) => {
                    setShowPassword((prev) => !prev);
                  }}
                />
              ) : errors[name] ? (
                <TextInput.Icon
                  icon={"alert-circle"}
                  forceTextInputFocus={false}
                  color={() => Colors.light.error}
                />
              ) : null
            }
            left={leftIcon && <TextInput.Icon icon={leftIcon} />}
            textColor={Colors.light.background}
            outlineColor={
              errors[name] ? Colors.light.error : Colors.light.gray2
            }
            activeOutlineColor={
              errors[name] ? Colors.light.error : Colors.light.background
            }
          />
        )}
      />
      {errors[name] && helperText && (
        <HelperText type="error">{helperText}</HelperText>
      )}
    </View>
  );
}

import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, View } from "react-native";
import { HelperText, TextInput } from "react-native-paper";
import Colors from "../../constants/Colors";

type Props = {
  name: string;
  label: string;
  rules?: any;
  defaultValue?: string;
  isPassword?: boolean;
  helperText?: string;
  leftIcon?: string;
};

export default function CsInput({
  name,
  rules,
  defaultValue,
  isPassword = false,
  helperText,
  label,
  leftIcon,
}: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      [name]: defaultValue,
    },
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const onSubmit = (data: any) => console.log(data);
  return (
    <View>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            mode="outlined"
            style={{
              width: "100%",
            }}
            label={label}
            placeholder={label}
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

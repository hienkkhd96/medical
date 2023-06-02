import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { Text } from "react-native-paper";
import CsButton from "../../components/Button";
import Header from "../../components/Header/Header";
import Title from "../../components/Typo/Title";
import Colors from "../../constants/Colors";
import { WEB_MAXWIDTH } from "../../constants/DefaultValue";

type Props = {};
interface formObject {
  email: string;
  password: string;
}
const styles = StyleSheet.create({
  root: { flex: 1, padding: 20 },
  title: { textAlign: "center", fontSize: 30 },
  cell: {
    width: 72,
    height: 56,
    lineHeight: 56,
    fontSize: 24,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: Colors.light.gray1,
    textAlign: "center",
  },
  focusCell: {
    borderColor: "#000",
  },
});
function OTPAuth({}: Props) {
  const router = useRouter();
  const CELL_COUNT = 4;
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const handleSendOtp = () => {
    router.push("../change-password");
  };
  return (
    <View
      style={{
        backgroundColor: Colors.light.white,
        marginHorizontal: "auto",
        width: WEB_MAXWIDTH,
        maxWidth: "100%",
        height: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 16,
      }}
    >
      <View
        style={{
          position: "absolute",
          right: 20,
          transform: [{ rotate: "6deg" }],
        }}
      >
        <Image
          source={require("../../assets/images/background_vector.png")}
          style={{
            resizeMode: "stretch",
          }}
        />
      </View>
      <View
        style={{
          marginTop: 68,
        }}
      >
        <Header arrowBack />
        <View
          style={{
            marginTop: 24,
          }}
        >
          <Title type="t4" weight="bold">
            OTP Authentication
          </Title>
          <Title
            type="t8"
            weight="bold"
            style={{
              width: 296,
              color: Colors.light.gray1,
              marginTop: 4,
            }}
          >
            An authentication code has been sent to your email
          </Title>
        </View>
        <View
          style={{
            marginTop: 36,
          }}
        >
          <CodeField
            ref={ref}
            {...props}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}
              >
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </View>
        <View style={{ flexDirection: "row", marginTop: 16 }}>
          <Title>Didn’t receive the code? </Title>
          <Link
            href="../login"
            style={{
              paddingLeft: 2,
              color: Colors.light.background,
            }}
          >
            <Title
              style={{
                color: Colors.dark.background,
              }}
            >
              Resend
            </Title>
          </Link>
        </View>
      </View>
      <CsButton
        onPress={handleSendOtp}
        style={{
          marginBottom: 16,
        }}
      >
        Continue
      </CsButton>
    </View>
  );
}

export default OTPAuth;

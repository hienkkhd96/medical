import { Link } from "expo-router";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Image, TouchableOpacity, View } from "react-native";
import { Checkbox, Divider } from "react-native-paper";
import CsButton from "../../components/Button";
import Header from "../../components/Header/Header";
import CsInput from "../../components/Input";
import AppLayout from "../../components/Layout";
import Title from "../../components/Typo/Title";
import Colors from "../../constants/Colors";

type Props = {};
interface formObject {
  email: string;
  password: string;
}
function Login({}: Props) {
  const form = useForm<formObject>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { handleSubmit } = form;
  const onSubmit = (values: formObject) => {
    console.log(values);
  };
  return (
    <AppLayout>
      <View
        style={{
          marginTop: 68,
          paddingHorizontal: 16,
        }}
      >
        <Header />
        <View
          style={{
            marginTop: 24,
          }}
        >
          <Title type="t4" weight="bold">
            Welcome
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
            Please put your information below to sign in
          </Title>
        </View>
        <View
          style={{
            marginTop: 36,
          }}
        >
          <FormProvider {...form}>
            <CsInput
              containerStyle={{
                marginBottom: 24,
              }}
              name="email"
              label="Email"
            />
            <CsInput
              containerStyle={{
                marginBottom: 8,
              }}
              isPassword
              name="password"
              label="Password"
            />
            <View
              style={{
                height: 48,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 30,
              }}
            >
              <View
                style={{
                  marginLeft: -7,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Checkbox status="checked" />
                <Title>Remember Me</Title>
              </View>
              <Link href="../reset-password">Forgot Password?</Link>
            </View>
            <View>
              <CsButton onPress={handleSubmit(onSubmit)}>Sign In</CsButton>
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: 24,
                }}
              >
                <Title>Don't have account?</Title>
                <Link
                  href="../register"
                  style={{
                    paddingLeft: 6,
                    color: Colors.light.background,
                  }}
                >
                  <Title
                    style={{
                      color: Colors.dark.background,
                    }}
                  >
                    Sign up
                  </Title>
                </Link>
              </View>
            </View>
          </FormProvider>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 36,
            }}
          >
            <Divider
              style={{
                height: 1,
                flex: 1,
              }}
              theme={{ colors: { primary: Colors.light.gray5 } }}
            />
            <Title
              style={{
                paddingHorizontal: 12,
              }}
            >
              Or Sign up with
            </Title>
            <Divider
              style={{
                height: 1,
                flex: 1,
              }}
              theme={{ colors: { primary: Colors.light.gray5 } }}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 36,
            flexDirection: "row",
            gap: 8,
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              height: 56,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderRadius: 8,
              borderColor: Colors.light.gray5,
            }}
          >
            <Image source={require("../../assets/images/logo_google.png")} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              height: 56,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderRadius: 8,
              borderColor: Colors.light.gray5,
            }}
          >
            <Image source={require("../../assets/images/logo_facebook.png")} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              height: 56,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderRadius: 8,
              borderColor: Colors.light.gray5,
            }}
          >
            <Image source={require("../../assets/images/logo_apple.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </AppLayout>
  );
}

export default Login;

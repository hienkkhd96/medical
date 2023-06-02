import { Link } from "expo-router";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Image, TouchableOpacity, View } from "react-native";
import { Divider } from "react-native-paper";
import CsButton from "../../components/Button";
import Header from "../../components/Header/Header";
import CsInput from "../../components/Input";
import AppLayout from "../../components/Layout";
import Title from "../../components/Typo/Title";
import Colors from "../../constants/Colors";

type Props = {};
interface formObject {
  name: string;
  email: string;
  password: string;
  rePassword: string;
}
function Register({}: Props) {
  const form = useForm<formObject>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
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
            Create a new account
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
            Please put your information below to create a new account
          </Title>
        </View>
        <View>
          <FormProvider {...form}>
            <CsInput
              containerStyle={{
                marginVertical: 16,
              }}
              name="name"
              label="Name"
            />
            <CsInput
              containerStyle={{
                marginBottom: 24,
              }}
              name="email"
              label="Email"
            />
            <CsInput
              containerStyle={{
                marginBottom: 24,
              }}
              isPassword
              name="password"
              label="Password"
            />
            <CsInput
              containerStyle={{
                marginBottom: 36,
              }}
              isPassword
              name="rePassword"
              label="Confirm Password"
            />
            <View>
              <CsButton onPress={handleSubmit(onSubmit)}>
                Create Account
              </CsButton>
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: 24,
                }}
              >
                <Title>Already have an account?</Title>
                <Link
                  href="../login"
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
                    Sign In
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

export default Register;

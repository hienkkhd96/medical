import { useRouter } from "expo-router";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Image, View } from "react-native";
import CsButton from "../../components/Button";
import Header from "../../components/Header/Header";
import CsInput from "../../components/Input";
import Title from "../../components/Typo/Title";
import Colors from "../../constants/Colors";
import { WEB_MAXWIDTH } from "../../constants/DefaultValue";

type Props = {};
interface formObject {
  password: string;
  newPassword: string;
}
function ChangePassword({}: Props) {
  const form = useForm<formObject>({
    defaultValues: {
      password: "",
      newPassword: "",
    },
  });
  const { handleSubmit } = form;
  const router = useRouter();
  const onSubmit = (values: formObject) => {
    router.push("../login");
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
            Change Password
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
            Create a new, strong password that you don’t use before
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
              name="password"
              label="Password"
            />
            <CsInput
              containerStyle={{
                marginBottom: 24,
              }}
              name="newPassword"
              label="New Pasword"
            />
          </FormProvider>
        </View>
      </View>
      <CsButton
        onPress={handleSubmit(onSubmit)}
        style={{
          marginBottom: 16,
        }}
      >
        Save Password
      </CsButton>
    </View>
  );
}

export default ChangePassword;

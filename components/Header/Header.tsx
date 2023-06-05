import React, { ReactElement } from "react";
import { View, Image, TouchableOpacity, BackHandler } from "react-native";
import Title from "../Typo/Title";
import { IconButton } from "react-native-paper";
import { useFocusEffect, useNavigation, useRouter } from "expo-router";
type Props = {
  arrowBack?: boolean;
  title?: ReactElement;
};

function Header({ arrowBack = false, title }: Props) {
  const navigation = useNavigation();
  const { canGoBack, goBack } = navigation;
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (arrowBack) {
          return false;
        } else {
          return true;
        }
      };
      const subscription = BackHandler.addEventListener(
        "hardwareBackPress",
        onBackPress
      );

      return () => subscription.remove();
    }, [arrowBack])
  );
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {canGoBack() && arrowBack && (
        <IconButton
          icon={"arrow-left"}
          size={24}
          style={{
            width: 32,
            height: 32,
            margin: 0,
            backgroundColor: "#FFF5E5",
            borderRadius: 8,
            marginRight: 24,
          }}
          onPress={() => {
            goBack();
          }}
        />
      )}
      {title ? (
        title
      ) : (
        <Image source={require("../../assets/images/MedCureLogo.png")} />
      )}
    </View>
  );
}

export default Header;

import React, { ReactElement } from "react";
import { Image, ScrollView, View } from "react-native";
import Colors from "../constants/Colors";
import { WEB_MAXWIDTH } from "../constants/DefaultValue";
type Props = {
  children: ReactElement;
};
const AppLayout = ({ children }: Props) => {
  return (
    <View
      style={{
        backgroundColor: Colors.light.white,
        marginHorizontal: "auto",
        width: WEB_MAXWIDTH,
        maxWidth: "100%",
        height: "100%",
        flex: 1,
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
          source={require("../assets/images/background_vector.png")}
          style={{
            resizeMode: "stretch",
          }}
        />
      </View>
      {children}
    </View>
  );
};
export default AppLayout;

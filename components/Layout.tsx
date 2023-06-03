import React, { ReactElement } from "react";
import { Image, View, ViewStyle } from "react-native";
import Colors from "../constants/Colors";
import { WEB_MAXWIDTH } from "../constants/DefaultValue";
type Props = {
  children: ReactElement[] | ReactElement;
  style?: ViewStyle;
};
const AppLayout = ({ children, style }: Props) => {
  return (
    <View
      style={[
        {
          backgroundColor: Colors.light.white,
          marginHorizontal: "auto",
          width: WEB_MAXWIDTH,
          maxWidth: "100%",
          height: "100%",
          flex: 1,
        },
        style,
      ]}
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

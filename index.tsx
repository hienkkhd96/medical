import { registerRootComponent } from "expo";
import { ExpoRoot } from "expo-router";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native-paper";
const linking = {
  prefixes: [
    /* your linking prefixes */
  ],
  config: {
    screens: {
      Chat: "feed/:sort",
      Profile: "user",
    },
  },
};
// Must be exported or Fast Refresh won't update the context
export function App() {
  const ctx = require.context("./app");
  return <ExpoRoot context={ctx} />;
}

registerRootComponent(App);

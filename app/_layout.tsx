import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { PaperProvider } from "react-native-paper";
export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "login",
  tabs: {
    initialRouteName: "two",
  },
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ManropeBold: require("../assets/fonts/Manrope-Bold.ttf"),
    ManropeSemiBold: require("../assets/fonts/Manrope-SemiBold.ttf"),
    ManropeRegular: require("../assets/fonts/Manrope-Regular.ttf"),
    ManropeMedium: require("../assets/fonts/Manrope-Medium.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  return (
    <>
      <PaperProvider>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Stack>
            <Stack.Screen
              name="(tabs)"
              options={{ headerShown: false, animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="(auth)"
              options={{ headerShown: false, animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="appointment"
              options={{ headerShown: false, animation: "slide_from_right" }}
            />
          </Stack>
        </ThemeProvider>
      </PaperProvider>
    </>
  );
}

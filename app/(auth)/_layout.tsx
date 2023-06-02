import { Stack } from "expo-router";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="login"
        options={{
          title: "Tab One",
        }}
      />
      <Stack.Screen
        name="change-password"
        options={{
          title: "Tab Two",
        }}
      />
      <Stack.Screen
        name="otp-auth"
        options={{
          title: "Tab Two",
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          title: "Appointments",
        }}
      />
      <Stack.Screen
        name="reset-password"
        options={{
          title: "Appointments",
        }}
      />
    </Stack>
  );
}

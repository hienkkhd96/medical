import { Tabs } from "expo-router";

import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import CustomTabBar from "../../components/CustomTabBar";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => {
        return <CustomTabBar {...props} />;
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color }: any) => (
            <MaterialIcons name="view-column" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="appointments"
        options={{
          title: "Appointments",
          tabBarIcon: ({ color }: any) => (
            <Ionicons name="file-tray-full-outline" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }: any) => (
            <MaterialIcons name="code" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="four"
        options={{
          title: "Four",
          tabBarIcon: ({ color }: any) => (
            <MaterialIcons name="code" size={30} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

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
            <Ionicons name="grid-outline" size={30} color={color} />
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
        name="find-doctor"
        options={{
          title: "Search",
          tabBarIcon: ({ color }: any) => (
            <Ionicons name="search-outline" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="four"
        options={{
          title: "Menu",
          tabBarIcon: ({ color }: any) => (
            <Ionicons name="menu" size={30} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

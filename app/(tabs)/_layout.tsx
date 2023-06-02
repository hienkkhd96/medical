import { Tabs } from "expo-router";

import { MaterialIcons } from "@expo/vector-icons";
import CustomTabBar from "../../components/CustomTabBar";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => {
        return <CustomTabBar {...props} />;
      }}
    >
      <Tabs.Screen
        name="one"
        options={{
          title: "Tab One",
          tabBarIcon: ({ color }: any) => (
            <MaterialIcons name="view-column" size={36} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }: any) => (
            <MaterialIcons name="code" size={36} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }: any) => (
            <MaterialIcons name="code" size={36} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="four"
        options={{
          title: "Appointments",
          tabBarIcon: ({ color }: any) => (
            <MaterialIcons name="code" size={36} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

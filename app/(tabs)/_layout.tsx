import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { Text, useColorScheme } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import CustomTabBar from "../../components/CustomTabBar";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      tabBar={(props) => {
        return <CustomTabBar {...props} />;
      }}
    >
      <Tabs.Screen
        name="index"
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

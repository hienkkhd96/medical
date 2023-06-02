import { StyleSheet } from "react-native";

import CsButton from "../../components/Button";
import EditScreenInfo from "../../components/EditScreenInfo";
import CsInput from "../../components/Input";
import { View } from "../../components/Themed";
import Heading from "../../components/Typo/Heading";
import Title from "../../components/Typo/Title";
import AppLayout from "../../components/Layout";

export default function TabOneScreen() {
  return (
    <AppLayout>
      <View style={styles.container}>
        <Heading>A quick brown fox jumps over the lazy dog.</Heading>
        <Title> A quick brown fox jumps over the lazy dog.</Title>
        <View style={{ marginVertical: 16, width: "100%" }}></View>
        <View style={{ marginVertical: 16, width: "100%" }}>
          <CsButton mode="contained">Button</CsButton>
        </View>
        <EditScreenInfo path="app/(tabs)/index.tsx" />
      </View>
    </AppLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    height: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
  },
});

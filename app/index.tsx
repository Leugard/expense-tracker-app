import { colors } from "@/constants/theme";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, StatusBar, StyleSheet, Text, View } from "react-native";

const index = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require("../assets/images/logo.png")}
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.neutral900,
  },
  logo: {
    height: "20%",
    aspectRatio: 1,
  },
});

import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScreenWrapperProps } from "@/types";
import { colors } from "@/constants/theme";

const ScreenWrapper = ({ style, children }: ScreenWrapperProps) => {
  let paddingTop = 50;

  return (
    <View
      style={[
        { paddingTop, flex: 1, backgroundColor: colors.neutral900 },
        style,
      ]}
    >
      <StatusBar translucent backgroundColor="transparent" />
      {children}
    </View>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({});

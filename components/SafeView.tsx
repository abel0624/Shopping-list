import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import {
  SafeAreaView,
  SafeAreaViewProps,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

type SafeViewProps = {
  safe?: boolean;
} & SafeAreaViewProps;

const SafeView = ({
  style,
  safe = false,
  children,
  ...props
}: SafeViewProps) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  if (!safe)
    return (
      <View style={[{ backgroundColor: theme.background }, style]} {...props}>
        {children}
      </View>
    );

  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          backgroundColor: theme.background,
          paddingTop: insets.top,
          paddingLeft: insets.left,
          paddingRight: insets.right,
          paddingBottom: insets.bottom,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
};

export default SafeView;

const styles = StyleSheet.create({});

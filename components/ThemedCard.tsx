import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ViewProps,
} from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";

const ThemedCard = ({ style, children, ...props }: ViewProps) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <View
      style={[{ backgroundColor: theme.uiBackground }, styles.container, style]}
      {...props}
    >
      {children}
    </View>
  );
};

export default ThemedCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    padding: 20,
    elevation: 5,
  },
});

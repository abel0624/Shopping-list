import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  useColorScheme,
} from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";

const ThemedInput = ({ style, ...props }: TextInputProps) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <TextInput
      style={[
        { backgroundColor: theme.uiBackground, color: theme.text },
        style,
        styles.inputContainer,
      ]}
      {...props}
    />
  );
};

export default ThemedInput;

const styles = StyleSheet.create({
  inputContainer: {
    height: 40,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB", // light gray
    fontSize: 14,
    color: "#111827",

    // subtle shadow for iOS
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },

    // elevation for Android
    elevation: 1,
  },
});

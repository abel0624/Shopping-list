import {
  StyleSheet,
  Pressable,
  StyleProp,
  TextInputProps,
  TextStyle,
  PressableProps,
  ViewProps,
} from "react-native";
import React, { Children } from "react";
import { Colors } from "../constants/Colors";

const ThemedBtn = ({
  style,
  children,
  ...props
}: PressableProps & ViewProps) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.btn, pressed && styles.pressed, style]}
      {...props}
    >
      {children}
    </Pressable>
  );
};

export default ThemedBtn;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    padding: 12,
    borderRadius: 8,
    marginVertical: 10,
  },
  pressed: {
    opacity: 0.5,
  },
});

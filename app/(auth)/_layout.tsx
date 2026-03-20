import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { router, Stack } from "expo-router";
import { useUser } from "../../hooks/useUser";

const AuthLayout = () => {
  const user = useUser();

  return <Stack screenOptions={{ headerShown: false }} />;
};

export default AuthLayout;

const styles = StyleSheet.create({});

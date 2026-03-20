import { Button, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import Spacer from "../components/Spacer";
import SafeView from "../components/SafeView";
import { Models } from "react-native-appwrite";
import { useUser } from "../hooks/useUser";

const index = () => {
  const user = useUser();
  return (
    <SafeView style={styles.container} safe={true}>
      <Image source={require("../assets/img/logo-SL.png")} style={styles.img} />
      <Text>Shopping List App</Text>
      {user.user?.$id ? (
        <Text>{user.user?.name}</Text>
      ) : (
        <Text>"Not Logged in"</Text>
      )}

      <Spacer width="100%" heigth={40} />
      <Link href={"/Login"}>
        <Text>Login</Text>
      </Link>
      <Link href={"/Register"}>
        <Text>Register</Text>
      </Link>
      <Button title="Logout" onPress={user.logout} />
    </SafeView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 4,
    elevation: 4,
    marginVertical: 10,
  },
  text: {
    fontWeight: "500",
    fontSize: 14,
    color: "#fff",
  },
});

import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from "react-native";
import React, { useState } from "react";
import { account } from "../../lib/appwrite";
import { ID, Models } from "react-native-appwrite";
import SafeView from "../../components/SafeView";
import ThemedBtn from "../../components/ThemedBtn";
import ThemedInput from "../../components/ThemedInput";
import structure from "../../constants/Style";
import { Colors } from "../../constants/Colors";
import { useUser } from "../../hooks/useUser";

const Login = () => {
  const user = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeView safe={false} style={styles.container}>
        <View style={[{ backgroundColor: theme.uiBackground }, styles.card]}>
          <Text
            style={[
              structure.titleText,
              { textAlign: "center", color: theme.title },
            ]}
          >
            Login
          </Text>

          <View style={styles.inputContainer}>
            <Text
              style={[structure.text, { color: theme.text, marginLeft: 5 }]}
            >
              Email
            </Text>
            <ThemedInput
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text
              style={[structure.text, { color: theme.text, marginLeft: 5 }]}
            >
              Password
            </Text>
            <ThemedInput
              placeholder="Enter your password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <ThemedBtn onPress={() => user.login({ email, password })}>
            <Text
              style={{ color: "#f2f2f2", fontSize: 16, textAlign: "center" }}
            >
              Login
            </Text>
          </ThemedBtn>
        </View>
      </SafeView>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  card: {
    padding: 20,
    elevation: 10,
    borderRadius: 8,
    gap: 10,
    width: "80%",
  },
  inputContainer: {
    gap: 5,
  },
});

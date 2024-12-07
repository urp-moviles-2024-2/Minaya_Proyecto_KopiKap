import {
  Image,
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import React, { useState, useContext } from "react";
import { BlurView } from "expo-blur";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase-config";
import { AuthContext } from "../store/auth-context";
import { updateProfile } from "firebase/auth";


import { useNavigation } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";

// Initialize Firebase
initializeApp(firebaseConfig);

const LoginScreen = ({navigation}) => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const auth = getAuth();

  const handleLogin = () => {
    if (email === "" || password === "") {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        login(user.email, password);
        navigation.navigate("TabLayout");
      })
      .catch((error) => {
        Alert.alert("Login Error", "Invalid email or password.");
      });
  };

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: `${firstName} ${lastName}`,
        })
          .then(() => {
            Alert.alert("Registration Successful", "You can now log in.");
            setIsRegistering(false);
          })
          .catch((error) => {
            Alert.alert("Profile Update Error", error.message);
          });
      })
      .catch((error) => {
        Alert.alert("Registration Error", error.message);
      });
  };



  return (
    <View style={styles.container}>
      <Image source={require( "../assets/image.png")} style={[styles.image, StyleSheet.absoluteFill]} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <BlurView intensity={50}>
          <View style={styles.login}>
            <Image
              source={require( "../assets/KopiKap.png")}
              style={styles.profilePicture}
            />
            <Text style={styles.title}>{isRegistering ? "Register" : "Login"}</Text>
            <View>
              <TextInput
               placeholder="Email"
                 value={email}
                  onChangeText={setEmail}
                 style={styles.input}
               />
            </View>
            <View>
              <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
              />
            </View>
            {isRegistering ? (
              <TouchableOpacity style={[styles.button, { backgroundColor: "#1BAE76" }]} onPress={handleRegister}>
                <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={[styles.button, { backgroundColor: "#1BAE76" }]} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "#ffffff" }]}
              onPress={() => setIsRegistering(!isRegistering)}
            >
              <Text style={styles.switchButtonText}>
                {isRegistering ? "Already have an account? Login" : "Create an account"}
              </Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  blurView: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    overflow: "hidden",
  },
  login: {
    width: 350,
    borderRadius: 15,
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: "#fff",
    borderWidth: 3,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  input: {
    width: 250,
    height: 45,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 12,
    paddingLeft: 15,
    marginVertical: 10,
    backgroundColor: "#f9f9f9",
    fontSize: 16,
  },
  button: {
    width: 250,
    height: 45,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
    borderColor: "#fff",
    borderWidth: 1,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    color: "#333",
    marginBottom: 5,
  },
  switchButtonText: {
    color: "#333",
    fontSize: 16,
    textAlign: "center",
  },
});
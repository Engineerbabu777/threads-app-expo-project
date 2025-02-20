import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    KeyboardAvoidingView,
    TextInput,
    Pressable,
    Alert,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import { MaterialIcons } from "@expo/vector-icons";
  import { AntDesign } from "@expo/vector-icons";
  import { useNavigation } from "@react-navigation/native";
  import axios from "axios";
  import AsyncStorage from "@react-native-async-storage/async-storage";
  
  const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

   
    const handleLogin = () => {
     
    };
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
      >
        <View style={{ marginTop: 50 }}>
          <Image
            style={{ width: 150, height: 100, resizeMode: "contain" }}
            source={{
              uri: "https://freelogopng.com/images/all_img/1688663386threads-logo-transparent.png",
            }}
          />
        </View>
  
        <KeyboardAvoidingView>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 25 }}>
              Login to Your Account
            </Text>
          </View>
  
          <View style={{ marginTop: 40 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                borderColor: "#D0D0D0",
                borderWidth: 1,
                paddingVertical: 5,
                borderRadius: 5,
              }}
            >
              <MaterialIcons
                style={{ marginLeft: 8 }}
                name="email"
                size={24}
                color="gray"
              />
              <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholderTextColor={"gray"}
                style={{
                  color: "gray",
                  marginVertical: 10,
                  width: 300,
                  fontSize: email ? 16 : 16,
                }}
                placeholder="Enter your Email"
              />
            </View>
  
            <View style={{ marginTop: 30 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                  borderColor: "#D0D0D0",
                  borderWidth: 1,
                  paddingVertical: 5,
                  borderRadius: 5,
                }}
              >
                <AntDesign
                  style={{ marginLeft: 8 }}
                  name="lock"
                  size={24}
                  color="gray"
                />
                <TextInput
                  secureTextEntry={true}
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  placeholderTextColor={"gray"}
                  style={{
                    color: "gray",
                    marginVertical: 10,
                    width: 300,
                    fontSize: password ? 16 : 16,
                  }}
                  placeholder="Enter your Password"
                />
              </View>
            </View>
  
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 12,
                marginLeft:"auto"
              }}
            >
              <Text style={{ fontWeight: "500", color: "#007FFF" }}>
                Forgot Password
              </Text>
            </View>
          </View>
  
          <View style={{ marginTop: 45 }} />
  
          <Pressable
            onPress={handleLogin}
            style={{
              width: 200,
              backgroundColor: "black",
              padding: 15,
              marginTop: 40,
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: 6,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 16,
                color: "white",
              }}
            >
              Login
            </Text>
          </Pressable>
  
          <Pressable
            onPress={() => navigation.navigate("signup")}
            style={{ marginTop: 10 }}
          >
            <Text style={{ textAlign: "center", fontSize: 16 }}>
              Don't have an account? Sign up
            </Text>
          </Pressable>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  };
  
  export default LoginScreen;
  
  const styles = StyleSheet.create({});
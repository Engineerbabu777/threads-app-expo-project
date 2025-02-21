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
    ActivityIndicator,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserType } from "@/UserContext";

export const HOST_IP = "192.168.160.216";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(true); // Initial loading for token check
    const [loginLoading, setLoginLoading] = useState(false); // Separate state for login button
    const navigation = useNavigation();
    const { setUserId } = useContext<any>(UserType);

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const token = await AsyncStorage.getItem("authToken");
                if (token) {
                    setUserId(token);
                    navigation.reset({
                        index: 0,
                        routes: [{ name: "Main" as never }],
                    });
                }
            } catch (error) {
                console.log("Error checking login status:", error);
            } finally {
                setLoading(false);
            }
        };

        checkLoginStatus();
    }, []);

    const handleLogin = async () => {
        if (!email || !password) {
            return Alert.alert("Validation Error", "Please fill in all fields.");
        }

        setLoginLoading(true);
        const user = { email, password };

        try {
            console.log("Logging in...");
            const response = await axios.post(`http://${HOST_IP}:3000/login`, user);

            const token = response.data.token;
            setUserId(token);
            await AsyncStorage.setItem("authToken", token);

            navigation.reset({
                index: 0,
                routes: [{ name: "Main" as never }],
            });
        } catch (error) {
            console.error("Login error:", error);
            Alert.alert("Login Failed", "Invalid credentials or server issue.");
        } finally {
            setLoginLoading(false);
        }
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="black" />
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={{
                        uri: "https://freelogopng.com/images/all_img/1688663386threads-logo-transparent.png",
                    }}
                />
            </View>

            <KeyboardAvoidingView behavior="padding">
                <View style={styles.header}>
                    <Text style={styles.headerText}>Login to Your Account</Text>
                </View>

                <View style={styles.inputContainer}>
                    <View style={styles.inputWrapper}>
                        <MaterialIcons name="email" size={24} color="gray" style={styles.icon} />
                        <TextInput
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Enter your Email"
                            placeholderTextColor="gray"
                            style={styles.input}
                        />
                    </View>

                    <View style={styles.inputWrapper}>
                        <AntDesign name="lock" size={24} color="gray" style={styles.icon} />
                        <TextInput
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                            placeholder="Enter your Password"
                            placeholderTextColor="gray"
                            style={styles.input}
                        />
                    </View>

                    <Text style={styles.forgotPassword}>Forgot Password?</Text>
                </View>

                <Pressable onPress={handleLogin} style={styles.button} disabled={loginLoading}>
                    {loginLoading ? (
                        <ActivityIndicator size="small" color="#fff" />
                    ) : (
                        <Text style={styles.buttonText}>Login</Text>
                    )}
                </Pressable>

                <Pressable onPress={() => navigation.navigate("signup")} style={styles.signup}>
                    <Text style={styles.signupText}>Don't have an account? Sign up</Text>
                </Pressable>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    logoContainer: {
        marginTop: 50,
    },
    logo: {
        width: 150,
        height: 100,
        resizeMode: "contain",
    },
    header: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25,
    },
    headerText: {
        fontSize: 17,
        fontWeight: "bold",
    },
    inputContainer: {
        marginTop: 40,
    },
    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        borderColor: "#D0D0D0",
        borderWidth: 1,
        paddingVertical: 5,
        borderRadius: 5,
        marginBottom: 20,
    },
    icon: {
        marginLeft: 8,
    },
    input: {
        color: "gray",
        marginVertical: 10,
        width: 300,
        fontSize: 16,
    },
    forgotPassword: {
        fontWeight: "500",
        color: "#007FFF",
        alignSelf: "flex-end",
    },
    button: {
        width: 200,
        backgroundColor: "black",
        padding: 15,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
    },
    buttonText: {
        fontWeight: "bold",
        fontSize: 16,
        color: "white",
    },
    signup: {
        marginTop: 10,
    },
    signupText: {
        textAlign: "center",
        fontSize: 16,
    },
});

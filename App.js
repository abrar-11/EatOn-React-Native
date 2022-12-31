import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import LoginPage from "./screens/LoginPage";
import SplashScreen from "./screens/SpalshScreen";
import Register from "./screens/Register";
import ResturantScreen from "./screens/ResturantScreen";
import CheckOut from "./screens/CheckOut";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="splash" component={SplashScreen} />
                <Stack.Screen name="login" component={LoginPage} /> npx create-expo-app AppName
                <Stack.Screen name="register" component={Register} />
                <Stack.Screen name="home" component={HomeScreen} />
                <Stack.Screen name="resturant" component={ResturantScreen} />
                <Stack.Screen name="checkout" component={CheckOut} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: "center",
        justifyContent: "center",
    },
});

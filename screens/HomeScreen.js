import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { logo } from "../CONSTANTS";
import CONSTANTS from "../CONSTANTS";
// import logo from "../assets/eaton-1.png";
export default function HomeScreen() {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    return (
        <SafeAreaView style={CONSTANTS.AndroidSafeArea}>
            <View className="bg-gray-100 ">
                <Image
                    source={logo}
                    className="object-cover"
                    resizeMode="cover"
                />
            </View>
            <View>
                <Text>Home</Text>
            </View>
        </SafeAreaView>
    );
}

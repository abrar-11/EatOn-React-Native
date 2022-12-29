import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { SafeAreaView, Text, View } from "react-native";
import CONSTANTS from "../CONSTANTS";

export default function HomeScreen() {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    return (
        <SafeAreaView style={CONSTANTS.AndroidSafeArea}>
            <View>
                <Text>Home Screen</Text>
            </View>
        </SafeAreaView>
    );
}

import { View, Text, SafeAreaView,Image } from "react-native";
import React from "react";

const LoginPage = () => {
    return (
        <SafeAreaView>
            <View className="h-screen flex items-center justify-center pt-8 bg-blue-400">
            <Image
        style={styles.tinyLogo}
        source={require('@expo/snack-static/react-native-logo.png')}
      />
            </View>
        </SafeAreaView>
    );
};

export default LoginPage;

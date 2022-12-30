import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { logo } from "../CONSTANTS";
import CONSTANTS from "../CONSTANTS";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
// import logo from "../assets/eaton-1.png";
export default function HomeScreen() {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    return (
        <SafeAreaView style={CONSTANTS.AndroidSafeArea} className="bg-white">
            {/* Header */}
            <View className="flex-row  items-center w-full justify-between">
                <View className="w-32 h-32  ">
                    <Image
                        source={logo}
                        className="object-cover mx-auto "
                        resizeMode="contain"
                        style={{
                            flex: 1,
                            width: "100%",
                            height: "100%",
                            resizeMode: "contain",
                        }}
                    />
                </View>
                <View className=" flex-1">
                    <Text>Home</Text>
                </View>
            </View>

            {/* Body */}
            <ScrollView>
                {/* Categories */}

                <Categories />
                {/* Featured Rows */}
                <FeaturedRow
                    title="Featured"
                    description="Exciting Deals from your partners"
                    category="featured"
                />
                <FeaturedRow
                    title="Tasty Discounts"
                    description="Exciting Deals from your partners"
                    category="discounts"
                />
                <FeaturedRow
                    title="Offers Near you"
                    description="Exciting Deals from your partners"
                    category="offers"
                />
            </ScrollView>
        </SafeAreaView>
    );
}


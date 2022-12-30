import { View, Text } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
const FeaturedRow = (props) => {
    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg">{props.title}</Text>
                <ArrowRightIcon color="#00ccbb" />
            </View>

            <Text className="text-sm text-gray-700 px-4">{props.description}</Text>
        </View>
    );
};

export default FeaturedRow;

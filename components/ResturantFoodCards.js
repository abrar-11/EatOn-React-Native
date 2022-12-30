import {
    View,
    Text,
    TouchableOpacityBase,
    TouchableOpacity,
    Image,
} from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";

const ResturantFoodCards = (props) => {
    return (
        <View className="bg-gray-50 mr-4">
            <View className="w-56 h-40 flex items-center justify-center mx-auto rounded">
                <Image
                    source={{
                        uri: props.imgUrl,
                    }}
                    style={{
                        flex: 1,
                        width: "100%",
                        height: "100%",
                        resizeMode: "contain",
                    }}
                    className="rounded"
                />
            </View>
            <View className="px-2 py-4">
              <Text className="text-xl font-bold text-gray-800">{props.title}</Text>

              <View className="flex-row space-x-1 items-center ">
                <StarIcon color="#FFB100" size={20}/>
                <Text>{props.rating}</Text>
              </View>
            </View>
        </View>
    );
};

export default ResturantFoodCards;

import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import ResturantFoodCards from "./ResturantFoodCards";
const FeaturedRow = (props) => {
    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-2xl text-gray-800 mb-1">{props.title}</Text>
                <ArrowRightIcon color="#00ccbb" />
            </View>

            <Text className="text-base text-gray-800 px-4">
                {props.description}
            </Text>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
                className="pt-4 "
            >
                {/* Resturant Food Cards */}

                <ResturantFoodCards
                    imgUrl="https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg"
                    title="Beast Pizza"
                    rating='4.5'
                />
                <ResturantFoodCards
                    imgUrl="https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg"
                    title="Beast Pizza"
                    rating='4.5'
                />
                <ResturantFoodCards
                    imgUrl="https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg"
                    title="Beast Pizza"
                    rating='4.5'
                />
                <ResturantFoodCards
                    imgUrl="https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg"
                    title="Beast Pizza"
                    rating='4.5'
                />
                <ResturantFoodCards
                    imgUrl="https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg"
                    title="Beast Pizza"
                    rating='4.5'
                />
                <ResturantFoodCards
                    imgUrl="https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg"
                    title="Beast Pizza"
                    rating='4.5'
                />
            </ScrollView>
        </View>
    );
};

export default FeaturedRow;

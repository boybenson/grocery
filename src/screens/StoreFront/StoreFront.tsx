import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {products, productsCategory} from '../../data';
import ProductCard from '../../common/ProductCard/ProductCard';
import {ScrollView} from 'react-native';

const StoreFront = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const screenDimensions = Dimensions.get('screen');

  return (
    <SafeAreaView>
      <View className={`w-[${screenDimensions.width}px] p-2`}>
        <View className="flex flex-row items-center space-x-2 justify-center p-2">
          <Image
            source={require('../../assets/icons/location.png')}
            className="w-[11px] h-[14px]"
          />
          <Text className="text-[12px] text-semibold">Commonwealth Hall</Text>
          <Image
            source={require('../../assets/icons/arrow_down.png')}
            className="w-[9px] h-[4px]"
          />
        </View>
        <ScrollView>
          <View>
            <View className="flex flex-row justify-between items-center space-x-2 mt-6">
              <TextInput
                placeholder="search favorite food..."
                className="px-2 border border-[#BAC0CA] flex-1 h-[40px] rounded-[6px]"
              />
              <Image
                source={require('../../assets/icons/menu.png')}
                className="w-[32px] h-[18px]"
              />
            </View>

            <View className="mt-6 bg-[#2369591A] p-4">
              <View className="flex flex-row justify-between items-center">
                <View className="flex-1">
                  <Text className="text-[#040D0B] text-[24px] font-bold font-regular">
                    Chicken Chips
                  </Text>
                  <Text className="text-[16px] text-[#667080] mt-1">
                    10 pieces
                  </Text>
                  <View className="flex flex-row space-x-1 mt-1">
                    <Text className="text-[#667080]">Discount</Text>
                    <Text className="text-[#236959]">50%</Text>
                  </View>
                  <TouchableOpacity className="bg-green w-[100px] mt-[10px] p-[10px] rounded-[4px]">
                    <Text className="text-white font-bold">Order Now</Text>
                  </TouchableOpacity>
                </View>
                <View className="flex-1">
                  <Image
                    className="object-cover"
                    source={require('../../assets/images/chickenplate.png')}
                  />
                </View>
              </View>
            </View>

            <View className="my-4">
              <FlatList
                horizontal
                data={productsCategory}
                renderItem={({item}) => (
                  <TouchableOpacity
                    onPress={() => setSelectedCategory(item?.name)}
                    className={`${
                      item?.name === selectedCategory ? 'bg-green' : ''
                    } flex justify-center items-center m-2 h-[30px] w-[100px] rounded-[4px] p-[2px] border border-green`}>
                    <Text
                      className={`${
                        item?.name === selectedCategory ? 'text-white' : ''
                      } font-light`}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>

            <View className="flex flex-row items-center justify-between">
              <View>
                <Text className="font-bold text-lg">Popular Foods</Text>
              </View>

              <View>
                <TouchableOpacity className="w-[74px] h-[20px] rounded-[100px] border border-green">
                  <Text className="text-green text-center">View all</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View className="m-4">
              <FlatList
                numColumns={2}
                data={products}
                renderItem={({item}) => <ProductCard item={item} />}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default StoreFront;

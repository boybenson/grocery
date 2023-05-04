import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

type Iprops = {
  item: {
    name: string;
    vendor: string;
    price: number;
    img: string;
  };
};

const ProductCard = ({item}: Iprops) => {
  return (
    <TouchableOpacity className="w-[49%] mx-[1%] my-[10px] shadow">
      <View className="w-full relative">
        <Image source={item.img} className="w-full" />
        <Image
          source={require('../../assets/icons/love.png')}
          className="w-[20px] h-[20px] absolute right-0 m-2"
        />
      </View>
      <View>
        <Text className="font-semibold text-xl font-regular">{item.name}</Text>
        <Text className="font-light">{item.vendor}</Text>
        <Text className="font-normal">GH₵ {item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

import {
  Dimensions,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const SignUpSuccess = ({navigation}: any) => {
  const screenDimensions = Dimensions.get('screen');

  return (
    <SafeAreaView>
      <View className={`w-[${screenDimensions.width}px] h-screen p-2`}>
        <View className="flex justify-center items-center h-full">
          <Image
            source={require('../../../assets/images/signup_success.png')}
            className="w-[190px] h-[106px]"
          />
          <View>
            <Text className="text-[24px] text-green text-center py-2 font-semibold">
              Congratulations
            </Text>
            <Text className="text-center text-[#667080] font-bold my-2">
              You have successful registered to our product and services 🎉🎉
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            className="bg-green mt-3 w-full h-[50px] flex items-center justify-center rounded-[6px] py-[13px] px-[24px]">
            <Text className="text-white font-bold">Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpSuccess;

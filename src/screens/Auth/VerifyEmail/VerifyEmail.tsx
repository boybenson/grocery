import {
  Dimensions,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const VerifyEmail = ({navigation}: any) => {
  const screenDimensions = Dimensions.get('screen');

  return (
    <SafeAreaView>
      <View className={`w-[${screenDimensions.width}px] p-2`}>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../../assets/icons/arrow_left.png')}
              className="w-[26px] h-[18px]"
            />
          </TouchableOpacity>
        </View>

        <View className="mt-6">
          <Text className="font-semibold text-[#040D0B] text-[24px] text-center">
            Verify Email
          </Text>
          <Text className="text-center pt-2 mt-3 text-[#667080] text-[16px]">
            please enter secret code sent to your email
          </Text>
          <Text className="text-center text-bold text-[#040D0B] text-xl">
            ybenson96@gmail.com
          </Text>
        </View>

        <View className="my-8 flex justify-center items-center space-y-3">
          <View className="flex flex-row space-x-4">
            {[1, 2, 3, 4]?.map((i, idx) => (
              <TextInput
                key={idx}
                className="h-[50px] w-[50px] border border-gray-[#BAC0CA] rounded-[6px] text-center text-2xl font-extrabold"
              />
            ))}
          </View>

          <View className="flex flex-row items-center space-x-2">
            <Text className="text-[16px]">You didn't receive code?</Text>
            <Text className="text-[16px] text-green">Resend</Text>
          </View>
        </View>

        <View className="mt-2">
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUpSuccess')}
            className="bg-green h-[50px] flex items-center justify-center rounded-[6px] py-[13px] px-[24px]">
            <Text className="text-white font-bold">Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VerifyEmail;

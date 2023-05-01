import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';

const SignUp = () => {
  const screenDimensions = Dimensions.get('screen');

  return (
    <SafeAreaView>
      <View className={`w-[${screenDimensions.width}px] p-2`}>
        <View className="flex flex-row justify-center items-center">
          <Image
            source={require('../../../assets/images/logo.png')}
            className="w-[165px] h-[48px]"
          />
        </View>

        <View className="my-8">
          <View>
            <Text className="text-black text-[24px] font-normal">
              Create an account
            </Text>
            <Text className="text-[16px] text-[#667080] leading-4 mt-2">
              please enter your details below
            </Text>
          </View>
        </View>

        <View className="gap-4">
          <View>
            <Text>Name*</Text>
            <TextInput
              className="border border-gray-[#BAC0CA] h-[50px] rounded-[6px] p-2"
              placeholder="John Hills"
            />
          </View>

          <View>
            <Text>Email*</Text>
            <TextInput
              className="border border-gray-[#BAC0CA] h-[50px] rounded-[6px] p-2"
              placeholder="ybenson96@gmail.com"
            />
          </View>

          <View>
            <Text>Password*</Text>
            <TextInput
              className="border border-gray-[#BAC0CA] h-[50px] rounded-[6px] p-2"
              placeholder="************"
            />
          </View>

          <View className="mt-4">
            <TouchableOpacity className="bg-green h-[50px] flex items-center justify-center rounded-[6px] py-[13px] px-[24px]">
              <Text className="text-white font-bold">Register</Text>
            </TouchableOpacity>
          </View>

          <View className="flex flex-row items-center justify-center space-x-2">
            <Text className="text-[14px]">Have an account?</Text>
            <Text className="text-[14px] text-green">Sign in</Text>
          </View>

          <View className="flex flex-row w-full justify-center items-center space-x-2">
            <View className="h-[9px] border-b border-BAC0CA w-[100px]" />
            <Text>or continue with</Text>
            <View className="h-[1px] border-b border-BACOCA w-[100px]" />
          </View>

          <View>
            <TouchableOpacity className="flex flex-row items-center justify-center space-x-2 my-2 border border-[#BAC0CA] h-[50px] rounded-[6px]">
              <Image source={require('../../../assets/icons/google.png')} />
              <Text>Signin with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row items-center justify-center space-x-2 my-2 border border-[#BAC0CA] h-[50px] rounded-[6px]">
              <Image source={require('../../../assets/icons/apple.png')} />
              <Text>Signin with Apple</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

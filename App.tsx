import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from './src/screens/Auth/SignUp/SignUp';
import VerifyEmail from './src/screens/Auth/VerifyEmail/VerifyEmail';
import SignUpSuccess from './src/screens/Auth/SignUpSuccess/SignUpSuccess';
import Home from './src/screens/Home/Home';
import SignIn from './src/screens/Auth/SignIn/SignIn';

type RootStackParamList = {
  SignUp: undefined;
  SignIn: undefined;
  VerifyEmail: undefined;
  SignUpSuccess: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VerifyEmail"
          component={VerifyEmail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUpSuccess"
          component={SignUpSuccess}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

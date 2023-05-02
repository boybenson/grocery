import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StoreFront from '../screens/StoreFront/StoreFront';
import Account from '../screens/Account/Account';

const Tab = createBottomTabNavigator();

export function BottomTabs() {
  return (
    <Tab.Navigator initialRouteName="StoreFront">
      <Tab.Screen
        name="StoreFront"
        component={StoreFront}
        options={{headerShown: false, tabBarLabel: 'Home'}}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
          tabBarLabel: 'Account',
        }}
      />
    </Tab.Navigator>
  );
}

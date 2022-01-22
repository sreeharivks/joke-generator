import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { TabOne, TabTwo } from '../MainScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Tab 1') {
            iconName = focused ? 'browsers' : 'browsers-outline';
          } else if (route.name === 'Tab 2') {
            iconName = focused ? 'browsers' : 'browsers-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'cornflowerblue',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="Tab 1"
        component={TabOne}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Tab 2"
        component={TabTwo}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
//

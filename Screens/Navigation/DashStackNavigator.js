import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabNavigator from './BottomTabNavigator';

const DashStack = createNativeStackNavigator();

const DashStackNavigator = () => {
  return (
    <DashStack.Navigator>
      <DashStack.Screen
        name="Tabs"
        onclick
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
    </DashStack.Navigator>
  );
};

export default DashStackNavigator;

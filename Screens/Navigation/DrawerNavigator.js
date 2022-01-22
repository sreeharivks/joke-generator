import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashStackNavigator from './DashStackNavigator';
import { Fontisto } from '@expo/vector-icons';

import { Jokes } from '../MainScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={DashStackNavigator}
        options={{
          drawerLabel: () => null,
          title: 'Menu',
          drawerIcon: () => null,
          drawerItemStyle: { height: 0 },
        }}
      ></Drawer.Screen>
      <Drawer.Screen
        name="Menu"
        component={Jokes}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Fontisto
              name="smiley"
              size={size}
              color={focused ? 'cornflowerblue' : 'grey'}
            />
          ),
          title: 'Show me a joke',
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

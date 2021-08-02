/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { useTheme } from 'styled-components';

import TabHomeScreen from '../screens/HomeScreen';
import TabWalletScreen from '../screens/WalletScreen';
import TabDebugScreen from '../screens/DebugScreen';


import { 
  BottomTabParamList, 
  TabHomeParamList, 
  TabWalletParamList, 
  TabDebugParamList
} from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const theme = useTheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: theme.colors.tint }}
    >
      <BottomTab.Screen
        name="Home"
        component={TabHomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Wallet"
        component={TabWalletNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="wallet-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Debug"
        component={TabDebugNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="settings-outline" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}


const TabHomeStack = createStackNavigator<TabHomeParamList>();

function TabHomeNavigator() {
  return (
    <TabHomeStack.Navigator>
      <TabHomeStack.Screen
        name="HomeScreen"
        component={TabHomeScreen}
        options={{ headerTitle: 'Home' }}
      />
    </TabHomeStack.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabWalletParamList>();

function TabWalletNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="WalletScreen"
        component={TabWalletScreen}
        options={{ headerTitle: 'Wallet' }}
      />
    </TabOneStack.Navigator>
  );
}


const TabDebugStack = createStackNavigator<TabDebugParamList>();

function TabDebugNavigator() {
  return (
    <TabDebugStack.Navigator>
      <TabDebugStack.Screen
        name="DebugScreen"
        component={TabDebugScreen}
        options={{ headerTitle: 'Debug' }}
      />
    </TabDebugStack.Navigator>
  );
}




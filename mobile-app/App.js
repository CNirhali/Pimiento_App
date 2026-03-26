import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Home, Users, CreditCard } from 'lucide-react-native';

import DashboardScreen from './components/DashboardScreen';
import FarmersScreen from './components/FarmersScreen';
import PaymentsScreen from './components/PaymentsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: '#059669',
            tabBarInactiveTintColor: '#9CA3AF',
            tabBarStyle: {
              borderTopWidth: 1,
              borderTopColor: '#E5E7EB',
              paddingBottom: 5,
              paddingTop: 5,
              height: 60,
            },
            headerStyle: {
              backgroundColor: '#FFFFFF',
              borderBottomWidth: 1,
              borderBottomColor: '#E5E7EB',
              elevation: 0, // for Android shadow
              shadowOpacity: 0, // for iOS shadow
            },
            headerTitleStyle: {
              fontWeight: '600',
              fontSize: 18,
              color: '#111827',
            },
          }}
        >
          <Tab.Screen 
            name="Dashboard" 
            component={DashboardScreen} 
            options={{
              tabBarIcon: ({ color, size }) => (
                <Home color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen 
            name="Farmers" 
            component={FarmersScreen} 
            options={{
              tabBarIcon: ({ color, size }) => (
                <Users color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen 
            name="Payments" 
            component={PaymentsScreen} 
            options={{
              tabBarIcon: ({ color, size }) => (
                <CreditCard color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

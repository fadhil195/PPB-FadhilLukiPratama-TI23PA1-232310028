import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MyFriendsScreen from '../screens/MyFriendsScreen';
import SignInScreen from '../screens/SignInScreen';
import { Image, View, Text, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const CustomTabIcon = ({ name, focused }) => {
  let iconName;
  let label;
  if (name === 'Home') {
    iconName = focused ? '🏠' : '🏡';
    label = 'Home';
  } else if (name === 'MyFriends') {
    iconName = focused ? '👥' : '👤';
    label = 'Friends';
  }

  return (
    <View style={styles.tabIconContainer}>
      <Text style={{ fontSize: 24, color: focused ? '#007bff' : '#888' }}>{iconName}</Text>
      <Text style={{ fontSize: 10, color: focused ? '#007bff' : '#888' }}>{label}</Text>
    </View>
  );
};

const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false, 
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0.5,
          borderTopColor: '#eee',
          height: 60, 
        },
        tabBarIcon: ({ focused }) => (
          <CustomTabIcon name={route.name} focused={focused} />
        ),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="MyFriends" component={MyFriendsScreen} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ headerShown: false }} 
      />
      <Stack.Screen
        name="HomeTab" 
        component={HomeTabs}
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  tabIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
});

export default AppNavigator;
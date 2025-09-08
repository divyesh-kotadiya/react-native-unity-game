import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import GamesScreen from '../screens/GamesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import UnityScreen from '../screens/UnityScreen';
import { Game } from '../types';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Tabs: undefined;
  Unity: { game: Game };
};

export type TabParamList = {
  Home: undefined;
  Games: undefined;
  Leaderboard: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

const getTabBarIcon = (routeName: keyof TabParamList) =>
  ({ color, size }: { color: string; size: number }) => {
    const iconName =
      routeName === 'Home'
        ? 'home'
        : routeName === 'Games'
        ? 'game-controller'
        : routeName === 'Leaderboard'
        ? 'trophy'
        : 'person';
    return <Icon name={iconName} color={color} size={size} />;
  };

function TabsNavigator(): React.ReactElement {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#0b0b0b',
          borderTopColor: 'rgba(255,255,255,0.1)',
        },
        tabBarActiveTintColor: '#6C5CE7',
        tabBarInactiveTintColor: 'rgba(255,255,255,0.7)',
        tabBarIcon: getTabBarIcon(route.name as keyof TabParamList),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Games" component={GamesScreen} />
      <Tab.Screen name="Leaderboard" component={LeaderboardScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
      initialRouteName="Tabs"
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Tabs" component={TabsNavigator} />
      <Stack.Screen name="Unity" component={UnityScreen} />
    </Stack.Navigator>
  );
}



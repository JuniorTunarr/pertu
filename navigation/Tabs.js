import React, {useEffect} from 'react';
import {useColorScheme} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BLACK_COLOR, DARK_GREY, LIGHT_GREY, YELLOW_COLOR} from '../colors';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/Home';
import Archieve from '../screens/Archieve';
import Shop from '../screens/Shop';
import Setting from '../screens/Setting';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === 'dark';
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: isDark ? BLACK_COLOR : 'white'}}
      screenOptions={{
        unmountOnBlur: true,
        tabBarStyle: {
          backgroundColor: isDark ? BLACK_COLOR : 'white',
        },
        tabBarActiveTintColor: isDark ? YELLOW_COLOR : BLACK_COLOR,
        tabBarInactiveTintColor: isDark ? DARK_GREY : LIGHT_GREY,
        headerStyle: {
          backgroundColor: isDark ? BLACK_COLOR : 'white',
        },
        headerTitleStyle: {
          color: isDark ? 'white' : BLACK_COLOR,
        },
        tabBarLabelStyle: {
          marginTop: -5,
          fontSize: 10,
          fontWeight: '600',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name={'ios-home-outline'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Archieve"
        component={Archieve}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="server-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon1 name="shopping-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="settings-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

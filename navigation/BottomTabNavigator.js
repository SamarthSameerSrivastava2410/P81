import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CreateStory from '../screens/CreateStory'
import Feed from '../screens/Feed'

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ()=>{
    return(
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Feed') {
              iconName = focused ? 'compass' : 'compass-outline';
            } else if (route.name === 'CreateStory') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'black'
        }}>
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="CreateStory"
          component={CreateStory}
          options={{ headerShown: false }}
        />
        </Tab.Navigator>)
}

export default BottomTabNavigator;

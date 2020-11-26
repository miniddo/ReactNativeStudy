import React from 'react';
import MyComponent from './components/MyComponent';
import FlatListComponet from './components/FlatListComponent';
import MyNavigationHome from './components/MyNavigationHome';
import MyNavigationSub from './components/MyNavigationSub';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MyNavigationHome} options={{headerTitle: 'HOME HEADER'}}/>
        <Stack.Screen name="Sub" component={MyNavigationSub} options={{headerTitle: 'SUB HEADER'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import Dashboard from './Dashboard/Dashboard';
import AddUser from './AddUser/AddUser';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Users" component={AddUser} />
        <Stack.Screen name="Form" component={Dashboard} />
        {/* <Stack.Screen name="Update" component={FormUpdate} />
        <Stack.Screen name="Detail" component={Detail} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

import React, {useContext, useState} from 'react';
import {NavigationContainer, useIsFocused} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import ChatsScreen from './src/screens/ChatsScreen';
import ChatScreen from './src/screens/ChatScreen';
import StatusScreen from './src/screens/StatusScreen';
import CallsScreen from './src/screens/CallsScreen';
import Header from './src/components/Header';
import LoginScreen from './src/screens/LoginScreen';
import AuthContextProvider, {AuthContext} from './src/features/Context';
import Footer from './src/components/Footer';

const Stack = createStackNavigator();
const TopBar = createMaterialTopTabNavigator();

const App = () => {
  const [screen, setScreen] = useState('ChatsList');
  const authCtxt = useContext(AuthContext);

  console.log(authCtxt.user);

  const StackNav = () => {
    return (
      <>
        <Stack.Navigator initialRouteName="Chats">
          <Stack.Screen
            name="ChatsList"
            component={ChatsScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Chat"
            component={ChatScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </>
    );
  };

  const TopbarNav = () => {
    return (
      <>
        <Header />
        <TopBar.Navigator
          screenOptions={{
            tabBarLabelStyle: {fontSize: 12, fontWeight: '500', color: '#fff'},
            tabBarStyle: {backgroundColor: '#286453'},
            tabBarIndicatorStyle: {
              backgroundColor: '#fff',
            },
          }}
          backBehavior="none"
          activeTintColor="#fff">
          <TopBar.Screen name="Chat" component={StackNav} />
          <TopBar.Screen name="Status" component={StatusScreen} />
          <TopBar.Screen name="Calls" component={CallsScreen} />
        </TopBar.Navigator>
      </>
    );
  };

  return (
    <AuthContextProvider>
      <NavigationContainer>
        {authCtxt.user ? <TopbarNav /> : <LoginScreen />}
      </NavigationContainer>
    </AuthContextProvider>
  );
};

export default App;

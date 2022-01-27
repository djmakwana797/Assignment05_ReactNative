import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Users from '../../screens/Users';
import Posts from '../../screens/Posts';
import Comments from '../../screens/Comments';
import AddComment from '../../screens/AddComment';
import store from '../../redux/store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator()
const Navigation = () => {
    return (
        <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerStyle : {backgroundColor: 'crimson'}, headerTitleStyle :{color: "#fff"}, headerTintColor :"#fff"}}>
                <Stack.Screen name="Users" component={Users} />
                <Stack.Screen name="Posts" component={Posts} />
                <Stack.Screen name="Comments" component={Comments} />
                <Stack.Screen name="Add Comment" component={AddComment} />
            </Stack.Navigator>
        </NavigationContainer>
        </Provider>
    );
};

export default Navigation;

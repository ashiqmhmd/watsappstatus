import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./Home";
import StatusView from "./StatusView";

const Stack = createNativeStackNavigator();

const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroungColor: 'transparent'
                    },
                    headerTransparent: true,
                    headerTitle: "",
                    headerLeftContainerStyle: {
                        paddingLeft: 20,
                    }
                }}
                initialRouteName="Home"
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Status" component={StatusView} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootStack;
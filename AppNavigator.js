import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/inicio/LoginScreen";
import RegisterScreen from "./screens/inicio/RegisterScreen";
import MyTabs from "./Navigation"; // Importamos el Tab Navigator

const Stack = createStackNavigator();

export default function AppNavigator() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {!isAuthenticated ? (
                    <>
                        <Stack.Screen name="Login">
                            {(props) => <LoginScreen {...props} setIsAuthenticated={setIsAuthenticated} />}
                        </Stack.Screen>
                        <Stack.Screen name="Register">
                            {(props) => <RegisterScreen {...props} setIsAuthenticated={setIsAuthenticated} />}
                        </Stack.Screen>
                    </>
                ) : (
                    <Stack.Screen name="Main" component={MyTabs} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

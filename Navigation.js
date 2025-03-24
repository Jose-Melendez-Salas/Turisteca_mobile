import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

// Screens
import HomeScreen from "./screens/home/HomeScreen";
import MapaScreen from "./screens/mapa/MapaScreen";
import CalculadoraScreen from "./screens/calculadora/CalculadoraScreen";
import UsuarioScreen from "./screens/ajustes/UsuarioScreen";
import LoginScreen from "./screens/inicio/LoginScreen";
import RegisterScreen from "./screens/inicio/RegisterScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "#4fc35b",
                tabBarStyle: {
                    height: 70,
                    paddingTop: 7,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: "Inicio",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" size={35} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Mapa"
                component={MapaScreen}
                options={{
                    tabBarLabel: "Mapa",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="google-maps" size={32} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Calculadora"
                component={CalculadoraScreen}
                options={{
                    tabBarLabel: "Calculadora",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="calculator" size={30} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Usuario"
                component={UsuarioScreen}
                options={{
                    tabBarLabel: "Usuario",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" size={32} color={color} />
                    ),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {!isAuthenticated ? (
                    <>
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="Register" component={RegisterScreen} />
                    </>
                ) : (
                    <Stack.Screen name="MainApp" component={MyTabs} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

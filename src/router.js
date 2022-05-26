import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text, TouchableOpacity } from 'react-native'

import Loading from './pages/Loading'
import Acess from './pages/Acess'
import Login from './pages/Login'
import RegisterP from './pages/RegisterP'
import RegisterC from './pages/RegisterC'
import Menu from './pages/Menu'
import Comercios from './pages/Comercios'
import Comercio from './pages/Comercio'
import ComercioEdit from './pages/ComercioEdit'
import ConfigsComercio from './pages/ConfigsComercio'
import ConfigsPerfil from './pages/ConfigsPerfil'

const Stack = createStackNavigator() 

export default function Routes() {
    return (
        <NavigationContainer>
            
            <Stack.Navigator>

                <Stack.Screen 
                name='Loading'
                component={Loading}
                options={{
                    title: 'Loading'
                }}
                />

                <Stack.Screen 
                name='Acess'
                component={Acess}
                options={{
                    title: 'Acesso'
                }}
                />

                <Stack.Screen 
                name='Login'
                component={Login}
                options={{
                    title: 'Login'
                }}
                />

                <Stack.Screen 
                name='RegisterP'
                component={RegisterP}
                options={{
                    title: 'Registro Pessoa Física'
                }}
                />

                <Stack.Screen 
                name='RegisterC'
                component={RegisterC}
                options={{
                    title: 'Registro Comércio'
                }}
                />

                <Stack.Screen 
                name="Menu"
                component={Menu}
                options={{
                    title: 'Menu'
                }}
                />

                <Stack.Screen 
                name='Configurações Perfil'
                component={ConfigsPerfil}
                options={{
                    title: 'Configurações Perfil'
                }}
                />

                <Stack.Screen 
                name='Configurações Comércio'
                component={ConfigsComercio}
                options={{
                    title: 'Configuração Comércio'
                }}
                />

                <Stack.Screen 
                name='Comercio Edit'
                component={ComercioEdit}
                options={{
                    title: 'Comercio Edit'
                }}
                />

                <Stack.Screen 
                name='Comercio'
                component={Comercio}
                options={{
                    title: 'Comercio'
                }}
                />

                <Stack.Screen 
                name='Comercios'
                component={Comercios}
                options={{
                    title: 'Comercios'
                }}  
                />

            </Stack.Navigator>

        </NavigationContainer>
    )
}

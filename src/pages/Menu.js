import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

import Button from '../components/Button'
import ButtonPrimary from '../components/ButtonPrimary';
import Card from '../components/Card';
import Submenu from '../components/Submenu';


export default function acess() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/background.jpg')} resizeMode="cover" style={styles.image} blurRadius={2}>
                
                <TextInput placeholder='Ex: Mercado' style={styles.input}/>

                <ScrollView vertical style={styles.scroll}>

                    <View style={styles.row}>
                        <Card text='Padaria' onPress={() => navigation.navigate('Comercios')}/>
                        <Card text='Farmácia' onPress={() => navigation.navigate('Comercios')}/>
                   </View>

                   <View style={styles.row}>
                        <Card text='Supermercado' onPress={() => navigation.navigate('Comercios')}/>
                        <Card text='Mecânica' onPress={() => navigation.navigate('Comercios')}/>
                   </View>

                   <View style={styles.row}>
                        <Card text='Adega' onPress={() => navigation.navigate('Comercios')}/>
                        <Card text='Papelaria' onPress={() => navigation.navigate('Comercios')}/>
                   </View>

                   <View style={styles.row}>
                        <Card text='Sorveteria' onPress={() => navigation.navigate('Comercios')}/>
                        <Card text='Shopping' onPress={() => navigation.navigate('Comercios')}/>
                   </View>

                   <View style={styles.row}>
                        <Card text='Cabeleireiro' onPress={() => navigation.navigate('Comercios')}/>
                        <Card text='Escola' onPress={() => navigation.navigate('Comercios')}/>
                   </View>
                
                </ScrollView>

            </ImageBackground>

            <Submenu />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    image: {
        flex: 1,
        alignItems: 'center'
    },
    input: {
        width: '90%',
        marginVertical: 30,
        borderRadius: 20,
        height: 40,
        paddingLeft: 15,
        color: 'white',
        backgroundColor: 'white',
        opacity: .7,
        color: 'black'
    },
    scroll: {
        width: '95%',
        marginBottom: 20
    },
    row: {
        flexDirection: 'row',
        width: '100%', 
        marginTop: 15,
        justifyContent: 'center'
    }
})
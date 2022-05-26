import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

import Button from '../components/Button'
import ButtonPrimary from '../components/ButtonPrimary';

export default function acess() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            
            <View style={styles.logo}></View>
            <Text style={styles.textLogo}>Cadastro</Text>
            <TextInput placeholder='Nome do Comércio' style={styles.input}/>
            <TextInput placeholder="CNPJ" style={styles.input}/>
            <TextInput placeholder='Email do proprietário' style={styles.input}/>
            <TextInput placeholder='Senha' style={styles.input}/>

            <Button texto="Cadastrar"/>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    logo: {
        width: 110,
        height: 110,
        backgroundColor: '#C4C4C4',
        borderRadius: 55,
        marginTop: 50
    },
    textLogo: {
        fontSize: 24,
        width: 280,
        textAlign: 'center',
        fontWeight: 'normal',
        marginVertical: 60,
        fontFamily: 'Montserrat'
    },
    btnSimples: {
        marginTop: 40,
        textDecorationLine: 'underline'
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        width: '70%',
        height: 50,
        borderRadius: 25,
        marginTop: 15,
        paddingLeft: 15
    }
})
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

import Button from '../components/Button'
import ButtonPrimary from '../components/ButtonPrimary';

export default function acess() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            
            <View style={styles.logo}></View>
            <Text style={styles.textLogo}>Como você deseja se cadastrar?</Text>
            <Button texto='Pessoa Física' onPress={() => navigation.navigate('RegisterP')}/>
            <Button texto='Comércio' onPress={() => navigation.navigate('RegisterC')}/>
            <TouchableOpacity>
                <Text style={styles.btnSimples} onPress={() => navigation.navigate('Login')}>Já tenho uma conta</Text>
            </TouchableOpacity>
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
        marginTop: 20
    },
    textLogo: {
        fontSize: 24,
        width: 280,
        textAlign: 'center',
        marginVertical: 60,
        fontFamily: 'Montserrat'
    },
    btnSimples: {
        marginTop: 80,
        textDecorationLine: 'underline',
        fontFamily: 'Montserrat'
    }
})
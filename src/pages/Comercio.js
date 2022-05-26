import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground } from 'react-native'
import { Rating } from 'react-native-elements';

export default class Comercio extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/padaria.jpg')} resizeMode="cover" style={styles.header}>
                    <View style={styles.nameView}>
                        <Text style={styles.name}>Padaria do seu zé</Text>
                    </View>
                </ImageBackground>
                <View style={{display: 'flex', alignContent: 'flex-end', width: '100%'}}>
                    <Rating
        
                    tintColor='white'
                    onFinishRating={this.ratingCompleted}
                    imageSize={20}
                    style={{ paddingVertical: 10, background: 'white'}}
                    />
                </View>

                <View style={styles.info}>
                    <Text style={styles.type}>Padaria</Text>
                    <Text style={styles.desc}>A segunda melhor padaria de Campinas e Região! Os melhores pães e o que mais vender.</Text>
                    <Text style={styles.endereco}>Rua Alferes João José, 16</Text>
                    <Text style={styles.hour}>Horário de Funcionamento</Text>
                    <Text style={{fontSize: 15, fontWeight: 'normal'}}>09:00 - 23:00</Text>
                    <Text style={styles.site}><a>www.ifood.com.br</a></Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    header: {
        width: '100%',
        height: 305,
        background: '../background.jpg'
    },
    info: {
        backgroundColor: 'white',
        paddingLeft: 20,
        paddingTop: 20
    },
    type: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    desc: {
        marginTop: 10,
        fontSize: 12,
        fontWeight: '600'
    },
    endereco: {
        marginTop: 10,
        fontSize: 14,
        color: 'black',
        fontWeight: 'normal'
    }, 
    hour: {
        marginTop: 15,
        color: '#B9BCC3',
        fontWeight: 'bold',
        fontSize: 16,
    },
    site: {
        marginTop: 10,
        paddingBottom: 20
    },
    nameView: {
        width: '100%',
        height: 60,
        backgroundColor: '#EDE8EE',
        opacity: 0.7,
        display: 'grid',
        alignContent: 'center',
        justifyContent: 'center'
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#4A4A4A'
    }

})
import React from 'react';
import { View, Image } from 'react-native';
import { Texto } from '../Texto';
import { styles } from './styles';

export function TraduzTexto(){
    return(
        <View style={styles.container}>
            <Image 
            style={styles.container}
            source={require('../../assets/hugo.png')}
            />
        </View>
    );
}
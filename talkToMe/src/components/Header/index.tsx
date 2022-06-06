import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { Idiomas } from '../Idiomas'
import { styles } from "./styles";

export function Header(){
    return (
        <View style ={styles.container}>
        
            <TouchableOpacity>
                <Idiomas 
                imageUri='https://static.todamateria.com.br/upload/ba/nd/bandeira-do-brasil-og.jpg'/>
                {/* require = {'../../assets/brazil.png'} /> */}
            </TouchableOpacity>
        </View>
    );
}
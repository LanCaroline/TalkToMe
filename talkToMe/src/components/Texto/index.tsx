import React, { useState } from "react";
import { View, TextInput } from 'react-native';
import { styles } from "./styles";
import { COLORS } from "../../theme";
import { Button } from "../Button";

export function Texto(){

    const[text, setText] = useState('');
    const[sendingText,setSendingText] = useState(false);

    return (
        <View style ={styles.container}>
            <TextInput 
            keyboardAppearance="dark"
            placeholder="Digite o texto"
            placeholderTextColor={COLORS.GRAY_QUATERNARY}
            multiline
            maxLength={240}
            onChangeText={setText}
            value={text}
            style ={styles.input}
            editable={!sendingText}
            />
        </View>
    );
}
import React from "react";
import { View, Text } from "react-native";
import { Header } from '../../components/Header';
import { styles } from "./styles";
import { Texto } from "../../components/Texto";
import { TraduzTexto } from "../../components/TraduzTexto";
import { Button } from "../../components/Button";
import { COLORS } from "../../theme";

export function Home(){
    return(
        <View style={styles.container}>
            <Header/>
            <TraduzTexto/>
            <Texto/>
            <Button
            title="TRADUZIR"
            color={COLORS.BLACK}
            backgroundColor={COLORS.BLUE_SECONDARY}/>
        </View>
    );
}
import React, { ReactComponentElement } from "react";
import { TouchableOpacityBase, TouchableOpacity, TouchableOpacityProps, Text, ColorValue } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
    color: ColorValue;
    backgroundColor: ColorValue;
   // icon?: React.ComponentProps<typeof AntDesign>['name'];
}

{/*export function Button({title, color, backgroundColor, icon, ...rest}:Props){*/}

export function Button({title, color, backgroundColor, ...rest}:Props){

    return(
        <TouchableOpacity style={[styles.button, {backgroundColor}]}{...rest}>
            <Text style={[styles.title, { color }]}>
                {title}
            </Text>
            {/*<AntDesign name={icon} size={24} style={styles.icon}/>*/}
        </TouchableOpacity>
    );
}    
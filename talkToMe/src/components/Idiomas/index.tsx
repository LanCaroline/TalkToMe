import React from 'react';
import { Image } from 'react-native';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import idiomaImg from '../../assets/brazil.png'
import { COLORS } from '../../theme';

const SIZES = {
    SMALL:{
        containerSize: 32,
        idiomaSize: 28
    },
    NORMAL:{
        containerSize: 48,
        idiomaSize: 42
    },
}

type Props = {
    imageUri: string | undefined;
    sizes?: 'SMALL' | 'NORMAL';
}

const IDIOMA_DEFAULT = Image.resolveAssetSource(idiomaImg).uri;

export function Idiomas({imageUri, sizes = 'NORMAL'}: Props){
    const { containerSize, idiomaSize} = SIZES[sizes];
    return(
        <LinearGradient 
        colors={[COLORS.BLUE, COLORS.GRAY_SECONDARY]}
        >
        <Image 
        source={{ uri: imageUri || IDIOMA_DEFAULT}}
        style={[styles.bandeira,
            {
                width: idiomaSize,
                height: idiomaSize
            }
        ]} 
        />
        </LinearGradient>
       
    );
}
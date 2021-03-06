import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({

    container:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        color: COLORS.BLUE_PRIMARY
    },

    logoutText: {
        fontSize: 15,
        fontFamily:FONTS.REGULAR,
        color: COLORS.BLACK
    }
});
import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS, FONTS } from "../../theme";

export const styles = StyleSheet.create({

    container:{
        width: '100%',
        height: 100,
        marginBottom: 36,
        backgroundColor: COLORS.GRAY_PRIMARY,
        paddingBottom: getBottomSpace() + 16,
        paddingTop: 16,
        paddingHorizontal: 24,
        borderRadius:35,
        flexDirection: "row",
        alignItems: "center"
    },
    input:{
        width: '100%',
        height: 88,
        textAlignVertical: 'top',
       color: COLORS.BLACK,
    }
});
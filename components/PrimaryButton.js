import {View, Text, StyleSheet, Pressable} from 'react-native';
import Colors from './../constants/colors'

function PrimaryButton({children, onPress}){
    return(
        <View style={styles.buttonOuterContainer}> 
            <Pressable onPress={onPress} style={({pressed})=> pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer} android_ripple={{color: Colors.primary600}}>
                <Text style={styles.buttonText}>
                    {children}
                </Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonInnerContainer:{
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText:{
        color: 'white',
        textAlign: 'center'
    },
    buttonOuterContainer:{
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    pressed:{
        opacity: 0.75,

    }
});



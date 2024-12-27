import {TextInput, View, StyleSheet, Alert} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import {useState} from 'react';
import Colors from "./../constants/colors"


function StartGameScreen({onPickNumber}) {
    const [enteredText, setEnteredText] = useState('');
    function handleChangeText(newText){
        setEnteredText(newText)
    }

    function resetInputHandler(){
        setEnteredText('')
    }

    function handleConfirm(){
        const intNumber = parseInt(enteredText)
        if(isNaN(intNumber) || intNumber < 0 || intNumber > 99){
            Alert.alert("Invalid Number!", "The number should be between 1 and 99",
                [{text:"Okay", style:'Destructive', onPress: resetInputHandler}]
            )
        }
        onPickNumber(intNumber);
    }

    return(
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput}
                        maxLength={2} 
                        keyboardType="number-pad"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={handleChangeText}
                        value={enteredText}/>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    );
}

export default StartGameScreen;


const styles = StyleSheet.create(
    {
        inputContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            padding: 16,
            marginTop: 100,
            marginHorizontal: 24,
            backgroundColor: Colors.primary800,
            elevation: 4,
            borderRadius: 8,
            shadowColor: 'black',
            shadowOffset: {width: 0, height: 4},
            shadowOpacity: 0.24,
            shadowRadius: 6
        },
        numberInput:{
            height: 50,
            width: 50,
            textAlign: 'center',
            fontSize: 32,
            borderBottomColor: Colors.accent500,
            borderBottomWidth: 2,
            color: Colors.accent500,
            marginVertical: 8,
            fontWeight: 'bold'
        },
        buttonsContainer:{
            flexDirection: 'row'
        },
        buttonContainer:{
            flex: 1
        }
    }
);
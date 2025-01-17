import { ImageBackground, StyleSheet} from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import {LinearGradient} from 'expo-linear-gradient';
import {useState} from 'react';
import GameScreen from "./screens/GameScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "./constants/colors"

export default function App() {
    const [userNumber, setUserNumber] = useState();
    function pickedNumberHandler(pickedNumber){
        setUserNumber(pickedNumber)
    }
    let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>
    if (userNumber){
        screen = <GameScreen/>
    }
    return(
        <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
            <ImageBackground source={require("./assets/images/dices.jpg")} 
                resizeMode="cover" 
                style={styles.rootScreen}
                imageStyle={styles.backgroundImage}>
                <SafeAreaView style={styles.rootScreen}>
                        {screen}
                </SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}


const styles = StyleSheet.create({
    rootScreen:{
        flex: 1,
    },
    backgroundImage:{
        opacity: 0.15
    }
}); 
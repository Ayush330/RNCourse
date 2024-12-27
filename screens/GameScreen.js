import { StyleSheet, View, Text } from "react-native"
import Title from "../components/Title";


function generateRandomBetween(min, max, exclude){
    const rndNum = Math.floor(Math.random() * (max-min)) + min
    return (rndNum !== exclude) ? rndNum : generateRandomBetween(min, max, exclude)
}

function GameScreen() {
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <Text>Higher or lower?</Text>
        </View>
    )
}

export default GameScreen;


const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 24,
        //backgroundColor: 'red'
    },
});
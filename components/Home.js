import { StyleSheet, Text, View, Button } from 'react-native'

export default function Home({navigation}){

    function handleClick(){
        navigation.navigate('About')
    }

    return (
        <View style={styles.homeView}>
            <Text style={styles.textStyle}>This is the home page......</Text>
            <Button title="Go To About" color="orange" onPress={handleClick}/>
        </View>
    )
}

const styles = StyleSheet.create({
    homeView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'dodgerblue',
        
    },
    textStyle:{
        textAlign:'center',
        color: 'white',
        fontSize: 18,
        marginBottom: 20,
    },
});
import { StyleSheet, Text, TextInput, Button, View, SafeAreaView, Pressable, ScrollView } from 'react-native';
import {useRef, useState} from 'react';

export default function App() {
    const [goalList, updateGoalList] = useState([]);
    const [text, updateText] = useState("");
    const textInputRef = useRef(null);
    const handleChangeText = (Text)=>{
        updateText(Text)
    };
    const handlePress = () => {
        if (text.trim() === ""){
            return;
        }
        updateGoalList(prevGoalList => [...prevGoalList, text]);
        updateText("");
        textInputRef.current.clear();  
    };

    const handleRemove = (index)=>{
        updateGoalList(prevGoalList => {
            return prevGoalList.filter((item, indexIn) => {
                if (index === indexIn){
                    return false
                }
                return true
            })
        })
    };

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.appContainer}>
                <View style={styles.txtInputParentContainer}>
                    <TextInput style={styles.txtInputContainer} placeholder='Your course goal!' onChangeText={handleChangeText} ref={textInputRef}/>
                    <View>
                        <Button title="Add Goal" onPress={handlePress}/>
                    </View>
                </View>
                <ScrollView contentContainerStyle={styles.listParentContainer}>
                    <Text style={{marginBottom: 10}}>List of goals.......</Text>
                    {goalList.map((item, index) => {
                        return (
                        <Pressable key={index} style={styles.pressable} onPress={()=>handleRemove(index)}>
                            <View style={styles.elements}>
                                <Text style={styles.listChild}>{item}</Text>
                            </View>
                        </Pressable>)
                    })}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    appContainer:{
        marginTop: 40,
        marginLeft: 10,
        marginRight: 10
    },
    txtInputParentContainer:{
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    txtInputContainer:{
        width: '70%',
        paddingLeft: 10,
        paddingRight: 5,
        paddingTop: 1,
        paddingBottom: 1,
        borderColor: 'black',
        borderRadius: 10,
        backgroundColor: 'dodgerblue'
    },
    listParentContainer:{
        marginTop: 10,
        marginLeft: 10,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',

    },
    elements:{
        padding: 5,
        borderRadius: 5,
        backgroundColor: 'dodgerblue',
        color: 'white',
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10
    },
    listChild:{
        color: 'white',
        width: 'auto'
    }
});

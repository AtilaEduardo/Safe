import{View, Text, StyleSheet, FlatList} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState, useEffect } from 'react'
import {useIsFocused} from '@react-navigation/native'
import useStorage from '../../hooks/useStorage'
import{PasswordItem} from '../../Components/passwordItens/passworditem'

export function Password(){
    const[listPasswords, setlistPasswords] = useState([])
    const focused = useIsFocused();
    const{getItem, removeItem}=useStorage();
    useEffect(()=>{
            async function loadPasswords(){
                const passwords = await getItem ("@pass")
                setlistPasswords(passwords);
            }loadPasswords();
    },[focused])

   async function handleDeletePassword(item){
        const passwords = await removeItem("@pass",item)
        setlistPasswords(passwords)
    }

    return(
        <SafeAreaView style = {{flex:1,}}>
        <View style={styles.header}>
            <Text style={styles.title}>Minhas senhas</Text>
        </View>
        <View style = {styles.content}>
            <FlatList 
            style={{flex:1, paddingTop:14,}}
            data={listPasswords}
            keyExtractor={(item) => String(item)}
            renderItem={ ({item})=><PasswordItem data={item} removePassword={()=>handleDeletePassword(item)}/>}
            />

        </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    header:{
        backgroundColor:"#FFCBDB",
        paddingTop:30,
        paddingBottom:14,
        peddingLeft:14,
        paddingRight:14,
    },
    title:{
        fontSize:30,
        color:"#000000",
        fontWeight:'bold'
    },
    content:{
        flex:1,
        peddingLeft:14,
        paddingRight:14,
    }


})
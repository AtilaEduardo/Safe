import React from "react";
import { View, Text,StyleSheet,Pressable } from "react-native";

export function PasswordItem ({data, removePassword}){
    return(
        <Pressable onLongPress={removePassword} style = {styles.container}>
            <Text style = {styles.text}>{data}</Text>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#40e0d0",
        padding:14,
        width:"100%",
        marginBottom:14,
        borderRadius:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    text:{
        color:"#000000",
        fontWeight:'bold'
    }
})
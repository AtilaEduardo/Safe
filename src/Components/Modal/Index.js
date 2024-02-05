import { View,Text,StyleSheet,TouchableOpacity,Pressable } from "react-native";
import * as Clipboard from 'expo-clipboard'
import useStorage from '../../hooks/useStorage'



export function ModalSenha({password, handleClose}){
   const{saveItem}=useStorage();
  
   async function handleCopyPassword(){
    await Clipboard.setStringAsync(password)
    await saveItem("@pass", password)
    alert("Senha salva com Sucesso!")
    
    handleClose();
   }
    return(
        <View style ={styles.container}>
            <View style = {styles.content}>
                <Text style = {styles.title}>Senha Gerada</Text>
                <Pressable style ={styles.innerPassword} onLongPress={handleCopyPassword}>
                    <Text style ={styles.text}>
                        {password}
                    </Text>
                </Pressable>
                <View style = {styles.buttonArea}>
                <TouchableOpacity style={styles.button} onPress={handleClose}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={handleCopyPassword}>
                    <Text style={styles.buttonSaveText}>Salvar Senha</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles =  StyleSheet.create({

    container:{
        backgroundColor: "rgba{24, 24, 24, 0.6}",
        flex: 1,
        alignItems: "center",
        justifyContent:"center",
       
    },
    content:{
        backgroundColor:"#40e0d0",
        width:"85%",
        paddingTop:24,
        paddingBottom:24,
        alignItems:"center",
        borderRadius:8,
    },
    title:{
        fontSize:30,
        fontWeight:"bold",
        color:"#000",
        marginBottom:24,
    },
    innerPassword:{
        backgroundColor:"#FF007F",
        width:'90%',
        padding:14,
        borderRadius:8,

    },
    text:{
        fontWeight:"bold",
        fontSize:25,
        color:"#FFF",
        textAlign:"center"
    },
    buttonArea:{
        flexDirection:"row",
        marginTop:8,
        width:'90%',
        alignItems:"center",
        justifyContent:"space-between"
    },
    button:{
        flex:1,
        alignItems:"center",
        marginTop:14,
        marginBottom:14,
        padding:14,
    },
    buttonSave:{
        backgroundColor:"#FFB6C1",
        borderRadius:8,
    },
    buttonSaveText:{
        color:"#000000",
        fontWeight:"bold",
    },

})


import {Image, View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import Slider from'@react-native-community/slider'
import { useState } from 'react';
import{ModalSenha}from'../../../src/Components/Modal/Index'
let conjunto_caracteres = "$%&*#@abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%¨&)(-+"
export function Home() {
  const[size, setSize] = useState(10)
  const [senhaValue,setsenhaValue] = useState("")
  const[modalVisivel, setModalVisivel] = useState(false);
  function gerarSenha(){
    let senha = "";
    for(let i=0, n=conjunto_caracteres.length;i<size;i++){
      senha+=conjunto_caracteres.charAt(Math.floor(Math.random()*n))
    }
    console.log(senha);
    setsenhaValue(senha)
    setModalVisivel(true);
  }
  return (
    <View style = {styles.container}>
      <Image 
      source={require('../../../src/imagens/cadeado-rosa.png')}
      />
      <Text style = {styles.title}>{size} Caracteres</Text>
      <View style = {styles.area}>
        <Slider
        style = {{height:50}}
        minimumValue={8}
        maximumValue={20}
        value={size}
        onValueChange={(value)=>setSize(value.toFixed(0))}
        
        />
      </View>
      <TouchableOpacity style={styles.button}onPress = {gerarSenha}> 
      <Text style = {styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>
      <Modal visible = {modalVisivel}animationType="fade"transparent={true}>
        <ModalSenha password = {senhaValue} handleClose = {()=> setModalVisivel(false)}/> 
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    marginBottom:60
  },
  area:{
      marginTop:14,
      marginBottom:14,
      width:"80%",
      backgroundColor:"#ffcbdb",
      borderRadius:8,
      padding:10,
  },
  button:{
    backgroundColor: "#40e0d0",
    width:"80%",
    height:50,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:8,
  },
  buttonText:{
    color:"#fff",
    fontSize:25,
    fontWeight:'bold'
  },
  title:{
    fontSize: 30,
    fontWeight:'bold'
  }
});


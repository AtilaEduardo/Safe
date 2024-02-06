import React, { useState } from 'react';
import { Image, View, Text, TouchableOpacity, Modal, StyleSheet, Switch } from 'react-native';
import Slider from '@react-native-community/slider';
import { ModalSenha } from '../../Components/Modal/Index';

let caracteres_min = "abcdefghijklmnopqrstuvwxyz";
let caracteres_mai = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let caracteres_numeros = "0123456789";
let caracteres_simbolos = "$%&*#@";


export function Home() {
  const [size, setSize] = useState(10);
  const [senhaValue, setsenhaValue] = useState("");
  const [modalVisivel, setModalVisivel] = useState(false);
  const [incluiNumeros, setIncluiNumeros] = useState(false);
  const [incluiSimbolos, setIncluiSimbolos] = useState(false);
  const [incluiMaiusculas, setIncluiMaiusculas] = useState(false);

  function gerarSenha() {
    let caracteres = incluiMaiusculas ? caracteres_mai : caracteres_min;
    if (incluiNumeros) caracteres += caracteres_numeros;
    if (incluiSimbolos) caracteres += caracteres_simbolos;

    let senha = "";
    for (let i = 0, n = caracteres.length; i < size; i++) {
      senha += caracteres.charAt(Math.floor(Math.random() * n));
    }
    console.log(senha);
    setsenhaValue(senha);
    setModalVisivel(true);
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../src/imagens/cadeado-rosa.png')}
      />
      <Text style={styles.title}>{size} Caracteres</Text>
      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={8}
          maximumValue={20}
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0))}
        />
      </View>
      <View style={styles.opcoes}>
        <Text>Incluir Números  </Text>
        <Switch value={incluiNumeros} onValueChange={() => setIncluiNumeros(!incluiNumeros)} />
      </View>
      <View style={styles.opcoes}>
        <Text>Incluir Símbolos  </Text>
        <Switch value={incluiSimbolos} onValueChange={() => setIncluiSimbolos(!incluiSimbolos)} />
      </View>
      <View style={styles.opcoes}>
        <Text>Incluir letras Maiúsculas  </Text>
        <Switch value={incluiMaiusculas} onValueChange={() => setIncluiMaiusculas(!incluiMaiusculas)} />
      </View>
      <TouchableOpacity style={styles.button} onPress={gerarSenha}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>
      <Modal visible={modalVisivel} animationType="fade" transparent={true}>
        <ModalSenha password={senhaValue} handleClose={() => setModalVisivel(false)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 60,
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#ffcbdb",
    borderRadius: 8,
    padding: 10,
  },
  opcoes: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
    marginBottom: -10,
    width: "80%",
   
    
    
    
  },
  button: {
    backgroundColor: "#40e0d0",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
import React, { useState } from 'react';
import { Image, View, Text, TouchableOpacity, Modal, StyleSheet, Switch } from 'react-native';
import Slider from '@react-native-community/slider';
import { ModalSenha } from '../../Components/Modal/Index';

interface State {
  size: number;
  senhaValue: string;
  modalVisivel: boolean;
  incluiNumeros: boolean;
  incluiSimbolos: boolean;
  incluiMaiusculas: boolean;
}

let caracteres_min = "abcdefghijklmnopqrstuvwxyz";
let caracteres_mai = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let caracteres_numeros = "0123456789";
let caracteres_simbolos = "$%&*#@";

export function Home() {
  const [state, setState] = useState<State>({
    size: 10,
    senhaValue: "",
    modalVisivel: false,
    incluiNumeros: false,
    incluiSimbolos: false,
    incluiMaiusculas: false
  });

  function gerarSenha() {
    const { size, incluiMaiusculas, incluiNumeros, incluiSimbolos } = state;
    let caracteres = incluiMaiusculas ? caracteres_mai : caracteres_min;
    if (incluiNumeros) caracteres += caracteres_numeros;
    if (incluiSimbolos) caracteres += caracteres_simbolos;

    let senha = "";
    for (let i = 0, n = caracteres.length; i < size; i++) {
      senha += caracteres.charAt(Math.floor(Math.random() * n));
    }
    setState(prevState => ({ ...prevState, senhaValue: senha, modalVisivel: true }));
  }

  function handleSwitchChange(switchName: keyof State) {
    setState(prevState => ({ ...prevState, [switchName]: !prevState[switchName] }));
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/cadeado-rosa.png')}
      />
      <Text style={styles.title}>{state.size.toFixed(0)} Caracteres</Text>
      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={8}
          maximumValue={20}
          value={state.size}
          onValueChange={(value) => setState(prevState => ({ ...prevState, size: value }))}
        />
      </View>
      <View style={styles.opcoes}>
        <Text>Incluir Números  </Text>
        <Switch value={state.incluiNumeros} onValueChange={() => handleSwitchChange('incluiNumeros')} />
      </View>
      <View style={styles.opcoes}>
        <Text>Incluir Símbolos  </Text>
        <Switch value={state.incluiSimbolos} onValueChange={() => handleSwitchChange('incluiSimbolos')} />
      </View>
      <View style={styles.opcoes}>
        <Text>Incluir letras Maiúsculas  </Text>
        <Switch value={state.incluiMaiusculas} onValueChange={() => handleSwitchChange('incluiMaiusculas')} />
      </View>
      <TouchableOpacity style={styles.button} onPress={gerarSenha}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>
      <Modal visible={state.modalVisivel} animationType="fade" transparent={true}>
        <ModalSenha password={state.senhaValue} handleClose={() => setState(prevState => ({ ...prevState, modalVisivel: false }))} />
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
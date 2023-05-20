import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import ResultImc from "./Resultlmc";

export default function Form() {
  const [altura, setAltura] = useState(null);
  const [peso, setPeso] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o peso e a altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("CALCULAR");

  function imcCalculator() {
    return setImc((peso / (altura * altura)).toFixed(2));
  }

  function validarImc() {
    if (peso != null && altura != null) {
      imcCalculator();
      setAltura(null);
      setPeso(null);
      setMessageImc("Seu IMC é igual:");
      setTextButton("Calcular novamente");
      return;
    }
    setImc(null);
    setTextButton("Calcular");
    setMessageImc("Preencha o peso e a altura");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Altura</Text>
      <TextInput
        style={styles.input}
        onChangeText={setAltura}
        value={altura}
        placeholder="Ex: 1.75"
        keyboardType="numeric"
      />
      <Text style={styles.label}>Peso</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPeso}
        value={peso}
        placeholder="Ex: 70.750"
        keyboardType="numeric"
      />
      <Button onPress={() => validarImc()} title={textButton} color="#6a5acd" />
      <View style={styles.resultContainer}>
        <ResultImc messageResultImc={messageImc} resultImc={imc} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  input: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  resultContainer: {
    marginTop: 40,
    alignItems: "center",
  },
});


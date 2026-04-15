import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { BuscaIcon } from "../../../../assets/components/BuscaIcon";
import { glossario } from "../../../lib/glossarioBanco";

export default function Explorer() {
  // const categorias = ["Todos",
  //   "HTML",
  //   "CSS",
  //   "JavaScript",
  //   "NodeJS",
  //   "ReactJS",
  //   "API",
  //   "CRUD",
  //   "VsCode",
  //   "GitHub",
  //   "Git",
  //   "Terminal",
  //   "NPM",
  //   "Vite",
  //   "Objeto",
  //   "Array",
  //   "Loop for",
  //   "Arrow Function",
  //   "Figma",
  //   "IDE",
  //   "TypeScript",
  //   "Framework",
  //   "Biblioteca",
  //   "Front-end",
  //   "Back-end",
  //   "Banco de Dados",
  //   "Deploy"]

  const [busca, setBusca] = useState('');

  const moviesFiltered = glossario
    .filter((glossario) => glossario.titulo.toLowerCase().includes(busca.toLowerCase()))


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Encontrar significados...</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="API..."
          placeholderTextColor={"#f3f0f0d7"}
          value={busca}
          onChangeText={setBusca}
        />
        <BuscaIcon style={{ position: "absolute", left: 24 }} name="search" size={24} color="white" />
      </View>


      <ScrollView
      contentContainerStyle={{ alignItems: "center" }}
      >

        {moviesFiltered.map((filme, index) => (
          <TouchableOpacity
            key={filme.id + index}
            style={{ ...styles.card }}
            onPress={() => router.push("/glossariosRota/" + filme.id)}
          >

            <View style={{ flexDirection: "row", gap: 25 }}>
              <Text style={styles.textCard}>{filme.titulo}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    gap: 15,
    paddingTop: 15,
    paddingBottom: 10,
  },
  
  titulo: {
    fontSize: 24,
    fontWeight: "medium",
    color: "#49328B",
    marginHorizontal: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16
  },
  input: {
    flex: 1,
    backgroundColor: "#9a88a7",
    height: 44,
    borderRadius: 12,
    paddingHorizontal: 40,
    color: "#fff"
  },
  text: {
    color: "#fff",
    fontSize: 16
  },
  card: {
    width: 370,
    gap: 8,
    paddingBottom: 15,
    backgroundColor: "#decae1", 
    borderColor: "#7d2b88",
    borderRadius: 12,           
    padding: 12,              
    marginBottom: 8,
    borderWidth: 2       
  },
  textCard: {
    color: "#7d2b88",
    width: "80%",
  },
  anoLancamento: {
    color: "gray",
    fontWeight: "600",
  },
  image: {
    width: 370,
    height: 150,
    borderRadius: 16
  }
});
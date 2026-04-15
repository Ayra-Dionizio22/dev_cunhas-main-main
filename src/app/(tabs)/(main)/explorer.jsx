import { router } from 'expo-router';
import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { BuscaIcon } from '../../../../assets/components/BuscaIcon';
import { filmes } from "../../../lib/filmes";

export default function Explorer() {
  const categorias = ["Todos", "Iniciante", "Intermediário", "Avançado", "Design", "Programação"]


  const [movies, setMovies] = useState(filmes)

  const [busca, setBusca] = useState('');
  const [categoria, setCategoria] = useState('Todos');

  const leituras = filmes
    .filter((filme) => filme.tipo === "leitura");

  const moviesFiltered = leituras
    .filter((filme) => filme.titulo.toLowerCase().includes(busca.toLowerCase()))
    .filter((filme) => categoria === "Todos" || filme.genero.some((g) => g.texto === categoria))


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Leituras...</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="HTML"
          placeholderTextColor={"#f3f0f0d7"}
          value={busca}
          onChangeText={setBusca}
        />

        <BuscaIcon style={{ position: "absolute", left: 24 }} name="search" size={24} color="white" />
      </View>

      <ScrollView
        style={{ marginLeft: 16, marginRight: 16 }}
        contentContainerStyle={{ gap: 8 }}
        horizontal
      >



        {categorias.map((valor, index) => (
          <TouchableOpacity
            key={valor + index}
            onPress={() => setCategoria(valor)}
            style={{ height: 26 }}

          >
            <Text
              style={{
                color: categoria === valor ? "#006BB3" : "#49328B"
              }}
            >
              {valor}
            </Text>
            {categoria === valor &&
              <View
                style={{
                  backgroundColor: "#006BB3",
                  height: 4,
                  borderRadius: 2,
                  width: "50%"
                }}
              ></View>
            }
          </TouchableOpacity>
        ))}
      </ScrollView>




      <ScrollView
        contentContainerStyle={{
          flexWrap: "wrap",
          flexDirection: "row",
          paddingHorizontal: 16,
          rowGap: 32,
        }}


      >

        {moviesFiltered.map((filme, index) => (
          <TouchableOpacity
            key={filme.id + index}
            style={{ ...styles.card }}
            onPress={() => router.push("/leituras/" + filme.id)}
          >
            <Image
              source={{ uri: filme.capa }}
              style={styles.image}
            />
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.textCard}>{filme.titulo.slice(0, 50)}...</Text>
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
    backgroundColor: "#FFF",
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
    color: "white"
  },
  text: {
    color: "#fff",
    fontSize: 16
  },
  card: {
    alignItems: "center",
    width: "50%",
    gap: 5,
  },
  textCard: {
    color: "#49328B",
    width: "70%"
  },
  anoLancamento: {
    color: "gray",
    fontWeight: "600",
  },
  image: {
    width: 170,
    height: 180,
    borderRadius: 16,
  }
});
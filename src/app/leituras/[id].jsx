

// > (tabs) > filme > [id].jsx //

import { router, useLocalSearchParams } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { filmes } from '../../lib/filmes';



export default function Filmes() {
    const { id } = useLocalSearchParams();
    const filme = filmes.find(filme => filme.id === Number(id));
    const leitura = filmes.filter((filme) => filme.tipo === "leitura");



    return (
        <ScrollView style={{ backgroundColor: "#ffF" }}>

            <View style={styles.content}>
                <Text style={styles.h1}>{filme.titulo}</Text>

                <Image
                    source={{ uri: filme.capa }}
                    style={styles.imagemCapa}
                />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                    <View style={styles.coluna}>
                        <View style={styles.linha}>
                            {filme.genero.map((genero) => (
                                <Text key={genero.id + genero.texto} style={styles.badge}>
                                    {genero.texto}
                                </Text>
                            ))}
                        </View>
                    </View>
                </View>


                <View style={styles.cardSinopse}>
                    <Text style={styles.h2}>Sinopse</Text>
                    <Text style={styles.texto}>{filme.sinopse}</Text>
                </View>


                <View style={styles.coluna}>
                    <Text style={styles.h2}>Créditos</Text>
                    <Text style={styles.texto}>{filme.creditos}</Text>
                </View>

                <View>
                    <TouchableOpacity
                        onPress={() => router.push(filme.link)}
                        key={filme.link}
                        style={styles.botao}
                    >

                        <Text style={styles.textoBotao}>Acesse aqui!!</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.coluna}>
                    <Text style={styles.h2}>Materiais relacionados</Text>

                    <ScrollView horizontal>
                        {filmes
                            .filter(v => v.id !== filme.id)
                            .map((filme, index) => (
                                <View key={filme.titulo + index} style={{ width: 164 }}>
                                    <Image
                                        source={{ uri: filme.capa }}
                                        style={styles.imagemRelacionados}
                                    />
                                    <View style={styles.linha}>
                                        <Text style={styles.filme_titulo}>{filme.titulo}</Text>

                                    </View>

                                </View>
                            ))
                        }
                    </ScrollView>
                </View>



            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    content: { padding: 20, gap: 10 },

    h1: { color: "#000", fontSize: 24, fontWeight: "500" },

    h2: { color: "#000", fontSize: 18, fontWeight: "500", marginBottom: 5 },

    texto: { color: "#000", fontSize: 15 },

    linha: { flexDirection: "row", gap: 4, alignItems: "center" },

    capa: {
        width: "100%",
        height: 310,
    },
    badge: {
        backgroundColor: "#006BB3",
        color: "white",
        paddingHorizontal: 15,
        paddingVertical: 4,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#ffffff3c",
        fontSize: 14
    },

    cardSinopse: {
        backgroundColor: "#006bb321",
        marginTop: 12,
        padding: 16,
        borderRadius: 18,
    },

    botao: {
        backgroundColor: "#006BB3",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "#ffffff3c",
        alignSelf: "center",
        marginTop: 10
    },

    textoBotao: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "500",
    },

    coluna: {
        gap: 5,
        marginTop: 10
    },

    imagemCapa: {
        width: 250,
        height: 220,
        borderRadius: 16,
        marginVertical: 4,
        alignSelf: "center",
    },

    imagemRelacionados: {
        width: 150,
        height: 114,
        borderRadius: 16,
        marginVertical: 4,
    },

    filme_titulo: { color: "#000", fontSize: 12, width: "70%" },

});


// > (tabs) > filme > [id].jsx //

import { useLocalSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import { Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { filmes } from '../../lib/filmes';



export default function Filmes() {
    const { id } = useLocalSearchParams();
    const filme = filmes.find(filme => filme.id === Number(id));

    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);



    return (
        <ScrollView style={{ backgroundColor: "#fff" }}>

            <YoutubePlayer
                height={300}
                play={playing}
                videoId={filme.videoId}
                onChangeState={onStateChange}
            />




            <View style={styles.content}>
                <Text style={styles.h1}>{filme.titulo}</Text>



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
                    <Text style={styles.h2}>Sobre</Text>
                    <Text style={styles.texto}>{filme.sinopse}</Text>
                </View>


                <View style={styles.coluna}>
                    <Text style={styles.h2}>Créditos</Text>
                    <Text style={styles.texto}>{filme.creditos}</Text>
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
                                        style={styles.imagem}
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

    h1: { color: "#000", fontSize: 24, marginTop: -70, fontWeight: "500" },

    h2: { color: "#000", fontSize: 18, fontWeight: "500", marginBottom: 5 },

    texto: { color: "#000", fontSize: 15 },

    linha: { flexDirection: "row", gap: 4, alignItems: "center" },

    capa: {
        width: "100%",
        height: 310,
    },
    badge: {
        backgroundColor: "#49328B",
        color: "white",
        paddingHorizontal: 15,
        paddingVertical: 4,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#ffffff3c",
        fontSize: 14
    },

    cardSinopse: {
        backgroundColor: "#4a328b21",
        marginTop: 12,
        padding: 16,
        borderRadius: 18,
    },

    coluna: {
        gap: 5,
        marginTop: 10
    },

    imagem: {
        width: 150,
        height: 114,
        borderRadius: 16,
        marginVertical: 4,
    },

    filme_titulo: { color: "#000", fontSize: 12, width: "70%" },

});
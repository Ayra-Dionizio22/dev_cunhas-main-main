import { useLocalSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import { Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { glossario } from "../../lib/glossarioBanco";



export default function Filmes() {
    const { id } = useLocalSearchParams();
    const filme = glossario.find(glossario => glossario.id === Number(id));


    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("Parabéns, cunhã! Você concluiu mais uma etapa da sua jornada Dev.");
        }
    }, []);


    return (
        <ScrollView style={{ backgroundColor: "#FFF" }}>

            <YoutubePlayer
                height={300}
                play={playing}
                videoId={filme.videoId}
                onChangeState={onStateChange}
            />

            <View style={styles.content}>
                <Text style={styles.h1}>{filme.titulo}</Text>


                <View style={styles.cardSinopse}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>


                        <View style={styles.linha}>
                            {filme.genero.map((genero) => (
                                <Text key={genero.id + genero.texto} style={styles.badge}>
                                    {genero.texto}
                                </Text>
                            ))}
                        </View>

                    </View>

                    <View>
                        <Text style={styles.texto}>{filme.significado}</Text>
                    </View>
                </View>

                <View style={styles.coluna}>
                    <Text style={styles.h2}>Créditos</Text>
                    <Text style={styles.texto}>{filme.credito}</Text>
                </View>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    content: { padding: 20, gap: 10 },

    h1: { color: "#000", fontSize: 24, marginTop: -70, fontWeight: "500" },

    h2: { color: "#000", fontSize: 18, fontWeight: "500" },

    texto: { color: "#000", fontSize: 15 },

    linha: { flexDirection: "row", gap: 4, alignItems: "center" },

    capa: {
        width: "100%",
        height: 310,
    },
    badge: {
        backgroundColor: "#7D2B88",
        color: "white",
        paddingHorizontal: 15,
        paddingVertical: 3,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#ffffff3c",
        fontSize: 16,
        marginBottom: 12
    },

    cardSinopse: {
        backgroundColor: "#7d2b8821",
        marginTop: 12,
        padding: 16,
        borderRadius: 18,
        marginBottom: 5,
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
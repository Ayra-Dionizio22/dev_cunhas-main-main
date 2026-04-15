import { router } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { filmes } from "../../../lib/filmes";
import { styles } from "../../../styles/home";
import { IconHomeLivro } from "../../../../assets/components/IconHomeLivro";
import { IconHomeVideo } from "../../../../assets/components/IconHomeVideo";
import { IconConectese } from "../../../../assets/components/IconConetese";




export default function App() {
    const banner = 'https://iili.io/Becm5FV.png';
    const destacado = filmes[0];
    const videos = filmes
        .filter((filme) => filme.tipo === "video");

    const leituras = filmes
        .filter((filme) => filme.tipo === "leitura");

    const perfis = filmes
        .filter((filme) => filme.tipo === "perfil");


    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 20
            }}>
                <View style={{ flexDirection: "row", gap: 6, alignSelf: "center" }}>
                    <Text style={styles.title}>Sua jornada</Text>
                    <Text style={styles.title2}>Dev</Text>
                    <Text style={styles.subtitle}>começa aqui!</Text>
                </View>

                <View>
                    <Image
                        source={{ uri: banner }}
                        style={{
                            width: "100%",
                            height: 200,
                            marginTop: 10,
                            borderRadius: 24,
                            borderColor: "#49328B",
                            borderWidth: 2
                        }}
                    />
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", gap: 15, marginTop: 20 }} >
                    <IconHomeLivro />
                    <Text style={styles.titleDestaquesComIcone}>Leituras</Text>
                </View>


                <ScrollView
                    horizontal
                    style={{ marginTop: 10 }}
                    contentContainerStyle={{ gap: 15 }}
                >
                    {leituras.map((filme, index) => (
                        <TouchableOpacity
                            onPress={() => router.push("/leituras/" + filme.id)}
                            key={filme.id + index}
                            style={{ width: 160 }}
                        >
                            <Image
                                source={{ uri: filme.capa }}
                                style={{
                                    width: 160,
                                    height: 250,
                                    borderRadius: 20,
                                }}
                            />
                            <Text style={{ color: "#49328B", marginTop: 6 }}>
                                {filme.titulo}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                <View style={{ flexDirection: "row", alignItems: "center", gap: 15, marginTop: 20 }} >
                    <IconHomeVideo />
                    <Text style={styles.titleDestaquesComIcone}>Videoaulas</Text>
                </View>



                <ScrollView
                    horizontal
                    style={{ marginTop: 10 }}
                    contentContainerStyle={{ gap: 15 }}
                >
                    {videos.map((filme, index) => (
                        <TouchableOpacity
                            onPress={() => router.push("/filme/" + filme.id)}
                            key={filme.titulo + index}
                            style={{ width: 220 }}
                        >
                            <Image
                                source={{ uri: filme.capa }}
                                style={{
                                    width: 220,
                                    height: 150,
                                    borderRadius: 20,
                                }}
                            />
                            <Text style={{ color: "#49328B", marginTop: 6 }}>
                                {filme.titulo}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                <View style={{ flexDirection: "row", alignItems: "center", gap: 15, marginTop: 20 }} >
                    <IconConectese />
                    <Text style={styles.titleDestaquesComIcone}>Conecte-se</Text>
                </View>


                <ScrollView
                    horizontal
                    style={{ marginTop: 10 }}
                    contentContainerStyle={{ gap: 20 }}
                >
                    {perfis.map((filme, index) => (
                        <TouchableOpacity
                            onPress={() => router.push(filme.link)}
                            key={filme.titulo + index}
                            style={{ width: 100 }}
                        >
                            <Image
                                source={{ uri: filme.capa }}
                                style={{
                                    width: 100,
                                    height: 100,
                                    borderRadius: 1000,
                                }}
                            />
                            <Text style={{ color: "#49328B", textAlign: "center", marginTop: 6 }}>
                                {filme.titulo}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

            </ScrollView>
        </View>
    )
}
import { DrawerContentScrollView } from '@react-navigation/drawer';
import * as ImagePicker from 'expo-image-picker';
import { Drawer } from 'expo-router/drawer';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PerfilIcon } from '../../../assets/components/PerfilIcon';
// import { ModoIcon } from "../../../assets/components/ModoIcon";
// import { LightIcon } from "../../../assets/components/LightIcon";
// import { DarkIcon } from '../../../assets/components/DarkIcon';

function TabsDrawerContent(props) {
  const [foto, setFoto] = useState(null);

  useEffect(() => {
    async function carregarImagem() {
      const imagemSalva = await AsyncStorage.getItem("fotoPerfil");
      if (imagemSalva) setFoto(imagemSalva);
    }
    carregarImagem();
  }, []);

  async function escolherImagem() {
    const permissao = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissao.granted) {
      Alert.alert("Permissão necessária", "Você precisa permitir acesso à galeria.");
      return;
    }

    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!resultado.canceled) {
      const uri = resultado.assets[0].uri;
      setFoto(uri);

      await AsyncStorage.setItem("fotoPerfil", uri);
    }
  }

  return (
    <DrawerContentScrollView {...props}>
      <View style={style.container}>

        <Image
          source={
            foto
              ? { uri: foto }
              : { uri: "https://iili.io/BeuN6V1.png" }}
          width={64}
          height={64}
          style={style.avatar}
        />

        <View style={style.temaContainer}>
          <PerfilIcon style={{ color: "#6C63FF", marginTop: 7, padding: 17 }} />
          <TouchableOpacity style={style.button} onPress={escolherImagem}>
            <Text style={style.texto}>Editar foto</Text>
          </TouchableOpacity>
        </View>

        {/* <View style={style.temaContainer}>
          <ModoIcon style={{ color: "#6C63FF", marginTop: 20 }} />

          <TouchableOpacity style={style.buttonMode}>
            <LightIcon style={{ color: "#6C63FF" }} />
            <Text style={style.texto}>Claro</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.buttonMode}>
            <DarkIcon style={{ color: "#6C63FF" }} />
            <Text style={style.texto}>Escuro</Text>
          </TouchableOpacity>

        </View> */}
      </View>
    </DrawerContentScrollView>
  );
}

export default function TabsDrawerLayout() {
  return (
    <Drawer
      drawerContent={(props) => <TabsDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="(main)"
        options={{
          title: 'dev <cunhãs>',
          headerTintColor: "#49328B",
          headerShown: true,
          drawerItemStyle: {
            display: 'none',
          },
        }}
      />
    </Drawer>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
   
  },

  avatar: {

    width: 80,
    height: 80,
    borderRadius: 50,
    marginBottom: 30
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#49328B",
    paddingHorizontal: 60,
    paddingVertical: 7,
    marginBottom: 15,
  },

  temaContainer: {
    flexDirection: "row",
    gap: 5,
    marginBottom: 10,
    
  },

  buttonMode: {
    alignItems: "center",
    gap: 5,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#49328B",
    paddingHorizontal: 45,
    paddingVertical: 5,
  },

  texto: {
    fontSize: 18,
    color: "#49328B"
  },
})

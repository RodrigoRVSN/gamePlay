import React from "react";
import { View, Text, Image } from "react-native";

import { styles } from "./styles";

import illustration from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";
import { useNavigation } from "@react-navigation/native";

import { Background } from "../../components/Background";

export function SignIn() {
  const navigation = useNavigation();

  function handleSingIn() {
    navigation.navigate("Home");
  }

  return (
    <>
      <Background>
        <View style={styles.container}>
          <Image
            source={illustration}
            style={styles.image}
            resizeMode="stretch"
          />
          <View style={styles.content}>
            <Text style={styles.title}>
              Conecte-se e organize suas gameplays!
            </Text>
            <Text style={styles.subtitle}>
              Crie grupos para jogar seus {"\n"} games favoritos com seus amigos
            </Text>
            <ButtonIcon onPress={handleSingIn} title="Entrar com Discord" />
          </View>
        </View>
      </Background>
    </>
  );
}

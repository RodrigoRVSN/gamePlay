import React from "react";
import { View, Text, Image } from "react-native";

import { styles } from "./styles";

import illustration from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";

export function SignIn() {
  return (
    <>
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
          <ButtonIcon title="Entrar com Discord" activeOpacity={0.8} />
        </View>
      </View>
    </>
  );
}

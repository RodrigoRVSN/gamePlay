import React, { useState } from "react";
import { View, Text, Image, StatusBar, Button } from "react-native";

import { styles } from "./styles";

import illustration from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";

export function SignIn() {
  return (
    <>
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
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
            Crie grupos para jogar {"\n"} seus games favoritos {"\n"} com seus
            amigos
          </Text>
          <ButtonIcon title="Entrar com Discord" activeOpacity={0.8} />
        </View>
      </View>
    </>
  );
}

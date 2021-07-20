import React from "react";
import { View, Text, Image, Alert, ActivityIndicator } from "react-native";

import { styles } from "./styles";

import illustration from "../../assets/illustration.png";

import { ButtonIcon } from "../../components/ButtonIcon";

import { Background } from "../../components/Background";
import { useAuth } from "../../hooks/auth";
import { theme } from "../../global/styles/theme";

export function SignIn() {
  const { loading, signIn } = useAuth();

  async function handleSingIn() {
    try {
      await signIn();
    } catch (error) {
      Alert.alert("Erro ao fazer login");
    }
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
            {loading ? (
              <ActivityIndicator color={theme.colors.primary} />
            ) : (
              <ButtonIcon onPress={handleSingIn} title="Entrar com Discord" />
            )}
          </View>
        </View>
      </Background>
    </>
  );
}

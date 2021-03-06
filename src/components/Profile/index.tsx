import React from "react";
import { Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useAuth } from "../../hooks/auth";
import { Avatar } from "../Avatar";
import { styles } from "./styles";

export function Profile() {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <RectButton>
        <Avatar urlImage={user.avatar} />
      </RectButton>

      <View>
        <View>
          <View style={styles.user}>
            <Text style={styles.greeting}>Olá, </Text>
            <Text style={styles.username}>{user.firstName}</Text>
          </View>
        </View>
        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
}

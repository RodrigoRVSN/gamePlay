import React from "react";
import {
  Modal,
  ModalProps,
  View,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { theme } from "../../global/styles/theme";
import { Background } from "../Background";
import { styles } from "./styles";

import { MaterialIcons } from "@expo/vector-icons";
import { useAuth } from "../../hooks/auth";

type Props = ModalProps & {
  closeModal: () => void;
};

export function ModalLogout({ closeModal, ...rest }: Props) {
  const { signOut } = useAuth();

  return (
    <>
      <Modal transparent statusBarTranslucent animationType="slide" {...rest}>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.overlay}>
            <View style={styles.container}>
              <Background>
                <Text style={styles.title}>Deseja mesmo sair?</Text>
                <View style={styles.buttonsContainer}>
                  <MaterialIcons
                    onPress={closeModal}
                    name="cancel"
                    color={theme.colors.heading}
                    size={60}
                  />

                  <MaterialIcons
                    style={styles.logoutButton}
                    onPress={signOut}
                    name="logout"
                    color={theme.colors.heading}
                    size={60}
                  />
                </View>
              </Background>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
}

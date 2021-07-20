import React, { useState } from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { ModalLogout } from "../ModalLogout";

export function ButtonLogout({ ...rest }: RectButtonProps) {
  const [openLogoutModal, setOpenLogoutModal] = useState(false);

  function handleOpenLogoutModal() {
    setOpenLogoutModal(true);
  }
  function handleCloseLogoutModal() {
    setOpenLogoutModal(false);
  }

  return (
    <>
      <RectButton
        style={styles.container}
        {...rest}
        onPress={handleOpenLogoutModal}
      >
        <Ionicons name="exit" color={theme.colors.secondary100} size={24} />
      </RectButton>
      <ModalLogout
        visible={openLogoutModal}
        closeModal={handleCloseLogoutModal}
      />
    </>
  );
}

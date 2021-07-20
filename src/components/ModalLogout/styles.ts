import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 600,
  },
  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay,
  },
  buttonsContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logoutButton: {
    marginLeft: 80,
    backgroundColor: theme.colors.primary,
    borderRadius: 20,
    paddingHorizontal: 5,
  },
  title: {
    paddingTop: 45,
    textAlign: "center",
    color: theme.colors.heading,
    fontFamily: theme.fonts.text500,
    fontSize: 20,
  },
});

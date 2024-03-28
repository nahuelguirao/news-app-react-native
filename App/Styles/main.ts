import { StyleSheet } from "react-native";

const theme = "Dark";

//Dark theme Colors:
const mainColorDark = "#121212";
const secondaryColorDark = "#202020";
const primaryColorDark = "#CF6679";
const errorColorDark = "#8886FC";
const textColorDark = "#EEEEEE";

//Ligth theme Colors:
const mainColorLigth = "#EEEEEE";
const secondaryColorLight = "#DDDDDD";
const primaryColorLight = "#1166EE";
const errorColorLigth = "#FF0808";
const detailsColorLight = "#222222";
const textColorLigth = "#202020";

//Text sizes
const bigText = 24;
const mediumText = 16;
const smallText = 12;

export const styles = StyleSheet.create({
  background: {
    backgroundColor: theme == "Dark" ? secondaryColorDark : secondaryColorLight,
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  header: {
    paddingTop: 10,
    paddingBottom: 20,
  },
  mainText: {
    color: theme == "Dark" ? textColorDark : textColorLigth,
    fontSize: bigText,
  },
  spanDetails: {
    color: theme == "Dark" ? primaryColorDark : primaryColorLight,
    fontWeight: "bold",
  },
  card: {
    flexDirection: "row",
    padding: 10,
    marginBottom: 16,
    borderRadius: 16,
    gap: 16,
    backgroundColor: theme == "Dark" ? mainColorDark : mainColorLigth,
  },
  cardPreview: {
    justifyContent: "space-between",
  },
  cardTitle: {
    width: "25%",
    color: theme == "Dark" ? textColorDark : textColorLigth,
  },
  cardBy: {
    fontSize: smallText,
    color: theme == "Dark" ? textColorDark : textColorLigth,
  },
  emptyMessage: {
    marginTop: 30,
    textAlign: "center",
    fontSize: mediumText,
    color: theme == "Dark" ? textColorDark : textColorLigth,
  },
});

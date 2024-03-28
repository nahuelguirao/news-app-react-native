import { StyleSheet, Dimensions } from "react-native";

const theme = "Dark";
const mobile = Dimensions.get("window").width < 600;

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
const hugeText = 32;
const bigText = 24;
const intermediateText = 20;
const mediumText = 16;
const smallText = 12;

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme == "Dark" ? secondaryColorDark : secondaryColorLight,
    paddingHorizontal: mobile ? 15 : 35,
    alignItems: mobile ? "flex-start" : "center",
  },
  header: {
    paddingVertical: 10,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerIcon: {
    marginRight: 20,
    fontSize: mobile ? bigText : hugeText,
    color: theme == "Dark" ? primaryColorDark : primaryColorLight,
  },
  searchCategoryContainer: {
    height: mobile ? 50 : 70,
    maxHeight: 70,
  },
  searchCategory: {
    marginRight: 30,
    fontSize: mobile ? mediumText : bigText,
    color: theme == "Dark" ? textColorDark : textColorLigth,
  },
  actualCategory: {
    color: theme == "Dark" ? primaryColorDark : primaryColorLight,
  },
  mainText: {
    color: theme == "Dark" ? textColorDark : textColorLigth,
    fontSize: mobile ? bigText : hugeText,
  },
  spanDetails: {
    color: theme == "Dark" ? primaryColorDark : primaryColorLight,
    fontWeight: "bold",
  },
  loader: {
    marginTop: 30,
    alignSelf: "center",
  },
  newsContainer: {
    marginTop: 5,
  },
  card: {
    width: Dimensions.get("window").width * 0.9,
    flexDirection: "row",
    padding: 10,
    marginBottom: 16,
    borderRadius: 16,
    gap: 16,
    backgroundColor: theme == "Dark" ? mainColorDark : mainColorLigth,
  },
  cardImg: {
    width: mobile ? 150 : 200,
    height: mobile ? 100 : 150,
    borderRadius: 16,
  },
  cardPreview: {
    justifyContent: "space-between",
    maxWidth: "100%",
  },
  cardTitle: {
    width: mobile ? "45%" : "65%",
    color: theme == "Dark" ? textColorDark : textColorLigth,
    fontSize: mobile ? mediumText : intermediateText,
  },
  cardBy: {
    maxWidth: "50%",
    fontSize: mobile ? smallText : mediumText,
    color: theme == "Dark" ? textColorDark : textColorLigth,
  },
  emptyMessage: {
    marginTop: 30,
    textAlign: "center",
    fontSize: mediumText,
    color: theme == "Dark" ? textColorDark : textColorLigth,
  },
});

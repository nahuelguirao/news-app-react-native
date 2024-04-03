import { StyleSheet, Dimensions } from "react-native";

export const getStyles = (theme: string) => {
  const mobile = Dimensions.get("window").width < 600;

  const mainColor = theme === "Dark" ? "#121212" : "#EEEEEE";
  const secondaryColor = theme === "Dark" ? "#202020" : "#DDDDDD";
  const primaryColor = theme === "Dark" ? "#CF6679" : "#1166EE";
  const textColor = theme === "Dark" ? "#EEEEEE" : "#202020";

  const hugeText = 32;
  const bigText = 24;
  const intermediateText = 20;
  const mediumText = 16;
  const smallText = 12;

  // Devolver los estilos
  return StyleSheet.create({
    textColorNormal: {
      color: textColor,
    },
    mainContainer: {
      flex: 1,
      backgroundColor: secondaryColor,
      paddingHorizontal: Dimensions.get("window").width < 600 ? 15 : 35,
      alignItems:
        Dimensions.get("window").width < 600 ? "flex-start" : "center",
    },
    header: {
      backgroundColor: secondaryColor,
      paddingVertical: 10,
      paddingHorizontal: Dimensions.get("window").width < 600 ? 15 : 35,
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
    },
    headerIcon: {
      marginRight: 20,
      fontSize: mobile ? bigText : hugeText,
      color: primaryColor,
    },
    searchCategoryContainer: {
      height: mobile ? 50 : 70,
      maxHeight: 70,
    },
    searchCategory: {
      marginRight: 30,
      fontSize: mobile ? mediumText : bigText,
      color: textColor,
    },
    actualCategory: {
      color: primaryColor,
    },
    mainText: {
      color: textColor,
      fontSize: mobile ? bigText : hugeText,
    },
    spanDetails: {
      color: primaryColor,
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
      backgroundColor: mainColor,
      elevation: 5,
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
      color: textColor,
      fontSize: mobile ? mediumText : intermediateText,
    },
    cardBy: {
      maxWidth: "50%",
      fontSize: mobile ? smallText : mediumText,
      color: textColor,
    },
    emptyMessage: {
      marginTop: 30,
      fontSize: mediumText,
      color: textColor,
    },
    modal: {
      flex: 1,
      padding: 20,
      backgroundColor: secondaryColor,
    },
    modalHeaderTitle: {
      borderLeftWidth: 1,
      borderLeftColor: primaryColor,
      paddingLeft: 15,
      marginTop: 30,
      marginBottom: 10,
      color: textColor,
      fontWeight: "bold",
      fontSize: intermediateText,
    },
    modalHeaderIcon: {
      position: "absolute",
      top: 5,
      right: Dimensions.get("window").width * 0.05,
      fontSize: hugeText,
      alignSelf: "flex-start",
      color: primaryColor,
    },
    modalImg: {
      marginTop: 20,
      borderRadius: 16,
      width: "100%",
      maxWidth: 450,
      height: 200,
    },
    modalContent: {
      marginVertical: 30,
      color: textColor,
      fontSize: mediumText,
    },
    searchLabel: {
      fontSize: intermediateText,
    },
    searchInput: {
      width: "100%",
      maxWidth: 500,
      borderWidth: 1,
      borderColor: primaryColor,
      borderRadius: 16,
      marginTop: 10,
      paddingVertical: 5,
      paddingHorizontal: 10,
    },
    flatListNavigation: {
      marginVertical: 10,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    settingContainer: {
      marginTop: 30,
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 32,
    },
    settingTitle: {
      fontSize: intermediateText,
    },
    settingIcon: {
      color: primaryColor,
      fontSize: 30,
    },
  });
};

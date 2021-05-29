import { StyleSheet } from "react-native";
import theme from "../../assets/styles/theme.style.js";
// import base style from somewhere

export default StyleSheet.create({
  requestView: {
    backgroundColor: theme.SECONDARY_BG,
    height: "100%",
  },

  selectPage: {
    backgroundColor: theme.PRIMARY_BG,
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  flex1: {
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  flex2: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },

  container: {
    margin: 20,
  },
  washInfoText: {
    fontSize: theme.FONT_SIZE_SM,
    fontWeight: theme.FONT_WEIGHT_BOLD,
    color: theme.FONT_LIGHT,
    marginVertical: 5,
  },

  // Request Confirm Screen
  flexbox: {
    backgroundColor: theme.SECONDARY_BG,
    paddingHorizontal: 20,
    paddingVertical: 30,
    flex: 1,
    flexDirection: "column",
  },
  confirmFlex1: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 150,
  },
  confirmImageView: {
    height: "40%",
    marginBottom: 40
  },
  confirmImage: {
    height: "100%",
  },

  confirmTitle: {
    fontSize: theme.FONT_SIZE_LG,
    fontWeight: theme.FONT_WEIGHT_BOLD,
    color: theme.FONT_LIGHT,
    paddingVertical: 20,
  },
  confirmSubtitle: {
    fontSize: theme.FONT_SIZE_MD,
    fontWeight: theme.FONT_WEIGHT_MEDIUM,
    color: theme.SECONDARY_COLOR,
    textAlign: "center",
    width: "75%",
  },

  subtitle: {
    fontSize: theme.FONT_SIZE_SM,
    fontWeight: theme.FONT_WEIGHT_BOLD,
    color: "#383838",
    textTransform: "uppercase",
    textAlign: "left",
  },
  title: {
    fontSize: theme.FONT_SIZE_LG,
    fontWeight: theme.FONT_WEIGHT_BOLD,
    color: theme.FONT_DARK,
    textAlign: "left",
    lineHeight: 50,
  },
  label: {
    fontSize: theme.FONT_SIZE_MD,
    fontWeight: theme.FONT_WEIGHT_MEDIUM,
    color: theme.FONT_DARK,
    textAlign: "left",
  },
  sublabel: {
    fontSize: theme.FONT_SIZE_SM,
    fontWeight: theme.FONT_WEIGHT_MEDIUM,
    color: theme.FONT_DARK,
    opacity: 0.6,
    textAlign: "left",
  },
  primaryButton: {
    height: 40,
    backgroundColor: theme.PRIMARY_COLOR,
    display: "flex",
    justifyContent: "center",
    borderRadius: 5,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: theme.FONT_WEIGHT_SEMI,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  spacer30: {
    height: 30,
  },
  spacer10: {
    height: 10,
  },
});

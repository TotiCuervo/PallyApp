import React from "react";
import { StyleSheet, Platform } from "react-native";
import { Colors } from "./Colors";
import { useTheme } from "theme";
import { themeProps } from "./themes/models";

export const styleSheet = (theme: themeProps) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "white",
        },
        card: {
            flex: 1,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 0.1,
            shadowRadius: 6.68,
            elevation: 11,
            backgroundColor: theme.colors.card,
            borderRadius: 10,
        },
        row: {
            paddingVertical: 10,
            flexDirection: "row",
            justifyContent: "space-between",
        },
        resultSection: {
            minHeight: 200,
            maxHeight: "25%",
            height: "100%",
            backgroundColor: Colors.mainColor,
            padding: 40,
            paddingBottom: 10,
            paddingHorizontal: 30,
            justifyContent: "center",
        },
        mainResultLabel: {
            fontSize: 30,

            fontWeight: "700",
        },
        resultLabel: {
            fontWeight: "600",

            textTransform: "uppercase",
            letterSpacing: 0,
            paddingBottom: 10,
            fontSize: 12,
        },
        resultHeaderText: {
            fontWeight: "bold",

            fontSize: 30,
        },

        resultSubtitleText: {
            fontSize: 18,
        },
        label: {
            fontWeight: "900",
            color: "#005B5E",
            textTransform: "uppercase",
            letterSpacing: 0,
            paddingBottom: 5,
            fontSize: 12,
        },
        cardContainer: {
            paddingTop: 20,
            paddingBottom: 20,
            borderRadius: 20,
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: "lightgray",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            flexGrow: 1,
            justifyContent: "center",
        },
        cardContent: {
            paddingHorizontal: 20,
        },
        importantText: {
            fontWeight: "bold",
        },
        header: {
            fontWeight: "bold",
            fontSize: 22,
        },
        sheet: {
            width: "100%",
            position: "absolute",
            backgroundColor: "white",
            bottom: 0,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            padding: 20,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,

            elevation: 2,
        },
        outlinedDateButton: {
            marginTop: 5,
            paddingBottom: 20,
            paddingTop: 20,
            paddingHorizontal: 12,
            justifyContent: "center",
            backgroundColor: theme.colors.background,
            borderRadius: 10,
        },
        outlinedTextInput: {
            paddingBottom: 12,
            paddingTop: 12,
            paddingHorizontal: 12,
            justifyContent: "center",
            borderRadius: 20,
            backgroundColor: "white",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
        },
        errorText: {
            color: Colors["color-danger-500"],
            fontWeight: "500",
        },
        resetButton: {
            flex: 1,
            borderRadius: 10,
            padding: 5,
            marginRight: 5,
            borderColor: theme.colors.primary,
        },
        backButton: {
            backgroundColor: theme.colors.primary,
            marginLeft: 20,
            padding: 10,
            borderRadius: 10,
        },
        textAreaContainer: {
            width: "100%",
            height: 170,
            borderRadius: 20,
            backgroundColor: theme.dark ? theme.colors.card : "transparent",
        },
        textAreaInput: {
            width: "100%",
            height: 170,
            fontSize: 14,
            padding: 16,
            marginTop: 10,
            color: theme.colors.text,
            ...Platform.select({
                android: {
                    textAlignVertical: "top",
                },
            }),
        },
    });

function useStyles() {
    const { theme } = useTheme();

    // We only want to recompute the stylesheet on changes in color.
    const styles = React.useMemo(() => styleSheet(theme), [theme]);

    return styles;
}

export default useStyles;

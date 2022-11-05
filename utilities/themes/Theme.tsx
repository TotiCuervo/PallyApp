import { Appearance } from "react-native";
import { Colors } from "../Colors";
import { themeProps } from "./models";

export const defaultTheme: themeProps = {
    dark: false,
    colors: {
        primary: Colors["color-primary-500"],
        background: "rgb(242, 243, 251)",
        card: "white",
        text: Colors["color-primary-700"],
        success: Colors["color-success-500"],
        error: Colors["color-danger-500"],
    },
};

export const darkTheme: themeProps = {
    dark: true,
    colors: {
        primary: Colors["color-primary-500"],
        background: "#121212",
        card: "rgb(27, 27, 27)",
        text: "white",
        success: Colors["color-success-500"],
        error: Colors["color-danger-500"],
    },
};

export const halloweenTheme: themeProps = {
    dark: false,
    colors: {
        primary: "#f56C3c",
        background: "rgb(29, 22, 56)",
        card: "#f56C3c",
        text: "white",
        success: Colors["color-success-500"],
        error: Colors["color-danger-500"],
    },
};

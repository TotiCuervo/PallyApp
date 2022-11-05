import React from "react";
import { ButtonProps, TextStyle } from "react-native";
import { Button as _Button } from "react-native-paper";
import { useTheme } from "theme";
import Text from "../Typography/Text";

interface IProps {
    children: React.ReactNode;
    mode?: "contained" | "outlined";
    onPress?: () => void;
    disabled?: boolean;
}

export default function Button({ mode = "contained", ...props }: IProps) {
    const { theme } = useTheme();

    function getVariantTextStyle() {
        switch (mode) {
            case "outlined":
                return { color: theme.colors.primary };
            default:
                return { color: "white" };
        }
    }
    return (
        <_Button
            mode={mode}
            // @ts-ignore
            color={theme.colors.primary}
            uppercase={false}
            theme={{ dark: theme.dark }}
            style={{ borderRadius: 10, padding: 5, marginBottom: 0 }}
            {...props}
        >
            <Text style={{ fontWeight: "500", fontSize: 20, ...getVariantTextStyle() }}>
                {props.children}
            </Text>
        </_Button>
    );
}

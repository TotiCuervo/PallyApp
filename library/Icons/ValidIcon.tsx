import { View, Text } from "react-native";
import React from "react";
import { useTheme } from "theme";

interface IProps {
    icon: React.ReactElement;
    valid?: boolean;
}
export default function ValidIcon({ icon, valid }: IProps) {
    const { theme } = useTheme();

    function getBackground() {
        switch (valid) {
            case true:
                return theme.colors.success;
            case false:
                return theme.colors.error;
            default:
                return theme.colors.background;
        }
    }
    return (
        <View style={{ backgroundColor: getBackground(), padding: 10, borderRadius: 30 }}>
            {icon}
        </View>
    );
}

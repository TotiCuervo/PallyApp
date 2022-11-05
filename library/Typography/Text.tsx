import React, { FunctionComponent } from "react";
import { Text, TextStyle } from "react-native";
import { useTheme } from "theme";

type CustomTextProps = {
    style?: TextStyle | TextStyle[];
    textType?: "regular" | "bold" | "light";
    bold?: boolean;
    variant?: "error";
    children: React.ReactNode;
};
const _Text: FunctionComponent<CustomTextProps> = ({ children, style, bold, variant }) => {
    const { theme } = useTheme();

    function getVariant() {
        switch (variant) {
            case "error":
                return { color: theme.colors.error, fontWeight: "bold" };
            default:
                return { color: theme.colors.text };
        }
    }
    return (
        <Text style={[{ fontWeight: bold ? "bold" : undefined, ...getVariant() }, style]}>
            {children}
        </Text>
    );
};

export default _Text;

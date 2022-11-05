import { View } from "react-native";
import React from "react";
import { useTheme } from "theme";

export default function Card({ children }: { children: React.ReactNode }) {
    const { theme } = useTheme();
    return (
        <View
            style={{
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
            }}
        >
            {children}
        </View>
    );
}

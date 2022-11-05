import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Text } from "library";
import { useTheme } from "theme";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { themeProps } from "../../../../utilities/themes/models";

export default function ThemeSection() {
    const { theme, updateTheme, themeList } = useTheme();
    const [themeName, setThemeName] = useState("");

    useEffect(() => {
        async function getThemeFromStorage() {
            try {
                const value = await AsyncStorage.getItem("@theme");
                value !== null ? setThemeName(value) : setThemeName("");
            } catch (e) {}
        }

        getThemeFromStorage();
    }, []);

    function themesMatch(option: { name: string; theme: themeProps }) {
        return theme == option.theme && themeName == option.name;
    }

    function handleThemeUpdate(themeName: string) {
        setThemeName(themeName);
        updateTheme(themeName);
    }
    return (
        <View>
            <Text style={{ fontWeight: "bold" }}>Theme</Text>
            <View style={{ flexDirection: "row", paddingTop: 15 }}>
                {themeList.map((themeOption) => {
                    return (
                        <TouchableWithoutFeedback
                            onPress={() => handleThemeUpdate(themeOption.name)}
                        >
                            <Text
                                style={{
                                    paddingRight: 40,
                                    color: themesMatch(themeOption)
                                        ? theme.colors.primary
                                        : theme.colors.text,
                                    fontWeight: themesMatch(themeOption) ? "700" : "normal",
                                }}
                            >
                                {themeOption.name}
                            </Text>
                        </TouchableWithoutFeedback>
                    );
                })}
            </View>
        </View>
    );
}

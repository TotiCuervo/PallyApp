import React, { useState, useEffect, useContext, createContext } from "react";
import { Appearance } from "react-native";
import { darkTheme, defaultTheme, halloweenTheme } from "../utilities/themes/Theme";
import { themeProps } from "../utilities/themes/models";
import AsyncStorage from "@react-native-async-storage/async-storage";

type ThemeListProps = {
    name: string;
    theme: themeProps;
};

interface ThemeContextType {
    theme: themeProps;
    updateTheme: (theme: string) => void;
    themeList: ThemeListProps[];
}

export const ThemeContext = createContext<Partial<ThemeContextType>>({});

export const ThemeProvider = ({ children }: any) => {
    const [theme, setTheme] = useState<themeProps>(defaultTheme);
    const [themeName, setThemeName] = useState("");
    const [appearanceTheme, setApperanceTheme] = useState<themeProps>(getAppearanceTheme());

    const themeList = [
        { name: "Light", theme: defaultTheme },
        { name: "Dark", theme: darkTheme },
        {
            name: "System",
            theme: appearanceTheme,
        },
    ];

    useEffect(() => {
        async function getThemeFromStorage() {
            try {
                const value = await AsyncStorage.getItem("@theme");
                if (value !== null) {
                    updateTheme(value);
                } else {
                    updateTheme("Default Theme");
                }
            } catch (e) {
                // error reading value
                updateTheme("Default Theme");
            }
        }

        getThemeFromStorage();

        const subscription = Appearance.addChangeListener(({ colorScheme }) => {
            handleAppearanceChange();
        });
        return () => Appearance.removeChangeListener(() => {});
    }, []);

    function handleAppearanceChange() {
        setApperanceTheme(getAppearanceTheme());

        if (themeName == "System") {
            setTheme(getAppearanceTheme());
        }
    }

    function getAppearanceTheme() {
        return Appearance.getColorScheme() == "light" ? defaultTheme : darkTheme;
    }

    function updateTheme(theme: string) {
        setThemeName(theme);
        saveThemeToAsync(theme);
        const filteredTheme = themeList.find((theme_from_list) => theme_from_list.name === theme);
        filteredTheme ? setTheme(filteredTheme.theme) : setTheme(defaultTheme);
    }

    async function saveThemeToAsync(theme: string) {
        try {
            await AsyncStorage.setItem("@theme", theme);
        } catch (e) {
            // saving error
        }
    }

    const contextValue: ThemeContextType = {
        theme,
        updateTheme,
        themeList,
    };

    return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    return {
        theme: context.theme as themeProps,
        updateTheme: context.updateTheme as () => void,
        themeList: context.themeList as [],
    };
};

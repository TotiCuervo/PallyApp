module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            [
                "module-resolver",
                {
                    extensions: [
                        ".ios.ts",
                        ".android.ts",
                        ".ts",
                        ".ios.tsx",
                        ".android.tsx",
                        ".tsx",
                        ".jsx",
                        ".js",
                        ".json",
                    ],
                    alias: {
                        library: "./library/index",
                        theme: "./context/ThemeContext",
                        styles: "./utilities/Styles",
                        utilities: "./utilities",
                        colors: "./utilities/Colors",
                        types: "./types/index",
                        context: "./context/index",
                    },
                },
            ],
            "react-native-reanimated/plugin",
            // "react-native-paper/babel",
            // [
            //     "module:react-native-dotenv",
            //     {
            //         moduleName: "@env",
            //         path: ".env",
            //         blacklist: null,
            //         whitelist: null,
            //         safe: false,
            //         allowUndefined: true,
            //     },
            // ],
        ],
    };
};

import React, { createRef, useEffect } from "react";
import { TextInput } from "react-native-paper";
import { TextInput as NativeTextInput, Platform } from "react-native";

import { Colors } from "../../../utilities/Colors";
import { useTheme } from "theme";
interface IProps {
    value: Number | number;
    onChange: (newValue: any) => void;
    inputText: string;
}

export default function NumberInput({ value, onChange, inputText }: IProps) {
    const { theme } = useTheme();
    const inputRef = createRef<NativeTextInput>();

    function isNumeric(num: any) {
        return !isNaN(num);
    }

    function handleOnChange(text: string) {
        if (isNumeric(text)) {
            onChange(text);
        } else {
            onChange(value);
        }
    }

    useEffect(() => {
        if (Platform.OS == "ios") {
            (inputRef as any).current.focus();
        }
    }, []);

    return (
        <TextInput
            value={value.toString()}
            onChangeText={(text: string) => {
                handleOnChange(text);
            }}
            ref={inputRef}
            keyboardType={"number-pad"}
            mode="flat"
            placeholder={"0"}
            placeholderTextColor={theme.colors.text}
            outlineColor="lightgray"
            selectionColor={Colors.mainColor}
            right={
                <TextInput.Affix
                    text={inputText}
                    theme={{
                        dark: theme.dark,
                        colors: { primary: theme.colors.primary, text: theme.colors.text },
                    }}
                />
            }
            style={{ backgroundColor: "transparent", textAlign: "center", fontSize: 25 }}
            theme={{
                dark: theme.dark,
                roundness: 10,
                colors: { primary: theme.colors.primary, text: theme.colors.text },
            }}
        />
    );
}

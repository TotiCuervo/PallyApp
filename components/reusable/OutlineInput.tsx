import React from "react";
import { TextInput } from "react-native-paper";
import { Colors } from "../../utilities/Colors";
import { useTheme } from "theme"; from "../../utilities/Theme";

interface IProps {
    value: string;
    onChange: (newValue: any) => void;
    inputText: string;
}

export default function OutlineInput({ value, onChange, inputText }: IProps) {
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

    return (
        <TextInput
            keyboardType={"number-pad"}
            mode="outlined"
            value={value}
            onChangeText={(text: string) => {
                handleOnChange(text);
            }}
            placeholder={"0"}
            placeholderTextColor="black"
            returnKeyType="done"
            outlineColor="lightgray"
            selectionColor={Colors.mainColor}
            right={<TextInput.Affix text={inputText} />}
            style={{ backgroundColor: Theme.colors.background }}
            theme={{ roundness: 10, colors: { primary: Colors.mainColor } }}
        />
    );
}

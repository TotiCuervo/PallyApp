import React, { createRef } from "react";
import { View, TextInput, TouchableWithoutFeedback } from "react-native";
import { Text } from "react-native-paper";
import { Colors } from "../../utilities/Colors";

interface IProps {
    label: string;
    date?: boolean;
    value: string | number;
    onChange: (newValue: any) => void;
    inputText?: string;
    error?: boolean;
    errorText?: string;
}
export default function FullWidthTextRow({
    label,
    date = false,
    value,
    onChange,
    inputText = "",
    error = false,
    errorText = "",
}: IProps) {
    const inputRef = createRef<TextInput>();

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
        <TouchableWithoutFeedback onPress={() => (inputRef as any).current.focus()}>
            <View
                style={{
                    paddingTop: 10,
                    paddingBottom: 10,
                    marginVertical: 10,
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <Text style={{ fontWeight: "500" }}>{label}</Text>

                <TextInput
                    ref={inputRef}
                    keyboardType={"number-pad"}
                    value={value as string}
                    onChangeText={(text: string) => {
                        handleOnChange(text);
                    }}
                    placeholder={"0"}
                    placeholderTextColor="black"
                    returnKeyType="done"
                    selectionColor={Colors.mainColor}
                    style={{ textAlign: "right" }}
                />
            </View>
        </TouchableWithoutFeedback>
    );
}

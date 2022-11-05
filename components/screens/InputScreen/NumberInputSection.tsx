import React from "react";
import { View } from "react-native";
import NumberInput from "../../calculator/Inputs/NumberInput";
import { usePillForm } from "context";

type IProps = {
    value: Number;
    setValue: (value: Number) => void;
};

export default function NumberInputSection({ value, setValue }: IProps) {
    const { inputForm } = usePillForm();
    const { label } = inputForm;

    return (
        <View style={{ alignItems: "center" }}>
            <View style={{ width: 150 }}>
                <NumberInput
                    value={value}
                    onChange={(x) => setValue(x)}
                    inputText={label as string}
                />
            </View>
        </View>
    );
}

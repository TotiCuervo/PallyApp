import React, { useState } from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { Text } from "library";
import { useTheme } from "theme";
interface IProps {
    label?: string;
    title: string;
    value: Date | string | number;
    inputText?: string;
    error?: boolean;
    errorText?: string;
    onClick?: () => void;
}
export default function InputButton({
    title,
    label,
    value,
    error = false,
    errorText = "",
    onClick,
}: IProps) {
    const { theme } = useTheme();
    const [pressed, setPressed] = useState(false);

    function unPress() {
        setPressed(false);
    }

    return (
        <React.Fragment>
            <TouchableWithoutFeedback onPress={onClick}>
                <View style={{ flex: 1, paddingHorizontal: 10 }}>
                    <Text style={{ fontWeight: "bold" }}>{title}</Text>
                    <View
                        style={{
                            backgroundColor: theme.colors.background,
                            justifyContent: "space-between",
                            alignItems: "center",
                            flex: 1,
                            flexDirection: "row",
                            padding: 15,
                            borderRadius: 15,
                            marginVertical: 10,
                        }}
                    >
                        <Text>
                            {(value as Date).toDateString !== undefined
                                ? (value as Date).toDateString()
                                : value}
                        </Text>
                        {label && <Text>{label}</Text>}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </React.Fragment>
    );
}

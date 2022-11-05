import React, { useState } from "react";
import { View, TextInput, TouchableWithoutFeedback } from "react-native";
import { Text } from "library";
import { Entypo } from "@expo/vector-icons";
import useStyles from "../../../utilities/Styles";

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
    const styles = useStyles();
    const [pressed, setPressed] = useState(false);

    function unPress() {
        setPressed(false);
    }

    return (
        <React.Fragment>
            <TouchableWithoutFeedback onPress={onClick}>
                <View
                    style={[
                        styles.card,
                        {
                            padding: 20,
                            paddingVertical: 25,
                            marginTop: 20,
                        },
                    ]}
                >
                    <View
                        style={{
                            justifyContent: "space-between",
                            alignItems: "center",
                            flex: 1,
                            flexDirection: "row",
                        }}
                    >
                        <Text style={{}}>{title}</Text>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <Text style={{ fontWeight: "bold" }}>
                                {(value as Date).toDateString !== undefined
                                    ? (value as Date).toDateString()
                                    : value}
                                {label && ` ${label}`}
                            </Text>
                        </View>
                    </View>
                    {error && (
                        <Text style={[styles.errorText, { paddingTop: 7 }]}>{errorText}</Text>
                    )}
                </View>
            </TouchableWithoutFeedback>
        </React.Fragment>
    );
}

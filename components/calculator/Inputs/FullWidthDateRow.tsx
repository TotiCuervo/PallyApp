import React, { useState } from "react";
import { View, TextInput, TouchableWithoutFeedback } from "react-native";
import { Text } from "react-native-paper";
import DateTimePickerModal from "react-native-modal-datetime-picker";

interface IProps {
    label: string;
    date?: boolean;
    value: Date;
    onChange: (newValue: any) => void;
    inputText?: string;
    error?: boolean;
    errorText?: string;
}
export default function FullWidthTextRow({
    label,
    value,
    onChange,
    error = false,
    errorText = "",
}: IProps) {
    const [pressed, setPressed] = useState(false);

    function unPress() {
        setPressed(false);
    }

    return (
        <React.Fragment>
            <TouchableWithoutFeedback
                onPress={() => {
                    setPressed(true);
                }}
            >
                <View
                    style={{
                        paddingTop: 10,
                        paddingBottom: 10,
                        marginVertical: 10,
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <View>
                        <Text style={{ fontWeight: "500" }}>{label}</Text>
                        {error && (
                            <Text style={{ fontSize: 12, color: "red", paddingTop: 5 }}>
                                {errorText}
                            </Text>
                        )}
                    </View>
                    <Text>{value.toDateString()}</Text>
                </View>
            </TouchableWithoutFeedback>
            {/* {error && <Text style={{ fontSize: 10, color: "red" }}>{errorText}</Text>} */}

            {/* fill date */}
            <DateTimePickerModal
                isVisible={pressed}
                value={value}
                mode="date"
                date={value}
                onConfirm={(newDate) => {
                    onChange(newDate);
                    unPress();
                }}
                onCancel={() => unPress()}
                //@ts-ignore
                display={Platform.OS === "ios" && "inline"}
            />
        </React.Fragment>
    );
}

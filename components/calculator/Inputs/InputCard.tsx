import { Pressable, View } from "react-native";
import { Text, Card, ValidIcon } from "library";
import React from "react";

interface IProps {
    title: string;
    icon: React.ReactElement;
    value: string;
    onPress: () => void;
    valid?: boolean;
}

export default function InputCard({ title, icon, value, valid, onPress }: IProps) {
    return (
        <Pressable onPress={onPress}>
            <Card>
                <View style={{ alignItems: "center", padding: 10 }}>
                    <View style={{ paddingVertical: 10 }}>
                        <Text bold>{title}</Text>
                    </View>
                    <View style={{ paddingVertical: 10 }}>
                        <ValidIcon icon={icon} valid={valid} />
                    </View>
                    <View style={{ paddingVertical: 10 }}>
                        <Text style={{ fontSize: 20 }}>{value}</Text>
                    </View>
                </View>
            </Card>
        </Pressable>
    );
}

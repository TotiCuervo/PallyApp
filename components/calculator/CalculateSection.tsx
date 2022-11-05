import React from "react";
import { View } from "react-native";
import { Text, Button } from "library";
import _ from "lodash";
import ResetButton from "../calculator/Buttons/ResetButton";
import { usePillForm } from "context";

import { useTheme } from "theme";

export default function CalculateSection() {
    const { theme } = useTheme();
    const { calculate, canCalculate } = usePillForm();
    return (
        <View style={{ padding: 10, flexDirection: "row" }}>
            <View style={{ flex: 1, paddingRight: 5 }}>
                <ResetButton />
            </View>
            <View style={{ flex: 1, paddingLeft: 5 }}>
                <Button onPress={() => calculate()} disabled={!canCalculate}>
                    Calculate
                </Button>
            </View>
        </View>
    );
}

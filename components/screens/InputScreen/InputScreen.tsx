import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { Text, Button } from "library";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeStackParamList } from "types";
import AdBanner from "../../ads/AdBanner";
import { usePillForm } from "context";
import DateInputSection from "./DateInputSection";
import NumberInputSection from "./NumberInputSection";

type InputScreenNavigationProp = StackNavigationProp<HomeStackParamList, "InputScreen">;
type InputScreenRouteProp = RouteProp<HomeStackParamList, "InputScreen">;

type IProps = {
    navigation: InputScreenNavigationProp;
    route: InputScreenRouteProp;
};

export default function InputScreen({ navigation }: IProps) {
    const { inputForm } = usePillForm();
    const { title, subtitle, dataType, object } = inputForm;
    const [tempValue, setTempValue] = useState<Number | Date>(object.value);

    function saveData() {
        object.setValue(tempValue);
        navigation.navigate("Home");
    }

    return (
        <ScrollView style={{ maxWidth: 700, alignSelf: "center", width: "100%", paddingTop: "2%" }}>
            <AdBanner />
            <View style={{ paddingTop: 20, padding: 30, paddingBottom: 50 }}>
                <View style={{ alignItems: "center" }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>{title}</Text>
                    <Text style={{ paddingTop: 20 }}>{subtitle}</Text>
                </View>
                <View style={{ paddingTop: 30 }}>
                    {dataType === Date ? (
                        <DateInputSection value={tempValue as Date} setValue={setTempValue} />
                    ) : (
                        <NumberInputSection value={tempValue as Number} setValue={setTempValue} />
                    )}
                </View>
                <View style={{ paddingTop: 30, alignItems: "center" }}>
                    <View style={{ width: 150 }}>
                        <Button onPress={saveData}>Save</Button>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

import React from "react";
import { View } from "react-native";
import { Text, IfRender } from "library";
import { InputFormType } from "types";
import InputCard from "./Inputs/InputCard";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeStackParamList } from ".././../types";
import { usePillForm } from "context";
import useStyles from "../../utilities/Styles";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type ProfileScreenNavigationProp = StackNavigationProp<HomeStackParamList, "Home">;

type InputInfo = {
    title: string;
    subtitle: string;
    label?: string;
    icon: React.ReactElement;
    value: string;
    valid: boolean | undefined;
    object: any;
    dataType: DateConstructor | NumberConstructor;
};

export default function CalculationSection() {
    const styles = useStyles();
    const { form, setInputForm } = usePillForm();
    const { entryDate, fillDate, fillDuration, pillsPrescribed } = form;

    const navigation = useNavigation<ProfileScreenNavigationProp>();

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const inputInformation: InputInfo[] = [
        {
            title: "Picked Up Date",
            subtitle:
                "This is the day that you want to compare at. In most situations, that is today!",
            icon: <Entypo name="calendar" size={24} color="black" />,
            value: formatDateString(fillDate.value as Date),
            valid: fillDate.valid,
            object: fillDate,
            dataType: Date,
        },
        {
            title: "Entry Date",
            subtitle: "This is date that the prescription was picked up.",
            icon: <Entypo name="calendar" size={24} color="black" />,
            value: formatDateString(entryDate.value as Date),
            valid: entryDate.valid,
            object: entryDate,
            dataType: Date,
        },
        {
            title: "Fill Duration",
            subtitle: "Amount of time that the prescription is supposed to last.",
            label: "Days",
            icon: <Feather name="clock" size={24} color="black" />,
            value: `${fillDuration.value as number} Days`,
            valid: fillDuration.valid,
            object: fillDuration,
            dataType: Number,
        },
        {
            title: "Quantity Prescribed",
            subtitle: "The amount of medication that was given when prescribed.",
            label: "Pills",
            icon: <MaterialCommunityIcons name="pill" size={24} color="black" />,
            value: `${pillsPrescribed.value as number} Pills`,
            valid: pillsPrescribed.valid,
            object: pillsPrescribed,
            dataType: Number,
        },
    ];

    function formatDateString(date: Date) {
        return `${date.getDate()} ${months[date.getMonth()]}`;
    }

    function handleNavigate(form: InputInfo) {
        setInputForm({
            title: form.title,
            subtitle: form.subtitle,
            dataType: form.dataType,
            object: form.object,
            label: form.label,
        } as InputFormType);
        navigation.navigate("InputScreen");
    }

    return (
        <View style={{ padding: 10 }}>
            <View
                style={{
                    paddingVertical: 20,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Text style={styles.header}>Medication Information</Text>
            </View>
            <View>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1, marginRight: 5 }}>
                        <InputCard
                            title={inputInformation[0].title}
                            icon={inputInformation[0].icon}
                            value={inputInformation[0].value}
                            onPress={() => handleNavigate(inputInformation[0])}
                            valid={inputInformation[0].valid}
                        />
                    </View>
                    <View style={{ flex: 1, marginLeft: 5 }}>
                        <InputCard
                            title={inputInformation[1].title}
                            icon={inputInformation[1].icon}
                            value={inputInformation[1].value}
                            onPress={() => handleNavigate(inputInformation[1])}
                            valid={inputInformation[1].valid}
                        />
                    </View>
                </View>
                <IfRender condition={!entryDate.valid || !fillDate.valid}>
                    <View style={{ paddingTop: 10 }}>
                        <Text variant={"error"}>
                            The Entry Date cannot be before the Picked Up Date
                        </Text>
                    </View>
                </IfRender>
                <View style={{ flexDirection: "row", paddingTop: 10 }}>
                    <View style={{ flex: 1, marginRight: 5 }}>
                        <InputCard
                            title={inputInformation[2].title}
                            icon={inputInformation[2].icon}
                            value={inputInformation[2].value}
                            onPress={() => handleNavigate(inputInformation[2])}
                            valid={inputInformation[2].valid}
                        />
                    </View>
                    <View style={{ flex: 1, marginLeft: 5 }}>
                        <InputCard
                            title={inputInformation[3].title}
                            icon={inputInformation[3].icon}
                            value={inputInformation[3].value}
                            onPress={() => handleNavigate(inputInformation[3])}
                            valid={inputInformation[3].valid}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}

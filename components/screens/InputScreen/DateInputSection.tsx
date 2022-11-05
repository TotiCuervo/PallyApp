import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Text } from "library";
import { Calendar, DateObject } from "react-native-calendars";
import { sanitizeDate } from "../../../utilities/Common";
import { useTheme } from "theme";

type IProps = {
    value: Date;
    setValue: (value: Date) => void;
};

export default function DateInputSection({ value, setValue }: IProps) {
    const { theme } = useTheme();
    const [markedDate, setMarkedDate] = useState("");

    useEffect(() => {
        setMarkedDate(formatDate(value as Date));
    }, [value]);

    function formatDate(date: Date) {
        const year = date.getFullYear();
        let month = addZero(String(date.getMonth() + 1));
        const day = addZero(String(date.getUTCDate()));

        return `${year}-${month}-${day}`;
    }

    function addZero(date: string) {
        if (date.length !== 2) {
            return "0" + date;
        }
        return date;
    }

    function handleOnDateClick(date: DateObject) {
        let tempDate = sanitizeDate(new Date(date.timestamp));
        tempDate.setDate(tempDate.getDate() + 1);
        setValue(tempDate);
    }

    return (
        <View>
            <Calendar
                onDayPress={(day) => {
                    handleOnDateClick(day);
                }}
                markingType={"custom"}
                current={markedDate}
                markedDates={{
                    [markedDate]: {
                        customStyles: {
                            container: {
                                backgroundColor: theme.colors.primary,
                            },
                            text: {
                                color: "white",
                                fontWeight: "bold",
                            },
                        },
                    },
                }}
                theme={{
                    backgroundColor: theme.dark ? theme.colors.card : "transparent",
                    calendarBackground: theme.dark ? theme.colors.card : "transparent",
                    textSectionTitleColor: theme.colors.text,
                    monthTextColor: theme.colors.text,
                    selectedDayBackgroundColor: theme.colors.primary,
                    selectedDayTextColor: "white",
                    arrowColor: theme.colors.primary,
                    dayTextColor: theme.colors.primary,
                    todayTextColor: theme.dark ? theme.colors.text : "black",
                }}
            />

            <View style={{ alignItems: "center", paddingTop: 30 }}>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>{value.toDateString()}</Text>
            </View>
        </View>
    );
}

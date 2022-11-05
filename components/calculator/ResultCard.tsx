import React from "react";
import { View } from "react-native";
import { Text } from "library";
import useStyles from "../../utilities/Styles";
import { useTheme } from "theme";
import { usePillForm } from "context";

export default function ResultCard() {
    const styles = useStyles();
    const { theme } = useTheme();
    const { results } = usePillForm();

    const { expectedPillsRemaining, pillsPerDay, daysRemaining, nextFillDate } = results;

    const resultsAreEmpty =
        expectedPillsRemaining.value > 0 && pillsPerDay.value > 0 && daysRemaining.value > 0;

    const _results = [
        {
            value: expectedPillsRemaining.value,
            title: "Pills Left",
        },
        {
            value: daysRemaining.value,
            title: "Days Left",
        },
        {
            value: nextFillDate.value?.toDateString(),
            title: "Next Fill Date",
        },
    ];

    const SubItem = ({ result, title }: { result: number | string; title: string }) => {
        return (
            <View>
                <Text style={styles.resultLabel}>{title}</Text>
                <Text style={{ fontWeight: "700" }}>{result}</Text>
            </View>
        );
    };

    return (
        <View
            style={[
                styles.card,
                {
                    width: "100%",
                    maxWidth: 700,
                    alignSelf: "center",
                    padding: 30,
                },
            ]}
        >
            {!resultsAreEmpty ? (
                <View>
                    <Text style={styles.resultHeaderText}>Welcome!</Text>
                    <Text style={[styles.resultSubtitleText, { paddingTop: 15 }]}>
                        Add your medication info to see the results.
                    </Text>
                </View>
            ) : (
                <View>
                    <View>
                        <Text style={styles.resultLabel}>Pills Per Day</Text>
                        <Text style={styles.mainResultLabel}>{pillsPerDay.value} Pills</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            paddingTop: 40,
                        }}
                    >
                        {_results.map((result, index) => {
                            return (
                                <SubItem result={result.value} title={result.title} key={index} />
                            );
                        })}
                    </View>
                </View>
            )}
        </View>
    );
}

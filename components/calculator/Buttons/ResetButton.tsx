import React from "react";
import { Text, Button } from "library";
import _ from "lodash";
import { sanitizeDate } from "../../../utilities/Common";
import { Track } from "../../reusable/Track";
import { useTheme } from "theme";
import { usePillForm } from "context";

export default function CalculateSection() {
    const { theme } = useTheme();
    const { form, results } = usePillForm();

    const { entryDate, fillDate, fillDuration, pillsPrescribed } = form;
    const { pillsPerDay, expectedPillsRemaining, daysRemaining, percentageDone } = results;

    function resetCalculator() {
        entryDate.setValue(sanitizeDate(new Date()));
        fillDate.setValue(sanitizeDate(new Date()));
        pillsPrescribed.setValue(30);
        fillDuration.setValue(30);
        pillsPerDay.setValue(0);
        expectedPillsRemaining.setValue(0);
        daysRemaining.setValue(0);
        percentageDone.setValue(0);

        Track("Reset Button Clicked");
    }

    return (
        <Button mode="outlined" onPress={resetCalculator}>
            Reset
        </Button>
    );
}

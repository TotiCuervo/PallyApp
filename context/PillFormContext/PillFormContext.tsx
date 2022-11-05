import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    Dispatch,
    SetStateAction,
} from "react";
import useForm from "../../hooks/FormHooks";
import { form as initialForm, results as initialResults } from "./forms";
import { FormType, InputFormType } from "types";
import _ from "lodash";
import { Track } from "../../components/reusable/Track";

interface ContextType {
    form: FormType;
    results: FormType;
    inputForm: InputFormType | undefined;
    setInputForm: Dispatch<SetStateAction<any>>;
    calculate: () => void;
    canCalculate: boolean;
}

export const PillFormContext = createContext<Partial<ContextType>>({});

export const PillFormProvider = ({ children }: any) => {
    const [inputForm, setInputForm] = useState<InputFormType>();
    const form = useForm(initialForm);
    const results = useForm(initialResults);

    const canCalculate =
        Number(form.pillsPrescribed.value) > 0 &&
        Number(form.fillDuration.value) > 0 &&
        form.fillDate.valid &&
        form.entryDate.valid;

    useEffect(() => {
        form.fillDate.setValid(form.fillDate.value <= form.entryDate.value);
        form.entryDate.setValid(form.fillDate.value <= form.entryDate.value);
    }, [form.fillDate.value, form.entryDate.value]);

    useEffect(() => {
        form.pillsPrescribed.setValid(form.pillsPrescribed.value > 0 ? true : undefined);
        form.fillDuration.setValid(form.fillDuration.value > 0 ? true : undefined);
    }, [form.pillsPrescribed.value, form.fillDuration.value]);

    function calculate() {
        if (canCalculate) {
            const { fillDate, fillDuration, entryDate, pillsPrescribed } = form;
            const {
                nextFillDate,
                pillsPerDay,
                expectedPillsRemaining,
                daysRemaining,
                percentageDone,
            } = results;

            // get how long it is till the next fill date
            const tempNextFillDate = new Date(fillDate.value.getTime());

            tempNextFillDate.setDate(tempNextFillDate.getDate() + Number(fillDuration.value));

            nextFillDate.setValue(tempNextFillDate);
            const amountOfDaysTillNextFill = getDayDifference(fillDate.value, tempNextFillDate);

            // get how long its been
            const howManyDaysItHasBeen = getDayDifference(entryDate.value, fillDate.value);

            // //get how many pills you should take a day
            const tempPillsPerDay = _.round(
                Number(pillsPrescribed.value) / amountOfDaysTillNextFill,
                2
            );
            const tempExpectedPillsRemaining = _.round(
                tempPillsPerDay * (amountOfDaysTillNextFill - howManyDaysItHasBeen)
            );

            const tempDaysRemaining = _.round(tempExpectedPillsRemaining / tempPillsPerDay);

            const tempPercentageDone = 1 - tempDaysRemaining / Number(fillDuration.value);
            // // calculate formula
            pillsPerDay.setValue(tempPillsPerDay);
            expectedPillsRemaining.setValue(tempExpectedPillsRemaining);
            daysRemaining.setValue(tempDaysRemaining);
            percentageDone.setValue(tempPercentageDone);
            Track("Calculate Action Triggered", {
                pillsPerDay: tempPillsPerDay,
                expectedPillsRemaining: tempExpectedPillsRemaining,
                daysRemaining: tempDaysRemaining,
                percentageDone: tempPercentageDone * 100,
            });
        }
    }

    function getDayDifference(day1: Date, day2: Date) {
        return Math.ceil(Math.abs(day2.getTime() - day1.getTime()) / (1000 * 60 * 60 * 24));
    }

    const contextValue: ContextType = {
        inputForm,
        setInputForm,
        form,
        results,
        calculate,
        canCalculate,
    };

    return <PillFormContext.Provider value={contextValue}>{children}</PillFormContext.Provider>;
};

export const usePillForm = () => {
    const context = useContext(PillFormContext);
    return {
        form: context.form as FormType,
        results: context.results as FormType,
        inputForm: context.inputForm as InputFormType,
        setInputForm: context.setInputForm as Dispatch<SetStateAction<any>>,
        calculate: context.calculate as () => void,
        canCalculate: context.canCalculate as boolean,
    };
};

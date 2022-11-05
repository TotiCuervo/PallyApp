import React, { Dispatch, SetStateAction } from "react";

export type FormElement = {
    value: Date | Number;
    setValue: Dispatch<SetStateAction<any>>;
    valid: boolean | undefined;
    setValid: Dispatch<SetStateAction<any>>;
};

export type FormType = { [key: string]: FormElement };

export interface InputFormType {
    title: string;
    subtitle: string;
    dataType: DateConstructor | NumberConstructor;
    object: FormElement;
    label?: string;
}

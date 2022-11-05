import React, { useState } from "react";

export default function useForm<T extends object>(fields: T) {
    const form = createForm(fields);

    function createForm<T extends object>(fields: T) {
        const form: { [key: string]: any } = {};

        Object.keys(fields).forEach((fieldName) => {
            form[fieldName] = createFormField(fields[fieldName as keyof T]);
        });

        return form;
    }

    function createFormField<Value>(formField: Value) {
        const [value, setValue] = useState(formField);
        const [valid, setValid] = useState<boolean>(true);

        return {
            value,
            setValue,
            valid,
            setValid,
        };
    }

    return form;
}

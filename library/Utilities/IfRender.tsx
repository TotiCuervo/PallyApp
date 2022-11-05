import React from "react";

const IfRender = ({ condition, children }: { condition: boolean; children: JSX.Element }) => {
    return condition ? children : null;
};
export default IfRender;

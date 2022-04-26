import React, { useState } from "react";

export default () => {
    const [ validation, setValidation ] = useState({"errMsg": "", "borderColor": "#EBEBEB"})
    return [ validation, setValidation ];
}
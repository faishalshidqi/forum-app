import {useState} from "react";

export default function useBooleanInput(defaultValue: boolean = false) {
    const [value, setValue] = useState(defaultValue)

    function onValueChange(event: {target: {value: boolean}}) {
        setValue(event.target.value)
    }

    return [value as boolean, onValueChange]
}
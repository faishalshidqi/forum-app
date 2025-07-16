import {useState} from "react";

export default function useStringInput(defaultValue: string = '') {
    const [value, setValue] = useState(defaultValue)

    function onValueChange(event: {target: {value: string}}) {
        setValue(event.target.value)
    }

    return [value as string, onValueChange]
}
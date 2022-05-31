import { useState } from 'react';

export const useInputWithData = (initialValue, name) => {
    const [value, setValue] = useState(localStorage.getItem(name) || initialValue);

    const onKeyDown = (e) => {
        if (e.keyCode == 13) {
            setValue(e.target.value);
        }
    }

    const onBlur = (e) => {
        setValue(e.target.value);
    }

    return { value, onKeyDown, onBlur };
};
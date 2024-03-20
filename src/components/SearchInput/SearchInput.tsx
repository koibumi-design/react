import React from "react";
import styles from './search.module.scss';
import "../../sass/utils.scss"
import {Input} from "../Input/Input.tsx";
import {useState} from "react";
import {Button} from "../Button/Button.tsx";

interface SearchInputProps {
    placeholder?: string;
    onSearch?: (value: string) => void;
    buttonVariant?: 'solid' | 'outline' | 'flat' | 'ghost';
    buttonColor?: 'primary';
    darkMode?: boolean;
    disabled?: boolean;
    customSearchButton?: string | React.ReactNode;
}

export const SearchInput: React.FC<SearchInputProps> = (props) => {
    const [value, setValue] = useState('');

    const {
        placeholder = '',
        onSearch,
        buttonVariant = 'solid',
        buttonColor = 'primary',
        darkMode,
        disabled,
        customSearchButton = 'Search',
    } = props;
    function onSearchHandler() {
        onSearch?.(value);
    }

    return (
        <div className={styles['search-input']}>
            <Input
                disabled={disabled}
                placeholder={placeholder}
                value={value}
                darkMode={darkMode}
                onKeyDown={e => {
                    if (e.key === 'Enter') {
                        onSearchHandler();
                    }
                }}
                onChange={e => setValue(e.target.value)}
            />
            <Button
                disabled={disabled}
                variant={buttonVariant}
                color={buttonColor}
                darkMode={darkMode}
                onClick={onSearchHandler}
            >
                {customSearchButton}
            </Button>
        </div>
    )

}
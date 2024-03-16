import React from "react";
import styles from './input.module.scss';
import classNames from "classnames";
import {useDarkMode} from "../../hooks/useDarkMode.ts";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    variant?: 'solid',
    color?: 'normal',
    darkMode?: boolean,
    disabled?: boolean,
}

export const Input: React.FC<InputProps> = (props) => {
    const {
        variant = 'solid',
        disabled,
        darkMode,
        color = 'normal',
        className,
        ...rest
    } = props;
    const mainClass = styles[`input-${variant}-${color}`];
    const globalDarkMode = useDarkMode().isDarkMode;
    const classList = classNames(
        className,
        mainClass,
        {
            [styles['dark-mode']]: darkMode ?? globalDarkMode
        },
        {
            [styles['fix-margin-top']]: props.label == ''
        }
    )

    return (
        <label className={classList}>
            {props.label}
            <input
                className={styles.input}
                disabled={disabled}
                {...rest}
            />
        </label>
    )
}

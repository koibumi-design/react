import React from 'react';
import styles from './input.module.scss';
import classNames from 'classnames';
import { useDarkMode } from '../../hooks/useDarkMode.ts';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    variant?: 'solid';
    color?: 'normal';
    darkMode?: boolean;
    disabled?: boolean;
}

export const Input: React.FC<InputProps> = (props) => {
    const {
        variant = 'solid',
        disabled,
        darkMode,
        color = 'normal',
        className,
        placeholder,
        ...rest
    } = props;
    const mainClass = styles[`input-${variant}-${color}`];
    const globalDarkMode = useDarkMode().isDarkMode;
    const classList = classNames(
        className,
        mainClass,
        {
            [styles['dark-mode']]: darkMode ?? globalDarkMode,
        },
        {
            [styles['fix-margin-top']]: props.label == '' || placeholder == '',
        },
    );

    return (
        <label className={classList}>
            {placeholder == '' ? '' : props.label}
            <input
                className={styles.input}
                disabled={disabled}
                placeholder={placeholder != '' ? placeholder : props.label}
                {...rest}
            />
        </label>
    );
};

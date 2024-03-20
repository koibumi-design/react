import React, { ButtonHTMLAttributes } from 'react';
import styles from './button.module.scss';
import classNames from 'classnames';

import { useDarkMode } from '../../hooks/useDarkMode.ts';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * The variant of the button
     * @default 'solid'
     */
    variant?: 'solid' | 'light' | 'outline' | 'flat' | 'ghost' | 'glow';
    color?: 'primary';
    darkMode?: boolean;
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
    const {
        variant = 'solid',
        disabled,
        children,
        darkMode,
        color = 'primary',
        className,
        ...rest
    } = props;
    const mainClass = styles[`button-${variant}-${color}`];
    const darkContext = useDarkMode().isDarkMode;

    return (
        <button
            className={classNames(
                mainClass,
                className,
                {
                    [styles['button-disabled']]: disabled,
                },
                {
                    [styles['dark-mode']]: darkMode ?? darkContext,
                },
            )}
            disabled={disabled}
            {...rest}
        >
            {children}
        </button>
    );
};

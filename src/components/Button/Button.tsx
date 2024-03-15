import React, {ButtonHTMLAttributes} from "react";
import styles from './button.module.scss';
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * The variant of the button
     * @default 'solid'
     */
    variant?: 'solid' | 'light' | 'outline' | 'flat' | 'ghost' | 'glow',
    color?: 'primary'

    disabled?: boolean,
}

export const Button: React.FC<ButtonProps> = (props) => {
    const {
        variant = 'solid',
        disabled,
        children,
        color = 'primary',
        className,
        ...rest
    } = props;
    const mainClass = styles[`button-${variant}-${color}`];

    return (
        <button
            className={
                classNames(
                    mainClass,
                    className,
                    {'button-disabled': disabled},
                )
            }
            disabled={disabled}
            {...rest}
        >
            {children}
        </button>
    )
}
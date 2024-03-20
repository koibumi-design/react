import React from 'react';
import styles from './typo.module.scss';
import classNames from 'classnames';

interface TypographyProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
    emphasis?: boolean;
    darkMode?: boolean;
}

export const Typo: React.FC<TypographyProps> = (props) => {
    const {
        variant = 'p',
        emphasis,
        children,
        darkMode,
        className,
        ...rest
    } = props;
    const classNameList = classNames(
        className,
        {
            [styles.emphasize]: emphasis,
        },
        styles[variant],
        {
            [styles['dark-mode']]: darkMode,
        },
    );
    switch (variant) {
        case 'h1':
            return (
                <h1 className={classNameList} {...rest}>
                    {children}
                </h1>
            );
        case 'h2':
            return (
                <h2 className={classNameList} {...rest}>
                    {children}
                </h2>
            );
        case 'h3':
            return (
                <h3 className={classNameList} {...rest}>
                    {children}
                </h3>
            );
        case 'h4':
            return (
                <h4 className={classNameList} {...rest}>
                    {children}
                </h4>
            );
        case 'h5':
            return (
                <h5 className={classNameList} {...rest}>
                    {children}
                </h5>
            );
        case 'h6':
            return (
                <h6 className={classNameList} {...rest}>
                    {children}
                </h6>
            );
        case 'p':
            return (
                <p className={classNameList} {...rest}>
                    {children}
                </p>
            );
        default:
            return (
                <p className={classNameList} {...rest}>
                    {children}
                </p>
            );
    }
};

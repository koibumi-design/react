import React from 'react';
import { Button } from '../Button/Button.tsx';
import styles from './buttonGroup.module.scss';
import classNames from 'classnames';
import { ReactElement } from 'react';

interface ButtonGroupProps {
    direction?: 'row' | 'column';
    children: ReactElement<typeof Button> | ReactElement<typeof Button>[];
    className?: string;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = (props) => {
    const { direction = 'row', children, className } = props;
    return (
        <div
            className={classNames(
                styles['button-group'],
                styles[`${direction}`],
                className,
            )}
        >
            {children}
        </div>
    );
};

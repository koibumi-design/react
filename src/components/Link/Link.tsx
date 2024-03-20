import React from 'react';
import styles from './link.module.scss';
import classNames from 'classnames';
import '../../sass/global.scss';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    darkMode?: boolean;
}

export const Link: React.FC<LinkProps> = (props) => {
    const { className, darkMode = false, children, ...rest } = props;
    return (
        <a
            className={classNames(
                styles.link,
                { [styles['dark-mode']]: darkMode },
                className,
            )}
            {...rest}
        >
            {children}
        </a>
    );
};

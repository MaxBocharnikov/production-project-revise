import {ButtonHTMLAttributes, FC} from 'react';
import {classNames} from 'shared/lib/classNames';

import style from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme: ButtonTheme;
    className?: string;
}

export const Button: FC<ButtonProps> = (props) => {
    const {onClick, children, theme, className, ...otherProps} = props;
    return (
        <button
            onClick={onClick}
            className={classNames(style.Button, {}, [className, style[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
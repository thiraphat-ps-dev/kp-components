import React from 'react';
import { ButtonProps } from '@mui/material';
export interface ButtonCustomProps extends Omit<ButtonProps, 'type' | 'size'> {
    state?: 'normal' | 'hover' | 'press' | 'focus' | 'disable';
    types?: 'primary' | 'secondary' | 'tertiary' | 'default' | 'ghost' | 'link' | 'apple-primary' | 'apple-default' | 'apple-outline' | 'google' | 'facebook';
    size?: 'medium' | 'large' | 'small';
}
declare const Button: React.FC<ButtonCustomProps>;
export default Button;

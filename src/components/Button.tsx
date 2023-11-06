import * as React from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends React.HtmlHTMLAttributes<HTMLElement> {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({ className, type, children, disabled, ...props }: ButtonProps) {
  const cls = clsx(`button`, className);
  return (
    <button {...props} type={type} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}

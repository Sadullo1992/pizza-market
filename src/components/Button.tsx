import * as React from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends React.HtmlHTMLAttributes<HTMLElement> {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  href?: string;
  target?: string;
}

export default function Button({
  className,
  type,
  children,
  disabled,
  href,
  target,
  ...props
}: ButtonProps) {
  const cls = clsx(`button`, className);
  return href ? (
    <a href={href} target={target} className={cls}>
      {children}
    </a>
  ) : (
    <button {...props} type={type} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}

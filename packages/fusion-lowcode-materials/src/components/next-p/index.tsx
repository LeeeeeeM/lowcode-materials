import React, { FC, CSSProperties, ReactNode } from 'react';

interface NextPProps {
  children?: ReactNode | null;
  style?: CSSProperties;
}

export const NextP: FC<NextPProps> = (props) => {
  const { children, style = {} } = props;
  return <>
    {children ? <div style={style}>{children}</div> : null}
  </>
}

export const NextBlock: FC<NextPProps> = (props) => {
  const { children, style = {} } = props;
  return <>
    {children ? <div style={style}>{children}</div> : null}
  </>
}

export const NextBlockCell: FC<NextPProps> = (props) => {
  const { children, style = {} } = props;
  return <>
    {children ? <div style={style}>{children}</div> : null}
  </>
}

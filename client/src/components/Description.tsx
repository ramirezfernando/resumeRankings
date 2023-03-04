import React, { FC } from 'react';

interface TextProps {
  title: string;
  text: string;
}

const Description: FC<TextProps> = ({title, text}) => {
  return (
    <>
      <h1>Description</h1>
      <div>{title}</div>
      <div>{text}</div>
    </>
  );
};

export default Description;
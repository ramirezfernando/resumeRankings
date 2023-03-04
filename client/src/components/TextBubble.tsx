import React, { FC } from 'react';

interface TextProps {
  text: string;
}

const TextBubble: FC<TextProps> = ({text}) => {
  return (
    <>
      <h1>TextBubble</h1>
      <span>{text}</span>
    </>
  );
};

export default TextBubble;
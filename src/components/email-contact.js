import React from 'react';

export const EmailTemplate = ({heading, content}) => (
  <div>
    <h1 className='font-bold text-5xl'>{heading}</h1>
    <p>{content}</p>
  </div>
);

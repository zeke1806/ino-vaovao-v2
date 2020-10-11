import * as React from 'react';
import Title from '../Titles';

export type TextProps = {
  title: string;
};

const HeaderTitle: React.FC<TextProps> = ({ title }) => (
  <Title text={title} type="h1" />
);

export default HeaderTitle;

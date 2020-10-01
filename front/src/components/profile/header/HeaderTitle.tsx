import * as React from 'react';
import { Text } from 'native-base';
import { globalStyles } from '../../../styles/global';

export type TextProps = {
  title: string;
};

const HeaderTitle: React.FC<TextProps> = ({ title }) => (
  <Text
    style={{ color: globalStyles.colors.primary, flex: 1, fontWeight: 'bold' }}
  >
    {title}
  </Text>
);

export default HeaderTitle;

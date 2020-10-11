import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'native-base';
import { globalStyles } from '../../styles/global';

interface TitleProps {
  text: string;
  type: 'h1' | 'h2' | 'h3';
}

const Title: React.FC<TitleProps> = ({ text, type }) => {
  return <Text style={styles[type]}>{text}</Text>;
};

const styles = StyleSheet.create({
  h1: {
    fontWeight: 'bold',
    color: globalStyles.colors.primary,
  },

  h2: {
    fontWeight: '900',
    color: '#505050',
  },

  h3: {
    fontWeight: '800',
    color: '#262626',
  },
});

export default Title;

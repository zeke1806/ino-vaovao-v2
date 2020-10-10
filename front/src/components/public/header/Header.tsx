import * as React from 'react';
import HeaderTitle from './HeaderTitle';
import { StyleSheet } from 'react-native';
import { View } from 'native-base';

interface HeaderProps {
  left?: JSX.Element;
  title: string;
  right?: JSX.Element;
}

const Header: React.FC<HeaderProps> = ({ left, title, right }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>{left}</View>
      <HeaderTitle title={title} />
      <View
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}
      >
        {right}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Header;

import * as React from 'react';
import BackBtn from './BackBtn';
import HeaderTitle from './HeaderTitle';
import { StyleSheet } from 'react-native';
import { View } from 'native-base';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <BackBtn />
      <HeaderTitle title={'Modifier Profile'} />
      <View style={{ flex: 1 }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 5,
  },
});

export default Header;

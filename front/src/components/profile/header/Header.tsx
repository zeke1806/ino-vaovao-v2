import * as React from 'react';
import BackBtn from './BackBtn';
import HeaderTitle from './HeaderTitle';
import Logout from './Logout';
import { StyleSheet } from 'react-native';
import { View } from 'native-base';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <BackBtn />
      </View>
      <HeaderTitle title={'Modifier Profile'} />
      <View
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}
      >
        <Logout />
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

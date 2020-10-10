import * as React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { PhotoScreenNavigation } from '../../navigations/ProfileNavigator';
import { View } from 'native-base';
import { alert } from '../../utils/alert';
import { globalStyles } from '../../styles/global';
import { useNavigation } from '@react-navigation/core';

const Header: React.FC = () => {
  const navigation = useNavigation<PhotoScreenNavigation>();
  return (
    <View
      style={{
        paddingHorizontal: globalStyles.screenHorizontalPadding,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <MaterialIcons
        name="arrow-back"
        size={globalStyles.iconSize}
        color="white"
        onPress={navigation.goBack}
      />
      <MaterialIcons
        name="clear"
        size={globalStyles.iconSize}
        color="white"
        onPress={(): void => {
          alert('Confirmation', '', 'Enregistrer', 'default', () =>
            console.log('lemonde'),
          );
        }}
      />
    </View>
  );
};

export default Header;

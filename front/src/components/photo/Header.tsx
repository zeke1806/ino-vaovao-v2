import * as React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { PhotoScreenNavigation } from '../../navigations/ProfileNavigator';
import RemovePhoto from './RemovePhoto';
import { View } from 'native-base';
import { globalStyles } from '../../styles/global';
import { useNavigation } from '@react-navigation/core';

interface HeaderProps {
  publicId: string;
}

const Header: React.FC<HeaderProps> = ({ publicId }) => {
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
      <RemovePhoto publicId={publicId} />
    </View>
  );
};

export default Header;

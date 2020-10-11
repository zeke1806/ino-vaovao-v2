import * as React from 'react';
import { Text, View } from 'native-base';
import { Image } from 'react-native';
import { SUGGESTION_FRIEND } from '../../../utils/Icons';
import { globalStyles } from '../../../styles/global';

const Title: React.FC = () => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: globalStyles.space,
    }}
  >
    <Image
      source={SUGGESTION_FRIEND}
      style={{
        width: globalStyles.iconSize * 2,
        height: globalStyles.iconSize * 2,
        marginRight: globalStyles.space,
      }}
    />
    <Text style={{ color: '#505050', fontWeight: 'bold' }}>
      Suggestion d&apos;amis
    </Text>
  </View>
);

export default Title;

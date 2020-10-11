import * as React from 'react';
import { Text, View } from 'native-base';
import CommonAvatar from '../../public/CommonAvatar';
import { globalStyles } from '../../../styles/global';

const SuggestionItem: React.FC = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginHorizontal: globalStyles.space,
        maxWidth: globalStyles.space * 10,
      }}
    >
      <CommonAvatar size="medium" />
      <Text style={{ textAlign: 'center' }}>ngia</Text>
    </View>
  );
};

export default SuggestionItem;

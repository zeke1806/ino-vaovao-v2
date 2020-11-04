import * as React from 'react';

import { Text, View } from 'native-base';

import CommonAvatar from '../public/CommonAvatar';
import { globalStyles } from '../../styles/global';
import { useSelectRecipientState } from '../../providers/select-recipient/selectRecipient.consumer';

const Member: React.FC = () => {
  const { selectedRecipient } = useSelectRecipientState();
  const { space } = globalStyles;

  return (
    <View style={{ alignItems: 'center' }}>
      {selectedRecipient.map((rec) => (
        <View
          key={rec.id}
          style={{
            width: '80%',
            flexDirection: 'row',
            marginVertical: space,
            alignItems: 'center',
          }}
        >
          <CommonAvatar
            size="medium"
            img={rec.currentPhoto ? { uri: rec.currentPhoto.url } : undefined}
          />
          <Text style={{ marginLeft: space }}>{rec.username}</Text>
        </View>
      ))}
    </View>
  );
};

export default Member;

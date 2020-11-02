import * as React from 'react';

import { Button, Text, View } from 'native-base';

import GroupAvatar from '../../public/GroupAvatar';
import Titles from '../../public/Titles';
import { User } from '../../../api/types';
import { globalStyles } from '../../../styles/global';

interface GroupRecipientProp {
  name: string;
  creator: string;
  members: User[];
  img1?: string;
  img2?: string;
}

const GroupRecipient: React.FC<GroupRecipientProp> = ({
  name,
  creator,
  members,
  img1,
  img2,
}) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <View>
        <GroupAvatar img1Url={img1} img2Url={img2} />
      </View>
      <Titles type="h2" text={name} />
      <Titles type="h3" text={`${creator} a creer ce groupe`} />
      <Titles type="h3" text={`Ce groupe compte ${members.length} membre(s)`} />
      <View>
        <Button transparent>
          <Text
            style={{ color: globalStyles.colors.secondary, fontWeight: 'bold' }}
          >
            Ajouter des personnes
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default GroupRecipient;

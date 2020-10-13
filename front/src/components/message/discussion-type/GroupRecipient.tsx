import * as React from 'react';
import { Button, Text, View } from 'native-base';
import GroupAvatar from '../../public/GroupAvatar';
import Titles from '../../public/Titles';
import { globalStyles } from '../../../styles/global';

const GroupRecipient: React.FC = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <View>
        <GroupAvatar />
      </View>
      <Titles type="h2" text="Les anges 12" />
      <Titles type="h3" text="Sarah Millord a creers ce groupe" />
      <Titles type="h3" text="Vous avez 2 membres dans ce groupe" />
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

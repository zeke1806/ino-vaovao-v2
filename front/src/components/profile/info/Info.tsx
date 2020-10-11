import * as React from 'react';
import { IMPORTANT, LOCK } from '../../../utils/Icons';
import Field from './Field';
import ProfileTitleText from '../ProfileTitleText';
import { View } from 'native-base';

interface InfoProps {
  statusConnected: boolean;
}

const Info: React.FC<InfoProps> = ({ statusConnected }) => {
  return (
    <View>
      <ProfileTitleText text="Profil" />
      <Field
        img={IMPORTANT}
        title="Status en ligne"
        value={statusConnected ? 'Actif' : 'Inactif'}
      />
      <Field img={LOCK} title="Mot de passe" value="********" />
    </View>
  );
};

export default Info;

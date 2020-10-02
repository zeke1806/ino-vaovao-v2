import * as React from 'react';
import { IMPORTANT, LOCK } from '../../../utils/Icons';
import Field from './Field';
import ProfileTitleText from '../ProfileTitleText';
import { View } from 'native-base';

const Info: React.FC = () => {
  return (
    <View style={{ paddingLeft: 15 }}>
      <ProfileTitleText text="Profil" size={18} />
      <Field img={IMPORTANT} title="Status en ligne" value="Active" />
      <Field img={LOCK} title="Mot de passe" value="********" />
    </View>
  );
};

export default Info;

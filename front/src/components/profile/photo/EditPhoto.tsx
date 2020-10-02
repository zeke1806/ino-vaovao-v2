import * as React from 'react';
import { Button, Thumbnail } from 'native-base';
import { PENCIL } from '../../../utils/Icons';
import { globalStyles } from '../../../styles/global';

const EditPhoto: React.FC = () => {
  return (
    <Button
      transparent
      style={{
        position: 'absolute',
        bottom: 0,
        left: '30%',
      }}
    >
      <Thumbnail
        source={PENCIL}
        style={{
          width: globalStyles.iconSize * 2,
          height: globalStyles.iconSize * 2,
        }}
      />
    </Button>
  );
};

export default EditPhoto;

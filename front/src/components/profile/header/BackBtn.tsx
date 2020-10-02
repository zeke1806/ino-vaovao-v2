import * as React from 'react';
import { Button, Thumbnail } from 'native-base';
import { BACK_ARROW } from '../../../utils/Icons';

const BackBtn: React.FC = () => (
  <Button transparent>
    <Thumbnail
      source={BACK_ARROW}
      style={{
        height: 45,
        width: 45,
      }}
    />
  </Button>
);

export default BackBtn;

import * as React from 'react';
import { Badge, Thumbnail } from 'native-base';
import { ImageSourcePropType, View } from 'react-native';
import { FAKE_PROFILE } from '../../utils/Icons';

interface CommonAvatarProps {
  img?: ImageSourcePropType;
  connected?: boolean;
  size: 'small' | 'medium' | 'large';
}

const CommonAvatar: React.FC<CommonAvatarProps> = ({
  img,
  connected,
  size,
}) => {
  const SIZE = (function f(): Record<string, boolean> {
    if (size === 'small') return { small: true };
    else if (size === 'large') return { large: true };
    else return {};
  })();

  return (
    <View style={{ position: 'relative', alignSelf: 'flex-start' }}>
      <Thumbnail {...SIZE} source={img || FAKE_PROFILE} />
      {connected && (
        <Badge
          style={{
            position: 'absolute',
            width: 15,
            height: 15,
            borderRadius: 100,
            backgroundColor: '#34C673',
            bottom: 0,
            right: 0,
          }}
        ></Badge>
      )}
    </View>
  );
};

export default CommonAvatar;

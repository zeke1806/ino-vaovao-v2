import * as React from 'react';
import { Badge, Thumbnail } from 'native-base';
import { ImageSourcePropType, View } from 'react-native';
import { FAKE_PROFILE } from '../../utils/Icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface CommonAvatarProps {
  img?: ImageSourcePropType;
  connected?: boolean;
  onPress?: () => void;
  size: 'small' | 'medium' | 'large';
}

const CommonAvatar: React.FC<CommonAvatarProps> = ({
  img,
  connected,
  size,
  onPress,
}) => {
  const SIZE = (function f(): Record<string, boolean> {
    if (size === 'small') return { small: true };
    else if (size === 'large') return { large: true };
    else return {};
  })();

  return (
    <TouchableOpacity onPress={onPress}>
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
    </TouchableOpacity>
  );
};

export default CommonAvatar;

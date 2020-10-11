import * as React from 'react';
import { ImageSourcePropType, View } from 'react-native';
import { FAKE_PROFILE } from '../../utils/Icons';
import IndicatorBadge from './IndicatorBadge';
import { Thumbnail } from 'native-base';
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
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
            }}
          >
            <IndicatorBadge color="#34C673" />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CommonAvatar;

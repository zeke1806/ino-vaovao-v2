import * as React from 'react';
import { ImageSourcePropType, View } from 'react-native';
import { Text, Thumbnail } from 'native-base';
import { FAKE_PROFILE } from '../../utils/Icons';
import IndicatorBadge from './IndicatorBadge';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { globalStyles } from '../../styles/global';

interface CommonAvatarProps {
  img?: ImageSourcePropType;
  connected?: boolean;
  onPress?: () => void;
  name?: string;
  size: 'small' | 'medium' | 'large';
}

const CommonAvatar: React.FC<CommonAvatarProps> = ({
  img,
  connected,
  size,
  onPress,
  name,
}) => {
  const SIZE = (function f(): Record<string, boolean> {
    if (size === 'small') return { small: true };
    else if (size === 'large') return { large: true };
    else return {};
  })();

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          alignItems: 'center',
          alignSelf: 'flex-start',
          marginHorizontal: globalStyles.space / 1.5,
          maxWidth: globalStyles.space * 10,
        }}
      >
        <View>
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
        </View>
        {name && <Text style={{ textAlign: 'center' }}>{name}</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default CommonAvatar;

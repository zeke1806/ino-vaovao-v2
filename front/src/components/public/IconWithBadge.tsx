import * as React from 'react';

import { Badge, Text } from 'native-base';
import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native';

import { globalStyles } from '../../styles/global';

interface Prop {
  img: ImageSourcePropType;
  onPress?: () => void;
  badge?: string;
  size?: number;
  badgePosition?: {
    top: number;
    right: number;
  };
}

const IconWithBadge: React.FC<Prop> = ({
  onPress,
  img,
  badge,
  size,
  badgePosition,
}) => {
  return (
    <TouchableOpacity
      disabled={!onPress}
      onPress={onPress}
      style={{ position: 'relative' }}
    >
      <Image
        style={{
          width: size,
          height: size,
          marginHorizontal: 3,
        }}
        source={img}
      />
      {badge && badge !== '0' && (
        <Badge
          style={{
            position: 'absolute',
            ...badgePosition,
            backgroundColor: globalStyles.colors.primary,
          }}
        >
          <Text>{badge}</Text>
        </Badge>
      )}
    </TouchableOpacity>
  );
};

IconWithBadge.defaultProps = {
  size: globalStyles.iconSize * 1.2,
  badgePosition: {
    top: -10,
    right: -10,
  },
};

export default IconWithBadge;

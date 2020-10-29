import * as React from 'react';

import { Badge, Text } from 'native-base';
import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native';

import { globalStyles } from '../../styles/global';

interface Prop {
  img: ImageSourcePropType;
  onPress?: () => void;
  badge?: string;
  size?: number;
}

const IconWithBadge: React.FC<Prop> = ({ onPress, img, badge, size }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ position: 'relative' }}>
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
            top: -10,
            right: -10,
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
};

export default IconWithBadge;

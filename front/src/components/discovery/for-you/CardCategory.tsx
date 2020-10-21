import * as React from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';
import { SPRING_MOOD } from '../../../utils/Icons';
import { Text } from 'native-base';
import { globalStyles } from '../../../styles/global';

interface CardCategoryProps {
  categoryTitle: string;
  categoryItemTitle: string;
  categoryItemContent: string;
  categoryItemSideContent: string;
  image: string;
  onPress?: () => void;
}

const CardCategory: React.FC<CardCategoryProps> = ({
  categoryTitle,
  categoryItemTitle,
  categoryItemContent,
  categoryItemSideContent,
  image,
  onPress,
}) => {
  return (
    <TouchableOpacity
      disabled={!onPress}
      onPress={onPress}
      style={[
        globalStyles.elevation,
        {
          width: '48%',
          height: globalStyles.iconSize * 8,
          margin: globalStyles.space / 4,
          borderRadius: globalStyles.space,
        },
      ]}
    >
      <ImageBackground
        source={image ? { uri: image } : SPRING_MOOD}
        style={{
          flex: 1,
          justifyContent: 'space-around',
          padding: globalStyles.space / 3,
        }}
        imageStyle={{ borderRadius: globalStyles.space }}
      >
        <Text
          style={[
            {
              color: 'white',
              fontWeight: 'bold',
            },
            globalStyles.textShadow,
          ]}
        >
          {categoryTitle}
        </Text>

        <Text
          style={[
            {
              color: 'white',
              fontWeight: 'bold',
              fontSize: globalStyles.iconSize,
            },
            globalStyles.textShadow,
          ]}
        >
          {categoryItemTitle}
        </Text>

        <Text
          style={[
            {
              color: 'white',
              fontWeight: 'bold',
              fontSize: globalStyles.iconSize / 2,
            },
            globalStyles.textShadow,
          ]}
        >
          {categoryItemContent}
        </Text>
        <Text
          style={[
            { color: 'white', alignSelf: 'flex-end' },
            globalStyles.textShadow,
          ]}
        >
          {categoryItemSideContent}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CardCategory;

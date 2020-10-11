import * as React from 'react';
import { Text, View } from 'native-base';
import { ImageBackground } from 'react-native';
import { SPRING_MOOD } from '../../../utils/Icons';
import { globalStyles } from '../../../styles/global';

const CardCategory: React.FC = () => {
  return (
    <View
      style={{
        width: '48%',
        height: globalStyles.iconSize * 8,
        margin: globalStyles.space / 4,
      }}
    >
      <ImageBackground
        source={SPRING_MOOD}
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
          Fashion
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
          MEJIWOO SPRING MOOD
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
          RUBIS BLUS{'\n'}KRAN PANTS{'\n'}MARTIN TRENSH COA
        </Text>
        <Text
          style={[
            { color: 'white', alignSelf: 'flex-end' },
            globalStyles.textShadow,
          ]}
        >
          Il y a 3 min
        </Text>
      </ImageBackground>
    </View>
  );
};

export default CardCategory;

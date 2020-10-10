import * as React from 'react';
import { Text, View } from 'native-base';
import { Image } from 'react-native';
import SetPhotoAsCurrent from './SetPhotoAsCurrent';
import { globalStyles } from '../../styles/global';

interface VisualizeProps {
  publicId: string;
  uri: string;
  dimensions: {
    width: number;
    height: number;
  };
}

const Visualize: React.FC<VisualizeProps> = ({ uri, dimensions, publicId }) => {
  return (
    <View
      style={{
        position: 'relative',
        flex: 1,
        margin: globalStyles.screenHorizontalPadding,
        justifyContent: 'center',
      }}
    >
      <Image
        source={{
          uri,
        }}
        style={{
          flex: 0.7,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 10,
        }}
      >
        <SetPhotoAsCurrent publicId={publicId} />
        <Text style={{ color: 'white' }}>
          {dimensions.width} X {dimensions.height}
        </Text>
      </View>
    </View>
  );
};

export default Visualize;

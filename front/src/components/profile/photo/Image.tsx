import * as React from 'react';
import { ImageSourcePropType, StyleSheet } from 'react-native';
import { FAKE_PROFILE } from '../../../utils/Icons';
import { Thumbnail } from 'native-base';

const Image: React.FC<{
  img?: ImageSourcePropType;
}> = ({ img }) =>
  img ? (
    <Thumbnail style={styles.image} source={img} />
  ) : (
    <Thumbnail style={styles.image} source={FAKE_PROFILE} />
  );

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
});

export default Image;

import * as React from 'react';
import { Button, Container, H2, Text, Thumbnail } from 'native-base';
import { ImageSourcePropType, StyleSheet } from 'react-native';
import {
  PRESENTATION1,
  PRESENTATION2,
  PRESENTATION3,
  PRESENTATION4,
} from '../utils/Icons';
import { useNavigation, useRoute } from '@react-navigation/core';
import AsyncStorage from '@react-native-community/async-storage';
import { FIRST_BOOT } from '../configs';
import { PresentationNavigatorParamList } from '../navigations/PresentationNavigator';
import { globalStyles } from '../styles/global';
import { screenHeight } from '../utils/Styles';
import { useSessionDispatch } from '../providers/session/session.consumer';

export async function handleLastPresentationBtn(
  routeName: string,
  navigateTo: () => void,
  firstUsage: () => void,
): Promise<void> {
  if (routeName !== 'Presentation4') navigateTo();
  else {
    // truc async pour specifier le premier demarrage
    // await AsyncStorage.setItem(FIRST_BOOT, 'true');
    firstUsage();
  }
}

type PresentationScreenProps = {
  img: ImageSourcePropType;
  title1: string;
  title2: string;
  btnText: string;
  to: keyof PresentationNavigatorParamList;
};

const PresentationScreen: React.FC<PresentationScreenProps> = ({
  img,
  title1,
  title2,
  btnText,
  to,
}) => {
  const sessionDispatch = useSessionDispatch();
  const navigation = useNavigation();
  const route = useRoute();

  const navigateTo = (): void => {
    navigation.navigate(to);
  };

  const firstUsage = (): void => {
    sessionDispatch({ type: 'FIRST_USAGE' });
  };

  return (
    <Container style={styles.container}>
      <Thumbnail source={img} style={styles.img} />
      <H2 style={styles.title1}>{title1}</H2>
      <Text style={styles.title2}>{title2}</Text>
      <Button
        rounded
        style={styles.btnCtn}
        onPress={(): void => {
          handleLastPresentationBtn(route.name, navigateTo, firstUsage);
        }}
      >
        <Text style={styles.btnText}>{btnText}</Text>
      </Button>
    </Container>
  );
};

const spaceY = (screenHeight * 5) / 100;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title1: {
    textAlign: 'center',
    color: globalStyles.colors.text1,
    marginTop: spaceY * 2,
    marginBottom: spaceY / 5,
  },

  title2: {
    color: globalStyles.colors.text2,
    textAlign: 'center',
    width: '80%',
  },

  btnCtn: {
    marginTop: spaceY,
    alignSelf: 'center',
    backgroundColor: globalStyles.colors.secondary,
    minWidth: '35%',
    display: 'flex',
    justifyContent: 'center',
  },

  btnText: {
    fontWeight: 'bold',
    color: 'white',
  },

  img: {
    width: (screenHeight * 35) / 100,
    height: (screenHeight * 35) / 100,
  },
});

export const Presentation1Screen = (): JSX.Element => (
  <PresentationScreen
    img={PRESENTATION1}
    title1="Restez connecte"
    title2="Echangez avec vos amis avec Ino Vaovao"
    btnText="4 Commencer"
    to="Presentation2"
  />
);

export const Presentation2Screen = (): JSX.Element => (
  <PresentationScreen
    img={PRESENTATION2}
    title1="Consulter les news"
    title2="Decouvrez les dernieres actualites et partagez avec vos amis"
    btnText="3 Suivant"
    to="Presentation3"
  />
);

export const Presentation3Screen = (): JSX.Element => (
  <PresentationScreen
    img={PRESENTATION3}
    title1="Discussion de groupe"
    title2="Decouvrez les dernieres actualites et partagez avec vos amis"
    btnText="2 Suivant"
    to="Presentation4"
  />
);

export const Presentation4Screen = (): JSX.Element => (
  <PresentationScreen
    img={PRESENTATION4}
    title1="Discussion privee"
    title2="Decouvrez les dernieres actualites et partagez avec vos amis"
    btnText="1 Inscrivez-vous"
    to="Presentation4"
  />
);

import * as React from 'react';

import {
  SEND_MESSAGE_EVENT,
  SendMessageEventData,
  SendMessageEventVariables,
} from './event.gql';

import { Audio } from 'expo-av';
import { useMe } from '../../user/me/me.service';
import { useSubscription } from '@apollo/client';

export const useAudio = (): (() => void) => {
  const [sound, setSound] = React.useState<Audio.Sound | null>(null);

  React.useEffect(() => {
    Audio.setAudioModeAsync({
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
      shouldDuckAndroid: true,
      playThroughEarpieceAndroid: true,
    }).then(() => {
      setSound(new Audio.Sound());
    });
  }, []);

  React.useEffect(() => {
    if (sound) {
      const status = {
        shouldPlay: false,
      };
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      sound.loadAsync(require('../../../../assets/c.mp3'), status, false);
    }
  }, [sound]);

  const playSound = (): void => {
    if (sound) {
      sound.playAsync().then(() => {
        if (sound) {
          sound.setPositionAsync(0);
        }
      });
    }
  };

  return playSound;
};

type UseSendMessageEventReturn = SendMessageEventData | undefined;
export const useSendMessageEvent = (
  variables: SendMessageEventVariables,
): UseSendMessageEventReturn => {
  const { data } = useSubscription<
    SendMessageEventData,
    SendMessageEventVariables
  >(SEND_MESSAGE_EVENT, {
    variables,
  });

  return data;
};

export const useNotificationSound = (): void => {
  const playSound = useAudio();
  const { meData } = useMe();
  const varsId = meData ? meData.me.id : 0;
  const data = useSendMessageEvent({ clientId: varsId, userId: varsId });

  React.useEffect(() => {
    if (data && data.sendMessageEvent.lastMessage && meData) {
      if (
        data.sendMessageEvent.lastMessage.message.sender.id !== meData.me.id
      ) {
        playSound();
      }
    }
  }, [data]);
};

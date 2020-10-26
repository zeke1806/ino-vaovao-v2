import * as React from 'react';
import * as listStyle from '../contact-navigator/listStyle';

import { Text, View } from 'native-base';

import CommonAvatar from '../public/CommonAvatar';
import { FlatList } from 'react-native-gesture-handler';
import { ListRenderItem } from 'react-native';
import SubmitBtn from '../public/SubmitBtn';
import { globalStyles } from '../../styles/global';

const List: React.FC = () => {
  const renderItem: ListRenderItem<any> | null | undefined = () => {
    return (
      <View
        style={{
          marginTop: globalStyles.space,
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}
      >
        <CommonAvatar size="medium" />
        <View>
          <Text style={{ marginBottom: globalStyles.space }}>nom prenom</Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ marginRight: globalStyles.space }}>
              <SubmitBtn
                title="Confirmer"
                onClick={(): void => {
                  //
                }}
                loading={false}
                btnColor={globalStyles.colors.secondary}
              />
            </View>
            <SubmitBtn
              title="Annuler"
              onClick={(): void => {
                //
              }}
              loading={false}
              btnColor="blabla"
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={[1, 2]}
      renderItem={renderItem}
      contentContainerStyle={listStyle.contentContainerStyle}
    />
  );
};

export default List;

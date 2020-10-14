import * as React from 'react';
import { CheckBox, Text, View } from 'native-base';
import { globalStyles } from '../../styles/global';

interface StyledModalCheckBox {
  value: boolean;
  title: string;
  onChange: () => void;
}

const StyledModalCheckbox: React.FC<StyledModalCheckBox> = ({
  value,
  onChange,
  title,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 10,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}
      >
        <CheckBox
          color={globalStyles.colors.primary}
          checked={value}
          style={{ marginRight: 25 }}
          onPress={onChange}
        />
        <Text>{title}</Text>
      </View>
    </View>
  );
};

export default StyledModalCheckbox;

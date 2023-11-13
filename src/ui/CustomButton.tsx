import React from 'react';
import {Button, Text} from 'react-native-paper';
import {commonStyleSheet} from '../common/styles';

interface Props {
  title: string;
  click: () => void;
  type?: string;
  loading?: true | false;
}

const CustomButton = ({title, click, loading}: Props) => {
  return (
    <Button
      onPress={click}
      style={[commonStyleSheet.primaryButton]}
      loading={loading}
      disabled={loading}>
      <Text style={[commonStyleSheet.colorWhite]}>{title}</Text>
    </Button>
  );
};

export default CustomButton;

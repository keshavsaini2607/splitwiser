import React from 'react';
import {Button, Text} from 'react-native-paper';
import {commonStyleSheet} from '../common/styles';

interface Props {
  title: string;
  click: () => void;
  type?: string;
}

const CustomButton = ({title, click}: Props) => {
  return (
    <Button onPress={click} style={[commonStyleSheet.primaryButton]}>
      <Text style={[commonStyleSheet.colorWhite]}>{title}</Text>
    </Button>
  );
};

export default CustomButton;

import {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Color} from '../styles/color.ts';

type ErrorMessageProps = {
  title: string;
  details?: string;
};

export const ErrorMessage: FC<ErrorMessageProps> = ({title, details}) => {
  return (
    <View style={[styles.box]}>
      <Text style={[styles.title]}>{title}</Text>
      {details && <Text style={[styles.description]}>{details}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: Color.Danger,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: Color.White,
  },
  description: {
    fontSize: 16,
    color: Color.White,
  },
});

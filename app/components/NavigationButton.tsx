import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface NavigationButtonProps {
  onPress: () => void;
  title: string;
}

export const NavigationButton: FC<NavigationButtonProps> = ({
  onPress,
  title,
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 4,
    backgroundColor: '#6099ff',
    padding: 8,
    borderRadius: 2,
    shadowOpacity: 0.1,
    shadowColor: '#000',
    shadowOffset: {height: 2, width: 2},
    shadowRadius: 0.5,
  },
  text: {
    color: '#FFF',
    fontSize: 18,
  },
});

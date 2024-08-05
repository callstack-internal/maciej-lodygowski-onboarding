import React, {FC, useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {useDebouncedCallback} from 'use-debounce';
import {Color} from '../styles/color.ts';
import {Search} from '../assets/icons/Search.tsx';
import {paddingStandard} from '../styles/common.ts';
import {Close} from '../assets/icons/Close.tsx';

type SearchBarProps = {
  onChange: (value: string) => void;
};

export const SearchBar: FC<SearchBarProps> = ({onChange}) => {
  const debounced = useDebouncedCallback(onChange, 1000);
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');

  return (
    <View style={[styles.row]}>
      <TextInput
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Search city"
        style={[styles.input, paddingStandard]}
        onChangeText={text => {
          setValue(text);
          debounced(text);
        }}
      />
      <View style={[styles.icon]}>
        {isFocused ? (
          <TouchableOpacity
            onPress={() => {
              onChange('');
              setValue('');
            }}>
            <Close />
          </TouchableOpacity>
        ) : (
          <Search />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: Color.LightGrey,
    flex: 1,
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
  },
});

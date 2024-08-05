import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useLoadForecast} from '../hooks/useLoadForecast.ts';
import {WeatherListItem} from '../components/WeatherListItem.tsx';
import {useNavigation} from '@react-navigation/native';
import {AppStackNavigationProps} from '../AppRouter.tsx';
import {ErrorMessage} from '../components/ErrorMessage.tsx';
import {useCities} from '../hooks/useCities.ts';

export const HomeScreen = () => {
  const cities = useCities();
  const forecast = useLoadForecast(cities.data);
  const navigation = useNavigation<AppStackNavigationProps>();

  return (
    <View style={[styles.container]}>
      {forecast.isLoading && <ActivityIndicator />}
      {forecast.isSuccess && (
        <FlatList
          refreshing={forecast.isRefetching}
          onRefresh={forecast.refetch}
          style={[styles.container]}
          data={forecast.data?.data.list}
          renderItem={({item}) => (
            <WeatherListItem
              onPress={() => navigation.navigate('Details', item)}
              item={item}
            />
          )}
        />
      )}
      {forecast.isError && (
        <ErrorMessage
          title="Weather fetching failed"
          details={forecast.error.message}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

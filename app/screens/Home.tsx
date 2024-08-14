import {Button, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import {
  requestLocationPermission,
  getCurrentLocation,
  ILocation,
} from 'react-native-expose-location';
import React, {useMemo, useState} from 'react';
import {useLoadForecast} from '../hooks/useLoadForecast.ts';
import {WeatherListItem} from '../components/WeatherListItem.tsx';
import {useNavigation} from '@react-navigation/native';
import {AppStackNavigationProps} from '../AppRouter.tsx';
import {ErrorMessage} from '../components/ErrorMessage.tsx';
import {useCities} from '../hooks/useCities.ts';
import {SearchBar} from '../components/SearchBar.tsx';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useLoadCurrentWeather} from '../hooks/useLoadCurrentWeather.ts';

export const HomeScreen = () => {
  const cities = useCities();
  const [currentLocation, setCurrentLocation] = useState<ILocation | null>(
    null,
  );
  const currentWeather = useLoadCurrentWeather(currentLocation);
  const forecast = useLoadForecast(cities.data);
  const navigation = useNavigation<AppStackNavigationProps>();
  const [search, setSearch] = useState('');
  const filteredForecast = useMemo(
    () =>
      forecast.data?.list?.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      ),
    [forecast.data, search],
  );

  return (
    <SafeAreaView edges={['bottom']} style={[styles.container]}>
      <SearchBar onChange={setSearch} />
      <Button
        title="Get current location"
        onPress={async () => {
          const result = await requestLocationPermission();
          if (result) {
            const location = await getCurrentLocation();
            setCurrentLocation(location);
          }
        }}
      />
      {forecast.isLoading && <ActivityIndicator testID="loading-indicator" />}
      {currentWeather.isSuccess && (
        <WeatherListItem
          item={currentWeather.data}
          onPress={() => navigation.navigate('Details', currentWeather.data)}
        />
      )}
      {forecast.isSuccess && (
        <FlatList
          refreshing={forecast.isRefetching}
          onRefresh={forecast.refetch}
          style={[styles.container]}
          data={filteredForecast}
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

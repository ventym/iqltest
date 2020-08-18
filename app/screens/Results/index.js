import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';

import { thunks } from '../../thunks';
import { RaceItem } from './RaceItem';

export const Results = ({ route }) => {
  const dispatch = useDispatch();

  const driverId = route.params.driverId;
  const isLoading = useSelector(state => state.results.isLoading);
  const isLoaded = useSelector(state => state.results.isLoaded);
  const error = useSelector(state => state.results.error);
  const races = useSelector(state => state.results.races);

  React.useEffect(() => {
    dispatch(thunks.fetchResults({ driverId }));
  }, [dispatch, driverId]);

  const renderRaceItem = React.useCallback(
    ({ item }) => <RaceItem race={item} />,
    []
  );

  const racesKeyExtractor = React.useCallback((_, index) => index, []);

  return (
    <View style={styles.screenContainer}>
      {isLoading && (
        <View style={styles.fullScreenCenterContainer}>
          <ActivityIndicator
            size={'large'}
            color={'black'}
          />
        </View>
      )}
      {!isLoading && !isLoaded && (
        <View style={styles.fullScreenCenterContainer}>
          <Text style={styles.errorText}>
            {error}
          </Text>
        </View>
      )}
      {!isLoading && isLoaded && (
        <FlatList
          style={styles.listContainer}
          data={races}
          keyExtractor={racesKeyExtractor}
          renderItem={renderRaceItem}
          initialNumToRender={20}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  fullScreenCenterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    paddingBottom: 8,
  },
});

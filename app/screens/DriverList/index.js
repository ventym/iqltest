import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';

import { thunks } from '../../thunks';
import { DriverItem } from './DriverItem';
import { Paging } from './Paging';

export const DriverList = () => {
  const dispatch = useDispatch();

  const page = useSelector(state => state.drivers.pages[state.drivers.pageIndex]);
  const pageIndex = useSelector(state => state.drivers.pageIndex);

  const handleFetchDrivers = React.useCallback(() => {
    dispatch(thunks.fetchDrivers());
  }, [dispatch]);

  React.useEffect(() => {
    if (!page || (!page.isLoaded && !page.isLoading && !page.error)) {
      handleFetchDrivers();
    }
  }, [handleFetchDrivers, page]);

  const renderDriverItem = React.useCallback(
    ({ item }) => <DriverItem driver={item} />,
    []
  );

  const driverListKeyExtractor = React.useCallback(item => item.driverId, []);

  return (
    <View style={styles.screenContainer}>
      <Paging />
      {(!page || page.isLoading) && (
        <View style={styles.fullScreenCenterContainer}>
          <ActivityIndicator
            size={'large'}
            color={'black'}
          />
        </View>
      )}
      {page && !page.isLoading && !page.isLoaded && (
        <View style={styles.fullScreenCenterContainer}>
          <Text style={styles.errorText}>
            {page.error}
          </Text>
          <TouchableOpacity onPress={handleFetchDrivers}>
            <Text style={styles.button}>Reload</Text>
          </TouchableOpacity>
        </View>
      )}
      {page && !page.isLoading && page.isLoaded && (
        <FlatList
          key={pageIndex}
          style={styles.driverListContainer}
          data={page.drivers}
          keyExtractor={driverListKeyExtractor}
          renderItem={renderDriverItem}
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
  driverListContainer: {
    flex: 1,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    paddingBottom: 8,
  },
  button: {
    fontSize: 18,
    color: 'blue',
    paddingBottom: 8,
  },
});

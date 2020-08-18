import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { RaceResultItem } from './RaceResultItem';

export const RaceItem = ({ race }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {`${race.season} ${race.raceName}`}
      </Text>

      {race.Results && race.Results.map((result, index) => (
        <RaceResultItem
          key={index}
          result={result}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
});

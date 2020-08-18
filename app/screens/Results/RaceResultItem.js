import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export const RaceResultItem = ({ result }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        position: {result.positionText}
      </Text>
      <Text style={styles.text}>
        number: {result.number}
      </Text>
      <Text style={styles.text}>
        constructor: {result.Constructor?.name}
      </Text>
      <Text style={styles.text}>
        laps: {result.laps}
      </Text>
      <Text style={styles.text}>
        grid: {result.grid}
      </Text>
      <Text style={styles.text}>
        status: {result.status}
      </Text>
      <Text style={styles.text}>
        points: {result.points}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
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

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const DriverDetails = ({ route }) => {
  const { driver } = route.params;
  const navigation = useNavigation();

  const fullName = `${driver.givenName} ${driver.familyName}`;

  React.useEffect(() => {
    navigation.setOptions({ title: fullName });
  }, [navigation, fullName]);

  const handleGoToResults = React.useCallback(() => {
    navigation.navigate('Results', { driverId: driver.driverId });
  }, [navigation, driver.driverId]);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={styles.header}>{fullName}</Text>
      <Text style={styles.text}>{driver.dateOfBirth}</Text>
      <Text style={styles.text}>{driver.nationality}</Text>
      <Text style={styles.text}>{driver.url}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={handleGoToResults}
      >
        <Text style={styles.buttonText}>
          {'See results'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    paddingBottom: 8,
  },
  text: {
    fontSize: 18,
    color: 'black',
    paddingBottom: 8,
  },
  button: {},
  buttonText: {
    fontSize: 18,
    color: 'blue',
    paddingBottom: 8,
  },
});

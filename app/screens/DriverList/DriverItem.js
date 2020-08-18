import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const DriverItem = React.memo(({ driver }) => {
  const navigation = useNavigation();
  const fullName = `${driver.givenName} ${driver.familyName}`;

  const handlePressDriver = React.useCallback(() => {
    navigation.navigate('DriverDetails', { driver });
  }, [driver, navigation]);

  return (
    <TouchableOpacity style={styles.container} onPress={handlePressDriver}>
      <Text style={styles.text}>
        {fullName}
      </Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
});

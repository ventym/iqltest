import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { DriverList } from './screens/DriverList';
import { DriverDetails } from './screens/DriverDetails';
import { Results } from './screens/Results';

import { store } from './store';

const AppStack = createStackNavigator();

export const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStack.Navigator>

          <AppStack.Screen
            name="DriverList"
            component={DriverList}
            options={{
              title: 'Drivers',
            }}
          />

          <AppStack.Screen
            name="DriverDetails"
            component={DriverDetails}
          />

          <AppStack.Screen
            name="Results"
            component={Results}
          />

        </AppStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

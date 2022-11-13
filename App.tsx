import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useColorScheme} from 'react-native';
import {QueryClient, QueryClientProvider, useQuery} from 'react-query';
import Root from './navigation/Root.js';
import Tabs from './navigation/Tabs.js';

const queryClient = new QueryClient();

const App = () => {
  const colorScheme = useColorScheme();
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;

import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewsMain from '../../News/NewsMain';
function ExploreStack(props) {
  const Stack = createNativeStackNavigator();
    return (
      <Stack.Navigator
        initialRouteName="Explore"
        options={{
          headerShown: false,
          headerLeft: null,
        }}
     
      >
        <Stack.Screen
          name="Screen_Premiere"
          component={NewsMain}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
}

export default ExploreStack;
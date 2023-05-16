import React from 'react';
import DoctorsScreen from '../../Doctors/DoctorsScreen'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
function DoctorsStack(props) {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Screen
          name="Screen_Doctors"
          component={DoctorsScreen}
          options={{ title: "Doctors" }}
        />
    );
}

export default DoctorsStack;
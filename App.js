// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import Login from './screens/Login';

const Stack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};


// components/AppBar.js

import React from 'react';
import { Appbar } from 'react-native-paper';

const AppBar = ({ title }) => {
  return (
    <Appbar.Header>
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};


// screens/Login.js

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import AppBar from '../components/AppBar';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleLogin = () => {
    // Validation logic (for example, check if fields are not empty)
    if (!formData.username || !formData.password) {
      setErrors({ username: 'Username is required', password: 'Password is required' });
    } else {
      // Perform login logic here
      // For simplicity, just log the formData
      console.log('Login data:', formData);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <AppBar title="Login" />
      <View style={styles.container}>
        <TextInput
          placeholder="Username"
          value={formData.username}
          onChangeText={(text) => handleChange('username', text)}
          style={styles.input}
          keyboardType="email-address"
          error={!!errors.username}
        />
        <TextInput
          placeholder="Password"
          value={formData.password}
          onChangeText={(text) => handleChange('password', text)}
          style={styles.input}
          secureTextEntry
          error={!!errors.password}
        />
        <Button onPress={handleLogin} title="Login" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
  },
});


export default Login;

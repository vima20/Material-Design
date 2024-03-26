import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Appbar, Provider as PaperProvider } from 'react-native-paper';

// Custom MainAppbar component
const MainAppbar = ({ title }) => {
  return (
    <Appbar.Header>
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  // Function to handle form submission
  const handleSubmit = () => {
    // Validation logic can be added here
    console.log('Form submitted:', formData);
  };

  return (
    <View style={styles.container}>
      <MainAppbar title="Login" />
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => setFormData({ ...formData, username: text })}
          value={formData.username}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setFormData({ ...formData, password: text })}
          value={formData.password}
          secureTextEntry
        />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

const App = () => {
  return (
    <PaperProvider>
      <Login />
    </PaperProvider>
  );
};

export default App;

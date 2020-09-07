import * as React from 'react';
import { Container, Text } from 'native-base';
import { StyleSheet } from 'react-native';

const LoginScreen: React.FC = () => {
  return (
    <Container style={styles.container}>
      <Text>loginscreen</Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;

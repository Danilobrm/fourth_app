import {View, Text, StyleSheet} from 'react-native';
import AuthInput from '../components/AuthInput';
import AuthButton from '../components/AuthButton';

export default function Login() {
  return (
    <View style={styles.loginContainer}>
      <Text style={styles.title}>4th Dimension Chat</Text>
      <Text style={styles.subtitle}>Faça login na sua conta!</Text>
      <AuthInput placeholder="Insira seu ID" />
      <AuthButton buttonText="Não possui conta?" route='Register' />
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#03989E',
    height: '100%',
  },
  title: {
    fontSize: 34,
    textAlign: 'center',
    width: 265,
    marginTop: 149,
    color: '#FFFFFF',
    fontStyle: "italic"
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    width: 265,
    marginTop: 63,
    color: '#FFFFFF',
    fontStyle: "italic"
  },
  input: {
    backgroundColor: '#FFFFFF',
  },
  button: {
    backgroundColor: '#FFFFFF',
    width: 273,
    height: 36,
    borderRadius: 34,
  },
});

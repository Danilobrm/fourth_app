import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

interface btnProp {
  buttonText: string;
  route: string;
}

const AuthButton = ({buttonText, route}: btnProp) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate(route)}>
      <Text style={{color: '#03989E', fontSize: 20, fontStyle: 'italic'}}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFFFFF',
    width: 273,
    height: 36,
    borderRadius: 34,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 98,
  },
});

export default AuthButton;

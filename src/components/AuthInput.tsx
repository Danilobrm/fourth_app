import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {Children} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {faLock} from '@fortawesome/free-solid-svg-icons/faLock';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight';
import {useNavigation} from '@react-navigation/native';
import Home from '../screens/Home';

interface AuthInputProps {
  placeholder: string;
}

const AuthInput = (props: AuthInputProps) => {
  const [text, useText] = React.useState();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{...styles.circle, ...styles.shadowStyle}}>
        <FontAwesomeIcon icon={faLock} color="#03989E" size={31} />
      </View>
      <TextInput
        style={styles.input}
        onChangeText={useText}
        value={text}
        placeholder={props.placeholder}
        placeholderTextColor="#03989E"
      />
      <TouchableOpacity
        style={styles.chevron}
        onPress={() => navigation.navigate('Home')}>
        <FontAwesomeIcon icon={faChevronRight} color="#03989E" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 17,
  },
  input: {
    backgroundColor: '#FFFFFF',
    width: 273,
    height: 40,
    borderRadius: 34,
    fontSize: 20,
    marginLeft: -25,
    paddingLeft: 39,
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontStyle: 'italic',
    color: '#03989E',
    zIndex: 0,
    textAlignVertical: 'center',
  },
  circle: {
    width: 61,
    height: 61,
    backgroundColor: '#fff',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    // left: 25
  },
  shadowStyle: {
    elevation: 4,
    shadowColor: '#03989E',
    shadowOffset: {width: 2, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  chevron: {
    width: 33,
    height: 31.17,
    backgroundColor: '#fff',
    borderRadius: 100,
    marginLeft: -36,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#03989E',
    shadowOffset: {width: -1, height: 1},
    shadowOpacity: 0.16,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default AuthInput;

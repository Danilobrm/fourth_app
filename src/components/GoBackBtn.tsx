import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';

const GoBackBtn = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
      <FontAwesomeIcon
          icon={faChevronLeft}
          color="#03989E"
          size={18}
        />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 46,
    height: 46,
    backgroundColor: '#C7E2E3',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 21,
    left: 21,
  },
});

export default GoBackBtn
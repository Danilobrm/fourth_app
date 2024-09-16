import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import RoomOption from '../components/RoomOptions';
import {faUsers} from '@fortawesome/free-solid-svg-icons/faUsers';
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus';
import {faCalendar} from '@fortawesome/free-regular-svg-icons/faCalendar';
import GoBackBtn from '../components/GoBackBtn';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <RoomOption route="AccessRoom" icon={faUsers} text="Acessar uma sala" />
      <RoomOption route="AcessRoom" icon={faPlus} text="Criar uma sala" />
      <RoomOption route="AcessRoom" icon={faCalendar} text="Acessar reunião" />
      <GoBackBtn />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: '14.6%',
    flex: 1,
  },
});

export default Home;

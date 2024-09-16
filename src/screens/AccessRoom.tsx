import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import RoomsList from '../components/RoomsList';
import GoBackBtn from '../components/GoBackBtn';

const AccessRoom = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acessar uma sala</Text>
      <RoomsList style={styles.openedBlock} type="myrooms" />
      <RoomsList style={styles.openedBlock} type="public" />
      <RoomsList style={styles.block} type="protected" />
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
  title: {
    fontSize: 20,
    color: '#03989E',
    marginBottom: 20,
  },
  openedBlock: {
    height: 142,
  },
  block: {
    minHeight: 62,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AccessRoom;

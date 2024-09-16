import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faPhone,
  faGear,
  faSmile,
  faMicrophone,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Chat = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.pfp}
            onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faChevronLeft} color="#03989E" size={18} />
          </TouchableOpacity>
          <Text style={styles.title}>Nome do Grupo</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <FontAwesomeIcon icon={faPhone} color="#fff" size={30} />
          <FontAwesomeIcon
            style={{marginLeft: 12}}
            icon={faGear}
            color="#fff"
            size={30}
          />
        </View>
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: 16,
          flexDirection: 'row',
          width: '100%',
          paddingHorizontal: 16,
        }}>
        <View style={styles.inputContainer}>
          <FontAwesomeIcon
            icon={faSmile}
            color="#fff"
            size={30}
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Mensagem..."
            placeholderTextColor="#fff"
          />
        </View>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: '#03989E',
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <FontAwesomeIcon icon={faMicrophone} color="#fff" size={25} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  header: {
    height: 59,
    backgroundColor: '#03989E',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pfp: {
    width: 46,
    height: 46,
    borderRadius: 100,
    backgroundColor: '#fff',
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#03989E',
    borderRadius: 30,
    width: '85%',
    height: 50,
    marginRight: 10,
  },
  icon: {
    marginLeft: 15,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    paddingLeft: 10,
    color: '#fff',
  },
});

export default Chat;

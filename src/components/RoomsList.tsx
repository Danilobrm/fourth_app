import {faChevronRight, faUsers} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  Text,
  SafeAreaView,
  ScrollView,
} from 'react-native';

interface RoomListProps {
  style: ViewStyle;
  type: string;
}

const RoomsList = ({style, type}: RoomListProps) => {
  const navigation = useNavigation();
  const [isLocked, setIsLocked] = React.useState(true);
  let height = 62;

  function unlock() {
    setIsLocked(!isLocked);
    if (isLocked) height = 142;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>

      <SafeAreaView style={{...styles.body, ...style}}>
        {type !== 'protected' && (
          <ScrollView>
            <TouchableOpacity
              onPress={() => navigation.navigate('Chat')}
              style={styles.roomNameContainer}>
              <FontAwesomeIcon icon={faUsers} color="#03989E" size={30} />
              <Text style={styles.roomName}>Nome da sala</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Chat')}
              style={styles.roomNameContainer}>
              <FontAwesomeIcon icon={faUsers} color="#03989E" size={30} />
              <Text style={styles.roomName}>Nome da sala</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Chat')}
              style={styles.roomNameContainer}>
              <FontAwesomeIcon icon={faUsers} color="#03989E" size={30} />
              <Text style={styles.roomName}>Nome da sala</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Chat')}
              style={styles.roomNameContainer}>
              <FontAwesomeIcon icon={faUsers} color="#03989E" size={30} />
              <Text style={styles.roomName}>Nome da sala</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Chat')}
              style={styles.roomNameContainer}>
              <FontAwesomeIcon icon={faUsers} color="#03989E" size={30} />
              <Text style={styles.roomName}>Nome da sala</Text>
            </TouchableOpacity>
          </ScrollView>
        )}

        {type === 'protected' && isLocked && <RoomInput unlock={unlock} />}
      </SafeAreaView>
    </View>
  );
};

interface RoomInputProps {
  unlock: () => void;
}

const RoomInput = ({unlock}: RoomInputProps) => {
  const [text, setText] = React.useState('');

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Inserir senha"
        placeholderTextColor="rgba(3, 152, 158, 0.37)"
      />
      <TouchableOpacity style={styles.chevron} onPress={() => unlock()}>
        <FontAwesomeIcon icon={faChevronRight} color="#03989E" />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 293,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    height: 36,
    backgroundColor: '#03989E',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  body: {
    borderBottomEndRadius: 16,
    borderBottomStartRadius: 16,
    backgroundColor: 'rgba(3, 152, 158, 0.15)',
    marginBottom: 28,
    paddingBottom: 10,
  },
  input: {
    backgroundColor: 'rgba(3, 152, 158, 0.15)',
    width: 254,
    height: 40,
    borderRadius: 34,
    fontSize: 20,
    paddingLeft: 39,
    alignItems: 'center',
    justifyContent: 'center',
    fontStyle: 'italic',
    textAlignVertical: 'center',
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
  roomName: {
    fontSize: 15,
    marginLeft: 5,
  },
  roomNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 10,
  },
});

export default RoomsList;

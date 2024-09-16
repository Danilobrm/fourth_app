import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';

interface RoomOptionProps {
  route: string;
  icon: IconDefinition;
  text: string;
}

const RoomOption = ({route, icon, text}: RoomOptionProps) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        style={styles.option}
        onPress={() => navigation.navigate(route)}>
        <FontAwesomeIcon
          style={{marginTop: 24, opacity: 1}}
          icon={icon}
          color="#03989E"
          size={80}
        />
        <Text style={styles.title}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  option: {
    width: 278,
    minHeight: 144,
    backgroundColor: 'rgba(3, 152, 158, 0.15)',
    borderRadius: 38,
    marginTop: 43,
    alignItems: 'center',
  },
  title: {color: '#03989E', fontSize: 20, opacity: 1},
});

export default RoomOption;

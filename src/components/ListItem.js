import React from 'react';

import {View, Pressable, Text, StyleSheet} from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons';

const ListItem = ({text, id, onRemove}) => {
  const deleteHandler = () => {
    onRemove(id);
  };
  return (
    <Pressable onPress={deleteHandler} key={id}>
      <View style={styles.listItems}>
        <Text style={styles.listText}>{text}</Text>
        {/* <Icon name="remove" color="firebrick" size={20} /> */}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  listText: {
    fontSize: 18,
  },
  listItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#e4e4e4',
    borderRadius: 5,
    padding: 8,
    color: 'black',
  },
});

export default ListItem;

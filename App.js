import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  TextInput,
  StyleSheet,
} from 'react-native';
import ListItem from './src/components/ListItem';
//import {v4 as uuid} from 'uuidv4';
import 'react-native-get-random-values';
//import {v4 as uuid} from 'uuid';
//import {v4} from 'uuid';
const App = () => {
  const [inputText, setInputText] = useState('');
  const [itemList, setItemList] = useState([
    {text: 'banana', id: Math.random().toString()},
    {text: 'plum', id: Math.random().toString()},
    {text: 'mangoes', id: Math.random().toString()},
  ]);

  const inputHandler = newText => {
    setInputText(newText);
  };

  const addItemHandler = () => {
    setItemList(previousItems => [
      ...previousItems,
      {text: inputText, id: Math.random().toString()},
    ]);
    console.log(itemList);
    setInputText('');
  };

  const onDelete = id => {
    setItemList(previousItems => {
      return previousItems.filter(item => item.id !== id);
    });
  };

  return (
    <View style={styles.appContainer}>
      <Text style={styles.titleText}>Shopping List</Text>
      <View style={styles.itemInput}>
        <TextInput
          placeholder="Enter Item here"
          style={styles.textInput}
          onChangeText={inputHandler}
          value={inputText}
        />
        <Button title="Add Item" onPress={addItemHandler} />
      </View>
      <View style={styles.listStyles}>
        <FlatList
          data={itemList}
          renderItem={({item}) => (
            <ListItem
              text={item.text}
              id={item.id}
              onRemove={onDelete}
              key={item.id}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    paddingVertical: 50,
    background: '#eee',
    flex: 1,
  },
  titleText: {
    backgroundColor: '#0095ff',
    width: '100%',
    fontSize: 22,
    color: '#fff',
    padding: 10,
    textAlign: 'center',
    marginBottom: 12,
  },

  itemInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flex: 2,
  },

  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 8,
    width: '70%',
    marginLeft: 8,
  },

  listStyles: {
    flex: 9,
    paddingHorizontal: 4,
    paddingVertical: 20,
    backgroundColor: '#e4e4e4',
  },
});

export default App;

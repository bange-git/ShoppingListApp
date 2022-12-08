import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  TextInput,
  StyleSheet,
  Pressable,
} from 'react-native';
import ListItem from './components/ListItem';

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
        {itemList.map(item => (
          <ListItem
            text={item.text}
            id={item.id}
            onRemove={onDelete}
            key={item.id}
          />
        ))}
        <FlatList />
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

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// /* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
//  * LTI update could not be added via codemod */
// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> I LOVE BANGE
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

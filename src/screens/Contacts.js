import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
} from 'react-native';

const initialContactList = [
  'Darlene Coutee',
  'Cleopatra Montoro',
  'Columbus Miracle',
  'Erin Carrillo',
  'Elias Shaughnessy',
  'Wilhemina Vanhook',
  'Lucretia Badillo',
  'Ramiro Mccullum',
  'Orval Spivey',
  'Mahalia Schear',
  'Randa Gokey',
  'Bobby Lile',
  'Monet Jarboe',
  'Oleta Herdman',
  'Myesha Neloms',
  'Dixie Amidon',
  'Jackeline Bettes',
  'Mila Landers',
  'Seema Flemons',
  'Alysia Stclair',
  'Daina Kell',
  'Pamela Arias',
  'Lady Upright',
  'Rachael Lariviere',
  'Rico Renninger',
  'Launa Lundell',
  'Dan Mcconn',
  'Elsy Chubb',
  'Maximina Kuykendall',
  'Chang Kranz',
];

export default function Contacts() {
  const [contacts, setContacts] = useState(initialContactList);
  const [newContact, setNewContact] = useState('');

  const addContact = () => {
    setContacts([...contacts, newContact]);
    setNewContact('');
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.newContactInput}
        value={newContact}
        onChangeText={setNewContact}
      />
      <Button title="Add Contact" onPress={() => addContact()} />
      <ScrollView>
        {contacts.map((contact) => (
          <View key={contact}>
            <Text style={styles.text}>{contact}</Text>
            <View style={styles.divider} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
    flex: 1,
  },
  text: {
    fontSize: 30,
  },
  divider: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  },
  newContactInput: {
    backgroundColor: 'white',
    height: 50,
  },
});

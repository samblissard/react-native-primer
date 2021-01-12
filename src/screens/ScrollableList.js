import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

export default function ScrollableList() {
  const contacts = ["Darlene Coutee", 
  "Cleopatra Montoro",
  "Columbus Miracle",
  "Erin Carrillo",
  "Elias Shaughnessy",
  "Wilhemina Vanhook",
  "Lucretia Badillo",
  "Ramiro Mccullum",
  "Orval Spivey",
  "Mahalia Schear",
  "Randa Gokey",
  "Bobby Lile",
  "Monet Jarboe",
  "Oleta Herdman",
  "Myesha Neloms",
  "Dixie Amidon",
  "Jackeline Bettes",
  "Mila Landers",
  "Seema Flemons",
  "Alysia Stclair",
  "Daina Kell",
  "Pamela Arias",
  "Lady Upright",
  "Rachael Lariviere",
  "Rico Renninger",
  "Launa Lundell",
  "Dan Mcconn",
  "Elsy Chubb",
  "Maximina Kuykendall",
  "Chang Kranz"
  ]

  return (
    <ScrollView style={styles.container}>
      {contacts.map(contact => <View>
        <Text style={styles.text}>{contact}</Text>
        <View style={styles.divider} />
      </View>)}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 30
  },
  text: { 
    fontSize: 30
  },
  divider: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  }
})

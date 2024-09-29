import axios from 'axios';
import { Image } from 'expo-image';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, ScrollViewBase } from 'react-native';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://plrhwdgw-8000.asse.devtunnels.ms/api/Artikel'); // Menambahkan https:// pada URL
        setData(response.data.data);
      } catch (error) {
        setError('Gagal Mengambil Data');
        Alert.alert('Error', 'Gagal Mengambil Data');
      }
    };

    getData();
  }, []); 

  return (
    <GestureHandlerRootView>
      <SafeAreaView style={styles.container}>
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>Belajar API</Text>
      </View>
      <ScrollView>
        {data.map((farm, index) => (
          <View key={index} style={styles.testingContainer}>
            <Image
              source={{ uri: farm.image }}
              // style={styles.image} // Menambahkan style untuk ukuran image
            />
            <Text>{farm.judul}</Text>
            <Text>{farm.content}</Text>
            <Text>p</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  counterContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  counterText: {
    fontSize: 24,
    marginBottom: 16,
  },
  buttonContainer: {
    marginTop: 16,
  },
  mealText: {
    fontSize: 16,
    marginBottom: 8,
  },
  testingContainer:{
    marginBottom: 30
  }
});

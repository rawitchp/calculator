import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import Keypad from './src/components/Keypad';

export default function App() {
  return (
    <View>
      <View className="flex justify-end items-end h-2/5 mt-20">
        <Text className="text-6xl">3 + 5</Text>
      </View>
      <View className="flex justify-center items-end">
        <Keypad />
      </View>
    </View>
  );
}

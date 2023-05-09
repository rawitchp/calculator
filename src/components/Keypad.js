import { View, Text, Pressable } from 'react-native';
import React from 'react';

const Keypad = () => {
  return (
    <View className="flex-column">
      <View className="flex flex-row w-screen h-16">
        <Pressable className="w-1/4 justify-center items-center bg-red-400 border border-gray-600">
          <Text>AC</Text>
        </Pressable>
        <Pressable className="w-1/4 justify-center items-center bg-blue-400 border border-gray-600">
          <Text>+-</Text>
        </Pressable>
        <Pressable className="w-1/4 justify-center items-center bg-blue-400 border border-gray-600">
          <Text>%</Text>
        </Pressable>
        <Pressable className="w-1/4 justify-center items-center bg-blue-400 border border-gray-600">
          <Text>/</Text>
        </Pressable>
      </View>
      <View className="flex flex-row w-screen h-16">
        <Pressable className="w-1/4 justify-center items-center bg-gray-300 border border-gray-600">
          <Text>7</Text>
        </Pressable>
        <Pressable className="w-1/4 justify-center items-center bg-gray-300 border border-gray-600">
          <Text>8</Text>
        </Pressable>
        <Pressable className="w-1/4 justify-center items-center bg-gray-300 border border-gray-600">
          <Text>9</Text>
        </Pressable>
        <Pressable className="w-1/4 justify-center items-center bg-blue-400 border border-gray-600">
          <Text>x</Text>
        </Pressable>
      </View>
      <View className="flex flex-row w-screen h-16">
        <Pressable className="w-1/4 justify-center items-center bg-gray-300 border border-gray-600">
          <Text>4</Text>
        </Pressable>
        <Pressable className="w-1/4 justify-center items-center bg-gray-300 border border-gray-600">
          <Text>5</Text>
        </Pressable>
        <Pressable className="w-1/4 justify-center items-center bg-gray-300 border border-gray-600">
          <Text>6</Text>
        </Pressable>
        <Pressable className="w-1/4 justify-center items-center bg-blue-400 border border-gray-600">
          <Text>-</Text>
        </Pressable>
      </View>
      <View className="flex flex-row w-screen h-16">
        <Pressable className="w-1/4 justify-center items-center bg-gray-300 border border-gray-600">
          <Text>1</Text>
        </Pressable>
        <Pressable className="w-1/4 justify-center items-center bg-gray-300 border border-gray-600">
          <Text>2</Text>
        </Pressable>
        <Pressable className="w-1/4 justify-center items-center bg-gray-300 border border-gray-600">
          <Text>3</Text>
        </Pressable>
        <Pressable className="w-1/4 justify-center items-center bg-blue-400 border border-gray-600">
          <Text>+</Text>
        </Pressable>
      </View>
      <View className="flex flex-row w-screen h-16">
        <Pressable className="w-2/4 justify-center items-center bg-gray-300 border border-gray-600">
          <Text>0</Text>
        </Pressable>

        <Pressable className="w-1/4 justify-center items-center bg-gray-400 border border-gray-600">
          <Text>.</Text>
        </Pressable>
        <Pressable className="w-1/4 justify-center items-center bg-orange-300 border border-gray-600">
          <Text>=</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Keypad;

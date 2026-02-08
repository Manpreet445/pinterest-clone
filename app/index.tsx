import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      {/* Top Nav Area */}
      <View>
        <Text>Back</Text>
        <Text>Menu</Text>
      </View>

      {/* Main Content Area */}
      <View>
        <Text>Image Placeholder</Text>
        <Text>life update:</Text>
        <Text>we’re so back</Text>
      </View>

      {/* Stats Row */}
      <View>
        <Text>2.1k Likes</Text>
        <Text>8 Comments</Text>
        <Text>Share</Text>
        <Text>Save Button</Text>
      </View>

      {/* User Info */}
      <View>
        <Text>LB</Text>
        <Text>Lotte BlackBlack</Text>
        <Text>"On God" ... View all comments</Text>
      </View>

      {/* More to Explore */}
      <Text>More to explore</Text>
      <View>
        <Text>Grid Item 1</Text>
        <Text>Grid Item 2</Text>
      </View>

      {/* The Assignment Button */}
      <TouchableOpacity>
        <Text>Alert Button</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
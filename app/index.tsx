import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* TOP NAV BAR */}
        <View style={styles.topNav}>
          <TouchableOpacity style={styles.circleIcon}>
             <Ionicons name="chevron-back" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.circleIcon}>
             <Ionicons name="ellipsis-horizontal" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* MAIN IMAGE CARD */}
        <View style={styles.mainCard}>
          <Image 
            source={{ uri: 'https://i.pinimg.com/736x/2a/3a/0c/2a3a0c5678051783424687570499694d.jpg' }} 
            style={styles.heroImage} 
            resizeMode="cover"
          />
          <View style={styles.imageOverlay}>
            <Text style={styles.overlayTextSmall}>life update:</Text>
            <Text style={styles.overlayTextLarge}>we’re so back</Text>
          </View>
        </View>

        {/* ACTION ROW */}
        <View style={styles.actionRow}>
          <View style={styles.leftActions}>
            <Ionicons name="heart-outline" size={28} color="white" />
            <Text style={styles.statText}>2.1k</Text>
            <Ionicons name="chatbubble-outline" size={26} color="white" style={{marginLeft: 15}} />
            <Text style={styles.statText}>8</Text>
          </View>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>

        {/* ALERT BUTTON VISUAL ONLY */}
        <TouchableOpacity style={styles.alertButton}>
          <Text style={styles.alertButtonText}>⚠️ Alert</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

// STYLES
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black' },
  scrollContent: { paddingBottom: 40 },
  topNav: { flexDirection: 'row', justifyContent: 'space-between', padding: 20, marginTop: 40 },
  circleIcon: { backgroundColor: 'rgba(0,0,0,0.5)', padding: 8, borderRadius: 50 },
  mainCard: { width: '100%', height: 400, borderRadius: 30, overflow: 'hidden', marginBottom: 10 },
  heroImage: { width: '100%', height: '100%' },
  imageOverlay: { position: 'absolute', top: '30%', width: '100%', alignItems: 'center' },
  overlayTextSmall: { color: 'black', fontWeight: '600', fontSize: 14 },
  overlayTextLarge: { color: 'black', fontWeight: '900', fontSize: 28 },
  actionRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15 },
  leftActions: { flexDirection: 'row', alignItems: 'center' },
  statText: { color: 'white', marginLeft: 5, fontWeight: '600' },
  saveButton: { backgroundColor: '#E60023', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 30 },
  saveButtonText: { color: 'white', fontWeight: 'bold' },
  alertButton: { backgroundColor: '#007AFF', margin: 20, padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 40 },
  alertButtonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});
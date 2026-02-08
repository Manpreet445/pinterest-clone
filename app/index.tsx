import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Alert, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  const handleAlertPress = () => {
    Alert.alert('Alert Button pressed');
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* --- HERO SECTION --- */}
        <View style={styles.heroContainer}>
          {/* Top Navigation Overlay */}
          <View style={styles.topNav}>
            <TouchableOpacity style={styles.circleIcon}>
              <Ionicons name="chevron-back" size={28} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.circleIcon}>
              <Ionicons name="ellipsis-horizontal" size={24} color="white" />
            </TouchableOpacity>
          </View>

          <Image 
            source={require('../assets/images/cat.jpg')} 
            style={styles.heroImage} 
            resizeMode="cover"
          />

          <View style={styles.scanIconContainer}>
            <Ionicons name="scan-outline" size={22} color="white" />
          </View>
        </View>

        {/* --- ACTION BAR --- */}
        <View style={styles.actionBar}>
          <View style={styles.socialIcons}>
            <Ionicons name="heart-outline" size={30} color="white" />
            <Text style={styles.statText}>2.1k</Text>
            
            <Ionicons name="chatbubble-outline" size={28} color="white" style={styles.iconGap} />
            <Text style={styles.statText}>8</Text>

            <Ionicons name="share-outline" size={28} color="white" style={styles.iconGap} />
          </View>

          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>

        {/* --- USER INFO --- */}
        <View style={styles.userSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>LB</Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.username}>Lotte BlackBlack</Text>
            <Text style={styles.caption} numberOfLines={1}>
              "On God" ... <Text style={styles.moreComments}>View all comments</Text>
            </Text>
          </View>
        </View>

        {/* --- MORE TO EXPLORE GRID --- */}
        <Text style={styles.sectionHeader}>More to explore</Text>
        
        <View style={styles.gridContainer}>

          <View style={styles.gridColumn}>
            <View style={[styles.gridItem, { height: 220 }]}>
              <Image 
                source={require('../assets/images/nothing.jpg')}  
                style={styles.gridImage} 
              />
         
              <View style={styles.pinIconOverlay}>
                <Ionicons name="pricetag" size={14} color="white" />
              </View>
            </View>
          </View>

          {/* Right Column: Stacked Images */}
          <View style={styles.gridColumn}>
            <View style={[styles.gridItem, { height: 105, marginBottom: 10 }]}>
              <Image 
                source={require('../assets/images/statement.jpg')}  
                style={styles.gridImage} 
              />
            </View>
            <View style={[styles.gridItem, { height: 105 }]}>
              <Image 
                source={require('../assets/images/ragebait.jpg')}  
                style={styles.gridImage} 
              />
            </View>
          </View>
        </View>

        {/* ---  Alert BUTTON --- */}
        <TouchableOpacity style={styles.alertButton} onPress={handleAlertPress}>
          <Text style={styles.alertButtonText}> Alert</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  // HERO STYLES
  heroContainer: {
    position: 'relative',
    marginBottom: 10,
  },
  heroImage: {
    width: '100%',
    height: 450,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  topNav: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 10,
  },
  circleIcon: {
    width: 45,
    height: 45,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 22.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanIconContainer: {
    position: 'absolute',
    bottom: 25,
    right: 25,
    backgroundColor: 'rgba(0,0,0,0.6)',
    width: 45,
    height: 45,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // ACTION BAR STYLES
  actionBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 5,
  },
  socialIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconGap: {
    marginLeft: 15,
  },
  statText: {
    color: 'white',
    marginLeft: 6,
    fontWeight: '600',
    fontSize: 15,
  },
  saveButton: {
    backgroundColor: '#E60023',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 30,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  // USER INFO STYLES
  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 15,
    marginBottom: 20,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#ccc',
    fontSize: 12,
    fontWeight: 'bold',
  },
  userInfo: {
    flex: 1,
  },
  username: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  caption: {
    color: '#bbb',
    fontSize: 14,
  },
  moreComments: {
    color: '#888',
  },
  // GRID STYLES
  sectionHeader: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  gridContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  gridColumn: {
    width: '48%',
  },
  gridItem: {
    width: '100%',
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#222',
  },
  gridImage: {
    width: '100%',
    height: '100%',
  },
  pinIconOverlay: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 6,
    borderRadius: 20,
  },
  // ALERT BUTTON
  alertButton: {
    marginTop: 40,
    marginHorizontal: 20,
    padding: 16,
    backgroundColor: '#E60023',
    borderRadius: 12,
    alignItems: 'center',
  },
  alertButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
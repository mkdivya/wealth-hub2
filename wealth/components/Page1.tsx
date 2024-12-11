import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const InvestmentScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>You have invested</Text>
        <Text style={styles.amount}>₹ 20,000</Text>
        <View style={styles.infoContainer}>
          <View style={styles.iconContainer}>
            <Text style={styles.iconText}>🚆</Text>
          </View>
          <View>
            <Text style={styles.infoTitle}>Railway & Defence</Text>
            <Text style={styles.infoSubtitle}>Lumpsum - 14 September 2024</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.trackOrderButton}>
          <Text style={styles.trackOrderText}>TRACK ORDER</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.homeButton}>
        <Text style={styles.homeButtonText}>Back to home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  card: {

    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: 140,
    height:140,
    top:44,
    left:1,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    width:285,
    height:32,
    top:200,
    left:45,
    fontWeight:500,
    lineHeight:32,
    alignContent:"center",
    letterSpacing:1,
    fontSize:28
  },
  amount: {
    width:140,
    height:60,
  top:230,
  fontWeight:600,
  fontSize:44,
    left:21,
    color: '#5b3cc4',
    
  },
  infoContainer: {
    width:343,
    height:109,
    top:321,
    left:16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    width:24,
    height:24,
    top:21,
    left:21,
    backgroundColor: '#e8f5e9',
    borderRadius: 30,
    padding: 10,
    marginRight: 10,
  },
  iconText: {
   
    fontSize: 20,
  },
  infoTitle: {
    width:130,
    height:18,
    top:12,
    left:66,
    fontSize: 14,
    fontWeight: '600',
    lineHeight:18,
    letterSpacing:0.2,
  },
  infoSubtitle: {
    
    fontSize: 14,
    color: '#888',
  },
  trackOrderButton: {
    marginTop: 10,
  },
  trackOrderText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1E88E5',
  },
  homeButton: {
    backgroundColor: '#6200EE',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  homeButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default InvestmentScreen;
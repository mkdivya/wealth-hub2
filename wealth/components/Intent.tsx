import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const InvestmentScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>You have invested</Text>
        <Text style={styles.amount}><Text style={styles.rupee}>₹</Text>20,000</Text>

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
    left:11,
    
    
  },
  rupee:{
    width:17,
    height:38,
    top:1,
    fontWeight:500,
    fontSize:28,
    lineHeight:38.14,
    letterSpacing:0.2,


  },
  title: {
    width:285,
    height:32,
    top:200,
    left:45,
    fontWeight:500,
    lineHeight:32,
    alignContent:"center",
    letterSpacing:0.2,
    fontSize:28
  },
  amount: {
    width:149,
    height:60,
  top:230,
  fontWeight:600,
  fontSize:44,
    left:21,
    color: '#552474',
    
    
  },
  infoContainer: {
    width:343,
    height:109,
    top:324,
    left:1,

    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#D3D3D3',
    
  },
  iconContainer: {
    width:42,
    height:42,
    top:12,
    left:12,
    backgroundColor: '#e8f5e9',
    borderRadius: 1,

    padding: 10,
    marginRight: 10,

    
    

    
  },
  iconText: {
    width:24,
    height:24,
    top:6,
    left:21,
    fontSize:50,
   
    
  },
  infoTitle: {
    width:130,
    height:18,
    top:20,
    left:66,
    fontSize: 14,
    fontWeight: '600',
    lineHeight:18,
    letterSpacing:0.2,
  },
  infoSubtitle: {
    width:196,
    height:16,
    top:38,
    left:66,
    fontWeight:400,
    fontSize: 12,
    lineHeight:16,
    letterSpacing:0.2,
    color: '#888',
  },
  trackOrderButton: {
    width:84,
    height:16,
    top:324,
    left:90,
    backgroundColor: '#fff',
    borderRadius:3,
    
   
    

   
  },
  trackOrderText: {
    fontSize: 12,
    fontWeight: 600,
    lineHeight:16,
    letterSpacing:0.2,
    color: '#9A42D3',
   
  },
  homeButton: {
    width: 343,
    height: 56,
    top: 480,
    left: 16,
    borderRadius: 16,
    paddingTop: 16,
    paddingRight: 108,
    paddingBottom: 16,
    paddingLeft: 108,
    gap: 12,
    backgroundColor: '#6200EE',


    paddingVertical: 10,
    paddingHorizontal: 20,
   
    marginTop: 20,
  },
  homeButtonText: {
 width:127,
 height:24,
    lineHeight:24,
    letterSpacing:0.2,
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 600,
  },
});

export default InvestmentScreen;
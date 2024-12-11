import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts } from "expo-font";

const InvestmentScreen = () => {
  const [fontsLoaded] = useFonts({
    "CharmanSerif": require("@/assets/fonts/CharmanSerif-Black.otf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }
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
    top:200,
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
    fontFamily:"CharmanSerif",
    fontWeight:500,
    lineHeight:32,
    alignContent:"center",
    letterSpacing:0.2,
    fontSize:28,
    marginLeft: 45,
  },
  amount: {
    width:190,
    height:125,
  top:240,
  fontWeight:600,
  fontSize:40,
   alignItems:"center",
    color: '#552474',
    
    
  },
  infoContainer: {
    width:343,
    height:109,
    top:220,
    left:"10%",

    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#D3D3D3',
    
  },
  iconContainer: {
    width:40,
    height:42,
    top:14,
    left:14,
    backgroundColor: '#e8f5e9',
    borderRadius: 1,
    

    

    
  },
  iconText: {
    width:24,
    height:24,
    top:6,
    left:10,
    fontSize:20,
   
   
    
  },
  infoTitle: {
    width:130,
    height:18,
    top:20,
    left:66,
    fontSize: 13,
    fontWeight: '600',
    lineHeight:18,
    letterSpacing:0.2,
    fontFamily:"CharmanSerif",
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
    top:220,
    left:100,
    backgroundColor: '#fff',
    borderRadius:5,
    
   
    

   
  },
  trackOrderText: {
    fontSize: 11,
    fontWeight: 600,
    lineHeight:16,
    letterSpacing:0.1,
    color: '#9A42D3',
    fontFamily:"CharmanSerif",
   
  },
  homeButton: {
    width: 343,
    height: 56,
    top: 600,
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
    fontFamily:"CharmanSerif",
  },
});

export default InvestmentScreen;
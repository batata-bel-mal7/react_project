import * as React from 'react'
import { memo, useState } from 'react';
import { TouchableOpacity,Image,StyleSheet, Text, View } from 'react-native'
const Profile = () => {


return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={{
            height:20 ,
            width:20,
        }} source={require('../images/back.png')} />
      </TouchableOpacity>
      <Text style={{
        fontFamily: 'Raleway-SemiBold',
        fontSize: 34,
        fontWeight: '800',
        color:'#000000',
        paddingBottom:30,
      }}>My profile</Text>
      <View style={styles.button}>
        <Image style={{
            height:76 ,
            width:76,
            alignSelf:'center',
            borderRadius:76,
            // resizeMode: 'contain',
            paddingVertical:20,
            marginTop:-50
        }} source={require('../images/photo.png')} />
          <Text style={{
            alignSelf:'center',
            fontFamily:'Raleway-SemiBold',
            fontSize:18,fontWeight: '600',
            color:'#000000',
          }}>Name</Text>
          <View style={{flexDirection:'row',}}>
            <Image style={{
              height:20 ,
              width:20,
            }} source={require('../images/location.png')} />
            <Text style={{
              fontFamily:'Raleway-SemiBold',
              fontSize:15,fontWeight: '400',
              color:'#000000',
            }}>Address: 43 cairo</Text>
          </View>
      </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>
            Edit profile</Text>
        </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>
            Shopping address</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>
              Order history</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>
            Cards</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>
            Notifications</Text>
        </TouchableOpacity>

    </View>
  );
};
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    paddingHorizontal: '10%',
    paddingBottom: '10%',
    paddingVertical:'10%',
  },
  text:{
    fontFamily: 'Raleway-SemiBold',
    fontSize: 18,
    fontWeight: '600' ,
    color:'#000000'
  },
  button:{
    backgroundColor:'#ffffff',
    padding:15,
    borderRadius:20,
    marginVertical:3,
  },
});
export default Profile

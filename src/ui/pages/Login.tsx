import * as React from 'react';
import { TouchableOpacity,TextInput,Image,Button,StyleSheet, Text, View } from 'react-native'
const Login = () => {

return (
  <View style={styles.container}>
    <View style={styles.design} >
      <Image style={{width:'100%',height:'20%'}} source={require('./src/ui/images/Welcom.png')} />
      <Text style={styles.header}>Welcome back</Text>
    </View>
  
    <View style={styles.box} >
      <Text style={{fontFamily:'Raleway-SemiBold',fontSize:18,fontWeight:'bold',color:'#000000'}}>Login</Text>
      <View style={{flexDirection:'row',paddingTop:10}}>
        <Image style={{width:20,height:20}} source={require('./src/ui/images/mail.png')} />
        <Text>  Email</Text>
      </View>
      <TextInput placeholder="rosina@company.com"/>
      <Image style={{marginBottom:5,width:'95%'}} source={require('./src/ui/images/Line.png')} />

      <View style={{flexDirection:'row',paddingTop:10}}>
        <Image style={{width:20,height:20}} source={require('./src/ui/images/lock.jpg')} />
        <Text>  Password</Text>
      </View>
      <View style={{flexDirection:'row'}}>
        <TextInput  style={{width:'90%'}} placeholder="*************"/>
        <TouchableOpacity style={{borderRadius:10}}>
          <Text style={{color:'#5956E9'}}>Show</Text>
        </TouchableOpacity>
      </View>
      <Image style={{marginBottom:5,width:'95%'}} source={require('./src/ui/images/Line.png')} />

      <TouchableOpacity style={{paddingVertical:10,}}>
        <Text style={{color:'#5956E9',}}>Forget password?</Text>
      </TouchableOpacity>

      <Button
        title="Login"
        color="#5956E9"
      />
      <TouchableOpacity style={{paddingVertical:10,}}>
        <Text style={{color:'#5956E9',alignSelf:'center'}}>Create Account</Text>
      </TouchableOpacity>
    </View>
  
  </View>
)};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5956E9',
  },
  header:{
    fontSize: 65,
    fontFamily:'Raleway-SemiBold',
    color: '#FFFFFF',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  design:{
    height:'40%',
  },
  box:{
    paddingVertical:10,
    borderTopStartRadius:20,
    borderTopEndRadius:20,
    padding:'10%',
    backgroundColor: '#ffffff',
    height:'60%',
  },
});
export default Login




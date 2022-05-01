import * as React from 'react'
import { TouchableOpacity,Image,TextInput,StyleSheet, Text, View, Button } from 'react-native'
import Header from '../components/Header';
import BackIcon from '../components/icons/BackIcon';
import HeaderTitle from '../components/HeaderTitle';
const Register = () => {

return (
    <View style={styles.container}>
    
        <Header
        leftComponent={<BackIcon />}
        middleComponent={<HeaderTitle title="Create Account" />}
        />


        <View style={{paddingHorizontal:'10%'}}>
            <Image style={{height:'30%' ,width:'45%',alignSelf:'center'}} source={require('./src/ui/images/Saly-11.png')}/>

            <TextInput style={styles.text} placeholder="Name"/>
            <TextInput style={styles.text} placeholder="Email"/>
            <TextInput style={styles.text} placeholder="Password"/>
            <Button
            title="Sign up"
            color="#5956E9"
            />

            <View style={{flexDirection:'row',alignSelf:'center'}}>
                <Text style={{
                alignSelf: 'center',color:'#000000',
                fontFamily:'Raleway-SemiBold',
                fontSize:18,fontWeight:'600'
                }}>Already have an account?</Text>
                <TouchableOpacity>
                <Text style={{
                color:'#5956E9',padding:5,
                fontFamily:'Raleway-SemiBold',
                fontSize:18,fontWeight:'bold',
                }}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
);
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
},
text:{
    backgroundColor:'#ffffff',
    borderRadius:5,
    alignItems:'center',
    marginVertical:'4%',
    borderWidth: 1,    
    }
});

export default Register
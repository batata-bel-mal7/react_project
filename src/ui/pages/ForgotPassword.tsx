import * as React from 'react'
import { TouchableOpacity,Image,TextInput,StyleSheet, Text, View, Button } from 'react-native'
import Header from '../components/Header';
import BackIcon from '../components/icons/BackIcon';
import HeaderTitle from '../components/HeaderTitle';
const ForgotPassword = () => {

return (
    <View style={styles.container}>
        <Header
            leftComponent={<BackIcon />}
            middleComponent={<HeaderTitle title="Restore Password" />}
        />
        <View style={{padding:'10%',}}>
            <Image style={{alignSelf:'center',height:'45%',width:'60%'}} source={require('./src/ui/images/cry.png')}/>
            <TextInput style={styles.text} placeholder="Enter email"/>
            <Button
                title="Send E-mail"
                color="#5956E9"
            />
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
export default ForgotPassword
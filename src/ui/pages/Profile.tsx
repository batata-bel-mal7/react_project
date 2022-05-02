import * as React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/user/userSlice'
import Header from '../components/Header'
import HeaderBackButton from '../components/HeaderBackButton'
import LocationIcon from '../components/icons/LocationIcon'
import ProfileButton from '../components/ProfileButton'
const Profile = ({ navigation }: any) => {
  const user = useSelector(selectUser)
  return (
    <View style={styles.container}>
      <Header leftComponent={<HeaderBackButton navigation={navigation} />} />
      <View style={{ flex: 1, marginHorizontal: 20 }}>
        <Text
          style={{
            fontFamily: 'Raleway-SemiBold',
            fontSize: 34,
            fontWeight: '800',
            color: '#000000',
            paddingBottom: 30,
          }}
        >
          My profile
        </Text>
        <View style={[styles.button, { marginTop: 40 }]}>
          <Image
            style={{
              height: 100,
              width: 100,
              alignSelf: 'center',
              borderRadius: 76,
              resizeMode: 'contain',
              paddingVertical: 20,
              marginTop: -70,
            }}
            source={{ uri: user.image }}
          />
          <Text
            style={{
              alignSelf: 'center',
              fontFamily: 'Raleway-SemiBold',
              fontSize: 18,
              fontWeight: '600',
              color: '#000000',
              marginTop: 10,
            }}
          >
            {`${user.firstName} ${user.lastName}`}
          </Text>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <LocationIcon style={{ marginHorizontal: 20 }} />
            <View>
              <Text style={styles.addressText}>Address: 43 cairo</Text>
              <Text style={styles.addressText}>M13 4GR</Text>
              <Text style={styles.addressText}>Manchester, UK</Text>
            </View>
          </View>
        </View>
        <ProfileButton
          text={'Edit Profile'}
          onPress={function (): void {
            throw new Error('Function not implemented.')
          }}
        />
        <ProfileButton
          text="Shopping address"
          onPress={function (): void {
            throw new Error('Function not implemented.')
          }}
        />
        <ProfileButton
          text="Order History"
          onPress={function (): void {
            throw new Error('Function not implemented.')
          }}
        />
        <ProfileButton
          text="Cards"
          onPress={function (): void {
            throw new Error('Function not implemented.')
          }}
        />
        <ProfileButton
          text="Notifications"
          onPress={function (): void {
            throw new Error('Function not implemented.')
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  text: {
    fontFamily: 'Raleway-SemiBold',
    fontSize: 18,
    color: '#000000',
  },
  button: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 20,
  },
  addressText: {
    fontFamily: 'Raleway-Regular',
    fontSize: 15,
    color: '#000000',
  },
})
export default Profile

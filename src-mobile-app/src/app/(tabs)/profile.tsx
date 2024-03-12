import React, { FC } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { YStack, useTheme } from 'tamagui';

// Define an interface for your component's props
interface ProfileProps {
  username: string;
  email: string;
  profilePictureUrl?: string; // Optional property
}

// Use the FC type and your ProfileProps interface for the component
const Profile: FC<ProfileProps> = ({ username, email, profilePictureUrl }) => {
  const theme = useTheme();
  const phoneNumber = 'Phone +1 234 567 890'; // Dummy data for demonstration
  const contactEmail = 'contact@example.com'; // Additional email constant for display
  const localImagePath = '../../../assets/images/image.jpg'; // Relative path to your image file

  return (
    <ScrollView style={styles.container}>
      <YStack backgroundColor={theme.backgroundStrong} justifyContent="center" alignItems="center" flex={1}>
        {/* Removed H3 component */}
      </YStack>
      <View style={styles.header}>
        <Text style={styles.headerText}>OSU Damfit</Text>
      </View>
      <View style={styles.profileSection}>
        <Image 
          source={profilePictureUrl ? { uri: profilePictureUrl } : require(localImagePath)} 
          style={styles.profilePic} 
        />
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.email}>{email}</Text>
        <Text style={styles.additionalEmail}>{contactEmail}</Text>
        <Text style={styles.phone}>{phoneNumber}</Text>
      </View>
      <View style={styles.buttonSection}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit Profile Information</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Help & Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Privacy Policy</Text>
        </TouchableOpacity>
        {/* Add more buttons as needed */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    paddingTop: 70,
    paddingBottom: 10,
    backgroundColor: '#D73F09',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: 'white',
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 10,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  email: {
    fontSize: 16,
    marginTop: 10,
  },
  additionalEmail: {
    fontSize: 16,
    color: 'gray',
    marginTop: 5,
  },
  phone: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
    marginTop: 10,
  },
  buttonSection: {
    marginTop: 20,
  },
  button: {
    backgroundColor: 'gray',
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Profile;

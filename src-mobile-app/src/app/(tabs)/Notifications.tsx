import React, { FC } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const Notifications: FC = () => {
  // Placeholder data for demonstration
  const notifications = [
    { id: 1, title: 'New Friend Request', description: 'John Doe sent you a friend request.', time: '2m ago' },
    { id: 2, title: 'New Message', description: 'Jane Smith sent you a new message.', time: '10m ago' },
    { id: 3, title: 'Event Reminder', description: 'You have a scheduled workout today at 6 PM.', time: '1h ago' },
    // Add more notifications as needed
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Notifications</Text>
      </View>
      <View style={styles.notificationsContainer}>
        {notifications.map(notification => (
          <View key={notification.id} style={styles.notification}>
            <Text style={styles.title}>{notification.title}</Text>
            <Text style={styles.description}>{notification.description}</Text>
            <Text style={styles.time}>{notification.time}</Text>
          </View>
        ))}
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
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#D73F09',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  notificationsContainer: {
    padding: 20,
  },
  notification: {
    backgroundColor: '#F0F0F5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
  },
  time: {
    fontSize: 12,
    color: 'gray',
  },
});

export default Notifications;

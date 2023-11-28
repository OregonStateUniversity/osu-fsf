import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

// Mock data - replace this with real data fetching from your backend
const leaderboardData = [
  { id: 1, name: 'Eiden', steps: 2430, rankChange: null },
  { id: 2, name: 'Emma Aria', steps: 1674, rankChange: 'up' },
  { id: 3, name: 'Jackson', steps: 1847, rankChange: 'down' },
  // More users...
];

const Leaderboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Leaderboard</Text>
      <ScrollView style={styles.scrollView}>
        {leaderboardData.map((user, index) => (
          <View key={user.id} style={styles.userContainer}>
            <Text style={styles.name}>{index + 1}. {user.name}</Text>
            <Text style={styles.steps}>{user.steps} steps</Text>
            {user.rankChange && <Text style={styles.rankChange}>{user.rankChange}</Text>}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 100,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
  },
  userContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  name: {
    fontSize: 14,
    color: 'orange',
  },
  steps: {
    fontSize: 16,
    color: '#666',
  },
  rankChange: {
    // Style depending on whether the rank went up or down
    color: 'red', // or 'red' if the rank went down
  },
});

export default Leaderboard;

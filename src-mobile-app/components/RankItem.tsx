import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createClient } from '@supabase/supabase-js';

/**
 * Rank Item Component
 */

type RankItemProps = {
    rank: number; // Rank Number
    name: string; // Rank Name / Text
    score: number; // Rank Score
}

export default function RankItem(props: RankItemProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.rank}>{props.rank}</Text>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.score}>{props.score}</Text>
        </View>
    );
}

// style
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
      marginBottom: 10,
    },
    rank: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    name: {
        fontSize: 20,
    },
    score: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});


import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const leaderboardData = [
  { id: 1, rank: 1, name: 'GameMaster99', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150', points: 15420, gamesPlayed: 47, level: 28 },
  { id: 2, rank: 2, name: 'ProGamer2024', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150', points: 14230, gamesPlayed: 42, level: 26 },
  { id: 3, rank: 3, name: 'AngryBirdKing', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150', points: 13850, gamesPlayed: 38, level: 25 },
  { id: 4, rank: 4, name: 'SpeedRunner', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150', points: 12980, gamesPlayed: 35, level: 24 },
  { id: 5, rank: 5, name: 'PuzzleMaster', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150', points: 12150, gamesPlayed: 33, level: 23 },
  { id: 6, rank: 6, name: 'ArcadeLegend', avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150', points: 11560, gamesPlayed: 31, level: 22 },
  { id: 7, rank: 7, name: 'RetroGamer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150', points: 10890, gamesPlayed: 29, level: 21 },
  { id: 8, rank: 8, name: 'HighScoreHero', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150', points: 10240, gamesPlayed: 27, level: 20 },
  { id: 9, rank: 9, name: 'GameChampion', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150', points: 9680, gamesPlayed: 25, level: 19 },
  { id: 10, rank: 10, name: 'LevelUpMaster', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150', points: 9120, gamesPlayed: 23, level: 18 },
];

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1: return 'trophy';
    case 2: return 'medal';
    case 3: return 'medal';
    default: return 'person';
  }
};

const getRankColor = (rank: number) => {
  switch (rank) {
    case 1: return '#FFD700';
    case 2: return '#C0C0C0';
    case 3: return '#CD7F32';
    default: return '#6C5CE7';
  }
};

export default function LeaderboardScreen() {
  const insets = useSafeAreaInsets();

  const renderLeaderboardItem = ({ item, index }) => (
    <View style={styles.leaderboardItem}>
      <View style={styles.rankContainer}>
        <View style={[styles.rankBadge, { backgroundColor: getRankColor(item.rank) }]}>
          <Icon name={getRankIcon(item.rank)} size={16} color="#fff" />
        </View>
        <Text style={styles.rankNumber}>#{item.rank}</Text>
      </View>
      
      <View style={styles.playerInfo}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>{item.name.charAt(0)}</Text>
        </View>
        <View style={styles.playerDetails}>
          <Text style={styles.playerName}>{item.name}</Text>
          <Text style={styles.playerLevel}>Level {item.level}</Text>
        </View>
      </View>
      
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{item.points.toLocaleString()}</Text>
          <Text style={styles.statLabel}>Points</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{item.gamesPlayed}</Text>
          <Text style={styles.statLabel}>Games</Text>
        </View>
      </View>
    </View>
  );

  return (
    <LinearGradient
      colors={['#0A0A0A', '#1A1A1A', '#0A0A0A']}
      style={[styles.container, { paddingTop: insets.top }]}
    >
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Leaderboard</Text>
        <Text style={styles.headerSubtitle}>Top 10 Players</Text>
      </View>

      <View style={styles.topThree}>
        {leaderboardData.slice(0, 3).map((player, index) => (
          <View key={player.id} style={styles.podiumItem}>
            <View style={[styles.podiumAvatar, { backgroundColor: getRankColor(player.rank) }]}>
              <Text style={styles.podiumAvatarText}>{player.name.charAt(0)}</Text>
            </View>
            <Text style={styles.podiumName}>{player.name}</Text>
            <Text style={styles.podiumPoints}>{player.points.toLocaleString()}</Text>
            <View style={[styles.podiumBase, { backgroundColor: getRankColor(player.rank) }]} />
          </View>
        ))}
      </View>

      <FlatList
        data={leaderboardData}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderLeaderboardItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.7)',
  },
  topThree: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  podiumItem: {
    alignItems: 'center',
    flex: 1,
  },
  podiumAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    borderWidth: 3,
    borderColor: '#fff',
  },
  podiumAvatarText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  podiumName: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
    textAlign: 'center',
  },
  podiumPoints: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 12,
    marginBottom: 8,
  },
  podiumBase: {
    width: 40,
    height: 20,
    borderRadius: 20,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  leaderboardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  rankContainer: {
    alignItems: 'center',
    marginRight: 16,
  },
  rankBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  rankNumber: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 12,
    fontWeight: '600',
  },
  playerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#6C5CE7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  playerDetails: {
    flex: 1,
  },
  playerName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  playerLevel: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 12,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  statLabel: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 10,
  },
});

import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  Image, 
  StatusBar 
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  
  const user = {
    name: "Alex Johnson",
    username: "@gamewarrior",
    level: 27,
    xp: 1850,
    xpNeeded: 2200,
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150",
    bio: "Hardcore gamer 🎮 | Achievement hunter 🏆 | Love RPGs and FPS",
    joined: "January 2023",
    gamesPlayed: 47,
    achievements: 23,
    friends: 86,
    totalPoints: 12450,
    rank: 15,
    favoriteGame: "Angry Birds",
    bestScore: 15420,
  };

  const stats = [
    { label: "Games", value: user.gamesPlayed, icon: "game-controller" },
    { label: "Total Points", value: user.totalPoints.toLocaleString(), icon: "star" },
    { label: "Best Score", value: user.bestScore.toLocaleString(), icon: "trophy" },
    { label: "Rank", value: `#${user.rank}`, icon: "medal" },
  ];

  return (
    <LinearGradient 
      colors={['#0A0A0A', '#1A1A1A', '#0A0A0A']}
      style={[styles.container, { paddingTop: insets.top }]}
    >
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile</Text>
          <TouchableOpacity style={styles.settingsButton}>
            <Icon name="settings-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Image source={{ uri: user.avatar }} style={styles.avatar} />
            <View style={styles.levelBadge}>
              <Text style={styles.levelText}>{user.level}</Text>
            </View>
          </View>
          
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.username}>{user.username}</Text>
          <Text style={styles.bio}>{user.bio}</Text>
          
          <View style={styles.memberSince}>
            <Icon name="calendar" size={14} color="rgba(255,255,255,0.6)" />
            <Text style={styles.memberSinceText}>Member since {user.joined}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Game Stats</Text>
          <View style={styles.statsContainer}>
            {stats.map((stat, index) => (
              <View key={index} style={styles.statItem}>
                <View style={styles.statIconContainer}>
                  <Icon name={stat.icon} size={20} color="#fff" />
                </View>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Favorite Game</Text>
          <View style={styles.favoriteGameContainer}>
            <View style={styles.favoriteGameInfo}>
              <Text style={styles.favoriteGameName}>{user.favoriteGame}</Text>
              <Text style={styles.favoriteGameScore}>Best Score: {user.bestScore.toLocaleString()}</Text>
            </View>
            <View style={styles.favoriteGameIcon}>
              <Icon name="game-controller" size={24} color="#6C5CE7" />
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.logoutButton}>
          <Icon name="log-out-outline" size={20} color="#FF6B6B" />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>

        <View style={styles.footer} />
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  settingsButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileSection: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#6C5CE7',
  },
  levelBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#6C5CE7',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#1A1A1A',
  },
  levelText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  userName: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  username: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 14,
    marginBottom: 8,
  },
  bio: {
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 20,
  },
  memberSince: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  memberSinceText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 12,
    marginLeft: 4,
  },
  xpContainer: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    marginHorizontal: 20,
    marginBottom: 24,
    padding: 16,
    borderRadius: 12,
  },
  xpHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  xpTitle: {
    color: '#fff',
    fontWeight: '600',
  },
  xpCount: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 12,
  },
  xpBar: {
    height: 6,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 3,
    overflow: 'hidden',
  },
  xpProgress: {
    height: '100%',
    borderRadius: 3,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  seeAllText: {
    color: '#6C5CE7',
    fontSize: 14,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  favoriteGameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.05)',
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 12,
  },
  favoriteGameInfo: {
    flex: 1,
  },
  favoriteGameName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  favoriteGameScore: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 14,
  },
  favoriteGameIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(108, 92, 231, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
  },
  statIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(108, 92, 231, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  statValue: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statLabel: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 12,
  },
  achievementsContainer: {
    paddingHorizontal: 20,
  },
  achievementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.05)',
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
  },
  achievementIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  achievementInfo: {
    flex: 1,
  },
  achievementName: {
    color: '#fff',
    fontWeight: '600',
    marginBottom: 2,
  },
  achievementGame: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 12,
  },
  settingsContainer: {
    paddingHorizontal: 20,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  settingIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  settingText: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginBottom: 30,
    padding: 16,
    borderRadius: 12,
    backgroundColor: 'rgba(255,107,107,0.1)',
  },
  logoutText: {
    color: '#FF6B6B',
    fontWeight: '600',
    marginLeft: 8,
  },
  footer: {
    height: 20,
  },
});
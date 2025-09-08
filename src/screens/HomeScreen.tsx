import React, { useCallback } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  StatusBar, 
  FlatList, 
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { RootStackParamList, TabParamList } from '../navigation/AppNavigator';
import { games } from '../data/games';
import GameCard from '../components/GameCard';

type Props = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'Home'>,
  NativeStackScreenProps<RootStackParamList>
>;

export default function HomeScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();

  const onPressGame = useCallback(
    (game: { id: number; title: string; description: string; image: string; color: string; tags?: string[] }) => {
      navigation.navigate('Unity', { game });
    },
    [navigation]
  );

  const renderHeader = () => (
    <LinearGradient 
      colors={['#0C0C0C', '#1A1A1A']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={[styles.header, { paddingTop: insets.top + 10 }]}
    >
      <View style={styles.headerContent}>
        <View>
          <Text style={styles.greeting}>Welcome to</Text>
          <Text style={styles.headerTitle}>Game Hub</Text>
        </View>
        <TouchableOpacity style={styles.searchButton}>
          <Icon name="search" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );

  const renderSectionHeader = () => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>Featured Games</Text>
      <TouchableOpacity>
        <Text style={styles.seeAllText}>See All</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <LinearGradient 
      colors={['#0A0A0A', '#1E1E1E', '#0A0A0A']}
      style={styles.container}
    >
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      
      {renderHeader()}
      
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1519669556878-63bdad8a1a49?w=800' }}
        style={styles.heroSection}
        imageStyle={styles.heroImage}
      >
        <LinearGradient
          colors={['rgba(0,0,0,0.2)', 'rgba(0,0,0,0.7)']}
          style={styles.heroOverlay}
        >
          <Text style={styles.heroTitle}>Epic Gaming Experience</Text>
          <Text style={styles.heroSubtitle}>Discover amazing games in one place</Text>
          <TouchableOpacity style={styles.heroButton}>
            <Text style={styles.heroButtonText}>Explore Now</Text>
            <Icon name="arrow-forward" size={16} color="#fff" style={styles.heroButtonIcon} />
          </TouchableOpacity>
        </LinearGradient>
      </ImageBackground>

      {renderSectionHeader()}

      <FlatList
        data={games}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <GameCard game={item} onPress={() => onPressGame(item)} />
        )}
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
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
    paddingBottom: 15,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  greeting: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 14,
    marginBottom: 2,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Roboto-Bold',
  },
  searchButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroSection: {
    height: 200,
    margin: 16,
    borderRadius: 16,
    overflow: 'hidden',
    marginTop: 20,
  },
  heroImage: {
    borderRadius: 16,
  },
  heroOverlay: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  heroTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  heroSubtitle: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
    marginBottom: 15,
  },
  heroButton: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(108, 92, 231, 0.9)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignItems: 'center',
  },
  heroButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  heroButtonIcon: {
    marginLeft: 5,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginTop: 10,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeAllText: {
    color: '#6C5CE7',
    fontSize: 14,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});
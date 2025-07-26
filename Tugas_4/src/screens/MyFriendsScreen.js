import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native'; // Tambahkan KeyboardAvoidingView, Platform

// Menggunakan URL gambar yang Anda sediakan
const dummyFriends = [
  { id: '1', name: 'Zaki Ajabbabar', username: '@zakiajabbabar', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww' },
  { id: '2', name: 'Adrian Adhari', username: '@adrianadhari', avatar: 'https://awsimages.detik.net.id/community/media/visual/2019/02/19/42393387-9c5c-4be4-97b8-49260708719e.jpeg?w=700&q=90' },
  { id: '3', name: 'Hana Yulia Rahmah', username: '@hanayulia', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww' },
  { id: '4', name: 'Lukman Nurhakim', username: '@lukmann', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww' },
  { id: '5', 'name': 'Cindy Kevina', username: '@cindyke', avatar: 'https://s7ap1.scene7.com/is/image/aia/Cara%20Bijak%20Menghadapi%20Orang%20dengan%20Gangguan%20Mental%20NPD?qlt=85&ts=1705989166277&dpr=off' },
  { id: '6', 'name': 'Erdiana Ragil Syawala', username: '@erdiana', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww' },
  { id: '7', 'name': 'Fawas Mohamad Fauzi', username: '@fawas', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww' },
];

const FriendItem = ({ friend }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
    console.log(`${isFollowing ? 'Unfollowing' : 'Following'} ${friend.name}`);
  };

  return (
    <View style={styles.friendItem}>
      <Image source={{ uri: friend.avatar }} style={styles.friendAvatar} />
      <View style={styles.friendInfo}>
        <Text style={styles.friendName}>{friend.name}</Text>
        <Text style={styles.friendUsername}>{friend.username}</Text>
      </View>
      <TouchableOpacity
        style={[
          styles.followButton,
          isFollowing ? styles.followingButton : styles.notFollowingButton,
        ]}
        onPress={toggleFollow}
      >
        <Text
          style={[
            styles.followButtonText,
            isFollowing ? styles.followingButtonText : styles.notFollowingButtonText,
          ]}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const MyFriendsScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredFriends, setFilteredFriends] = useState(dummyFriends);

  
  const handleSearch = (text) => {
    setSearchText(text);
    if (text) {
      const newData = dummyFriends.filter(item => {
        const itemName = item.name.toUpperCase();
        const textData = text.toUpperCase();
        return itemName.indexOf(textData) > -1;
      });
      setFilteredFriends(newData);
    } else {
      setFilteredFriends(dummyFriends); 
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
    >
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={handleSearch}
        />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 50 }}> 
        <Text style={styles.sectionTitle}>Recommended Friends</Text>
        {filteredFriends.length > 0 ? (
          filteredFriends.map(friend => (
            <FriendItem key={friend.id} friend={friend} />
          ))
        ) : (
          <Text style={styles.noResultsText}>No friends found.</Text>
        )}


        <Text style={styles.sectionTitle}>Similar Contact</Text>
        {dummyFriends.slice(0, 2).map(friend => (
          <FriendItem key={`similar-${friend.id}`} friend={friend} />
        ))}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0, // Tambahkan padding atas untuk Android
  },
  searchBarContainer: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    marginTop: 20, // Geser kotak input ke bawah
  },
  searchInput: {
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 8,
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginTop: 20,
    marginBottom: 10,
  },
  friendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
  },
  friendAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  friendInfo: {
    flex: 1,
  },
  friendName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  friendUsername: {
    fontSize: 14,
    color: '#666',
  },
  followButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 5,
    borderWidth: 1,
  },
  followButtonText: {
    fontWeight: 'bold',
  },
  notFollowingButton: {
    backgroundColor: '#0095f6',
    borderColor: '#0095f6',
  },
  notFollowingButtonText: {
    color: '#fff',
  },
  followingButton: {
    backgroundColor: '#fff',
    borderColor: '#dbdbdb',
  },
  followingButtonText: {
    color: '#333',
  },
  noResultsText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#888',
  }
});

export default MyFriendsScreen;
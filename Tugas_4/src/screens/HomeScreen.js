import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList, Dimensions, Platform, TouchableOpacity, TextInput } from 'react-native';

const { width } = Dimensions.get('window');

// Data dummy untuk Stories (tetap sama)
const dummyStories = [
  { id: '1', name: 'Your Story', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D' },
  { id: '2', name: 'Shepilla', image: 'https://cdns.klimg.com/newshub.id/interactive-content/1448/headline-tes-kepribadian-sederhana-kamu-orang-yang-seperti-apa-sih.jpg' },
  { id: '3', name: 'Zaki', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDLcaoMqauKXsMZwJOio8tds2bjfB3WK3HnQ&s' },
  { id: '4', name: 'Adrian', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D' },
  { id: '5', name: 'Hana', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww' },
  { id: '6', name: 'Lukman', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww' },
  { id: '7', name: 'Alisa', image: 'https://www.shutterstock.com/image-photo/side-view-young-smiling-caucasian-260nw-2474965309.jpg'},
  { id: '8', name: 'Budi', image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww'},
  { id: '9', name: 'Citra', image: 'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/01/05082857/Mudah-Ini-Cara-Mengatasi-Cegukan-pada-Orang-Dewasa.jpg.webp'},
];

// Data produk yang Anda berikan sebelumnya
const dummyProductsCewek = [
    { id: 'cewek1', image: 'https://down-id.img.susercontent.com/file/91fefe34c7b6ec3136407824799965ec', title: 'Gaun Pesta Mewah' },
    { id: 'cewek2', image: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//100/MTA-47824651/tidak_ada_merk_tas_selempang_wanita_vb3107_import_slingbag_pesta_bahu_jinjing_handbag_perempuan_kondangan_jakarta_kantor_fashion_cewek_elegan_terbaru_ibu_korea_murah_full01_d8erob5o.jpg', title: 'Tas Elegan Terbaru' },
    { id: 'cewek3', image: 'https://okuekspres.bacakoran.co/upload/0d6a1cdedc135afed2767aea0226b2d8.jpg', title: 'Sepatu Hak Tinggi' },
    { id: 'cewek4', image: 'https://media.karousell.com/media/photos/products/2023/3/12/paket_usaha_aksesoris_branded__1678616188_857e9358.jpg', title: 'Aksesoris Cantik' },
];

const dummyProductsCowok = [
    { id: 'cowok1', image: 'https://id-test-11.slatic.net/p/8144d8104765f2455e46a629cef7315f.jpg', title: 'Kemeja Formal Pria' },
    { id: 'cowok2', image: 'https://i0.wp.com/blog.jamtangan.com/wp-content/uploads/2024/06/Harga-Jam-Sport-Watch-Mulai-700-Ribuan-Ini-5-Rekomendasi-Terbaiknya.jpg?fit=1920%2C1200&ssl=1', title: 'Jam Tangan Sporty' },
    { id: 'cowok3', image: 'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/10/6/e5a636a5-efa9-4362-bea5-1ebe74bc6d9f.png', title: 'Celana Jeans Slim Fit' },
    { id: 'cowok4', image: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/88/MTA-124711225/brd-91592_justlook-kasumi-sepatu-sneakers-wanita-sneakers-shoes-fashion-korea_full01-3dccc82d.jpg', title: 'Sepatu Sneakers' },
];

// Gabungkan dan format data produk menjadi dummyPosts ala Instagram
const generateDummyPosts = () => {
  const posts = [];
  const allProducts = [...dummyProductsCewek, ...dummyProductsCowok]; // Gabungkan semua produk
  const userNames = ['Fashionista', 'StyleGuru', 'TrendSetter', 'DailyWear', 'Shopaholic', 'GadgetGeek']; // Nama pengguna acak
  const avatars = dummyStories.map(s => s.image); // Gunakan avatar dari stories atau tambahkan yang lain

  allProducts.forEach((product, index) => {
    const randomUserIndex = index % userNames.length;
    const randomAvatarIndex = index % avatars.length;
    posts.push({
      id: `post-${product.id}`,
      user: {
        id: `user-${randomUserIndex}`,
        name: userNames[randomUserIndex],
        avatar: avatars[randomAvatarIndex],
      },
      image: product.image,
      caption: `Tampilan baru hari ini: ${product.title}! Sangat suka dengan modelnya. ✨`,
      likes: Math.floor(Math.random() * 5000) + 100, // Likes acak
      comments: Math.floor(Math.random() * 100) + 5, // Komentar acak
    });
  });

  return posts;
};

const finalDummyPosts = generateDummyPosts();


const StoryCircle = ({ name, image }) => (
  <View style={styles.storyContainer}>
    <Image source={{ uri: image }} style={styles.storyImage} />
    <Text style={styles.storyName}>{name}</Text>
  </View>
);

const InstagramPost = ({ user, image, caption, likes, comments }) => (
  <View style={styles.postContainer}>
    {/* Post Header */}
    <View style={styles.postHeader}>
      <Image source={{ uri: user.avatar }} style={styles.postAvatar} />
      <Text style={styles.postUsername}>{user.name}</Text>
      <TouchableOpacity style={{marginLeft: 'auto'}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>...</Text>
      </TouchableOpacity>
    </View>

    {/* Post Image */}
    <Image source={{ uri: image }} style={styles.postImage} />

    {/* Post Actions (Like, Comment, Share, Save) */}
    <View style={styles.postActions}>
      <View style={styles.leftActions}>
        <Text style={styles.actionIcon}>♡</Text>
        <Text style={styles.actionIcon}>💬</Text>
        <Text style={styles.actionIcon}>✈︎</Text>
      </View>
      <View style={styles.rightActions}>
        {/* Mengganti teks 'Bookmark' dengan karakter Unicode bookmark */}
        <Text style={styles.actionIcon}>🔖</Text> {/* <-- Perubahan ada di sini */}
      </View>
    </View>

    {/* Post Likes */}
    <Text style={styles.postLikes}>{likes.toLocaleString()} likes</Text>

    {/* Post Caption */}
    <Text style={styles.postCaption}>
      <Text style={styles.postUsername}>{user.name} </Text>
      {caption}
    </Text>

    {/* View All Comments */}
    <Text style={styles.viewComments}>View all {comments} comments</Text>

    {/* Add a comment (simplified) */}
    <View style={styles.commentInputContainer}>
      <Image source={{ uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D' }} style={styles.myAvatarSmall} />
      <TextInput
        style={styles.commentInput}
        placeholder="Add a comment..."
        placeholderTextColor="#888"
      />
    </View>
  </View>
);


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Top Bar - Instagram Like */}
      <View style={styles.topBar}>
        <Text style={styles.instagramText}>Instagram</Text>
        <View style={styles.topIcons}>
          <Text style={styles.icon}>♡</Text>
          <Text style={styles.icon}>✈︎</Text>
        </View>
      </View>

      {/* Stories Section (using FlatList for horizontal scrolling) */}
      <FlatList
        data={dummyStories}
        renderItem={({ item }) => <StoryCircle name={item.name} image={item.image} />}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.storiesSection}
        ListHeaderComponent={<StoryCircle name="Your Story" image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D" />}
      />

      <View style={styles.separator} />

      {/* Instagram Feed Posts (using FlatList for vertical scrolling) */}
      <FlatList
        data={finalDummyPosts}
        renderItem={({ item }) => (
          <InstagramPost
            user={item.user}
            image={item.image}
            caption={item.caption}
            likes={item.likes}
            comments={item.comments}
          />
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.feedListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
  },
  instagramText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  topIcons: {
    flexDirection: 'row',
  },
  icon: {
    fontSize: 24,
    marginLeft: 15,
  },
  storiesSection: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
  },
  storyContainer: {
    alignItems: 'center',
    marginRight: 15,
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#ff69b4',
  },
  storyName: {
    fontSize: 12,
    marginTop: 5,
  },
  separator: {
    height: 1,
    backgroundColor: '#f0f0f0',
    marginVertical: 0,
  },
  feedListContainer: {
    paddingBottom: 50,
    marginTop: 10,
  },
  // --- Instagram Post Styles ---
  postContainer: {
    backgroundColor: '#fff',
    marginBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  postAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  postUsername: {
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: width,
    resizeMode: 'cover',
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  leftActions: {
    flexDirection: 'row',
  },
  rightActions: {
    // Untuk ikon save/bookmark
  },
  actionIcon: {
    fontSize: 24,
    marginRight: 20, // Tetap gunakan marginRight untuk ikon lain, tapi tidak untuk bookmark sendiri
  },
  postLikes: {
    fontWeight: 'bold',
    paddingHorizontal: 15,
    marginBottom: 5,
  },
  postCaption: {
    paddingHorizontal: 15,
    marginBottom: 5,
  },
  viewComments: {
    color: '#888',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  myAvatarSmall: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 10,
  },
  commentInput: {
    flex: 1,
    height: 40,
  },
});

export default HomeScreen;
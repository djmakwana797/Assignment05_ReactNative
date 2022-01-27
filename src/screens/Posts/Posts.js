import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button, ActivityIndicator, FlatList, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getUserPosts, setPostId } from '../../redux/actions';

const Posts = ({ navigation, route }) => {

  const userPosts = useSelector(state => state.userPostsReducer)
  const isLoading = useSelector(state => state.loadingReducer)
  const dispatch = useDispatch()
  const uName = route.params.name

  useEffect(() => {
    dispatch(getUserPosts())
  }, [dispatch])

  const renderUserPosts = ({ item }) => (
    <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? '#ddd' : '#fff' }]} onPress={() => {
      dispatch(setPostId(item.id))
      navigation.navigate('Comments')
    }}
    >
      <View style={styles.post}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.body}>{item.body}</Text>
      </View>
    </Pressable>
  )

  const userSeparator = () => (
    <View style={styles.separator} />
  )

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size={'large'} color='#4169e1' />}
      {!isLoading && userPosts.length !== 0 ?
        <FlatList
          data={userPosts}
          renderItem={item => renderUserPosts(item)}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={userSeparator}
        /> :
        <Text style={styles.noItemstxt}>There are no post from {uName}</Text>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  post: {
    margin: 10,
    padding: 5
  },
  title: {
    fontSize: 20,
    color: 'darkslategrey',
    paddingVertical: 5
  },
  body: {
    fontSize: 16,
    color: 'darkslategrey',
    borderTopWidth: .5,
    paddingVertical: 5
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "slategray",
  },
  noItemstxt :{
    textAlign : 'center',
    fontSize: 18
  }
})

export default Posts;

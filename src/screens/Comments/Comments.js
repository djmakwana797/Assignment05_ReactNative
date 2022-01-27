import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button, ActivityIndicator, FlatList, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../../components/CustomButton';
import { getPostComments } from '../../redux/actions';

const Comments = ({navigation}) => {

  const postComments = useSelector(state => state.postCommentsReducer)
  const isLoading = useSelector(state => state.loadingReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPostComments())
  }, [dispatch])

  const renderComments = ({ item }) => (
    <View style={styles.comment}>
      <Text style={styles.nametxt}>{item.name}</Text>
      <Text style={styles.bodytxt}>{item.body}</Text>
    </View>
  )

  const userSeparator = () => (
    <View style={styles.separator} />
  )

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size={'large'} color="#4169e1" />}
      {!isLoading && postComments.length !==0 ? <FlatList
        data={postComments}
        renderItem={item => renderComments(item)}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={userSeparator}
      /> : 
      <Text style={styles.noItemstxt}>There are no comments on this post</Text>
    }
      <CustomButton text="ADD COMMENT" onPress={()=>navigation.navigate('Add Comment')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  comment: {
    margin: 10,
    padding: 5
  },
  nametxt: {
    fontSize: 20,
    color: 'darkslategrey'
  },
  bodytxt: {
    fontSize: 16,
    color: 'darkslategrey'
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "slategray",
  },
  noItemstxt: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10
  }
})

export default Comments;

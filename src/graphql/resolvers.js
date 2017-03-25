import {getAllMessages} from '../models/message';
import {getAllUsers} from '../models/user';

const resolvers = {
  Query: {
    messages() {
      return getAllMessages().then(data => {
        return data;
      });
    },
    users() {
      return getAllUsers().then(data => {
        console.log(data);
        return data;
      });
    }
  },
  Mutation: {
    // upvotePost(_, {postId}) {
    //   const post = find(posts, {id: postId});
    //   if (!post) {
    //     throw new Error(`Couldn't find post with id ${postId}`);
    //   }
    //   post.votes += 1;
    //   return post;
    // }
  },
  User: {
    // messages(user) {
    //   return filter(messages, {creator: user.id});
    // }
  },
  Message: {
    // creator(message) {
    //   return find(user, {id: message.creator});
    // }
  }
};
export default resolvers;

import Quiz, { IComment, IQuis } from "../Models/QuisModel";
import User, { IUser } from "../Models/userModel";

const getPosts = async () => {
  try {
    const posts = await Quiz.find();
    console.log(posts);

    if (!posts) return "cant find posts";
    return posts;
  } catch (error: any) {
    return `cant find mongo DB ${error}`;
  }
};

const getOnePost = async (_id: string) => {
  try {
    console.log(_id);
    const post = await Quiz.findById(_id);
    console.log(post);
    if (!post) return "the post is not found";
    return post;
  } catch (error: any) {
    return `cant find mongo DB ${error}`;
  }
};

const addPost = async (postData:Partial<IQuis>) => {
  try {
    const newPost = new Quiz(postData)
    return await newPost.save();
  } catch (error) {
    return `cant find the mongo DB ${error}`;
  }
};
const addComment = async(_id:string,CommentData:IComment):Promise<IQuis| void> =>{
  if(!_id || !CommentData){
      console.error('sum data missing')
      return 
  }
  const quis =  await Quiz.findById(_id)
  if(!quis) {
      console.error('post dos not exsist')
      return
  }
  quis.comments.push(CommentData)
  await quis.save()
  return quis
}
const editPost = async (userId: string, newData: Partial<IUser>) => {
  try {
    const user = await User.findById(userId);
    const updatePost = await User.findByIdAndUpdate(
      userId,
      {
        ...newData,
        password: user?.password,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    return updatePost;
  } catch (error: any) {
    return  (`cant find the mongo DB ${error}`);
  }
};

const deletePost = async (postId: string) => {
  try {
    const post = await Quiz.findByIdAndDelete(postId);
    return "post deleted";
  } catch (error: any) {
    return `cant find the mongo DB ${error}`;
  }
};

export {
    addPost,
    deletePost,
    editPost,
    getOnePost,
    getPosts,
    addComment
}

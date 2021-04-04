const initialState = {
  postsArr: [
    {
      id: 1,
      author: {
        name: 'Anakin Skywalker',
        photo:
          'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg',
        nickname: '@dart_vader',
      },
      content: 'WTF? Who is Ray? Why she is Skywalker? Luke...?',
      fullContent:
        'WTF? Who is Ray? Why she is Skywalker? Luke...? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis praesentium aut similique nostrum dolorem quisquam fuga odio corporis laboriosam et. Nobis dolores expedita maiores neque, assumenda beatae eveniet vel perspiciatis!',
      image:
        'https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale',
      date: '26 feb.',
      likes: 34,
      comments: 32,
      reposts: 12,
    },
    {
      id: 2,
      author: {
        name: 'Princess Leila',
        photo:
          'https://api.time.com/wp-content/uploads/2016/07/princess-leia.jpg?quality=85&w=590&h=512&crop=1',
        nickname: '@princess_leila',
      },
      content: 'WTF? Why I is Princess? Hey you...?',
      fullContent:
        'WTF? Why I is Princess? Hey you...? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis praesentium aut similique nostrum dolorem quisquam fuga odio corporis laboriosam et. Nobis dolores expedita maiores neque, assumenda beatae eveniet vel perspiciatis!',
      image:
        'https://secure.i.telegraph.co.uk/multimedia/archive/03167/starwars_3167803b.jpg',
      date: '28 feb.',
      likes: 23,
      comments: 12,
      reposts: 10,
    },
  ],
};

const ADD_POST = 'ADD_POST';
const CHANGE_LIKES = 'CHANGE_LIKES';
const CHANGE_REPOSTS = 'CHANGE_REPOSTS';
const CHANGE_COMMENTS = 'CHANGE_COMMENTS';

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        postsArr: [...state.postsArr, action.payload],
      };
    case CHANGE_LIKES:
      let n = state.postsArr.findIndex(
        (post) => post.id === action.payload.userId
      );
      return {
        ...state,
        postsArr: [...state.postsArr],
        likes: action.payload.isActiveLike
          ? --state.postsArr[n].likes
          : ++state.postsArr[n].likes,
      };

    case CHANGE_COMMENTS:
      let m = state.postsArr.findIndex(
        (post) => post.id === action.payload.userId
      );
      return {
        ...state,
        postsArr: [...state.postsArr],
        likes: action.payload.isActiveLike
          ? --state.postsArr[m].comments
          : ++state.postsArr[m].comments,
      };

    case CHANGE_REPOSTS:
      let x = state.postsArr.findIndex(
        (post) => post.id === action.payload.userId
      );
      return {
        ...state,
        postsArr: [...state.postsArr],
        likes: action.payload.isActivRetweet
          ? --state.postsArr[x].reposts
          : ++state.postsArr[x].reposts,
      };

    default:
      return state;
  }
};

export const addPostAction = (payload) => ({
  type: ADD_POST,
  payload,
});

export const changeLikesAction = (payload) => ({
  type: CHANGE_LIKES,
  payload,
});

export const changeRepostsAction = (payload) => ({
  type: CHANGE_REPOSTS,
  payload,
});

export const changeCommentsAction = (payload) => ({
  type: CHANGE_COMMENTS,
  payload,
});

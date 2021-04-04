import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addPostAction } from '../../store/postReducer';

import './AddPost.css';

export const AddPost = () => {
  const [name, setName] = useState('Master Yoda');
  const [photo, setPhoto] = useState(
    'https://jimharrisblog.files.wordpress.com/2015/03/yoda.jpg?w=584'
  );
  const [nick, setNick] = useState('@master_yoda');
  const [date, setDate] = useState('2021-03-28');
  const [text, setText] = useState('WTF? Close your mouths and fight!!!');
  const [image, setImage] = useState(
    'https://miro.medium.com/max/1000/0*P1_WxAnjmspi51pJ.jpeg'
  );
  const [likes, setLikes] = useState(45);
  const [comments, setComments] = useState(54);
  const [reposts, setReposts] = useState(23);
  const [fullText, setFullText] = useState(
    'WTF? Close your mouths and fight!!! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis praesentium aut similique nostrum dolorem quisquam fuga odio corporis laboriosam et. Nobis dolores expedita maiores neque, assumenda beatae eveniet vel perspiciatis!'
  );

  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      !!name.trim() &&
      !!photo.trim() &&
      !!nick.trim() &&
      !!text.trim() &&
      !!fullText.trim() &&
      !!image.trim() &&
      !!date.trim() &&
      reposts !== 0 &&
      comments !== 0 &&
      likes !== 0
    ) {
      const postData = {
        id: Date.now(),
        author: {
          name,
          photo,
          nickname: nick,
        },
        content: text,
        fullContent: fullText,
        image,
        date,
        reposts,
        comments,
        likes,
      };
      if (
        Object.keys(postData).length + Object.keys(postData.author).length ===
        12
      ) {
        dispatch(addPostAction(postData));
        setName('');
        setPhoto('');
        setNick('');
        setDate('');
        setText('');
        setImage('');
        setLikes(0);
        setComments(0);
        setReposts(0);
        setFullText('');
      }
    }
    return false;
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="row">
        <div className="col-md-4 mb-2">
          <label htmlFor="author" className="form-label">
            Author's name
          </label>
          <input
            type="text"
            className="form-control"
            id="author"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div className="col-md-4 mb-2">
          <label htmlFor="author-image" className="form-label">
            Author's image
          </label>
          <input
            type="text"
            className="form-control"
            id="author-image"
            value={photo}
            onChange={(event) => {
              setPhoto(event.target.value);
            }}
          />
        </div>
        <div className="col-md-4 mb-2">
          <label htmlFor="author-nickname" className="form-label">
            Author's nickname
          </label>
          <input
            type="text"
            className="form-control"
            id="author-nickname"
            value={nick}
            onChange={(event) => {
              setNick(event.target.value);
            }}
          />
        </div>
        <div className="col-md-4 mb-2">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={date}
            onChange={(event) => {
              setDate(event.target.value);
            }}
          />
        </div>
        <div className="col-md-4 mb-2">
          <label htmlFor="post-text" className="form-label">
            Post text
          </label>
          <input
            type="text"
            className="form-control"
            id="post-text"
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
          />
        </div>
        <div className="col-md-4 mb-2">
          <label htmlFor="post-image" className="form-label">
            Post image
          </label>
          <input
            type="text"
            className="form-control"
            id="post-image"
            value={image}
            onChange={(event) => {
              setImage(event.target.value);
            }}
          />
        </div>
        <div className="col-md-3 mb-2">
          <label htmlFor="likes" className="form-label">
            Likes
          </label>
          <input
            type="number"
            className="form-control"
            id="likes"
            value={likes}
            onChange={(event) => {
              setLikes(event.target.value);
            }}
          />
        </div>
        <div className="col-md-3 mb-2">
          <label htmlFor="comments" className="form-label">
            Comments
          </label>
          <input
            type="number"
            className="form-control"
            id="comments"
            value={comments}
            onChange={(event) => {
              setComments(event.target.value);
            }}
          />
        </div>
        <div className="col-md-3 mb-2">
          <label htmlFor="reposts" className="form-label">
            Reposts
          </label>
          <input
            type="number"
            className="form-control"
            id="reposts"
            value={reposts}
            onChange={(event) => {
              setReposts(event.target.value);
            }}
          />
        </div>
        <div className="col-md-3 mb-2">
          <label htmlFor="full-post-text" className="form-label">
            Full post text
          </label>
          <textarea
            className="form-control"
            id="full-post-text"
            value={fullText}
            onChange={(event) => {
              setFullText(event.target.value);
            }}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-success mt-3">
        Add post
      </button>
    </form>
  );
};

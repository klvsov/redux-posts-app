import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  changeLikesAction,
  changeCommentsAction,
  changeRepostsAction,
} from '../../store/postReducer';

import './Post.css';

import verifiedIcon from '../../images/correct.svg';

const Post = ({
  author,
  date,
  image,
  content,
  fullContent,
  comments,
  likes,
  reposts,
  userId,
}) => {
  const { photo, name, nickname } = author;

  const [open, setOpen] = useState(false);

  const [isActiveLike, setActiveLike] = useState(false);
  const [isActivRetweet, setActiveRetweet] = useState(false);
  const [isActiveComment, setActiveComment] = useState(false);

  const dispatch = useDispatch();

  const contentHandler = () => {
    setOpen((open) => !open);
  };

  const likeHandler = () => {
    setActiveLike((isActiveLike) => !isActiveLike);
    dispatch(changeLikesAction({ userId, isActiveLike }));
  };

  const retweetHandler = () => {
    setActiveRetweet((isActivRetweet) => !isActivRetweet);
    dispatch(changeRepostsAction({ userId, isActivRetweet }));
  };

  const commentHandler = () => {
    setActiveComment((isActiveComment) => !isActiveComment);
    dispatch(changeCommentsAction({ userId, isActiveComment }));
  };

  return (
    <div className="single-post">
      <div className="post-avatar">
        <img src={photo} alt="author-icon" />
      </div>
      <div className="post-content">
        <div className="about-author">
          <h3 className="author-name">{name}</h3>
          <img src={verifiedIcon} alt="verified-icon" />
          <p>{nickname} &middot;</p>
          <span>{date}</span>
          <span className="arrow" onClick={contentHandler}>
            {open ? (
              <i className="fas fa-sort-up"></i>
            ) : (
              <i className="fas fa-sort-down"></i>
            )}
          </span>
        </div>
        <div className="post-text">
          <p>{!open ? content : fullContent}</p>
        </div>
        <div className="post-image">
          <img src={image} alt="post-img" />
        </div>
        <div className="post-action">
          <div className="singleAction" onClick={commentHandler}>
            {isActiveComment ? (
              <i className="fas fa-comment-alt"></i>
            ) : (
              <i className="far fa-comment-alt"></i>
            )}
            <p>{comments}</p>
          </div>
          <div className="singleAction" onClick={retweetHandler}>
            {isActivRetweet ? (
              <i className="fas fa-head-side-cough-slash"></i>
            ) : (
              <i className="fas fa-head-side-cough"></i>
            )}
            <p>{reposts}</p>
          </div>
          <div className="singleAction" onClick={likeHandler}>
            {isActiveLike ? (
              <i className="fas fa-heart"></i>
            ) : (
              <i className="far fa-heart"></i>
            )}
            <p>{likes}</p>
          </div>
          <div className="singleAction">
            <i className="fas fa-upload"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

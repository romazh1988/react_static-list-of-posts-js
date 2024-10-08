import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import './PostInfo.scss';

export const PostInfo = ({ post }) => {
  const { title, user, body, comments } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>
        <p>
          {' Posted by '}
          {user && <UserInfo user={user} />}
        </p>
      </div>
      <p className="PostInfo__body">{body}</p>
      <hr />
      {post.comments.length > 0 ? (
        <CommentList comments={comments} />
      ) : (
        <p data-cy="NoCommentsMessage">No comments yet</p>
      )}
    </div>
  );
};

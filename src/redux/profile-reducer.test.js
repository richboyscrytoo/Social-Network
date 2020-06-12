import profileReducer, {
  addPostActionCreator,
  deletePost
} from './profile-reducer';
import React from 'react';

let state = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likes: 10 },
    { id: 2, message: 'It`s my first post', likes: 15 }
  ]
};

it('length of posts should be incremented', () => {
  // 1. test data
  let action = addPostActionCreator('asdasd');

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(3);
});

it('message of new post should be correct', () => {
  // 1. test data
  let action = addPostActionCreator('asdasd');

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts[3]).toBe('asdasd');
});

it('after deleting length should be decremented', () => {
  // 1. test data
  let action = deletePost(1);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(1);
});

it('after deleting length shouldn`t be decremented if id is incorrect', () => {
  // 1. test data
  let action = deletePost(1000);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(4);
});
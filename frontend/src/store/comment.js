import { csrfFetch } from "./csrf";

const LOAD_COMMENTS = "comment/LOAD_COMMENTS";
const CREATE_COMMENT = "comment/CREATE_COMMENT";
const EDIT_COMMENT = "comment/EDIT_COMMENT";
const DELETE_COMMENT = "comment/DELETE_COMMENT";

export const loadComments = (comments) => {
  return {
    type: LOAD_COMMENTS,
    comments,
  };
};

export const createComment = (comment) => {
  return {
    type: CREATE_COMMENT,
    comment,
  };
};

export const editComment = (comment) => {
  return {
    type: EDIT_COMMENT,
    comment,
  };
};

export const deleteComment = (comment) => {
  return {
    type: DELETE_COMMENT,
    comment,
  };
};

export const getComments = (imageId) => async (dispatch) => {
  const res = await csrfFetch(`/api/comments/${imageId}`);
  const comments = await res.json();
  dispatch(loadComments(comments));
};

export const postComment = (payload) => async (dispatch) => {
  const res = await csrfFetch(`/api/comments/${payload.imageId}`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
  const newComment = await res.json();
  dispatch(createComment(newComment));
};

export const putComment = (payload) => async (dispatch) => {
  const res = await csrfFetch(`/api/comments/${payload.commentId}`);
};

export const removeComment = (commentId) => async (dispatch) => {
  const res = await csrfFetch(`/api/comments/${commentId}`, {
    method: "DELETE",
  });
  const data = await res.json();
  dispatch(deleteComment(data.comment));
};

const initialState = { imageComments: {} };

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COMMENTS:
      const imageComments = {};
      action.comments.forEach(
        (comment) => (imageComments[comment.id] = comment)
      );
      return {
        ...state,
        imageComments,
      };
    case CREATE_COMMENT:
      return {
        ...state,
        imageComments: {
          ...state.imageComments,
          [action.comment.id]: action.comment,
        },
      };
    case DELETE_COMMENT:
      const newState = { ...state };
      delete newState.imageComments[action.comment.id];
      return newState;
    default:
      return state;
  }
};

export default commentReducer;

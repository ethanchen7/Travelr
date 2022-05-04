import { csrfFetch } from "./csrf";

const LOAD_COMMENTS = "comment/LOAD_COMMENTS";

export const loadComments = (comments) => {
  return {
    type: LOAD_COMMENTS,
    comments,
  };
};

export const getComments = (imageId) => async (dispatch) => {
  const res = await csrfFetch(`/api/comments/${imageId}`);
  const comments = await res.json();
  dispatch(loadComments(comments));
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
    default:
      return state;
  }
};

export default commentReducer;

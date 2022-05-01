import { csrfFetch } from "./csrf";
const LOAD = "image/LOAD";
const CREATE = "image/CREATE";

const loadImages = (images) => {
  return {
    type: LOAD,
    images,
  };
};

const createImage = (image) => {
  return {
    type: CREATE,
    image,
  };
};

export const getImages = () => async (dispatch) => {
  const res = await csrfFetch("/api/images");

  const data = await res.json();
  dispatch(loadImages(data));
  return data;
};

export const uploadImage = (submission) => async (dispatch) => {
  const { userId, tags, image } = submission;
  const formData = new FormData();
  formData.append("userId", userId);
  if (tags) formData.append("tags", tags);
  if (image) formData.append("image", image);
  const res = await csrfFetch(`/api/images`, {
    method: "POST",
    headers: {
      //   "Content-Type": "multipart/form-data",
    },
    body: formData,
  });
  //   const data = await res.json();
  //   dispatch(createImage(data));
};

const initialState = { images: [] };

const imageReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD:
      newState = Object.assign({}, state);
      newState.images = action.images;
      return newState;
    case CREATE:
      newState = { ...state, [action.image.id]: action.image };
      return newState;
    default:
      return state;
  }
};

export default imageReducer;

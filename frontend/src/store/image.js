import { csrfFetch } from "./csrf";
const LOAD = "image/LOAD";
const CREATE = "image/CREATE";
const FAVORITE = "image/FAVORITE";
const DELETE_FAVORITE = "image/DELETE_FAVORITE";

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

const favoriteImage = (favorite) => {
  return {
    type: FAVORITE,
    favorite,
  };
};

const deleteFavorite = () => {
  return {
    type: DELETE_FAVORITE,
  };
};

export const getImages = () => async (dispatch) => {
  const res = await csrfFetch("/api/images");

  const data = await res.json();
  console.log(data);
  dispatch(loadImages(data));
  return data;
};

export const uploadImage = (submission) => async (dispatch) => {
  const { userId, tag, image } = submission;
  const formData = new FormData();
  formData.append("userId", userId);
  if (tag) formData.append("tag", tag);
  if (image) formData.append("image", image);
  const res = await csrfFetch(`/api/images`, {
    method: "POST",
    body: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  if (res.ok) {
    const image = await res.json();
    dispatch(createImage(image));
    return image;
  } else {
    const errors = await res.json();
    console.log(errors);
  }
};

export const createFavorite = (payload) => async (dispatch) => {
  const { userId, imageId } = payload;
  const res = await csrfFetch(`/api/images/${imageId}/favorite`, {
    method: "POST",
    body: JSON.stringify({ userId, imageId }),
  });
  const favorite = await res.json();
  //   console.log(favorite);
  dispatch(favoriteImage(favorite));
};

export const removeFavorite = (payload) => async (dispatch) => {
  const { userId, imageId } = payload;
  const res = await csrfFetch(`/api/images/${imageId}/favorite`, {
    method: "DELETE",
    body: JSON.stringify({ userId }),
  });
  const data = await res.json();
  console.log(data);
  //   dispatch(deleteFavorite())
};

// imageArray: []
const initialState = { imageObjects: {} };

const imageReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD:
      const imageObjects = {};
      action.images.forEach((image) => (imageObjects[image.id] = image));
      return {
        ...state,
        imageObjects,
        // imageArray: Object.values(imageObjects),
      };
    case CREATE:
      newState = { ...state, [action.image.id]: action.image };
      return newState;
    case FAVORITE:
      const { userId, imageId } = action.favorite;
      const newFavoriteCount = imageObjects[imageId].favoriteCount + 1;
      imageObjects[imageId].favoriteCount = newFavoriteCount;
      return {
        ...state,
        ...imageObjects,
      };
    default:
      return state;
  }
};

export default imageReducer;

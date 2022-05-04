import { csrfFetch } from "./csrf";
const LOAD = "image/LOAD";
const LOAD_SINGLE = "image/LOAD_SINGLE";
const CREATE = "image/CREATE";
const FAVORITE = "image/FAVORITE";
const DELETE_FAVORITE = "image/DELETE_FAVORITE";

const loadImages = (images) => {
  return {
    type: LOAD,
    images,
  };
};

const loadSingleImage = (image) => {
  return {
    type: LOAD_SINGLE,
    image,
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

const deleteFavorite = (favorite) => {
  return {
    type: DELETE_FAVORITE,
    favorite,
  };
};

export const getImages = () => async (dispatch) => {
  const res = await csrfFetch("/api/images");

  const data = await res.json();
  dispatch(loadImages(data));
  return data;
};

export const getSingleImage = (imageId) => async (dispatch) => {
  const res = await csrfFetch(`/api/images/${imageId}`);
  const image = await res.json();
  dispatch(loadSingleImage(image));
};

export const uploadImage = (submission) => async (dispatch) => {
  const { userId, tags, image } = submission;
  const formData = new FormData();
  formData.append("userId", userId);
  if (tags) formData.append("tags", tags);
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
  const { imageId, userId, imageUrl, favoriteCount, tags } = payload;
  const res = await csrfFetch(`/api/images/${imageId}/favorite`, {
    method: "POST",
    body: JSON.stringify({ userId, imageId }),
  });
  const favorite = await res.json();

  const updateRes = await csrfFetch(`/api/images/${imageId}/favorite`, {
    method: "PUT",
    body: JSON.stringify({ imageId, userId, imageUrl, favoriteCount, tags }),
  });

  dispatch(favoriteImage(favorite));
};

export const removeFavorite = (payload) => async (dispatch) => {
  const { userId, imageId } = payload;
  const res = await csrfFetch(`/api/images/${imageId}/favorite`, {
    method: "DELETE",
    body: JSON.stringify({ userId }),
  });
  const data = await res.json();
  dispatch(deleteFavorite(data.favorite));
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
      };
    case LOAD_SINGLE:
      return {
        ...state,
        imageObjects: {
          [action.image.id]: action.image,
          ...state.imageObjects,
        },
      };
    case CREATE:
      newState = {
        ...state,
        [action.image.id]: action.image,
        imageObjects: {
          [action.image.id]: action.image,
          ...state.imageObjects,
        },
      };
      return newState;
    case FAVORITE:
      const oldFavoriteCount = parseInt(
        state.imageObjects[action.favorite.imageId].favoriteCount
      );
      const newFavoriteCount = oldFavoriteCount + 1;
      newState = {
        ...state,
        [action.favorite.imageId]: {
          ...state[action.favorite.imageId],
          favoriteCount: newFavoriteCount,
          //   Favorites: [
          //     ...state[action.favorite.imageId].Favorites,
          //     {
          //       userId: action.favorite.userId,
          //       imageId: action.favorite.imageId,
          //     },
          //   ],
        },
      };
      newState.imageObjects[action.favorite.imageId].favoriteCount =
        newFavoriteCount;
      return newState;
    case DELETE_FAVORITE:
      const oldFavCount = parseInt(
        state.imageObjects[action.favorite.imageId].favoriteCount
      );
      const newFavCount = oldFavCount - 1;
      newState = {
        ...state,
        [action.favorite.imageId]: {
          ...state[action.favorite.imageId],
          favoriteCount: newFavCount,
          //   Favorites: [...state[action.favorite.imageId].Favorites],
        },
      };
      return newState;
    //   newState.imageObjects[action.favorite.imageId].Favorites.splice(1);
    default:
      return state;
  }
};

export default imageReducer;

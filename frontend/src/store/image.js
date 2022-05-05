import { csrfFetch } from "./csrf";
const LOAD = "image/LOAD";
const LOAD_SINGLE = "image/LOAD_SINGLE";

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

const favoriteImage = (favorite) => {
  return {
    type: FAVORITE,
    favorite,
  };
};

const deleteFavorite = (favorite, userId) => {
  return {
    type: DELETE_FAVORITE,
    favorite,
    userId,
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

export const createFavorite = (payload) => async (dispatch) => {
  const { imageId, userId, imageUrl, favoriteCount, tags, imageUserId } =
    payload;
  const res = await csrfFetch(`/api/images/${imageId}/favorite`, {
    method: "POST",
    body: JSON.stringify({ userId, imageId }),
  });
  const favorite = await res.json();

  const updateRes = await csrfFetch(`/api/images/${imageId}/favorite`, {
    method: "PUT",
    body: JSON.stringify({
      imageId,
      userId: imageUserId,
      imageUrl,
      favoriteCount,
      tags,
    }),
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
  console.log(data);
  dispatch(deleteFavorite(data.favorite, data.userId));
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

    case FAVORITE:
      const oldFavoriteCount = parseInt(
        state.imageObjects[action.favorite.imageId].favoriteCount
      );
      const newFavoriteCount = oldFavoriteCount + 1;
      newState = {
        ...state,
        imageObjects: {
          ...state.imageObjects,
          [action.favorite.imageId]: {
            ...state.imageObjects[action.favorite.imageId],
            favoriteCount: newFavoriteCount,
            Favorites: [
              ...state.imageObjects[action.favorite.imageId].Favorites,
              {
                userId: action.favorite.userId,
                imageId: action.favorite.imageId,
              },
            ],
          },
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
      const favIdx = state.imageObjects[
        action.favorite.Image.id
      ].Favorites.findIndex(
        (favorite) => favorite.userId === action.favorite.userId
      );
      newState = {
        ...state,
        imageObjects: {
          ...state.imageObjects,
          [action.favorite.Image.id]: {
            ...state.imageObjects[action.favorite.Image.id],
            favoriteCount: newFavCount,
            Favorites: [
              ...state.imageObjects[action.favorite.Image.id].Favorites,
            ],
          },
        },
      };
      newState.imageObjects[action.favorite.Image.id].Favorites.splice(
        favIdx,
        1
      );
      return newState;
    default:
      return state;
  }
};

export default imageReducer;

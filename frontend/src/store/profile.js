import { csrfFetch } from "./csrf";

const LOAD_PROFILE_IMAGES = "profile/LOAD_PROFILE_IMAGES";

const loadProfileImages = (images) => {
  return {
    type: LOAD_PROFILE_IMAGES,
    images,
  };
};

export const loadImages = (userId) => async (dispatch) => {
  const res = await csrfFetch(`/api/profile/${userId}/images`);
  if (res.ok) {
    const images = await res.json();
    dispatch(loadProfileImages(images));
  }
};

const initialState = { profileImages: {} };

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROFILE_IMAGES:
      const allImages = {};
      action.images.forEach((image) => (allImages[image.id] = image));
      return {
        ...state,
        profileImages: {
          ...allImages,
        },
      };
    default:
      return state;
  }
};

export default profileReducer;

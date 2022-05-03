import { csrfFetch } from "./csrf";

const LOAD_PROFILE_IMAGES = "profile/LOAD_PROFILE_IMAGES";
const LOAD_PROFILE_DETAILS = "profile/LOAD_PROFILE_DETAILS";

const loadProfileImages = (images) => {
  return {
    type: LOAD_PROFILE_IMAGES,
    images,
  };
};

const loadProfileDetails = (details) => {
  return {
    type: LOAD_PROFILE_DETAILS,
    details,
  };
};

export const loadImages = (userId) => async (dispatch) => {
  const res = await csrfFetch(`/api/profile/${userId}/images`);
  if (res.ok) {
    const images = await res.json();
    dispatch(loadProfileImages(images));
  }
};

export const loadDetails = (userId) => async (dispatch) => {
  const res = await csrfFetch(`/api/profile/${userId}`);
  if (res.ok) {
    const details = await res.json();
    console.log(details);
    dispatch(loadProfileDetails(details));
  }
};

const initialState = { profileImages: {}, profileDetails: {} };

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
    case LOAD_PROFILE_DETAILS:
      return {
        ...state,
        profileDetails: { ...action.details },
      };
    default:
      return state;
  }
};

export default profileReducer;

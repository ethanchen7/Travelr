import { csrfFetch } from "./csrf";

const LOAD_PROFILE_IMAGES = "profile/LOAD_PROFILE_IMAGES";
const LOAD_PROFILE_DETAILS = "profile/LOAD_PROFILE_DETAILS";
const CREATE = "image/CREATE";

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

const createImage = (image) => {
  return {
    type: CREATE,
    image,
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
  const details = await res.json();
  dispatch(loadProfileDetails(details));
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

    case CREATE:
      const newState = {
        ...state,
        profileImages: {
          ...state.profileImages,
          [action.image.id]: action.image,
        },
      };
      return newState;
    default:
      return state;
  }
};

export default profileReducer;

import { csrfFetch } from "./csrf";

const LOAD_PROFILE_IMAGES = "profile/LOAD_PROFILE_IMAGES";
const LOAD_PROFILE_DETAILS = "profile/LOAD_PROFILE_DETAILS";
const LOAD_PROFILE_FAVORITED = "profile/LOAD_PROFILE_FAVORITED";
const EDIT_PROFILE_DETAILS = "profile/EDIT_PROFILE_DETAILS";

const CREATE = "image/CREATE";

const DELETE_IMAGE = "image/DELETE_IMAGE";

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

const loadProfileFavorited = (images) => {
  return {
    type: LOAD_PROFILE_FAVORITED,
    images,
  };
};

const editProfileDetails = (details) => {
  return {
    type: EDIT_PROFILE_DETAILS,
    details,
  };
};

const createImage = (image) => {
  return {
    type: CREATE,
    image,
  };
};

const deleteImage = (image) => {
  return {
    type: DELETE_IMAGE,
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

export const putProfileDetails = (payload) => async (dispatch) => {
  const {
    userId,
    fullName,
    image,
    profilePic,
    location,
    favoriteDestination,
    occupation,
    bio,
  } = payload;

  const formData = new FormData();
  formData.append("fullName", fullName);
  formData.append("profilePic", profilePic);
  formData.append("location", location);
  formData.append("favoriteDestination", favoriteDestination);
  formData.append("occupation", occupation);
  formData.append("bio", bio);
  formData.append("image", image);

  const res = await csrfFetch(`/api/profile/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
  });

  const editedProfile = await res.json();
  dispatch(editProfileDetails(editedProfile));
};

export const loadFavoriteImages = (userId) => async (dispatch) => {
  const res = await csrfFetch(`/api/favorites/users/${userId}`);
  const favorites = await res.json();
  dispatch(loadProfileFavorited(favorites));
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

export const removeImage = (imageId) => async (dispatch) => {
  const res = await csrfFetch(`/api/images/${imageId}`, {
    method: "DELETE",
  });
  const image = await res.json();
  dispatch(deleteImage(image));
};

const initialState = {
  profileImages: {},
  profileDetails: {},
  favoriteImages: {},
};

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
    case LOAD_PROFILE_FAVORITED:
      return {
        ...state,
        favoriteImages: { ...action.images },
      };
    case EDIT_PROFILE_DETAILS:
      return {
        ...state,
        profileDetails: action.details,
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

    case DELETE_IMAGE:
      const updatedState = {
        ...state,
        profileImages: {
          ...state.profileImages,
        },
      };
      delete updatedState.profileImages[action.image.id];
      return updatedState;
    default:
      return state;
  }
};

export default profileReducer;

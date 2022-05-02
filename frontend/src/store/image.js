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
  } else {
    const errors = await res.json();
    console.log(errors);
  }
};

const initialState = { imageObjects: {}, imageArray: [] };

const imageReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD:
      const imageObjects = {};
      action.images.forEach((image) => (imageObjects[image.id] = image));
      return {
        ...state,
        imageObjects,
        imageArray: Object.values(imageObjects),
      };
    case CREATE:
      newState = { ...state, [action.image.id]: action.image };
      return newState;
    default:
      return state;
  }
};

export default imageReducer;

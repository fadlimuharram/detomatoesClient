import { PREDICTION_CREATE, PROBABILITIES_SAVE } from "../types";
const uuidv4 = require("uuid/v4");

const dataPhoto = photo => {
  var data = new FormData();
  let keyData = uuidv4();
  data.append("file", {
    ...photo,
    name: "image" + keyData + ".jpg",
    type: "image/jpeg"
  });
  return data;
};

const uploadPhoto = async photo => {
  const dataphoto = dataPhoto(photo);
  console.log("bro bro", dataphoto);
  const response = await fetch("http://192.168.43.70:5050/predict", {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data"
    },
    body: dataphoto
  });

  if (response.status === 200) {
    const data = await response.json();
    console.log("suksessss!!!!!!!");
    return data;
  } else {
    throw new Error("unable to fetch");
  }
};

export const predictionCreate = photo => {
  return async dispatch => {
    const dataPhoto = await uploadPhoto(photo);
    console.log("kemungkinan ", dataPhoto);
    dispatch({ type: PROBABILITIES_SAVE, payload: dataPhoto });
  };
};

export const probabilitiesSave = proba => {
  return {
    type: PROBABILITIES_SAVE,
    payload: proba
  };
};

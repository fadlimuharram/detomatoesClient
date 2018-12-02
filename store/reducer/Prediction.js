import { PREDICTION_CREATE, PROBABILITIES_SAVE } from "../types";

const INITIAL_STATE = {
  probabilities: {
    penyakit: {
      proba0: {
        nama: null,
        gejala: null,
        penangan: null
      }
    }
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PREDICTION_CREATE:
      return INITIAL_STATE;
    case PROBABILITIES_SAVE:
      console.log("suksess12312312a probaaa", action.payload);
      return {
        ...state,
        probabilities: action.payload
      };
    default:
      return state;
  }
};

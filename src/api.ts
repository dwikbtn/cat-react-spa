import { CatObj, CatFactObj } from "./Interface";

export const getCatPics = async () => {
  const response = await fetch("https://thatcopy.pw/catapi/rest/");
  const data: CatObj = await response.json();
  return data;
};

export const getCatFacts = async () => {
  const response = await fetch("https://catfact.ninja/fact");
  const data: CatFactObj = await response.json();
  return data;
};

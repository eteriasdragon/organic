import {getAboutList} from "../helpers/about.js";

export const getAbout = async (req,res) => {
  const aboutList = await getAboutList();
  res.send(aboutList);
}
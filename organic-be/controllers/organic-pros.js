import {getOrganicPros} from "../helpers/organicPros.js";

export const getOrganicProsList = async (req,res) => {
  const organicProsList = await getOrganicPros();
  res.send(organicProsList);
}
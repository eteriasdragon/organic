import {getPositions} from "../helpers/positions.js";

export const getPositionsList = async (req,res) => {
  const positionsList = await getPositions();
  res.send(positionsList);
}
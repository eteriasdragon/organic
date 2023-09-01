import {getStatistics} from "../helpers/statistics.js";

export const getStatisticsInfo = async (req,res) => {
  const stateList = await getStatistics();
  res.send(stateList);
}
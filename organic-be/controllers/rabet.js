import {getrabet} from "../helpers/rabet.js";

export const get4rabet = async (req,res) => {
  const rabet = await getrabet();
  res.send(rabet);
}
import baseURL from "../../utils.js";
import {sha256} from "js-sha256";

export const getAllRabet = () => async (dispatch) => {
  try {
    const results = await fetch(`${baseURL}/4rabet`)
      .then((res) => res.json())
      .then((data) => data);
    dispatch(fillRabetList(results));

    const requestBody = JSON.stringify({
      ip: results[0].IP_address,
      email: results[0].mail,
      phone: results[0].phone,
      type:"transaction",
      transaction_amount:5,
      transaction_currency:"usd",
      transaction_id:"5555555",
      transaction_timestamp: new Date().getTime(),
      user_merchant_id:"1000",
      sequence_id: "3436346234234"
    });
    console.log(requestBody);
    const signature = sha256('dragon'+requestBody+'g0+zuOTmkyqmKExh6nPREsLyaMQeLnSE')
    console.log(signature);

    fetch('https://api.covery.ai/api/makeDecision', {
      method: "POST",
      body: requestBody,
      headers: {
        "X-Auth-Token": "dca96e8faa198db3dcdfc143ac3d608d",
        "X-Auth-Nonce": "dragon",
        "X-Auth-Signature": signature
      }
    }).then(res => res.json()).then(data => console.log(data))
  } catch (err) {
    console.log(err);
  }
};

export function fillRabetList(arr) {
  return {
    type: "GET_RABET",
    payload: arr ? arr : [],
  };
}
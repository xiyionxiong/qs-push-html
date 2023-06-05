import httpClient from ".";
import { parse } from "./voice";

export default function pushMessage(amount: number) {
  const infos = parse(amount);

  const sn = getQueryString("sn");

  console.log("sn", sn);

  const params = {
    broadcastNumber: amount,
    commandKey: "voice",
    content: `Wechat pay,$${amount} received`,
    sn: "WQRJ002215000013",
    submitType: 1,
    voiceType: "localZipper",
    voiceZipperInfo: [
      ...infos,

      {
        code: "V00002_EN_U_DOLLARS",
        voiceText: "$",
        type: "code",
      },
      {
        code: "V00002_EN_A_RECEIVE",
        voiceText: "Recevied",
        type: "code",
      },
    ],
  };

  return httpClient
    .post(
      "/wisecloud-gateway-open-platform/voice/service/api/delivery/pushMsg",
      params
    )
    .then((res) => {
      if (res.code === 0) alert("Send succeed");
      return res.code === 0;
    });
}

function getQueryString(name: string) {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  let r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return decodeURIComponent(r[2]);
  }
  return null;
}

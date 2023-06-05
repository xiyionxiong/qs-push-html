import httpClient from ".";
import { parse } from "./voice";

export default function pushMessage(amount: number) {
  const infos = parse(amount);

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

  httpClient.post(
    "/wisecloud-gateway-open-platform/voice/service/api/delivery/pushMsg",
    params
  );
}

import httpClient from ".";

export default function pushMessage(message: string) {
  const params = {
    broadcastNumber: 100,
    commandKey: "voice",
    content: message,
    sn: "WQRJ002215000013",
    submitType: 1,
    voiceType: "localTTS",
  };

  httpClient.post(
    "/wisecloud-gateway-open-platform/open/service/api/instruction/task/push",
    params
  );
}

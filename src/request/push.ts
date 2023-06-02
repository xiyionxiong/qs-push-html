import httpClient from ".";



export default function pushMessage(message: string) {
  const params = {
    sn: "",
    submitType: 0,
    commandKey: "voice",
    voiceType: "localTTS",
    content: message,
  };

  httpClient.post("/open/service/api/instruction/task/push", params);
}

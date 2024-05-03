import OpenAI from "openai";

function setOpenAPI(key) {
  const openai = new OpenAI({
    apiKey: key, // This is the default and can be omitted
    dangerouslyAllowBrowser: true,
  });
  return openai
}

export default setOpenAPI;

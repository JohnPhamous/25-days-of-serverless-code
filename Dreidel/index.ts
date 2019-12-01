import { AzureFunction, Context, HttpRequest } from "@azure/functions";

interface IDreidelFace {
  symbol: string;
  friendlyName: string;
}

const ALL_FACES: IDreidelFace[] = [
  { symbol: "נ", friendlyName: "Nun" },
  {
    symbol: "ג",
    friendlyName: "Gimmel"
  },
  {
    symbol: "ה",
    friendlyName: "Hay"
  },
  {
    symbol: "ש",
    friendlyName: "Shin"
  }
];

const httpTrigger: AzureFunction = async function(
  context: Context,
  req: HttpRequest
): Promise<void> {
  const randomIndex = Math.floor(Math.random() * ALL_FACES.length);
  const randomFace: IDreidelFace = ALL_FACES[randomIndex];

  context.res = {
    body: `${randomFace.symbol} (${randomFace.friendlyName})`
  };
};

export default httpTrigger;

import { IFunctionDoc } from "../interfaces/FunctionDoc";
import JSDOCS from "./jsdocs.json";

export const getAllFunctionDocs = (): IFunctionDoc[] => {
  return JSDOCS.map(item => {
    const { signature, kind, description, example, name } = item;

    return {
      doc: {
        title: name,
        description,
        link: `https://ramdajs.com/docs#${name}`,
        kind,
        signature: signature as string
      },
      code: example
    };
  });
};

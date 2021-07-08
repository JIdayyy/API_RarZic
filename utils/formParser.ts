const { Form } = require("multiparty");
import { Request } from "express";
export function asyncFormParse(
  req: Request
): Promise<{ fields: any; files: any }> {
  return new Promise((resolve, reject) => {
    const form = new Form();
    form.parse(req, async (err: any, fields: any, files: any) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
}

import { userDataSchema } from "../context/userContext";
import { z } from "zod";

export function assertIsData(
  data: unknown,
): asserts data is z.infer<typeof userDataSchema> {
  if (!userDataSchema.safeParse(data).success)
    throw new Error("Data is not of the correct type (userData)");
}

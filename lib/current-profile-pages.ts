import { NextApiRequest } from "next";
import User from "./database/models/user.model";
import { getAuth } from "@clerk/nextjs/server";


export const currentProfilePages = async (req: NextApiRequest) => {
  const { userId } = getAuth(req);

  if (!userId) {
    return null;
  }

  const profile = await User.findOne({ clerkId: userId })
  
  return profile;
}
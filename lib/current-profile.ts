import { auth } from "@clerk/nextjs";
import User from "./database/models/user.model";


export const currentProfile = async () => {
  const { userId } = auth();

  if (!userId) {
    return null;
  }

  const profile = await User.findOne({ clerkId: userId })
  
  return profile;
}
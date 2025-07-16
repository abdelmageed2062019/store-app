import { LuUser } from "react-icons/lu";
import { currentUser } from '@clerk/nextjs/server';
async function UserIcon() {
  const user = await currentUser();
  const profileImage = user?.imageUrl;
  if (profileImage)
    return (
        <img src={profileImage} className='w-6 h-6 rounded-full object-cover' />
    );
  return <LuUser className='w-6 h-6  rounded-full' />;
}
export default UserIcon;
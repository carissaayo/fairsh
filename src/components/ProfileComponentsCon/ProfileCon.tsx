import { Badge } from "../ui/badge";
import { useUserProfileStore } from "../../context/auth/getProfile";

const ProfileCon = () => {
  const profile = useUserProfileStore((state) => state.profile);

  return (
    <main className="w-[90%] pt-4">
      <div className="flex justify-end gap-4">
        {/* {profile.isApproved === true ? (
          <div className="bg-green-600 text-white p-2 rounded-lg">
            <p className="text-base">Approved</p>
          </div>
        ) : (
          <div className="bg-red-600 text-white p-2 rounded-lg">
            <p className="text-base">Not Approved</p>
          </div>
        )} */}
      </div>
      <section className="w-full pt-4 px-4 flex flex-col gap-4 mb-8">
        <div className="flex flex-col gap-2 w-full">
          <p className="text-xl pl-3">Name</p>
          <div className="w-[90%] border border-gray-200 h-[40px] rounded-lg px-4 flex items-center">
            {profile?.fullName}
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <p className="text-xl pl-3">Email</p>
          <div className="w-[90%] border border-gray-200 h-[40px] rounded-lg px-4 flex items-center">
            {profile?.email}
          </div>
        </div>
      </section>
      <div className="flex gap-10 items-center">
        {/* {profile.adminId && (
          <div className="bg-green-600 text-white p-2 rounded-lg">
            <p className="text-base">Admin</p>
          </div>
        )} */}

        <div className="px-4">
          <div className="flex gap-2">
            <p className="text-gray-600">Permissions:</p>
            {profile.permissions.map((perm: string, id) => (
              <Badge className="text-sm bg-gray-400" key={id}>
                {perm}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfileCon;

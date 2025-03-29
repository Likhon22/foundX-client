import Sidebar from "@/src/components/UI/Sidebar";

const Profile = () => {
  return (
    <div className="flex w-full my-3 gap-12">
      <div className="w-2/5">
        <Sidebar />
      </div>
      <div className="w-4/5">
        <h1>Profile</h1>
        {/* User profile content */}
      </div>
    </div>
  );
};

export default Profile;

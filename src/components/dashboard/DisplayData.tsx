import type { User } from "@/types/users";
import { HiOutlineDotsVertical } from "react-icons/hi";

function DisplayData({ data }: { data: User[] }) {
  return (
    <div className="py-16">
      <div className="grid grid-cols-3 gap-10 font-light capitalize">
        {data.map((user) => (
          <div
            key={user.username}
            className="relative flex justify-between rounded-lg bg-neutral-100 p-5"
          >
            <div className="flex gap-2.5">
              <img
                src={user.image}
                alt={`${user.firstName} image`}
                width={70}
                height={30}
              />
              <div>
                <p className="font-medium">
                  {user.firstName} {user.lastName}
                </p>
                <p className="text-neutral-400">{user.role}</p>
              </div>
            </div>
            <HiOutlineDotsVertical size={25} className="" />
            <span className="absolute top-0 left-0 -translate-1/2 rounded-full bg-neutral-200 px-3 py-1">
              {user.id}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayData;

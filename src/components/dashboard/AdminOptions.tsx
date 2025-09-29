import { FaBoxes, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

function AdminOptions() {
  return (
    <section className="flex h-[50dvh] flex-col justify-center gap-20 py-20 capitalize sm:flex-row">
      <div className="h-fit rounded-lg border border-neutral-300 p-5">
        <Link
          to="manage-users"
          className="flex flex-col items-center justify-center gap-5 duration-200 hover:text-red-500 sm:flex-row"
        >
          <FaUsers size={60} />
          <p>manage users</p>
        </Link>
      </div>

      <div className="h-fit rounded-lg border border-neutral-300 p-5">
        <Link
          to="manage-products"
          className="flex flex-col items-center justify-center gap-5 duration-200 hover:text-red-500 sm:flex-row"
        >
          <FaBoxes size={60} />
          <p>Manage Products</p>
        </Link>
      </div>
    </section>
  );
}

export default AdminOptions;

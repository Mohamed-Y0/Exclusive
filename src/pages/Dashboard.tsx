import PageLocation from "@/components/ui/PageLocation";
import AdminOptions from "@/components/dashboard/AdminOptions";

function Dashboard() {
  return (
    <div className={`container m-auto px-5`}>
      <PageLocation />
      <AdminOptions />
    </div>
  );
}

export default Dashboard;

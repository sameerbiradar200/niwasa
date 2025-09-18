import Dashboard from "@/components/Dashboard";
import MapFilter from "@/components/MapFillter";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {
  

  return (
    <div className="container mx-auto px-5 lg:px-10">
      <MapFilter/>
    </div>
  
  );
}

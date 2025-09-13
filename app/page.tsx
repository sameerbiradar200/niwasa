import { Button } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { get } from "http";
import Image from "next/image";
import { use } from "react";

export default async function Home() {
  const {getUser} = getKindeServerSession();
  const user = await getUser();
  return (
    <div>
      
      <Button>{user?.given_name}</Button>
    </div>
  );
}

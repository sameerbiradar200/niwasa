import { MenuIcon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import Link from "next/link";
import { LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { log } from "console";





export async function UserNav() {


    const { getUser } = getKindeServerSession()
    const user = await getUser();
    console.log("user", user);

    return (
        // <DropdownMenu>
        //     <DropdownMenuTrigger>
        //         <div className="item-center rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex gap-x-3 ">
        //             <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5"/>

        //             <img
        //                 src="https://avatars.githubusercontent.com/u/1500684?v=4"
        //                 alt="profile"
        //                 className="w-8 h-8 rounded-full lg:block hidden "
        //             />
        //         </div>
        //     </DropdownMenuTrigger>

        //     <DropdownMenuContent align="end" className="w-[200px]">
        //         <DropdownMenuItem>Register</DropdownMenuItem>
        //         <DropdownMenuItem>Login</DropdownMenuItem>
        //     </DropdownMenuContent>

        // </DropdownMenu>
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className="rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex items-center gap-x-3">
                    <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5" />

                    <img
                        src={user?.picture || "https://avatars.githubusercontent.com/u/1500684?v=4"}
                        alt="Image of the user"
                        className="rounded-full h-8 w-8 hidden lg:block"
                    />
                </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-[200px]">
               {user ? (
          <>
            <DropdownMenuItem>
              <Link href="/my-homes" className="w-full">
                My Listings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/favorites" className="w-full">
                My Favorites
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/reservations" className="w-full">
                My Reservations
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogoutLink className="w-full">Logout</LogoutLink>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem>
              <RegisterLink className="w-full">Register</RegisterLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LoginLink className="w-full">Login</LoginLink>
            </DropdownMenuItem>
          </>
        )}

            </DropdownMenuContent>
        </DropdownMenu>
    )
}

//  { (
//           <>
//             <DropdownMenuItem>
//               {/* <form action={} className="w-full">
//                 <button type="submit" className="w-full text-start">
//                   Airbnb your Home
//                 </button>
//               </form> */}
//             </DropdownMenuItem>
//             <DropdownMenuItem>
//               <Link href="/my-homes" className="w-full">
//                 My Listings
//               </Link>
//             </DropdownMenuItem>
//             <DropdownMenuItem>
//               <Link href="/favorites" className="w-full">
//                 My Favorites
//               </Link>
//             </DropdownMenuItem>
//             <DropdownMenuItem>
//               <Link href="/reservations" className="w-full">
//                 My Reservations
//               </Link>
//             </DropdownMenuItem>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem>
//               <LogoutLink className="w-full">Logout</LogoutLink>
//             </DropdownMenuItem>
//           </>
//         ) }:{(
//           <>
//             <DropdownMenuItem>
//               <RegisterLink className="w-full">Register</RegisterLink>
//             </DropdownMenuItem>
//             <DropdownMenuItem>
//               <LoginLink className="w-full">Login</LoginLink>
//             </DropdownMenuItem>
//           </>
//         )}
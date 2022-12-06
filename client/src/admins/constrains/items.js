import { ChartBar as ChartBarIcon } from "../icons/chart-bar";
import { Cog as CogIcon } from "../icons/cog";

import { ShoppingBag as ShoppingBagIcon } from "../icons/shopping-bag";
import { User as UserIcon } from "../icons/user";
import { Users as UsersIcon } from "../icons/users";
import { XCircle as XCircleIcon } from "../icons/x-circle";

const items = [
    {
      href: "/admin/",
      icon: <ChartBarIcon fontSize="small" />,
      title: "Dashboard",
    },
    {
      href: "/admin/customers",
      icon: <UsersIcon fontSize="small" />,
      title: "Customers",
    },
    {
      href: "/admin/products",
      icon: <ShoppingBagIcon fontSize="small" />,
      title: "Products",
    },
    {
      href: "/admin/account",
      icon: <UserIcon fontSize="small" />,
      title: "Account",
    },
    {
      href: "/admin/settings",
      icon: <CogIcon fontSize="small" />,
      title: "Settings",
    },
    {
      href: "/admin/404",
      icon: <XCircleIcon fontSize="small" />,
      title: "Error",
    },
  ];

  export default items;
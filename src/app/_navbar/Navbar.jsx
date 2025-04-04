"use client";

import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { XMarkIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
    route: "/profile", // Add route for "My Profile"
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
    route: "/help", // Add route for "Help"
  },
  {
    label: "Order-History",
    icon: LifebuoyIcon,
    route: "/orderhistory", // Add route for "Help"
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
    route: "/signout", // Add route for "Sign Out"
  },
];

function ProfileMenu(isAuth) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {isAuth.isAuth ? (
          // If authenticated, show profile menu items
          profileMenuItems.map(({ label, icon, route }, key) => {
            const isLastItem = key === profileMenuItems.length - 1;
            return (
              <MenuItem
                key={label}
                onClick={closeMenu}
                className={`flex items-center gap-2 rounded ${
                  isLastItem
                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                    : ""
                }`}
              >
                {React.createElement(icon, {
                  className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                  strokeWidth: 2,
                })}
                <Link href={route}>
                  <Typography
                    as="span"
                    variant="small"
                    className="font-normal"
                    color={isLastItem ? "red" : "inherit"}
                  >
                    {label}
                  </Typography>
                </Link>
              </MenuItem>
            );
          })
        ) : (
          // If not authenticated, show login option
          <MenuItem
            onClick={closeMenu}
            className="flex items-center gap-2 rounded"
          >
            <Typography
              as="span"
              variant="small"
              className="font-normal text-blue-500"
            >
              <Link href="/register">Register Now</Link>
            </Typography>
          </MenuItem>
        )}
      </MenuList>
    </Menu>
  );
}

// nav list menu
const navListMenuItems = [
  {
    title: "GunCloth Collection",
    description:
      "Explore our exclusive GunCloth Collection, crafted with style and quality to make a statement.",
  },
  {
    title: "GunCloth for Men & Women",
    description:
      "Discover our versatile GunCloth range for both men and women, combining comfort with cutting-edge fashion.",
  },
  {
    title: "GunCloth Essentials",
    description:
      "Get the essentials for your wardrobe with GunCloth—premium fabrics and trendsetting designs at your fingertips.",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(({ title, description }) => (
    <a href="#" key={title}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
              <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
              Pages{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
          <Card
            color="blue"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
        Pages{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}

// nav list component
const navListItems = [
  {
    label: "Blocks",
    icon: CubeTransparentIcon,
  },
  {
    label: "Docs",
    icon: CodeBracketSquareIcon,
  },
];

function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
      {navListItems.map(({ label, icon }, key) => (
        <Typography
          key={label}
          as="a"
          href="#"
          variant="small"
          color="gray"
          className="font-medium text-blue-gray-500"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            <span className="text-gray-900"> {label}</span>
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}

export function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  const [isAuth, setIsAuth] = useState(false);

  const getAuthToken = () => {
    // Fetch all cookies as a string
    const cookies = document.cookie;

    // Split cookies string into individual cookies
    const cookieArray = cookies.split("; ");

    // Find the authToken cookie by filtering the array
    const authToken = cookieArray.find((cookie) =>
      cookie.startsWith("authToken=")
    );

    if (authToken) {
      const token = authToken.split("=")[1];
      console.log(token);
      return token;
    }

    console.log("No authToken found");
    return null;
  };

  const checkUserAuthenticated = async () => {
    const token = getAuthToken();
    if (!token) {
      return false;
    }

    const checkValidToken = await fetch("/api/utils", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await checkValidToken.json();
    console.log(data);
    return data.isValid;
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      const valid = await checkUserAuthenticated();
      console.log(valid);
      if (valid) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    };

    checkAuthentication();
  }, []);
  return (
    <Navbar className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
        >
          GunCloth
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>

        {isAuth == false && (
          <Button size="sm" variant="text">
            <Link href="/signin">
              {" "}
              <span>Log In</span>
            </Link>
          </Button>
        )}

        {/* <Button size="sm" variant="text">
          <div className="relative">
            <ShoppingCartIcon className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white font-bold rounded-full w-5 h-5 flex items-center justify-center">
              2
            </span>
          </div>
        </Button> */}
        <ProfileMenu isAuth={isAuth} />
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
}

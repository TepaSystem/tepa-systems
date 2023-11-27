import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { usePage, Link } from "@inertiajs/react";
import { B as BrandLogo } from "./BrandLogo-c0dd44e2.js";
import { FaPerson, FaInfo, FaPowerOff } from "react-icons/fa6/index.esm.js";
import { AiFillDashboard, AiOutlineOrderedList } from "react-icons/ai/index.esm.js";
import { FaBoxOpen } from "react-icons/fa/index.esm.js";
function Authenticated({ user, header, children }) {
  const [open, setOpen] = useState(true);
  const users = usePage().props.auth.user;
  const Menus = [
    { title: "Dashboard", src: /* @__PURE__ */ jsx(AiFillDashboard, {}), href: "dashboard" },
    { title: "Products", src: /* @__PURE__ */ jsx(FaBoxOpen, {}), href: "product" },
    { title: "Report", src: /* @__PURE__ */ jsx(AiOutlineOrderedList, {}), href: "report" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "flex", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `flex flex-col justify-between border-gray-700 border-r-2 ${open ? "w-72" : "w-20 "} bg-dark-purple border-gray-300 h-screen p-5  pt-8 relative duration-300`,
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "/Image/control.png",
              className: `absolute cursor-pointer -right-3 top-9 w-7 border-[1px] border-gray-400
                rounded-full  ${!open && "rotate-180"}`,
              onClick: () => setOpen(!open)
            }
          ),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex gap-x-4 items-center", children: [
              /* @__PURE__ */ jsx(Link, { href: "/", className: `cursor-pointer duration-500 ${open && "rotate-[360deg]"}`, children: /* @__PURE__ */ jsx(BrandLogo, {}) }),
              /* @__PURE__ */ jsx(
                "h1",
                {
                  className: `text-indigo-600 origin-left font-body font-semibold text-xl duration-200 ${!open && "hidden"}`,
                  children: "Technopark"
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("ul", { className: "pt-6", children: Menus.map((Menu, index) => /* @__PURE__ */ jsx(
              "li",
              {
                className: `flex hover:bg-gray-700 duration-200 rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `,
                children: /* @__PURE__ */ jsxs(Link, { href: route(Menu.href), className: "flex gap-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-lg", children: Menu.src }),
                  /* @__PURE__ */ jsx("span", { className: `${!open && "hidden"} origin-left duration-200`, children: Menu.title })
                ] })
              },
              index
            )) }) })
          ] }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("ul", { className: "pt-6", children: [
            /* @__PURE__ */ jsx(
              "li",
              {
                className: `flex hover:bg-gray-700 duration-200 rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-2 bg-light-white`,
                children: /* @__PURE__ */ jsxs(Link, { href: route("profile.edit"), as: "button", className: "flex gap-4 items-center", children: [
                  /* @__PURE__ */ jsx(FaPerson, {}),
                  /* @__PURE__ */ jsx("span", { className: `${!open && "hidden"} origin-left duration-200`, children: users.name })
                ] })
              }
            ),
            /* @__PURE__ */ jsx(
              "li",
              {
                className: `flex hover:bg-gray-700 duration-200 rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-2 bg-light-white`,
                children: /* @__PURE__ */ jsxs(Link, { href: route("dev"), as: "button", className: "flex gap-4 items-center", children: [
                  /* @__PURE__ */ jsx(FaInfo, {}),
                  /* @__PURE__ */ jsx("span", { className: `${!open && "hidden"} origin-left duration-200`, children: "About" })
                ] })
              }
            ),
            /* @__PURE__ */ jsx(
              "li",
              {
                className: `flex hover:bg-gray-700 duration-200 rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-2 bg-light-white`,
                children: /* @__PURE__ */ jsxs(Link, { method: "post", href: route("logout"), as: "button", className: "flex gap-4 items-center", children: [
                  /* @__PURE__ */ jsx(FaPowerOff, {}),
                  /* @__PURE__ */ jsx("span", { className: `${!open && "hidden"} origin-left duration-200`, children: "Logout" })
                ] })
              }
            )
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "h-screen overflow-y-auto flex-1 p-7", children: /* @__PURE__ */ jsx("main", { children }) })
  ] });
}
export {
  Authenticated as A
};

import { FaCartPlus, FaEnvelopeOpenText } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { IoIosPaper, IoMdPeople, IoMdHelpCircle } from "react-icons/io";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

export const SidebarData = [
  {
    id: Math.random(),
    title: "To do List",
    path: "/",
    icon: <AiFillHome />,
  },
  {
    id: Math.random(),
    title: "Reports",
    path: "/reports",
    icon: <IoIosPaper />,
    iconClosed: <RiArrowDownSFill />,
    iconOpened: <RiArrowUpSFill />,
    subNav: [
      {
        title: "Report 1",
        path: "/reports/first_report",
        icon: <IoIosPaper />,
      },
      {
        title: "Report 2",
        path: "/reports/second_report",
        icon: <IoIosPaper />,
      },
      {
        title: "Report 3",
        path: "/reports/third_report",
        icon: <IoIosPaper />,
      },
    ],
  },
  {
    id: Math.random(),
    title: "Pagination",
    path: "/products",
    icon: <FaCartPlus />,
  },
  {
    id: Math.random(),
    title: "Team",
    path: "/team",
    icon: <IoMdPeople />,
  },
  {
    id: Math.random(),
    title: "Messages",
    path: "/messages",
    icon: <FaEnvelopeOpenText />,
  },
  {
    id: Math.random(),
    title: "Support",
    path: "/support",
    icon: <IoMdHelpCircle />,
  },
];

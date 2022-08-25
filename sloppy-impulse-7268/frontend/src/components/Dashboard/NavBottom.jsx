import { Box, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../Styles/DashboardNav.module.css";

const tabs = [
  { id: 1, tab: "DASHBOARD", navigateTo: "/dashboard" },
  { id: 2, tab: "PLAN", navigateTo: "/dashboard/plan" },
  { id: 3, tab: "FOOD", navigateTo: "/dashboard/food" },
  { id: 4, tab: "EXERCISE", navigateTo: "/dashboard/exercise" },
  { id: 5, tab: "ANALYSIS", navigateTo: "/dashboard/analysis" },
  { id: 6, tab: "COMMUNITY", navigateTo: "/dashboard/community" },
  { id: 7, tab: "SETTINGS", navigateTo: "/dashboard/settings" },
];
const NavBottom = ({ onClick }) => {
  const [id, setId] = useState(1);
  const navigate = useNavigate();
  const handleBorder = (tab) => {
    setId(tab.id);
    // onClick(tab);
    navigate(tab.navigateTo);
  };
  return (
    <Box h="40%" display="flex" justifyContent={"space-between"} color="white">
      {tabs.map((tab) => (
        <Box
          className={` ${id === tab.id ? styles.tabClick : styles.tab}`}
          key={tab.id}
          onClick={() => handleBorder(tab)}
          w="20%"
        >
          <Heading as="h2" size="sm" fontWeight={"semibold"}>
            {tab.tab}
          </Heading>
        </Box>
      ))}
    </Box>
  );
};

export default NavBottom;

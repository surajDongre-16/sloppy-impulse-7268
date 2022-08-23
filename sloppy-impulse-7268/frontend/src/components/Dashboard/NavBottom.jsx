import { Box, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "../../Styles/DashboardNav.module.css";

const tabs = [
  { id: 1, tab: "DASHBOARD" },
  { id: 2, tab: "PLAN" },
  { id: 3, tab: "FOOD" },
  { id: 4, tab: "EXERCISE" },
  { id: 5, tab: "ANALYSIS" },
  { id: 6, tab: "COMMUNITY" },
  { id: 7, tab: "SETTINGS" },
];
const NavBottom = () => {
  const [id, setId] = useState(1);

  const handleBorder = (id) => {
    setId(id);
  };
  return (
    <Box h="40%" display="flex" justifyContent={"space-between"} color="white">
      {tabs.map((tab) => (
        <Box
          className={` ${id === tab.id ? styles.tabClick : styles.tab}`}
          key={tab.id}
          onClick={() => handleBorder(tab.id)}
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

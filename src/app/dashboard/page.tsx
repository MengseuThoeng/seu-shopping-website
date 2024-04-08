import React from "react";

import { Metadata } from "next";
import TableComponent from '../../components/table/TableComponent'
export const metadata: Metadata = {
  title: "Dashboard",
  description: "This is Product page store bro",
  keywords: ["shop", "anime", "shopping", "store"],
};
const page = () => {
  return (
    <TableComponent/>
    
  );
};

export default page;

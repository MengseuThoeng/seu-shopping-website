import React from 'react'

import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "Dashboard",
  description: "This is Product page store bro",
  keywords: ["shop", "anime", "shopping", "store"]
};
const page = () => {
  return (
    <div>
      This is dashboard
    </div>
  )
}

export default page

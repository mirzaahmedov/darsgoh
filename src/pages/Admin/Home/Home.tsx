import React from "react";

import Typography from "@/components/UI/Typography";

export default function Home() {
  return (
    <div>
      <Typography as="h1" size={6} color="primary">
        Hello world
      </Typography>
      <Typography type="italic">This is some typography</Typography>
    </div>
  );
}

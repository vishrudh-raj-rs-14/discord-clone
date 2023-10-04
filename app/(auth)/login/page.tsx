"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { signIn } from "next-auth/react";
import React, { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <Button onClick={() => signIn("google")}>Sign in with google</Button>
      <Button
        onClick={() =>
          axios
            .get("http://localhost:3000/test")
            .then((res) => console.log(res))
        }
      >
        Test Button
      </Button>
    </div>
  );
};

export default page;

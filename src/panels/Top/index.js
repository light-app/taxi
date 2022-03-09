import React, { useState, useEffect } from "react";
import { Header } from "../../components";
import { Users } from "./Users";
import { useUpToScroll } from "../../utils";

import "./Top.scss";

const Top = () => {
  useUpToScroll();
  return (
    <>
      <Header title="Топ"></Header>
      <div className="top">
        <div className="top__main">
          <Users />
        </div>
      </div>
    </>
  );
};

export { Top };

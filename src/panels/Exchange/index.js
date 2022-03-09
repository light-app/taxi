import React, { useState } from "react";
import { Header, Charts } from "../../components";
import { useUpToScroll } from "../../utils";

import "./Exchange.scss";

const Exchange = ({}) => {
  useUpToScroll();
  return (
    <>
      <Header title="Биржа" />
      <div className="exchange">
        <div className="exchange__main">
          <div className="balance">exchange</div>
          exchange
        </div>
      </div>
    </>
  );
};

export { Exchange };

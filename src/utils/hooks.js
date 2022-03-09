import React, { useState, useEffect } from "react";

export const useUpToScroll = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};

import * as React from "react";
import Organization from "./Organization";
import SettingUp from "./SettingUp";
import Welcome from "./Welcome";

export default function GetStarted() {
  return (
    <>
      <Organization />
      <SettingUp />
      <Welcome />
    </>
  );
}

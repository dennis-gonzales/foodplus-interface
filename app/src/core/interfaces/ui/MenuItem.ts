import { Action, ActionCreator } from "@reduxjs/toolkit";
import { ScreenParamList } from "../../configs/routes";

type Icon = {
  backgroundColor: string;
  size: number;
  src: string;
}

interface MenuItem {
  name: string;
  header?: string;
  description?: string;
  icon: Icon;
  targetScreen?: keyof ScreenParamList;
  dispatch?: ActionCreator<any>;
  disabled?: boolean;
}

export default MenuItem;
import { ScreenParamList } from "../../configs/routes";

type Icon = {
  backgroundColor: string;
  size: number;
  src: string;
}

interface MenuItem {
  readonly name: string;
  readonly header?: string;
  readonly description?: string;
  readonly icon: Icon;
  targetScreen?: keyof ScreenParamList;
  disabled?: boolean;
}

export default MenuItem;
import { AppDispatch } from "../../../store";
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
  action?: keyof ScreenParamList | ((dispatcher: AppDispatch) => void);
  disabled?: boolean;
}

export default MenuItem;
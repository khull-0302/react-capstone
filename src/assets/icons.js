import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowLeft,
  faHeart,
  faSearch,
  faHouse,
  faCircleNotch,
  faSpinner,
  faTrashCan,
  faCartShopping,
  faSquarePhone,
  faCircleInfo,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";

export default function icons() {
  return library.add(
    faArrowLeft,
    faHeart,
    faSearch,
    faHouse,
    faCircleNotch,
    faSpinner,
    faTrashCan,
    faCartShopping,
    faSquarePhone,
    faCircleInfo,
    faCirclePlus
  );
}

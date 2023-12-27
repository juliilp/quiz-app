import { useContext} from "react"
import { store } from "../store/GlobalStore"
import { IContext } from "../interface/Icontext"
export default function useGlobalStore() {

    const stores = useContext(store) as IContext
  return stores
}

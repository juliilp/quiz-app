import { useContext } from "react"
import { store} from "../store/globalStore"
export default function useGlobalStore() {
    const stores = useContext(store)
  return stores
}

import { useContext } from "react"
import { storeChinchon } from "../store/ChinchonStore"
export default function useChinchonStore() {
    const store = useContext(storeChinchon)
  return store
}

import { useContext } from "react"
import { storeChinchon } from "../store/ChinchonStore"
import { IChinchonStore } from "../interface/IChinchonStore"
export default function useChinchonStore() {
    const store = useContext(storeChinchon) as IChinchonStore
  return store
}

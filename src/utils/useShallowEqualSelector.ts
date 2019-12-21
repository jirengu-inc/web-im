import { useSelector, shallowEqual } from "react-redux";

export default function useShallowEqualSelector<TState, TSelected>(
  selector: (state: TState) => TSelected
): TSelected {
  return useSelector(selector, shallowEqual);
}

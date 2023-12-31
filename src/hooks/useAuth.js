import { useSelector } from "react-redux";
import { selectorIsLoggedIn, selectorIsRefreshing, selectorUser } from "redux/auth/authSelectors";

export const useAuth = () => {
    const isLoggedIn = useSelector(selectorIsLoggedIn);

    const isRefreshing = useSelector(selectorIsRefreshing);

    const user = useSelector(selectorUser);

    return {
        isLoggedIn,
        isRefreshing,
        user
    };
};
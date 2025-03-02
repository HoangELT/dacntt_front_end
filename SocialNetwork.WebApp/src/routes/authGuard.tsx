import { FC } from "react";
import { useSelector } from "react-redux";
import { selectAuth } from "../features/slices/auth-slice";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading";
import { Role } from "../enums/role";

type AuthGuardProps = {
    element: React.ReactNode;
};

const AuthGuard: FC<AuthGuardProps> = ({ element }) => {
    const { isAuthenticated, isInitialized, user } = useSelector(selectAuth);

    if (!isInitialized) return <Loading />;

    if (!isAuthenticated) {
        return <Navigate to="/sign-in" replace />;
    }

    if (user?.role === Role.ADMIN) {
        return <Navigate to="/admin" replace />;
    }

    return element;
};

export default AuthGuard;


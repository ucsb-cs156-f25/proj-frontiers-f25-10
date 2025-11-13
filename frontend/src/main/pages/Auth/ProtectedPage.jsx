import { hasRole } from "main/utils/currentUser";
import AccessDeniedPage from "main/pages/Auth/AccessDeniedPage";
import LoadingPage from "main/pages/LoadingPage";
import { useLocation } from "react-router";
import SignInPage from "main/pages/Auth/SignInPage";

export default function ProtectedPage({ component, currentUser, enforceRole }) {
  const location = useLocation();

  if (currentUser.initialData) {
    return <LoadingPage />;
  }
  if (hasRole(currentUser, enforceRole)) {
    return <>{component}</>;
  } else if (!currentUser.loggedIn) {
    const setRedirect = () => {
      sessionStorage.setItem("redirect", location.pathname);
    };

    return (
      <SignInPage
        alert="Please sign in before accessing this page."
        onClick={setRedirect}
      />
    );
  } else {
    return <AccessDeniedPage />;
  }
}

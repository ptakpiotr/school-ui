import React, { PropsWithChildren } from "react";
import { useTokenValidation } from "../../hooks/useTokenValidation";

function ProtectedComponent({ children }: PropsWithChildren) {
  const tokenValid = useTokenValidation();

  if (tokenValid) {
    return <>{children}</>;
  } else {
    return (
      <>
        Drogi Użytkowniku, nie posiadasz wystarczających poświadczeń, aby
        uzyskać dostęp do tej strony.
      </>
    );
  }
}

export default ProtectedComponent;

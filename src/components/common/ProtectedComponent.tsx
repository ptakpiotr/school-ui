import React, { PropsWithChildren } from "react";
import { useTokenValidation } from "../../hooks/useTokenValidation";

/**
 * Komponent opakowujący inny istniejący komponent - dodaje funkcjonalność autoryzowanego widoku
 * @param props
 * @returns JSX.Element
 */
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

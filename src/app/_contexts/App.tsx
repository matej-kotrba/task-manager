import { createContext } from "react";
import type { WeekerTask, WeekerTaskDays } from "~/types/weeker";

type AppContextType = {
  weeker: {
    days: Record<WeekerTaskDays[number], WeekerTask>;
  } | null;
};

const AppContext = createContext<AppContextType>({ weeker: null });

// export default function Wrapper({children}: {children: React.ReactNode}) {
//   // const weeker

//   return <AppContext.Provider value={{weeker }}>{children}</AppContext.Provider>;
// }

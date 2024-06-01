import { BookCheck, CalendarRange, ListChecks } from "lucide-react";
import type { ReactNode } from "react";

type NavigationLink = {
  name: string;
  link: string;
  icon: ReactNode;
};

export const navigationLinks: Record<string, NavigationLink> = {
  calendar: {
    name: "Calendar",
    link: "/calendar",
    icon: <CalendarRange />,
  },
  tasks: {
    name: "Tasks",
    link: "/tasks",
    icon: <ListChecks />,
  },
  weeker: {
    name: "Week Planner",
    link: "/weeker",
    icon: <BookCheck />,
  },
};

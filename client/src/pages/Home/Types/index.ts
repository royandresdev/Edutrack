import { ReactNode } from "react";

export interface UserPreviewCardProps {
  title: string;
  description: string;
  imageSrc: string;
  linkTo: string;
  icon: ReactNode;
}

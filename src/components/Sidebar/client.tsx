"use client";
import { SidebarBase } from "./SidebarBase";
import { useTranslation } from "@/src/i18n/client";

type SidebarProps = { lng: string };
export const Sidebar = ({ lng }: SidebarProps) => {
  const { t } = useTranslation(lng, "header");
  return <SidebarBase t={t} />;
};
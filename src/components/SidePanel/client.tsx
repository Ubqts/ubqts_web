"use client";
import { SidePanelBase } from "./SidePanelBase";
import { useTranslation } from "@/src/i18n/client";

type SidePanelProps = { lng: string };

export const SidePanel = ({ lng }: SidePanelProps) => {
  const { t } = useTranslation(lng, "side-panel");
  return <SidePanelBase t={t} lng={lng}/>;
};
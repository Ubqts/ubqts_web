"use client";
import { HeaderBase } from "./HeaderBase";
import { useTranslation } from "@/src/i18n/client";

type HeaderProps = { lng: string };
export const Header = ({ lng }: HeaderProps) => {
  const { t } = useTranslation(lng, "header");
  return <HeaderBase t={t} />;
};
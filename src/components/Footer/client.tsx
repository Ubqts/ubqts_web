"use client";

import { FooterBase } from "./FooterBase";
import { useTranslation } from "@/src/i18n/client";

type FooterProps = { lng: string };
export const Footer = ({ lng }: FooterProps) => {
  const { t } = useTranslation(lng, "footer");
  return <FooterBase t={t} />;
};
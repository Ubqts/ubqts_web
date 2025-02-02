"use client";
import LoginFormBase from "./LoginFormBase";
import { useTranslation } from "@/src/i18n/client";

type LoginFormProps = { lng: string };
export const LoginForm = ({ lng }: LoginFormProps) => {
  const { t } = useTranslation(lng, "login");
  return <LoginFormBase t={t} />;
};
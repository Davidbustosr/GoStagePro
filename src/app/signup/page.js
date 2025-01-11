import RegisterMain from "@/components/layout/main/SignUpMain"; // Asegúrate de tener este componente
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Sign Up | Bastun- Business Consulting Next Js Template",
  description: "Sign Up | Bastun- Business Consulting Next Js Template",
};

export default function SignUp() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <RegisterMain />
    </PageWrapper>
  );
}
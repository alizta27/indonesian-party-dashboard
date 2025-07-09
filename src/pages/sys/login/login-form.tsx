import { DB_USER } from "@/_mock/assets_backup";
import type { SignInReq } from "@/api/services/userService";
import { Icon } from "@/components/icon";
import { GLOBAL_CONFIG } from "@/global-config";
import { useSignIn } from "@/store/userStore";
import { Button } from "@/ui/button";
// import { Checkbox } from "@/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form";
import { Input } from "@/ui/input";
import { cn } from "@/utils";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import {
  LoginStateEnum,
  useLoginStateContext,
} from "./providers/login-provider";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  // const [remember, setRemember] = useState(true);
  const navigatge = useNavigate();

  const { loginState, setLoginState } = useLoginStateContext();
  const signIn = useSignIn();

  const form = useForm<SignInReq>({
    defaultValues: {
      username: DB_USER[0].username,
      password: DB_USER[0].password,
      twoFactorCode: "123456",
    },
  });

  if (loginState !== LoginStateEnum.LOGIN) return null;

  const handleFinish = async (values: SignInReq) => {
    setLoading(true);
    try {
      await signIn(values);
      navigatge(GLOBAL_CONFIG.defaultRoute, { replace: true });
      toast.success("Sign in success!", {
        closeButton: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <Form {...form} {...props}>
        <form onSubmit={form.handleSubmit(handleFinish)} className="space-y-4">
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-2xl font-bold">Login ke akun anda</h1>
            <p className="text-balance text-sm text-muted-foreground">
              Masukkan username dan password anda
            </p>
          </div>

          <FormField
            control={form.control}
            name="username"
            rules={{ required: t("sys.login.accountPlaceholder") }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("sys.login.userName")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={DB_USER.map((user) => user.username).join("/")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            rules={{ required: t("sys.login.passwordPlaceholder") }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("sys.login.password")}</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder={DB_USER[0].password}
                    {...field}
                    suppressHydrationWarning
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="twoFactorCode"
            rules={{ required: t("sys.login.passwordPlaceholder") }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Kode 2FA</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder={"Kode 2FA"}
                    {...field}
                    suppressHydrationWarning
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* 登录按钮 */}
          <Button
            type="submit"
            className="w-full !text-primary font-semibold cursor-pointer"
          >
            {loading && <Loader2 className="animate-spin mr-2" />}
            {t("sys.login.loginButton")}
          </Button>

          <Button
            variant="outline"
            className="w-full"
            onClick={() => setLoginState(LoginStateEnum.QR_CODE)}
          >
            <Icon icon="uil:qrcode-scan" size={20} />
            Scan 2FA QR Code
          </Button>

          {/* 手机登录/二维码登录 */}
          {/* <div className="grid gap-4 sm:grid-cols-2">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setLoginState(LoginStateEnum.MOBILE)}
            >
              <Icon icon="uil:mobile-android" size={20} />
              {t("sys.login.mobileSignInFormTitle")}
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setLoginState(LoginStateEnum.QR_CODE)}
            >
              <Icon icon="uil:qrcode-scan" size={20} />
              {t("sys.login.qrSignInFormTitle")}
            </Button>
          </div> */}
        </form>
      </Form>
    </div>
  );
}

export default LoginForm;

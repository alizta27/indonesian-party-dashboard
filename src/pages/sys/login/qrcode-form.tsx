import { QRCodeSVG } from "qrcode.react";
// import { useTranslation } from "react-i18next";
import { ReturnButton } from "./components/ReturnButton";
import {
  LoginStateEnum,
  useLoginStateContext,
} from "./providers/login-provider";

function QrCodeFrom() {
  // const { t } = useTranslation();
  const { loginState, backToLogin } = useLoginStateContext();

  if (loginState !== LoginStateEnum.QR_CODE) return null;
  return (
    <>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">2FA QR Code</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Pindai menggunakan aplikasi Google Authenticator
        </p>
      </div>

      <div className="flex w-full flex-col items-center justify-center p-4">
        <QRCodeSVG value="123456" size={200} />
      </div>
      <ReturnButton onClick={backToLogin} />
    </>
  );
}

export default QrCodeFrom;

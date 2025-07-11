export const ktaTemplateHtml = `<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <title>KTA HANURA</title>
    <style>
      .kta-card-body {
        font-family: Arial, sans-serif;
        margin: 0;
        width: 720px;
        padding: 20px;
      }
        
      .kta-card {
        width: 100%;
        border: 1px solid #ccc;
        box-sizing: border-box;
        position: relative;
      }

      .black-box {
        background-color: #000;
        height: 100%;
        width: 280px;
      }

      .kta-header-container {
        height: 55px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .kta-header {
        background-color: #f4a020;
        height: 100%;
        width: 100%;
        font-size: 24px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
      }

      .kta-body {
        display: flex;
        padding: 10px 20px;
        gap: 24px;
      }

      .kta-photo {
        width: 150px;
        height: 200px;
        background-color: #999;
      }

      .kta-info {
        flex: 1;
        font-size: 16px;
        font-weight: bold;
      }

      .kta-info-value {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }

      .kta-info-value-label {
        width: 285px;
      }

      .kta-info-value-value {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        font-weight: 400;
        text-wrap: break-word;
      }

      .kta-footer {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        width: 100%;
        padding: 10px;
      }

      .kta-footer-info {
        background-color: #f4a020;
        padding: 10px;
        font-size: 14px
        width: 80px;
      }

      .footer-ttd {
        flex: 1;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 20px;
        margin-bottom: 10px;
      }

      .footer-ttd-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 40px;
      }

    </style>
  </head>
  <body>
    <div class="kta-card-body">
      <div class="kta-card">
        <div class="kta-header-container">
        <div class="black-box"></div>
          <div class="kta-header">KARTU TANDA ANGGOTA</div>
        </div>

        <div class="kta-body">
          <div class="kta-photo"></div>
          <div class="kta-info">
            <div class="kta-info-value">
              <div class="kta-info-value-label">
                NO. KTA
              </div>
              <div class="kta-info-value-value">
                : . . . . . . . . . . . . . . . . . . . . . . . . . . .  . . 
              </div>
            </div>
            <div class="kta-info-value">
              <div class="kta-info-value-label">
                NAMA
              </div>
              <div class="kta-info-value-value">
                : . . . . . . . . . . . . . . . . . . . . . . . . . . .  . . 
              </div>
            </div>
            <div class="kta-info-value">
              <div class="kta-info-value-label">
                TEMPAT/TGL LAHIR
              </div>
              <div class="kta-info-value-value">
                : . . . . . . . . . . . . . . . . . . . . . . . . . . .  . . 
              </div>
            </div>
            <div class="kta-info-value">
              <div class="kta-info-value-label">
                AGAMA
              </div>
              <div class="kta-info-value-value">
                : . . . . . . . . . . . . . . . . . . . . . . . . . . .  . . 
              </div>
            </div>
            <div class="kta-info-value">
              <div class="kta-info-value-label">
                ALAMAT
              </div>
              <div class="kta-info-value-value">
                : . . . . . . . . . . . . . . . . . . . . . . . . . . .  . . 
              </div>
            </div>
          </div>
        </div>

        <div class="kta-footer">
          <div class="kta-footer-info">
            Berlaku Selama Menjadi </br>Anggota Partai HANURA
          </div>
          
          <div class="footer-ttd">
            <div class="footer-ttd-container">
              <p>KETUA UMUM</p>
              <p>DR. OESMAN SAPTA</p>
            </div>
            <div class="footer-ttd-container">
              <p>KETUA UMUM</p>
              <p>DR. OESMAN SAPTA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
`;

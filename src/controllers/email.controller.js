const nodemailer = require("nodemailer");
const response = require("../helpers/Response");

const sendEmail = async (emailOptions, req, reply) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    const { to, vehicle, name, lastname, subject, text } = emailOptions;

    transporter.sendMail({
      from: process.env.USER,
      to,
      subject,
      html: `
        <html>
        
        <body>
            <div class="es-wrapper-color">
                <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="background-position: center top;" background="https://ddtcke.stripocdn.email/content/guids/CABINET_a6c16f67595ad8a108e213726e3d818520bf8ca029bcb49bd3bfac4418d0dcf6/images/photo15853140626041a357de8b000.jpg">
                    <tbody>
                        <tr>
                            <td class="esd-email-paddings" valign="top">
                                <table cellpadding="0" cellspacing="0" class="esd-header-popover es-header" align="center">
                                    <tbody>
                                        <tr>
                                            <td class="esd-stripe" align="center">
                                                <table style="bgcolor:#121211;bgopacity:0.1" class="es-header-body" align="center" cellpadding="0" cellspacing="0" width="600">
                                                    <tbody>
                                                        <tr>
                                                            <td class="esd-structure es-p20t es-p40b es-p20r es-p20l" align="left">
                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td width="560" align="center" class="esd-container-frame">
                                                                                <table cellpadding="5px" cellspacing="5px" width="100%">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank" href="https://www.incolmotos-yamaha.com.co/home/"><img src="https://ddtcke.stripocdn.email/content/guids/CABINET_a6c16f67595ad8a108e213726e3d818520bf8ca029bcb49bd3bfac4418d0dcf6/images/yamahalogopngimagefile.png" alt style="display: block;" width="55"></a></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table cellpadding="0" cellspacing="0" class="es-content" align="center">
                                    <tbody>
                                        <tr>
                                            <td class="esd-stripe" align="center">
                                                <table bgcolor="#121211" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">
                                                    <tbody>
                                                        <tr>
                                                            <td class="esd-structure es-p30t es-p30b es-p40r es-p40l" align="left">
                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td width="520" class="esd-container-frame" align="center" valign="top">
                                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="center" class="esd-block-text es-m-txt-c es-p20t es-p20b">
                                                                                                <h1 style="line-height: 150%;color:#fcfafa">${subject}</h1>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td width="520" class="esd-container-frame" align="center" valign="top">
                                                                                <table cellpadding="5px" cellspacing="5px" width="90%" style="border-width: 2px; border-style: solid; border-color: #FF0000; border-radius: 20px; border-collapse: separate;color:#fcfafa">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="center" class="esd-block-text es-p40 es-m-p20r es-m-p20l">
                                                                                                <p>Hola <strong>${name} ${lastname}</strong>,<br><br>${vehicle}</p>
                                                                                                <p>${text}.</p>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table cellpadding="0" cellspacing="0" class="es-content" align="center">
                                    <tbody>
                                        <tr>
                                            <td class="esd-stripe" align="center">
                                                <table bgcolor="#121211" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">
                                                    <tbody>
                                                        <tr>
                                                            <td class="esd-structure es-p40b es-p40r es-p20l es-m-p40l" align="left">
                                                                <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                                    <tbody>
                                                                        <tr class="es-mobile-hidden">
                                                                            <td width="46" class="es-m-p20b esd-container-frame" align="left">
                                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="center" class="esd-block-spacer" height="60"></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td width="484" align="center" class="esd-container-frame">
                                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td class="esd-block-menu" esd-tmp-menu-size="width|20" esd-tmp-menu-padding="10|5" esd-tmp-menu-font-size="14px">
                                                                                                <table cellpadding="5px" cellspacing="5px" width="100%" class="es-menu">
                                                                                                    <tbody>
                                                                                                        <tr class="links-images-left">
                                                                                                            <td align="left" valign="top" width="100%" class="es-p10t es-p10b es-p5r" style="padding-bottom: 5px;"><a target="_blank" href="tel:018000939262" style="font-size: 14px;"><img src="https://ddtcke.stripocdn.email/content/guids/CABINET_a6c16f67595ad8a108e213726e3d818520bf8ca029bcb49bd3bfac4418d0dcf6/images/envelope_1.png" alt="01 8000 939 262" title="01 8000 939 262" align="absmiddle" class="es-p15r" width="20" style="padding:5px">01 8000 939 262</a></td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>
                                                                                            </td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td class="esd-block-menu" esd-tmp-menu-size="width|20" esd-tmp-menu-padding="0|3" esd-tmp-divider="0|solid|#000000" esd-tmp-menu-font-size="14px">
                                                                                                <table cellpadding="5px" cellspacing="5px" width="100%" class="es-menu">
                                                                                                    <tbody>
                                                                                                        <tr class="links-images-left">
                                                                                                            <td align="left" valign="top" width="100%" class="es-p10t es-p10b es-p5r" style="padding-bottom: 3px; padding-top: 0px;"><a target="_blank" href="mailto:info@incolmotos-yamaha.com.co" style="font-size: 14px;"><img src="https://ddtcke.stripocdn.email/content/guids/CABINET_a6c16f67595ad8a108e213726e3d818520bf8ca029bcb49bd3bfac4418d0dcf6/images/envelope.png" alt="info@incolmotos-yamaha.com.co" title="info@incolmotos-yamaha.com.co" align="absmiddle" class="es-p15r" width="20" style="padding:5px">info@incolmotos-yamaha.com.co</a></td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table cellpadding="0" cellspacing="0" class="es-footer" align="center">
                                    <tbody>
                                        <tr>
                                            <td class="esd-stripe" align="center">
                                                <table bgcolor="#121211" class="es-footer-body" align="center" cellpadding="0" cellspacing="0" width="600">
                                                    <tbody>
                                                        <tr>
                                                            <td class="esd-structure es-p20t es-p20b es-p20r es-p20l" align="left" bgcolor="#cc0000" style="background-color: #cc0000;">
                                                                <table cellpadding="5px" cellspacing="5px" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td width="560" align="center" class="esd-container-frame">
                                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="center" class="esd-block-social" style="font-size:0">
                                                                                                <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social">
                                                                                                    <tbody>
                                                                                                        <tr>
                                                                                                            <td align="center" valign="top" class="es-p40r" style="padding-left:3px"><a target="_blank" href="https://www.facebook.com/yamahamotorcolombia"><img title="Facebook" src="https://ddtcke.stripocdn.email/content/assets/img/social-icons/circle-white/facebook-circle-white.png" alt="Fb" height="24"></a></td>
                                                                                                            <td align="center" valign="top" class="es-p40r" style="padding-left:3px"><a target="_blank" href="https://twitter.com/yamahacolombia?s=20"><img title="Twitter" src="https://ddtcke.stripocdn.email/content/assets/img/social-icons/circle-white/twitter-circle-white.png" alt="Tw" height="24"></a></td>
                                                                                                            <td align="center" valign="top" class="es-p40r" style="padding-left:3px"><a target="_blank" href="https://www.instagram.com/yamahacolombia/"><img title="Instagram" src="https://ddtcke.stripocdn.email/content/assets/img/social-icons/circle-white/instagram-circle-white.png" alt="Inst" height="24"></a></td>
                                                                                                            <td align="center" valign="top" style="padding-left:3px"><a target="_blank" href="https://youtube.com/@YamahaMotorColombia"><img title="Youtube" src="https://ddtcke.stripocdn.email/content/assets/img/social-icons/circle-white/youtube-circle-white.png" alt="Yt" height="24"></a></td>
                                                                                                        </tr>
                                                                                                    </tbody>
                                                                                                </table>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table cellpadding="0" cellspacing="0" class="es-footer esd-footer-popover" align="center">
                                    <tbody>
                                        <tr>
                                            <td class="esd-stripe" align="center">
                                                <table style="bgcolor:#121211;bgopacity:0.1" class="es-footer-body" align="center" cellpadding="0" cellspacing="0" width="600">
                                                    <tbody>
                                                        <tr>
                                                            <td class="esd-structure es-p20t es-p20b es-p40r es-p40l" align="left">
                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td width="520" class="esd-container-frame" align="center">
                                                                                <table cellpadding="0" cellspacing="0" width="100%">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td align="center" class="esd-block-image es-infoblock made_with" style="font-size: 0px;"><a target="_blank" href="https://www.incolmotos-yamaha.com.co/home/"><img src="https://ddtcke.stripocdn.email/content/guids/CABINET_a6c16f67595ad8a108e213726e3d818520bf8ca029bcb49bd3bfac4418d0dcf6/images/logoyamaharevsnegro800x518.png" alt width="225" style="display: block;"></a></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </body>
        
        </html>`,
    });

    console.log("El correo ha sido enviado con éxito.");
    // return response(reply, 200, true, "", "El correo ha sido enviado con éxito.")
  } catch (error) {
    return response(
      reply,
      500,
      false,
      "",
      `Ha sucedido un error al enviar el correo. ${error}`
    );
  }
};

module.exports = sendEmail
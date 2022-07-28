var connection =
  navigator.connection || navigator.mozConnection || navigator.webkitConnection;
if (
  typeof connection != "undefined" &&
  /\slow-2g|2g/.test(connection.effectiveType)
) {
  console.warn("Slow Connection Google Fonts Disabled");
} else {
  WebFontConfig = {
    google: {
      families: [
        "Average+Sans:700,regular:latin",
        "Average+Sans:regular:latin&display=swap",
      ],
    },
  };

  (function () {
    var wf = document.createElement("script");
    wf.src = "//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js";
    wf.type = "text/javascript";
    wf.defer = "true";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(wf, s);
  })();
};


//


      !(function (t) {
        "use strict";
        t.loadCSS || (t.loadCSS = function () {});
        var e = (loadCSS.relpreload = {});
        if (
          ((e.support = (function () {
            var e;
            try {
              e = t.document.createElement("link").relList.supports("preload");
            } catch (t) {
              e = !1;
            }
            return function () {
              return e;
            };
          })()),
          (e.bindMediaToggle = function (t) {
            var e = t.media || "all";
            function a() {
              t.addEventListener
                ? t.removeEventListener("load", a)
                : t.attachEvent && t.detachEvent("onload", a),
                t.setAttribute("onload", null),
                (t.media = e);
            }
            t.addEventListener
              ? t.addEventListener("load", a)
              : t.attachEvent && t.attachEvent("onload", a),
              setTimeout(function () {
                (t.rel = "stylesheet"), (t.media = "only x");
              }),
              setTimeout(a, 3e3);
          }),
          (e.poly = function () {
            if (!e.support())
              for (
                var a = t.document.getElementsByTagName("link"), n = 0;
                n < a.length;
                n++
              ) {
                var o = a[n];
                "preload" !== o.rel ||
                  "style" !== o.getAttribute("as") ||
                  o.getAttribute("data-loadcss") ||
                  (o.setAttribute("data-loadcss", !0), e.bindMediaToggle(o));
              }
          }),
          !e.support())
        ) {
          e.poly();
          var a = t.setInterval(e.poly, 500);
          t.addEventListener
            ? t.addEventListener("load", function () {
                e.poly(), t.clearInterval(a);
              })
            : t.attachEvent &&
              t.attachEvent("onload", function () {
                e.poly(), t.clearInterval(a);
              });
        }
        "undefined" != typeof exports
          ? (exports.loadCSS = loadCSS)
          : (t.loadCSS = loadCSS);
      })("undefined" != typeof global ? global : this);
   
      
      //


      var c = document.body.className;
      c = c.replace(/tie-no-js/, "tie-js");
      document.body.className = c;
    
      //


      jQuery(document).ready(function ($) {
        for (let i = 0; i < document.forms.length; ++i) {
          let form = document.forms[i];
          if ($(form).attr("method") != "get") {
            $(form).append(
              '<input type="hidden" name="J-_uQyxqrATvho" value="[c3@blCrDM_5qOd" />'
            );
          }
          if ($(form).attr("method") != "get") {
            $(form).append(
              '<input type="hidden" name="pywCKqYdSl" value="97]CNZT" />'
            );
          }
          if ($(form).attr("method") != "get") {
            $(form).append(
              '<input type="hidden" name="gOacqrSPW-eC" value="_Pb6@]uli7*jt" />'
            );
          }
          if ($(form).attr("method") != "get") {
            $(form).append(
              '<input type="hidden" name="InCcHBLNp" value="]ZQU4xlEe@kX" />'
            );
          }
        }

        $(document).on("submit", "form", function () {
          if ($(this).attr("method") != "get") {
            $(this).append(
              '<input type="hidden" name="J-_uQyxqrATvho" value="[c3@blCrDM_5qOd" />'
            );
          }
          if ($(this).attr("method") != "get") {
            $(this).append(
              '<input type="hidden" name="pywCKqYdSl" value="97]CNZT" />'
            );
          }
          if ($(this).attr("method") != "get") {
            $(this).append(
              '<input type="hidden" name="gOacqrSPW-eC" value="_Pb6@]uli7*jt" />'
            );
          }
          if ($(this).attr("method") != "get") {
            $(this).append(
              '<input type="hidden" name="InCcHBLNp" value="]ZQU4xlEe@kX" />'
            );
          }
          return true;
        });

        jQuery.ajaxSetup({
          beforeSend: function (e, data) {
            if (data.type !== "POST") return;

            if (typeof data.data === "object" && data.data !== null) {
              data.data.append("J-_uQyxqrATvho", "[c3@blCrDM_5qOd");
              data.data.append("pywCKqYdSl", "97]CNZT");
              data.data.append("gOacqrSPW-eC", "_Pb6@]uli7*jt");
              data.data.append("InCcHBLNp", "]ZQU4xlEe@kX");
            } else {
              data.data =
                data.data +
                "&J-_uQyxqrATvho=[c3@blCrDM_5qOd&pywCKqYdSl=97]CNZT&gOacqrSPW-eC=_Pb6@]uli7*jt&InCcHBLNp=]ZQU4xlEe@kX";
            }
          },
        });
      });
    
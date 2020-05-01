(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{347:function(e,a,t){"use strict";t.r(a);var i=t(18),n=Object(i.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"plugins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[e._v("#")]),e._v(" Plugins")]),e._v(" "),t("ul",[t("li",[e._v("This page explains about the usage of Qv2ray plugin system")]),e._v(" "),t("li",[t("strong",[e._v("To use a plugin, you need at least "),t("code",[e._v("Qv2ray v2.5.0-pre1 BuildVersion: 5264")])])])]),e._v(" "),t("h2",{attrs:{id:"what-is-a-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-plugin"}},[e._v("#")]),e._v(" What is a plugin")]),e._v(" "),t("p",[e._v("A Qv2ray Plugin is, technically, a shared library that implements "),t("code",[e._v("QvPlugin")]),e._v(" interface, which in order to extent the functionality of Qv2ray.")]),e._v(" "),t("p",[e._v("Actually, a Qv2ray Plugin is an extension of Qv2ray, which allows you use more features.")]),e._v(" "),t("p",[e._v("Qv2ray workgroup has published 4 officially maintained plugins:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("QvPACPlugin")]),e._v(" - Allows you to use advanced PAC feature.")]),e._v(" "),t("li",[t("strong",[e._v("QvSSRPlugin")]),e._v(" - Allows you to use ShadowSocksR in Qv2ray.")]),e._v(" "),t("li",[t("strong",[e._v("QvTrojanPlugin")]),e._v(" - Allows you to use Trojan in Qv2ray")]),e._v(" "),t("li",[t("strong",[e._v("QvCommandPlugin")]),e._v(" - Run any command when a specific event has been triggered.")])]),e._v(" "),t("h2",{attrs:{id:"how-to-download-and-use-a-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-download-and-use-a-plugin"}},[e._v("#")]),e._v(" How to download and use a plugin")]),e._v(" "),t("p",[e._v("You can download and enable as many plugins as you want.")]),e._v(" "),t("p",[e._v("To install a plugin, you need to do these:")]),e._v(" "),t("h3",{attrs:{id:"_1-download-install-the-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-download-install-the-plugin"}},[e._v("#")]),e._v(" 1. Download / Install the plugin")]),e._v(" "),t("ul",[t("li",[e._v("Some plugins may be shipped via package manager, you can use them if you want.\n"),t("ul",[t("li",[t("em",[e._v("Please go to "),t("strong",[e._v("step 3")]),e._v(" if you have installed the plugin using this method.")])])])]),e._v(" "),t("li",[e._v("From a plugin’s release page, download the file according to your OS.")])]),e._v(" "),t("h3",{attrs:{id:"_2-put-your-plugin-inside-plugins-directory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-put-your-plugin-inside-plugins-directory"}},[e._v("#")]),e._v(" 2. Put your plugin inside "),t("code",[e._v("plugins")]),e._v(" directory")]),e._v(" "),t("ul",[t("li",[e._v("Click “"),t("em",[e._v("Open Local Plugin Folder")]),e._v("” in the “"),t("em",[e._v("Plugin Manager")]),e._v("” window, which a folder named "),t("code",[e._v("plugins")]),e._v(" will be opened.")]),e._v(" "),t("li",[e._v("Place your downloaded plugin "),t("code",[e._v("dll")]),e._v("/"),t("code",[e._v("dylib")]),e._v("/"),t("code",[e._v("so")]),e._v(" file into this directory.")])]),e._v(" "),t("h3",{attrs:{id:"_3-restart-qv2ray-enable-plugins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-restart-qv2ray-enable-plugins"}},[e._v("#")]),e._v(" 3. Restart Qv2ray & Enable Plugins")]),e._v(" "),t("ul",[t("li",[e._v("Open the “Plugin Manager”, you’ll see the plugin being found.")]),e._v(" "),t("li",[e._v("Check the “enabled” checkbox on the left hand side.")]),e._v(" "),t("li",[e._v("Some plugins, "),t("strong",[e._v("especially")]),e._v(" kernel plugins, will "),t("strong",[e._v("only")]),e._v(" be loaded after Qv2ray restarts.")])]),e._v(" "),t("h3",{attrs:{id:"_4-benefit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-benefit"}},[e._v("#")]),e._v(" 4. Benefit!")]),e._v(" "),t("ul",[t("li",[e._v("Your plugin is ready to use!")])]),e._v(" "),t("h2",{attrs:{id:"plugin-faq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plugin-faq"}},[e._v("#")]),e._v(" Plugin FAQ")]),e._v(" "),t("h3",{attrs:{id:"i-cannot-find-a-plugin-file-for-my-os"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i-cannot-find-a-plugin-file-for-my-os"}},[e._v("#")]),e._v(" I cannot find a plugin file for my OS:")]),e._v(" "),t("ul",[t("li",[e._v("This can happen if the plugin writer is lazy to support your OS, or")]),e._v(" "),t("li",[e._v("The plugin is not suitable for your OS:\n"),t("ul",[t("li",[e._v("e.g. A Linux-specific "),t("code",[e._v("iptables")]),e._v(" setting plugin is not suitable on macOS and Windows")])])])]),e._v(" "),t("h3",{attrs:{id:"i-placed-the-plugin-with-correct-os-architecture-into-the-plugins-folder-but-qv2ray-didn-t-show-it-up"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i-placed-the-plugin-with-correct-os-architecture-into-the-plugins-folder-but-qv2ray-didn-t-show-it-up"}},[e._v("#")]),e._v(" I placed the plugin with correct OS/architecture into the "),t("code",[e._v("plugins")]),e._v(" folder, but Qv2ray didn’t  show it up.")]),e._v(" "),t("ul",[t("li",[e._v("This is even more difficult to debug.")]),e._v(" "),t("li",[e._v("It’s suggested to report this issue directly to the plugin provider, please include:\n"),t("ul",[t("li",[e._v("The exact information of Qv2ray, with "),t("strong",[e._v("where you have downloaded it")]),e._v(", "),t("strong",[e._v("the version")]),e._v(", and the "),t("strong",[e._v("build version")]),e._v(".")]),e._v(" "),t("li",[e._v("The exact version of the Plugin, with the "),t("strong",[e._v("sha256")]),e._v(" or "),t("strong",[e._v("md5")]),e._v(" of the plugin file.")]),e._v(" "),t("li",[e._v("Qv2ray log, can be collected by executing "),t("code",[e._v("qv2ray(.exe) --debug > log.txt")])])])])]),e._v(" "),t("h3",{attrs:{id:"qv2ray-crashed-after-loading-a-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qv2ray-crashed-after-loading-a-plugin"}},[e._v("#")]),e._v(" Qv2ray crashed after loading a plugin:")]),e._v(" "),t("ul",[t("li",[e._v("Please try "),t("code",[e._v("qv2ray(.exe) --noPlugin")]),e._v(" to skip loading all plugins.")]),e._v(" "),t("li",[e._v("If the Qv2ray started successfully, please report the error using methods mentioned above.")])])])}),[],!1,null,null,null);a.default=n.exports}}]);
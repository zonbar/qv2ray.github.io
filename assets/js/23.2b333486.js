(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{268:function(v,a,_){"use strict";_.r(a);var r=_(28),e=Object(r.a)({},(function(){var v=this,a=v.$createElement,_=v._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"配置-v2ray-核心"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#配置-v2ray-核心"}},[v._v("#")]),v._v(" 配置 V2Ray 核心")]),v._v(" "),_("p",[v._v("在成功安装 Qv2ray 后，在真正使用 Qv2ray 之前，还需要基于 v2ray 核心完成一些必要的配置。")]),v._v(" "),_("h2",{attrs:{id:"下载-v2ray-核心文件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#下载-v2ray-核心文件"}},[v._v("#")]),v._v(" 下载 V2Ray 核心文件")]),v._v(" "),_("p",[v._v("由于一些原因，Qv2ray 本身并"),_("strong",[v._v("不包含")]),v._v(" V2ray 的核心可执行文件，这些核心文件来自一个叫做 V2Ray core 的项目，需要用户手动下载安装到指定位置。")]),v._v(" "),_("p",[v._v("如果你正在使用的 Linux 发行版拥有一个可以自动安装 V2Ray 核心文件的包管理系统，那通过包管理安装 Qv2ray 是最好的选择，因为系统可以自动处理 v2ray 核心的更新。对于 Arch Linux 用户而言，你需要安装 "),_("code",[v._v("v2ray")]),v._v("、"),_("code",[v._v("v2ray-geoip")]),v._v(" 和 "),_("code",[v._v("v2ray-domain-list-community")]),v._v(" 这三个软件就足够了。对于其他的发行版，请接着阅读下面的说明。")]),v._v(" "),_("p",[v._v("请前往 "),_("a",{attrs:{href:"https://github.com/v2ray/v2ray-core/releases",target:"_blank",rel:"noopener noreferrer"}},[v._v("v2ray/v2ray-core 官方 Release 页面"),_("OutboundLink")],1),v._v("，并下载最新的符合当前系统版本的稳定版软件包。比如，64 位 Windows 用户可以下载 "),_("code",[v._v("v2ray-windows-64.zip")]),v._v(" ；MacOS 用户可以下载 "),_("code",[v._v("v2ray-macos.zip")]),v._v(" ；大多数 Linux 用户可以下载 "),_("code",[v._v("v2ray-linux-64.zip")]),v._v("。")]),v._v(" "),_("div",{staticClass:"custom-block danger"},[_("p",{staticClass:"custom-block-title"},[v._v("警告")]),v._v(" "),_("p",[v._v("如果你在 "),_("code",[v._v("x86_64")]),v._v("（"),_("code",[v._v("amd64")]),v._v("）平台上运行 Qv2ray，请不要下载 "),_("code",[v._v("v2ray-linux-arm64.zip")]),v._v("。明确地说，"),_("code",[v._v("arm64")]),v._v(" 和 "),_("code",[v._v("amd64")]),v._v(" 完全不同。请确保你不会这样做。")])]),v._v(" "),_("h2",{attrs:{id:"放置你的-v2ray-核心"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#放置你的-v2ray-核心"}},[v._v("#")]),v._v(" 放置你的 V2Ray 核心")]),v._v(" "),_("p",[v._v("将 v2ray 核心文件提取到一个固定的位置。 默认情况下，建议将文件提取到 "),_("code",[v._v("$QV2RAY_CONFIG_PATH/vcore")]),v._v(" 中，其中 "),_("code",[v._v("$QV2RAY_CONFIG_PATH")]),v._v(" 是 Qv2ray 存储其数据的目录。")]),v._v(" "),_("p",[v._v("目录 "),_("code",[v._v("vcore")]),v._v(" 可能位于以下位置之一：")]),v._v(" "),_("ul",[_("li",[_("p",[_("code",[v._v("./")]),v._v(" （在 Qv2ray 可执行文件旁边，建议 Windows 用户使用）")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("~/.qv2ray/")]),v._v("（在 home 文件夹的独立目录中）")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("~/.config/qv2ray")]),v._v(" （标准 XDG 配置路径）")])])]),v._v(" "),_("p",[v._v("确保这些文件直接存在于 "),_("code",[v._v("vcore")]),v._v(" 目录中:")]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("geoip.dat geosite.dat v2ctl v2ray\n")])])]),_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"custom-block-title"},[v._v("对于 Linux / macOS 用户的温馨提示")]),v._v(" "),_("p",[v._v("您应该始终为 "),_("code",[v._v("v2ray")]),v._v(" 和 "),_("code",[v._v("v2ctl")]),v._v(" 授予"),_("strong",[v._v("可执行权限")]),v._v("。这通常通过在这些文件上执行 "),_("code",[v._v("chmod + x")]),v._v(" 来完成。")])]),v._v(" "),_("h2",{attrs:{id:"配置-qv2ray-去使用核心"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#配置-qv2ray-去使用核心"}},[v._v("#")]),v._v(" 配置 Qv2ray 去使用核心")]),v._v(" "),_("p",[v._v("打开 Qv2ray 并进入 Preference 窗口。在 "),_("strong",[v._v("一般设置 - V2Ray 设置")]),v._v(" 中，配置如下：")]),v._v(" "),_("ul",[_("li",[_("p",[_("strong",[v._v("核心可执行文件路径")]),v._v("：将此设置为您的 V2Ray 可执行文件所在的位置。 这可以是 Windows 上的 "),_("code",[v._v("v2ray.exe")]),v._v(" 的完整路径，也可以是 Linux / macOS 上的 "),_("code",[v._v("v2ray")]),v._v(" 可执行文件的完整路径。")])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("V2ray 资源目录")]),v._v("：将其设置为 "),_("code",[v._v("geoip.dat")]),v._v(" 和 "),_("code",[v._v("geosite.dat")]),v._v(" 所在的位置。")])])]),v._v(" "),_("p",[v._v("配置完成后，你可以点击 Check V2Ray Core Settings 按钮来验证你的 V2Ray Core Settings。 重复尝试，直到你通过了检查。")])])}),[],!1,null,null,null);a.default=e.exports}}]);
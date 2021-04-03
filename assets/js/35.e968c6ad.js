(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{402:function(e,t,a){"use strict";a.r(t);var _=a(16),o=Object(_.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"手动构建-qv2ray-项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手动构建-qv2ray-项目"}},[e._v("#")]),e._v(" 手动构建 Qv2ray 项目")]),e._v(" "),a("p",[e._v("In case a hacker wants to compile Qv2ray manually.")]),e._v(" "),a("h2",{attrs:{id:"_0-构建依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-构建依赖"}},[e._v("#")]),e._v(" 0. 构建依赖")]),e._v(" "),a("p",[e._v("请确保你的环境满足以下依赖的要求。")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("对于桌面平台：仅支持 "),a("code",[e._v("x64")]),e._v(" 架构")])]),e._v(" "),a("li",[a("p",[e._v("对于 Android 平台："),a("code",[e._v("arm")]),e._v("、 "),a("code",[e._v("arm64")]),e._v("、 "),a("code",[e._v("x86")]),e._v(" 或 "),a("code",[e._v("x86_64")]),e._v(" 架构")])]),e._v(" "),a("li",[a("p",[e._v("桌面平台需要 Qt 版本 "),a("code",[e._v(">= 5.11")]),e._v(" ，Android 平台需要 Qt 版本 "),a("code",[e._v(">= 6.0")])]),e._v(" "),a("ul",[a("li",[a("s",[e._v("将 Qv2ray 移植到更低或更高版本的 Qt 时请无视该条件")])]),e._v(" "),a("li",[e._v("在这种情况下，您可能需要修改 "),a("code",[e._v("CMakeLists.txt")]),e._v(" 中的 "),a("code",[e._v("QV_QT_MAJOR_VERSION")]),e._v(" 和 "),a("code",[e._v("QV_QT_MINOR_VERSION")])])])]),e._v(" "),a("li",[a("p",[e._v("总是支持最新版本的 Qt ，推荐使用")])]),e._v(" "),a("li",[a("p",[e._v("支持 "),a("code",[e._v("std=c+17")]),e._v(" 的编译器：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("gcc7")]),e._v(" 即可支持")]),e._v(" "),a("li",[e._v("最低 14.2 版本的 MSVC")])])]),e._v(" "),a("li",[a("p",[e._v("第三方库：(gRPC、protobuf、curl、openssl)")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("目标平台")]),e._v(" "),a("th",[e._v("安装方式")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Linux")]),e._v(" "),a("td",[e._v("安装相应的软件包")])]),e._v(" "),a("tr",[a("td",[e._v("Windows (MSVC)")]),e._v(" "),a("td",[e._v("使用 "),a("code",[e._v("vcpkg")]),e._v(" 或使用 "),a("a",{attrs:{href:"#a-%E9%A2%84%E6%9E%84%E5%BB%BA%E7%9A%84%E4%BA%8C%E8%BF%9B%E5%88%B6%E6%96%87%E4%BB%B6"}},[a("strong",[e._v("预构建的二进制文件")])])])]),e._v(" "),a("tr",[a("td",[e._v("Windows (MinGW)")]),e._v(" "),a("td",[e._v("见 "),a("a",{attrs:{href:"#mingw-packages"}},[e._v("下文")])])]),e._v(" "),a("tr",[a("td",[e._v("macOS")]),e._v(" "),a("td",[e._v("通过 "),a("code",[e._v("homebrew")]),e._v(" 安装软件包（注意：curl 已经被预先安装）")])]),e._v(" "),a("tr",[a("td",[e._v("Android")]),e._v(" "),a("td",[e._v("Linux host is supported, use "),a("a",{attrs:{href:"#a-prebuilt-binaries"}},[a("strong",[e._v("prebuilt binaries")])]),e._v(",")])])])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Android 平台下的额外 Git 子模块")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/KDAB/android_openssl",target:"_blank",rel:"noopener noreferrer"}},[e._v("android-openssl"),a("OutboundLink")],1),e._v(" 提供了 OpenSSL 二进制文件：使用命令 "),a("code",[e._v("git clone https://github.com/KDAB/android_openssl 3rdparty/android-openssl")]),e._v(" 下载")])])])]),e._v(" "),a("h3",{attrs:{id:"a-预构建的二进制文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-预构建的二进制文件"}},[e._v("#")]),e._v(" a. 预构建的二进制文件")]),e._v(" "),a("ul",[a("li",[e._v("The "),a("a",{attrs:{href:"https://github.com/Qv2ray/Qv2ray-deps/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Qv2ray-deps"),a("OutboundLink")],1),e._v(" repo is where we build and provide pre-built library dependencies for targeting Windows and Android.")]),e._v(" "),a("li",[e._v("对于安卓版本，我们使用了一个"),a("a",{attrs:{href:"https://github.com/Qv2ray/Qv2ray-deps/blob/master/0001_vcpkg_fix_curl_android_build.patch",target:"_blank",rel:"noopener noreferrer"}},[e._v("修补过的"),a("OutboundLink")],1),e._v("vcpkg。")])]),e._v(" "),a("h4",{attrs:{id:"a-1-download-extraction-script"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-1-download-extraction-script"}},[e._v("#")]),e._v(" a.1 Download / Extraction Script")]),e._v(" "),a("p",[a("strong",[e._v("Extra Dependencies: bash, jq, curl, 7zip")]),e._v(" (Especially for Windows Users)")]),e._v(" "),a("p",[e._v("We have provided "),a("code",[e._v("./libs/setup-lib.sh")]),e._v(" to make it easy to install prebuilt binaries, usage:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("cd")]),e._v(" to "),a("code",[e._v("libs")]),e._v(" directory")]),e._v(" "),a("li",[a("code",[e._v("./setup-libs <PLATFORM> <ARCH>")]),e._v(" "),a("ul",[a("li",[e._v("e.g. "),a("code",[e._v("./setup-libs.sh windows x64")]),e._v(" or "),a("code",[e._v("./setup-libs.sh android arm")])]),e._v(" "),a("li",[e._v("Possible "),a("code",[e._v("<PLATFORM>")]),e._v(" values: "),a("code",[e._v("windows")]),e._v(", "),a("code",[e._v("linux")]),e._v(", "),a("code",[e._v("android")])]),e._v(" "),a("li",[e._v("Possible "),a("code",[e._v("<ARCH>")]),e._v(" values: "),a("code",[e._v("x86")]),e._v(", "),a("code",[e._v("x64")]),e._v(", "),a("code",[e._v("arm")]),e._v(", "),a("code",[e._v("arm64")])]),e._v(" "),a("li",[e._v("在Linux上交叉编译到安卓时将 "),a("code",[e._v("<ARCH>")]),e._v(" 设为 "),a("code",[e._v("tools")]),e._v(" 以安装 Protobuf 生成器的二进制文件")])])])]),e._v(" "),a("p",[e._v("The script downloads packages from "),a("a",{attrs:{href:"https://github.com/Qv2ray/Qv2ray-deps/releases/tag/release",target:"_blank",rel:"noopener noreferrer"}},[e._v("this release"),a("OutboundLink")],1),e._v(" and extract, move contents to corrensponding "),a("code",[e._v("./libs/ARCH-PLATFORM/")]),e._v(" directory.")]),e._v(" "),a("h4",{attrs:{id:"a-2-manually-obtaining-prebuilt-binaries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-2-manually-obtaining-prebuilt-binaries"}},[e._v("#")]),e._v(" a.2 Manually Obtaining Prebuilt Binaries")]),e._v(" "),a("ul",[a("li",[e._v("Download the 7z files")]),e._v(" "),a("li",[e._v("Extract and move the "),a("code",[e._v("{7Z_ROOT}/PLATFORM-ARCH/installed/ARCH-PLATFORM")]),e._v(" into the "),a("code",[e._v("./libs/")]),e._v(" directory.")]),e._v(" "),a("li",[e._v("There must be "),a("code",[e._v("include")]),e._v(", "),a("code",[e._v("lib")]),e._v(" or "),a("code",[e._v("share")]),e._v(" subdirectories under "),a("code",[e._v("./libs/ARCH-PLATFORM")]),e._v(".\n"),a("ul",[a("li",[e._v("e.g. "),a("code",[e._v("./libs/x86-android/include")]),e._v(" or "),a("code",[e._v("./libs/x64-windows/include/")]),e._v(" exists")])])])]),e._v(" "),a("h3",{attrs:{id:"mingw-packages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mingw-packages"}},[e._v("#")]),e._v(" MinGW Packages:")]),e._v(" "),a("p",[e._v("MSYS2 is suggested, packages:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("mingw-w64-x86_64-grpc")])]),e._v(" "),a("li",[a("code",[e._v("mingw-w64-x86_64-curl")])]),e._v(" "),a("li",[a("code",[e._v("mingw-w64-x86_64-protobuf")])]),e._v(" "),a("li",[a("code",[e._v("mingw-w64-x86_64-protobuf-c")])]),e._v(" "),a("li",[a("code",[e._v("mingw-w64-x86_64-pkg-config")])]),e._v(" "),a("li",[a("code",[e._v("mingw-w64-x86_64-re2")])])]),e._v(" "),a("h2",{attrs:{id:"_1-获取源树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-获取源树"}},[e._v("#")]),e._v(" 1. 获取源树")]),e._v(" "),a("p",[e._v("There are various approaches to obtain the source code of Qv2ray. You can get it from:")]),e._v(" "),a("ul",[a("li",[e._v("Git: "),a("code",[e._v("https://github.com/Qv2ray/Qv2ray.git")])]),e._v(" "),a("li",[e._v("Directly download the source code of a branch ("),a("strong",[e._v("never do this due to the lack of git submodule metadata.")]),e._v(") :::tip You can append options after "),a("code",[e._v("git clone")])])]),e._v(" "),a("p",[a("code",[e._v("--branch <branch/tag>")]),e._v(" To checkout the specific branch/tag after clone is created.")]),e._v(" "),a("p",[e._v(":::")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Qv2ray contains nested submodules, always use "),a("code",[e._v("--recursive")]),e._v(" when cloning.")])]),e._v(" "),a("h2",{attrs:{id:"_2-entering-compilation-directory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-entering-compilation-directory"}},[e._v("#")]),e._v(" 2. Entering Compilation Directory")]),e._v(" "),a("p",[e._v("The following steps requires a proper "),a("code",[e._v("PATH")]),e._v(", that is, "),a("code",[e._v("qmake")]),e._v(" could be found in the "),a("code",[e._v("PATH")]),e._v(".")]),e._v(" "),a("p",[e._v("Run: "),a("code",[e._v("mkdir build; cd build;")])]),e._v(" "),a("ul",[a("li",[e._v("Simply to prevent pollutions in the source tree.")])]),e._v(" "),a("h2",{attrs:{id:"_3-generate-compilation-scripts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-generate-compilation-scripts"}},[e._v("#")]),e._v(" 3. Generate Compilation Scripts")]),e._v(" "),a("p",[e._v("You "),a("strong",[e._v("need")]),e._v(" to check for "),a("a",{attrs:{href:"cmake-argument"}},[e._v("CMake Argument References")]),e._v(" and add your own ones.")]),e._v(" "),a("p",[e._v("Run: "),a("code",[e._v("cmake ..")])]),e._v(" "),a("p",[a("em",[a("strong",[e._v("For Android, using "),a("code",[e._v("qt-cmake ..")]),e._v(" is suggested instead of "),a("code",[e._v("cmake ..")]),e._v(".")])])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("CMAKE_INSTALL_PREFIX")]),e._v(" is always suggested, for packaging and collect all required files in one go.")]),e._v(" "),a("li",[a("code",[e._v("CMAKE_BUILD_TYPE")]),e._v(" is always suggested, see "),a("a",{attrs:{href:"https://cmake.org/cmake/help/latest/variable/CMAKE_BUILD_TYPE.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("CMake Documentation"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[e._v("The "),a("code",[e._v("Debug")]),e._v(" and "),a("code",[e._v("Release")]),e._v(" build will have different names for Qv2ray config directories, to prevent a development build from damaging the working copy of configurations.")])])]),e._v(" "),a("li",[a("code",[e._v("-GNinja")]),e._v(" is suggested, iff you have "),a("code",[e._v("Ninja")]),e._v(" or "),a("code",[e._v("ninja-build")]),e._v(" installed.")]),e._v(" "),a("li",[a("code",[e._v("ANDROID_SDK_ROOT")]),e._v(" or "),a("code",[e._v("ANDROID_NDK_ROOT")]),e._v(" may be required for Android.")])]),e._v(" "),a("h2",{attrs:{id:"_4-start-compilation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-start-compilation"}},[e._v("#")]),e._v(" 4. Start Compilation")]),e._v(" "),a("p",[e._v("Start compilation!")]),e._v(" "),a("p",[e._v("Run: "),a("code",[e._v("cmake --build .")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("--parallel <NUMBER>")]),e._v(" is sugguest if you have enough computation power and want to perform parallel compilations.")])]),e._v(" "),a("h2",{attrs:{id:"_5-finalize-compilation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-finalize-compilation"}},[e._v("#")]),e._v(" 5. Finalize Compilation")]),e._v(" "),a("p",[e._v("Copy compiled artifacts and resources, into the destination directory.")]),e._v(" "),a("p",[e._v("Run: "),a("code",[e._v("cmake --install .")]),e._v(" or with "),a("code",[e._v("sudo")])]),e._v(" "),a("ul",[a("li",[e._v("This will automatically copy all dependencies into "),a("code",[e._v("CMAKE_INSTALL_PREFIX")]),e._v(".")])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("There's a bug in "),a("code",[e._v("macdeployqt")]),e._v(" where "),a("code",[e._v("libabsl_debugging_internal")]),e._v(' is recognized as a debug library. Which prevents QPlatformPlugin (i.e. QCocoaPlugin) from being deployed. This causes a runtime exception telling that "No Platform Plugin is Found".')]),e._v(" "),a("p",[e._v("Use "),a("a",{attrs:{href:"https://github.com/Qv2ray/macdeployqt-patched",target:"_blank",rel:"noopener noreferrer"}},[e._v("Qv2ray-patched "),a("code",[e._v("macdeployqt")]),a("OutboundLink")],1),e._v(" instead. Which supports both Qt5 and Qt6")])]),e._v(" "),a("h2",{attrs:{id:"_6-done"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-done"}},[e._v("#")]),e._v(" 6. Done")]),e._v(" "),a("p",[e._v("You have your Qv2ray compiled and deployed!")]),e._v(" "),a("p",[e._v("Start hacking and welcome to contribute Qv2ray!")])])}),[],!1,null,null,null);t.default=o.exports}}]);
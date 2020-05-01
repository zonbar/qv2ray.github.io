(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{346:function(e,t,i){"use strict";i.r(t);var a=i(18),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"writing-plugins"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#writing-plugins"}},[e._v("#")]),e._v(" Writing Plugins")]),e._v(" "),i("ul",[i("li",[e._v("Qv2ray Plugin Documentations")])]),e._v(" "),i("h2",{attrs:{id:"what-is-a-plugin"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-plugin"}},[e._v("#")]),e._v(" What is a plugin")]),e._v(" "),i("p",[e._v("A plugin is, technically, a shared library that implements a specific interface, "),i("code",[e._v("Qv2rayPlugin::QvPluginInterface")]),e._v(" in this case. So that can be loaded by Qv2ray.")]),e._v(" "),i("h2",{attrs:{id:"prerequisites-when-writing-a-plugin"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites-when-writing-a-plugin"}},[e._v("#")]),e._v(" Prerequisites when writing a plugin")]),e._v(" "),i("h3",{attrs:{id:"compiler-version-options"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#compiler-version-options"}},[e._v("#")]),e._v(" Compiler Version / Options")]),e._v(" "),i("ul",[i("li",[e._v("For Linux and macOS, there’s no compiler limitations.")]),e._v(" "),i("li",[e._v("MSVC is required when compiling a plugin.")]),e._v(" "),i("li",[i("code",[e._v("-fno-sized-deallocation")]),e._v(" Should be used when compiling the plugin, especially when “"),i("strong",[e._v("Building plugins using Github Action")]),e._v("”")])]),e._v(" "),i("h3",{attrs:{id:"qt-version-limitations"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#qt-version-limitations"}},[e._v("#")]),e._v(" Qt Version Limitations")]),e._v(" "),i("ul",[i("li",[e._v("It’s a Qt limit that the version which a plugin was built against should not be greater than that of the loader application (Qv2ray in this case)")]),e._v(" "),i("li",[e._v("We suggest building plugins using "),i("code",[e._v("Qt 5.11.3")]),e._v(" since it’s the oldest version Qv2ray supports.")])]),e._v(" "),i("h3",{attrs:{id:"third-party-link-time-and-or-run-time-dependencies"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#third-party-link-time-and-or-run-time-dependencies"}},[e._v("#")]),e._v(" Third-party link-time and/or run-time dependencies")]),e._v(" "),i("ul",[i("li",[e._v("These dependencies "),i("strong",[e._v("should")]),e._v(" be statically linked into the plugin library, otherwise:\n"),i("ul",[i("li",[e._v("Tell the users to download/install all dependencies’ library from wherever they can.")])])]),e._v(" "),i("li",[i("strong",[e._v("Exception: OpenSSL "),i("em",[e._v("SHOULD NOT")]),e._v(" be statically linked.")]),e._v(" "),i("ul",[i("li",[e._v("Qv2ray has its own OpenSSL dependency check and will make sure a compatible OpenSSL has been installed.")])])])]),e._v(" "),i("h2",{attrs:{id:"creating-a-plugin"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-plugin"}},[e._v("#")]),e._v(" Creating a plugin")]),e._v(" "),i("p",[i("em",[e._v("You have 2 choices when initiating a plugin.")])]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Creating plugin using provided "),i("code",[e._v("Template")]),e._v(" project:")]),e._v(" "),i("p",[e._v("There’s a repository called "),i("a",{attrs:{href:"https://github.com/Qv2ray/QvPlugin-Template",target:"_blank",rel:"noopener noreferrer"}},[e._v("QvPlugin-Template"),i("OutboundLink")],1),e._v(", which can be used to create your own plugin.")])]),e._v(" "),i("li",[i("p",[e._v("Creating plugin from from scratch.")])])]),e._v(" "),i("h3",{attrs:{id:"_1-using-the-template-project"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1-using-the-template-project"}},[e._v("#")]),e._v(" 1. Using the template project")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Click the “Use This Plugin” in the Github Repository page and follow the instructions.")])]),e._v(" "),i("li",[i("p",[e._v("Clone your repository just created.")])]),e._v(" "),i("li",[i("p",[e._v("Execute the command, since Github didn’t persist submodule data within the template repo.")]),e._v(" "),i("div",{staticClass:"language-bash extra-class"},[i("pre",{pre:!0,attrs:{class:"language-bash"}},[i("code",[i("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" submodule "),i("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" --force https://github.com/Qv2ray/QvPlugin-Interface/ ./interface\n")])])])]),e._v(" "),i("li",[i("p",[e._v("Select your "),i("code",[e._v("Build Generator")]),e._v(", by doing:")]),e._v(" "),i("p",[e._v("Remove unwanted project files e.g. "),i("code",[e._v("QvSimplePlugin.pro")]),e._v(" or "),i("code",[e._v("CMakeLists.txt")])]),e._v(" "),i("p",[e._v("Remove unwanted CI configurations by removing it from "),i("code",[e._v("./.github/workflows/")])])]),e._v(" "),i("li",[i("p",[e._v("Open the "),i("code",[e._v(".pro")]),e._v(" file or "),i("code",[e._v("CMakeLists.txt")]),e._v(" in QtCreator.")])]),e._v(" "),i("li",[i("p",[e._v("Do any modifications "),i("strong",[e._v("especially plugin metadata")]),e._v(" in the "),i("code",[e._v("QvSimplePlugin.hpp")])])]),e._v(" "),i("li",[i("p",[e._v("Test build locally, then push to the Github to see if the Github Action can pass.")])])]),e._v(" "),i("h3",{attrs:{id:"_2-creating-a-plugin-from-scratch"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_2-creating-a-plugin-from-scratch"}},[e._v("#")]),e._v(" 2. Creating a plugin from scratch")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Create a git repoaitory")])]),e._v(" "),i("li",[i("p",[e._v("Add plugin interface in "),i("code",[e._v("https://github.com/Qv2ray/QvPlugin-Interface/")]),e._v(" as a submodule")])]),e._v(" "),i("li",[i("p",[e._v("Include "),i("code",[e._v("QvPluginInterface.cmake")]),e._v(" or "),i("code",[e._v("QvPluginInterface.pri")]),e._v("into your project file.")])]),e._v(" "),i("li",[i("p",[e._v("Write a class, which inherits "),i("code",[e._v("Qv2rayPlugin::Qv2rayInterface")]),e._v(" and implement every virtual functions.")])]),e._v(" "),i("li",[i("p",[e._v("Add slot declaration of those functions:")]),e._v(" "),i("div",{staticClass:"language-c++ extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("void PluginLog(const QString &) const;\nvoid PluginErrorMessageBox(const QString &);\n")])])])]),e._v(" "),i("li",[i("p",[e._v("You may return a "),i("code",[e._v("nullptr")]),e._v(" in "),i("code",[e._v("GetPluginKernel")]),e._v(" function if your plugin does not have "),i("code",[e._v("SPECIAL_TYPE_KERNEL")]),e._v(" in the metadata.")]),e._v(" "),i("p",[e._v("The same as "),i("code",[e._v("GetSerializer")]),e._v(", but "),i("strong",[e._v("do not return "),i("code",[e._v("nullptr")]),e._v(" in the "),i("code",[e._v("GetEventHandler()")])]),e._v(".")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);
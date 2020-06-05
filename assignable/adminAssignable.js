const assignable = require("willcore.core/assignable/assignable");
const uiProxy = require("willcore.ui/server/proxies/uiProxy.js");
const path = require("path");

class adminAssignable extends assignable {
    constructor() {
        super({}, uiProxy);
    }

    completed() {
        this.registerBootstrapFileService();
    }
    completionResult() {
        return false;
    }

    registerBootstrapFileService(){
        const serverProxy = this.parentProxy._assignable.parentProxy;
        let relativePath = this.getFilesFolderPath(serverProxy);
        serverProxy[this.propertyName].files = `${relativePath}`;
        serverProxy.animateStyle.style = `/${this.propertyName}/css/animate.css`;
        serverProxy.adminStyle.style = `/${this.propertyName}/css/style.css`;

        serverProxy.inspiniaScript.script = `/${this.propertyName}/js/jquery-3.1.1.min.js`;
        serverProxy.inspiniaScript.script = `/${this.propertyName}/js/inspinia.js`;
        serverProxy.metisMenuScript.script = `/${this.propertyName}/js/metisMenu/jquery.metisMenu.js`;
        serverProxy.slimscrollScript.script = `/${this.propertyName}/js/slimscroll/jquery.slimscroll.min.js`;
        serverProxy.popperScript.script = `/${this.propertyName}/js/popper.min.js`;

    }

    getFilesFolderPath(serverProxy) {
        let endPointFolder = path.normalize(`${__dirname}/../admin`);
        let mainExecutingDirectory = serverProxy._assignable.pathHelper.rootDirectory;
        let relativePath = path.relative(mainExecutingDirectory, endPointFolder);
        relativePath = "/" + relativePath.split("\\").join("/");
        return relativePath;
    }
}

module.exports = adminAssignable;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
class ApplicationsNullClientV1 {
    getApplications(correlationId, filter, paging, callback) {
        callback(null, new pip_services3_commons_node_1.DataPage([], 0));
    }
    getApplicationById(correlationId, applicationId, callback) {
        callback(null, null);
    }
    createApplication(correlationId, application, callback) {
        callback(null, application);
    }
    updateApplication(correlationId, application, callback) {
        callback(null, application);
    }
    deleteApplicationById(correlationId, applicationId, callback) {
        callback(null, null);
    }
}
exports.ApplicationsNullClientV1 = ApplicationsNullClientV1;
//# sourceMappingURL=ApplicationsNullClientV1.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_seneca_node_1 = require("pip-services-seneca-node");
class ApplicationsSenecaClientV1 extends pip_services_seneca_node_1.CommandableSenecaClient {
    constructor(config) {
        super('applications');
        if (config != null)
            this.configure(pip_services_commons_node_1.ConfigParams.fromValue(config));
    }
    getApplications(correlationId, filter, paging, callback) {
        this.callCommand('get_applications', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    getApplicationById(correlationId, applicationId, callback) {
        this.callCommand('get_application_by_id', correlationId, {
            application_id: applicationId
        }, callback);
    }
    createApplication(correlationId, application, callback) {
        this.callCommand('create_application', correlationId, {
            application: application
        }, callback);
    }
    updateApplication(correlationId, application, callback) {
        this.callCommand('update_application', correlationId, {
            application: application
        }, callback);
    }
    deleteApplicationById(correlationId, applicationId, callback) {
        this.callCommand('delete_application_by_id', correlationId, {
            application_id: applicationId
        }, callback);
    }
}
exports.ApplicationsSenecaClientV1 = ApplicationsSenecaClientV1;
//# sourceMappingURL=ApplicationsSenecaClientV1.js.map
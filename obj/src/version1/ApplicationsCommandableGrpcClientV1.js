"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_grpc_node_1 = require("pip-services3-grpc-node");
class ApplicationsCommandableGrpcClientV1 extends pip_services3_grpc_node_1.CommandableGrpcClient {
    constructor(config) {
        super('v1/applications');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
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
exports.ApplicationsCommandableGrpcClientV1 = ApplicationsCommandableGrpcClientV1;
//# sourceMappingURL=ApplicationsCommandableGrpcClientV1.js.map
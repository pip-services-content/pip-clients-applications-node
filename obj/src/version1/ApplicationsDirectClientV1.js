"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_net_node_1 = require("pip-services-net-node");
class ApplicationsDirectClientV1 extends pip_services_net_node_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services_commons_node_1.Descriptor("pip-services-applications", "controller", "*", "*", "*"));
    }
    getApplications(correlationId, filter, paging, callback) {
        let timing = this.instrument(correlationId, 'applications.get_applications');
        this._controller.getApplications(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }
    getApplicationById(correlationId, applicationId, callback) {
        let timing = this.instrument(correlationId, 'applications.get_application_by_id');
        this._controller.getApplicationById(correlationId, applicationId, (err, application) => {
            timing.endTiming();
            callback(err, application);
        });
    }
    createApplication(correlationId, application, callback) {
        let timing = this.instrument(correlationId, 'applications.create_application');
        this._controller.createApplication(correlationId, application, (err, application) => {
            timing.endTiming();
            callback(err, application);
        });
    }
    updateApplication(correlationId, application, callback) {
        let timing = this.instrument(correlationId, 'applications.update_application');
        this._controller.updateApplication(correlationId, application, (err, application) => {
            timing.endTiming();
            callback(err, application);
        });
    }
    deleteApplicationById(correlationId, applicationId, callback) {
        let timing = this.instrument(correlationId, 'applications.delete_application_by_id');
        this._controller.deleteApplicationById(correlationId, applicationId, (err, application) => {
            timing.endTiming();
            callback(err, application);
        });
    }
}
exports.ApplicationsDirectClientV1 = ApplicationsDirectClientV1;
//# sourceMappingURL=ApplicationsDirectClientV1.js.map
import { IReferences } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node';
import { FilterParams } from 'pip-services-commons-node';
import { PagingParams} from 'pip-services-commons-node';
import { DataPage } from 'pip-services-commons-node';
import { DirectClient } from 'pip-services-rpc-node';

import { IApplicationsClientV1 } from './IApplicationsClientV1';
//import { IApplicationsController } from 'pip-services-applications-node';
import { ApplicationV1 } from './ApplicationV1';

export class ApplicationsDirectClientV1 extends DirectClient<any> implements IApplicationsClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("pip-services-applications", "controller", "*", "*", "*"))
    }

    public getApplications(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<ApplicationV1>) => void): void {
        let timing = this.instrument(correlationId, 'applications.get_applications');
        this._controller.getApplications(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }

    public getApplicationById(correlationId: string, applicationId: string, 
        callback: (err: any, application: ApplicationV1) => void): void {
        let timing = this.instrument(correlationId, 'applications.get_application_by_id');
        this._controller.getApplicationById(correlationId, applicationId, (err, application) => {
            timing.endTiming();
            callback(err, application);
        });
    }

    public createApplication(correlationId: string, application: ApplicationV1, 
        callback: (err: any, application: ApplicationV1) => void): void {
        let timing = this.instrument(correlationId, 'applications.create_application');
        this._controller.createApplication(correlationId, application, (err, application) => {
            timing.endTiming();
            callback(err, application);
        });
    }

    public updateApplication(correlationId: string, application: ApplicationV1, 
        callback: (err: any, application: ApplicationV1) => void): void {
        let timing = this.instrument(correlationId, 'applications.update_application');
        this._controller.updateApplication(correlationId, application, (err, application) => {
            timing.endTiming();
            callback(err, application);
        });
    }

    public deleteApplicationById(correlationId: string, applicationId: string,
        callback: (err: any, application: ApplicationV1) => void): void {
        let timing = this.instrument(correlationId, 'applications.delete_application_by_id');
        this._controller.deleteApplicationById(correlationId, applicationId, (err, application) => {
            timing.endTiming();
            callback(err, application);
        });
    }
}
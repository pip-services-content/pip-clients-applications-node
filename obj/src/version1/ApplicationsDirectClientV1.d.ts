import { FilterParams } from 'pip-services-commons-node';
import { PagingParams } from 'pip-services-commons-node';
import { DataPage } from 'pip-services-commons-node';
import { DirectClient } from 'pip-services-net-node';
import { IApplicationsClientV1 } from './IApplicationsClientV1';
import { ApplicationV1 } from './ApplicationV1';
export declare class ApplicationsDirectClientV1 extends DirectClient<any> implements IApplicationsClientV1 {
    constructor();
    getApplications(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<ApplicationV1>) => void): void;
    getApplicationById(correlationId: string, applicationId: string, callback: (err: any, application: ApplicationV1) => void): void;
    createApplication(correlationId: string, application: ApplicationV1, callback: (err: any, application: ApplicationV1) => void): void;
    updateApplication(correlationId: string, application: ApplicationV1, callback: (err: any, application: ApplicationV1) => void): void;
    deleteApplicationById(correlationId: string, applicationId: string, callback: (err: any, application: ApplicationV1) => void): void;
}

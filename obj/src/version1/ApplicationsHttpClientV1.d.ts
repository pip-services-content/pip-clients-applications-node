import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableHttpClient } from 'pip-services3-rpc-node';
import { ApplicationV1 } from './ApplicationV1';
import { IApplicationsClientV1 } from './IApplicationsClientV1';
export declare class ApplicationsHttpClientV1 extends CommandableHttpClient implements IApplicationsClientV1 {
    constructor(config?: any);
    getApplications(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<ApplicationV1>) => void): void;
    getApplicationById(correlationId: string, applicationId: string, callback: (err: any, application: ApplicationV1) => void): void;
    createApplication(correlationId: string, application: ApplicationV1, callback: (err: any, application: ApplicationV1) => void): void;
    updateApplication(correlationId: string, application: ApplicationV1, callback: (err: any, application: ApplicationV1) => void): void;
    deleteApplicationById(correlationId: string, applicationId: string, callback: (err: any, application: ApplicationV1) => void): void;
}

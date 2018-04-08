import { FilterParams } from 'pip-services-commons-node';
import { PagingParams } from 'pip-services-commons-node';
import { DataPage } from 'pip-services-commons-node';
import { CommandableSenecaClient } from 'pip-services-net-node';
import { ApplicationV1 } from './ApplicationV1';
import { IApplicationsClientV1 } from './IApplicationsClientV1';
export declare class ApplicationsSenecaClientV1 extends CommandableSenecaClient implements IApplicationsClientV1 {
    constructor(config?: any);
    getApplications(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<ApplicationV1>) => void): void;
    getApplicationById(correlationId: string, applicationId: string, callback: (err: any, application: ApplicationV1) => void): void;
    createApplication(correlationId: string, application: ApplicationV1, callback: (err: any, application: ApplicationV1) => void): void;
    updateApplication(correlationId: string, application: ApplicationV1, callback: (err: any, application: ApplicationV1) => void): void;
    deleteApplicationById(correlationId: string, applicationId: string, callback: (err: any, application: ApplicationV1) => void): void;
}

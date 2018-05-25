let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { References } from 'pip-services-commons-node';
import { ConsoleLogger } from 'pip-services-commons-node';

import { ApplicationsMemoryPersistence } from 'pip-services-Applications-node';
import { ApplicationsController } from 'pip-services-Applications-node';
import { ApplicationsHttpServiceV1 } from 'pip-services-Applications-node';
import { IApplicationsClientV1 } from '../../src/version1/IApplicationsClientV1';
import { ApplicationsHttpClientV1 } from '../../src/version1/ApplicationsHttpClientV1';
import { ApplicationsClientFixtureV1 } from './ApplicationsClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('ApplicationsRestClientV1', ()=> {
    let service: ApplicationsHttpServiceV1;
    let client: ApplicationsHttpClientV1;
    let fixture: ApplicationsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new ApplicationsMemoryPersistence();
        let controller = new ApplicationsController();

        service = new ApplicationsHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services-commons', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-applications', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-applications', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-applications', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new ApplicationsHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new ApplicationsClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
        });
    });
    
    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
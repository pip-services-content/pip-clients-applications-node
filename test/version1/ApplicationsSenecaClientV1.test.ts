let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { References } from 'pip-services-commons-node';
import { ConsoleLogger } from 'pip-services-commons-node';
import { SenecaInstance } from 'pip-services-net-node';

import { ApplicationsMemoryPersistence } from 'pip-services-Applications-node';
import { ApplicationsController } from 'pip-services-Applications-node';
import { ApplicationsSenecaServiceV1 } from 'pip-services-Applications-node';
import { IApplicationsClientV1 } from '../../src/version1/IApplicationsClientV1';
import { ApplicationsSenecaClientV1 } from '../../src/version1/ApplicationsSenecaClientV1';
import { ApplicationsClientFixtureV1 } from './ApplicationsClientFixtureV1';

let senecaConfig = ConfigParams.fromTuples(
    "connection.protocol", "none"
);

suite('ApplicationsSenecaClient', () => {
    let service: ApplicationsSenecaServiceV1;
    let client: ApplicationsSenecaClientV1;
    let fixture: ApplicationsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new ApplicationsMemoryPersistence();
        let controller = new ApplicationsController();

        service = new ApplicationsSenecaServiceV1();
        service.configure(senecaConfig);
        let seneca = new SenecaInstance();

        let references: References = References.fromTuples(
            new Descriptor('pip-services-commons', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-net', 'seneca', 'instance', 'default', '1.0'), seneca,
            new Descriptor('pip-services-applications', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-applications', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-applications', 'service', 'seneca', 'default', '1.0'), service
        );
        seneca.setReferences(references);
        controller.setReferences(references);
        service.setReferences(references);

        client = new ApplicationsSenecaClientV1();
        client.configure(senecaConfig);
        client.setReferences(references);

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

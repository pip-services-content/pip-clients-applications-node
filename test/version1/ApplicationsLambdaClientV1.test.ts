import { YamlConfigReader } from 'pip-services-commons-node';
import { ApplicationsClientFixtureV1 } from './ApplicationsClientFixtureV1';
import { ApplicationsLambdaClientV1 } from '../../src/version1/ApplicationsLambdaClientV1';

suite('ApplicationsLambdaClient', ()=> {
    let config = YamlConfigReader.readConfig(null, './config/test_connections.yml', null);
    let lambdaConfig = config.getSection('lambda');

    // Skip if connection is not configured
    if (lambdaConfig.getAsNullableString("connection.protocol") != "aws")
        return;

    let client: ApplicationsLambdaClientV1;
    let fixture: ApplicationsClientFixtureV1;

    setup((done) => {
        client = new ApplicationsLambdaClientV1();
        client.configure(lambdaConfig);

        fixture = new ApplicationsClientFixtureV1(client);

        client.open(null, done);
    });

    teardown((done) => {
        client.close(null, done);
    });

    test('Crud Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
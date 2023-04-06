import {
  DynamooseOptionsFactory,
  DynamooseModuleOptions,
} from 'nestjs-dynamoose';

export class DynamooseConfigService implements DynamooseOptionsFactory {
  createDynamooseOptions(): DynamooseModuleOptions {
    return {
      aws: {
        region: 'local',
        accessKeyId: 'fakeAccessKeyId',
        secretAccessKey: 'fakeSecretAccessKey',
      },
      local: 'http://localhost:8000',
    };
  }
}

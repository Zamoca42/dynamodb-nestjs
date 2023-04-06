# dynamodb-nestjs

프로젝트 시작

```bash
degit https://github.com/nestjs/typescript-starter.git address-api
cd address-api
npm install aws-sdk dynamoose @nestjs/mapped-types class-validator class-transformer
```

dynamoDB 로컬에서 실행하기

```bash
cd dynamodb_local_latest
java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb
```
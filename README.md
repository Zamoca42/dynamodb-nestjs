# dynamodb-nestjs

프로젝트 시작

```bash
degit https://github.com/nestjs/typescript-starter.git address-api
cd address-api
npm install nestjs-dynamoose aws-sdk dynamoose @nestjs/mapped-types class-validator class-transformer
```

dynamoDB 로컬에서 실행하기

- [컴퓨터에 로컬로 DynamoDB 배포](https://docs.aws.amazon.com/ko_kr/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html)

```bash
cd dynamodb_local_latest
java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb
```
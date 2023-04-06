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

환경 변수 추가

```
AWS_ACCESS_KEY_ID=my-aws-key
AWS_SECRET_ACCESS_KEY=my-aws-secret-key
```

AWS CLI 설정

```bash
$ aws configure
AWS Access Key ID [None]: ********************
AWS Secret Access Key [None]: ********************
Default region name [None]: local
Default output format [None]: json
```

DynamoDB 연결 확인

```bash
$ aws dynamodb list-tables \
    --endpoint-url http://localhost:8000
```

테이블 만들기

```bash
aws dynamodb create-table \
    --table-name 테이블 이름 \
    --attribute-definitions \
        AttributeName=속성 이름,AttributeType=속성 타입 \
        ... \
    --key-schema \
        AttributeName=속성 이름,KeyType=키 타입 \
        ... \
    --provisioned-throughput \
        ReadCapacityUnits=1,WriteCapacityUnits=1 \
    --endpoint-url http://localhost:8000
```

만들어진 테이블 내용 확인

```bash
$ aws dynamodb describe-table \
    --table-name 테이블 이름 \
    --endpoint-url http://localhost:8000
```

테이블 지우기

```bash
aws dynamodb delete-table \
    --table-name 테이블 이름 \
    --endpoint-url http://localhost:8000
```
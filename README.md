# QuickHire Platform Services

Infrastructure services for the QuickHire platform.

## Services

### Config Server (port 9000)
Centralized configuration server backed by a GitHub repository. All services fetch their configuration from here on startup.

### Eureka Server (port 8761)
Service discovery server. All services register here and discover each other through it.

### API Gateway (port 8080)
Single entry point for all client requests. Routes traffic to the appropriate microservice.

| Route | Service |
|-------|---------|
| /api/users/** | user-service |
| /api/jobs/** | job-service |
| /api/files/** | file-service |

## Build
```bash
mvn clean package
```

## Run (in order)
```bash
java -jar quickhire-config-server/target/config-server-0.0.1-SNAPSHOT.jar
java -jar quickhire-eureka-server/target/eureka-server-0.0.1-SNAPSHOT.jar
java -jar quickhire-api-gateway/target/api-gateway-0.0.1-SNAPSHOT.jar
```

## PM2
```bash
pm2 start ecosystem.config.js
```

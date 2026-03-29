module.exports = {
  apps : [{
    name   : "config-server",
    script : "java -jar ./quickhire-config-server/target/config-server-0.0.1-SNAPSHOT.jar",
    log_file: "./logs/config-server.log"
  },
    {
      name   : "eureka-server",
      script : "java -jar ./quickhire-eureka-server/target/eureka-server-0.0.1-SNAPSHOT.jar",
      log_file: "./logs/eureka-server.log"
    },
      {
        name   : "api-gateway",
        script : "java -jar ./quickhire-api-gateway/target/api-gateway-0.0.1-SNAPSHOT.jar",
        log_file: "./logs/api-gateway.log"
      }]
}

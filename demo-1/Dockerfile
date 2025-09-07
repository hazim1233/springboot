# Koristimo OpenJDK 17
FROM openjdk:17-jdk-slim
WORKDIR /app

# Kopiramo buildani jar (prethodno buildan lokalno)
COPY build/libs/demo-1-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]

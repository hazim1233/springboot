# Stage 1: build Gradle projekta
FROM gradle:7.6-jdk17 AS builder
WORKDIR /app

# Kopiramo sve fajlove projekta u container
COPY . .

# Buildamo .jar fajl
RUN gradle clean build --no-daemon

# Stage 2: run
FROM openjdk:17-jdk-slim
WORKDIR /app

# Kopiramo buildani .jar iz builder stage-a
COPY --from=builder /app/demo-1/build/libs/*.jar app.jar

# Expose port 8080 (Spring Boot default)
EXPOSE 8080

# Start command
ENTRYPOINT ["java","-jar","app.jar"]

#JAVA_8_IMAGE
FROM openjdk:8-jdk-alpine

# Add Maintainer Info
LABEL authors="Viktor, Roman"

#PORT_EXPOSE
EXPOSE 80

# The application's jar file
ARG JAR_FILE=build/libs/app-shell-0.0.1-SNAPSHOT.jar
#ARG JAR_FILE

# Add the application's jar to the container
ADD ${JAR_FILE} app-shell.jar

#CODE_RUN
CMD ["java","-Djava.security.egd=file:/dev/./urandom", "-jar", "./app-shell.jar"]

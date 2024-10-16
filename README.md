## Kasagi Labo Challenge 
# Participant : JC Tan
# Email : jiachwen99@gmail.com
# Time Started : 9:10 PM 16/10/2024
# Time Ended : 10:10 PM 16/10/2024

## Question
# Challenge A
Write a program that will generate four (4) types of printable random objects and store them in a single file, each object will be separated by a ",". These are the 4 objects: alphabetical strings, real numbers, integers, alphanumerics. The alphanumerics should contain a random number of spaces before and after it (not exceeding 10 spaces). The output should be 10MB in size.

# Challenge B
Create a program that will read the generated file above and print to the console the object and its type. Spaces before and after the alphanumeric object must be stripped.

# Challenge C
Dockerize Challenge B. Write a docker file so that it reads the output from Challenge A as an Input. Once this container is started, the program in challenge B is executed to process this file. The output should be saved in a file and should be exposed to the Docker host machine.

## Step by Step to run the project

1. Clone the repository
2. Run `npm install`
3. Replace the .env.example to .env and fill in the File with your preferred file name.
4. Run `npm run start:a` to run challenge A
5. Run `npm run start:b` to run challenge B

## Running Challenge C (Dockerized version)

6. Ensure Docker is installed on your system
7. Run `npm run docker:build` Build the Docker image:
8. Run `npm run docker:run` the Docker container:
9. The output will be available in the `output/results.txt` file in your project directory

## Notes

- Make sure the `objects.txt` file (output from Challenge A) is in the project root directory before running Challenge B or C.
- The Docker container will use the `objects.txt` file as input and save the results in the `output/results.txt` file.
- You can modify the input and output file paths in the Dockerfile and docker run command if needed.

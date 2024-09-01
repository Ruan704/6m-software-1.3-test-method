/*
    Task
    - Implement a switch statement to check against `env` environmental variable.
    - If `env` is "DEV", no change to `databaseCredential`.
    - If `env` is "STAGE", modify `databaseCredential` to "stageuser:password".
    - If `env` is "PROD", modify `databaseCredential` to "produser:password"
    
*/

const env = "DEV"; // Toggle between these possible values "DEV" | "STAGE" | "PROD"
let databaseCredential = "devuser:password";

// Task: Add code here
const CheckEnv = (env) =>{
    switch(env){
        case 0:
        env = "Dev"
        break;
        case 1:
        env = "STAGE"
        databaseCredential = "stageuser:password"
        case 2:
        env = "PROD"
        databaseCredential = "producer:password"
    }


}
console.log(`Database
console.log(`Database credential for environment ${env} is ${databaseCredential}`);

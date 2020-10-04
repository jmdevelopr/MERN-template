import dotenv from 'dotenv';
import dotenvParseVariables from "dotenv-parse-variables";

let env: IEnv = dotenv.config({});
if (env.error) throw env.error;
env = dotenvParseVariables(env.parsed);

interface IEnv extends dotenv.DotenvConfigOutput {
    SKIP_PREFLIGHT_CHECK?: true
    PORT?: number;
}

export default env;
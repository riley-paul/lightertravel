import { parseEnv } from "./envs";
import { config } from "dotenv";
import { expand } from "dotenv-expand";

expand(config());

const env = parseEnv(process.env);
console.log(`Running in ${env.NODE_ENV}`);
export default env;

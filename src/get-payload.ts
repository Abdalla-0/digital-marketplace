import dotenv from "dotenv"
import path from "path"
import type {initOptions} from "payload/config"

dotenv.config({
    path: path.resolve(__dirname, "../.env")
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let cached = (global as any).payload;

if (!cached) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    cached = (global as any).payload = {
        client: null,
        promise: null
    };
}

interface Args {
    initOptions?: Partial<initOptions>
}

export const getPayloadClient = async ({initOptions}: Args) => {

}
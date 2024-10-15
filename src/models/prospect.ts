import type { Prospect } from '../libs/db.js'

export type APIResponse<T> = Promise<{ data: T }>

export type ProspectResponse = APIResponse<Prospect | null>

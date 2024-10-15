
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Prospect
 * 
 */
export type Prospect = $Result.DefaultSelection<Prisma.$ProspectPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Civility: {
  MR: 'MR',
  MRS: 'MRS'
};

export type Civility = (typeof Civility)[keyof typeof Civility]

}

export type Civility = $Enums.Civility

export const Civility: typeof $Enums.Civility

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Prospects
 * const prospects = await prisma.prospect.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Prospects
   * const prospects = await prisma.prospect.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.prospect`: Exposes CRUD operations for the **Prospect** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prospects
    * const prospects = await prisma.prospect.findMany()
    * ```
    */
  get prospect(): Prisma.ProspectDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.21.0
   * Query Engine version: 08713a93b99d58f31485621c634b04983ae01d95
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Prospect: 'Prospect'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "prospect"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Prospect: {
        payload: Prisma.$ProspectPayload<ExtArgs>
        fields: Prisma.ProspectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProspectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProspectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProspectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProspectPayload>
          }
          findFirst: {
            args: Prisma.ProspectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProspectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProspectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProspectPayload>
          }
          findMany: {
            args: Prisma.ProspectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProspectPayload>[]
          }
          create: {
            args: Prisma.ProspectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProspectPayload>
          }
          createMany: {
            args: Prisma.ProspectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProspectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProspectPayload>[]
          }
          delete: {
            args: Prisma.ProspectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProspectPayload>
          }
          update: {
            args: Prisma.ProspectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProspectPayload>
          }
          deleteMany: {
            args: Prisma.ProspectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProspectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProspectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProspectPayload>
          }
          aggregate: {
            args: Prisma.ProspectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProspect>
          }
          groupBy: {
            args: Prisma.ProspectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProspectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProspectCountArgs<ExtArgs>
            result: $Utils.Optional<ProspectCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Prospect
   */

  export type AggregateProspect = {
    _count: ProspectCountAggregateOutputType | null
    _avg: ProspectAvgAggregateOutputType | null
    _sum: ProspectSumAggregateOutputType | null
    _min: ProspectMinAggregateOutputType | null
    _max: ProspectMaxAggregateOutputType | null
  }

  export type ProspectAvgAggregateOutputType = {
    id: number | null
  }

  export type ProspectSumAggregateOutputType = {
    id: number | null
  }

  export type ProspectMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    addressComplement: string | null
    postalCode: string | null
    city: string | null
    phone: string | null
    mobile: string | null
    activity: string | null
    email: string | null
    workforce: string | null
    managerLastname: string | null
    managerFirstname: string | null
    managerCivility: $Enums.Civility | null
  }

  export type ProspectMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    addressComplement: string | null
    postalCode: string | null
    city: string | null
    phone: string | null
    mobile: string | null
    activity: string | null
    email: string | null
    workforce: string | null
    managerLastname: string | null
    managerFirstname: string | null
    managerCivility: $Enums.Civility | null
  }

  export type ProspectCountAggregateOutputType = {
    id: number
    name: number
    address: number
    addressComplement: number
    postalCode: number
    city: number
    phone: number
    mobile: number
    activity: number
    email: number
    workforce: number
    managerLastname: number
    managerFirstname: number
    managerCivility: number
    _all: number
  }


  export type ProspectAvgAggregateInputType = {
    id?: true
  }

  export type ProspectSumAggregateInputType = {
    id?: true
  }

  export type ProspectMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    addressComplement?: true
    postalCode?: true
    city?: true
    phone?: true
    mobile?: true
    activity?: true
    email?: true
    workforce?: true
    managerLastname?: true
    managerFirstname?: true
    managerCivility?: true
  }

  export type ProspectMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    addressComplement?: true
    postalCode?: true
    city?: true
    phone?: true
    mobile?: true
    activity?: true
    email?: true
    workforce?: true
    managerLastname?: true
    managerFirstname?: true
    managerCivility?: true
  }

  export type ProspectCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    addressComplement?: true
    postalCode?: true
    city?: true
    phone?: true
    mobile?: true
    activity?: true
    email?: true
    workforce?: true
    managerLastname?: true
    managerFirstname?: true
    managerCivility?: true
    _all?: true
  }

  export type ProspectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prospect to aggregate.
     */
    where?: ProspectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prospects to fetch.
     */
    orderBy?: ProspectOrderByWithRelationInput | ProspectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProspectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prospects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prospects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prospects
    **/
    _count?: true | ProspectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProspectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProspectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProspectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProspectMaxAggregateInputType
  }

  export type GetProspectAggregateType<T extends ProspectAggregateArgs> = {
        [P in keyof T & keyof AggregateProspect]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProspect[P]>
      : GetScalarType<T[P], AggregateProspect[P]>
  }




  export type ProspectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProspectWhereInput
    orderBy?: ProspectOrderByWithAggregationInput | ProspectOrderByWithAggregationInput[]
    by: ProspectScalarFieldEnum[] | ProspectScalarFieldEnum
    having?: ProspectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProspectCountAggregateInputType | true
    _avg?: ProspectAvgAggregateInputType
    _sum?: ProspectSumAggregateInputType
    _min?: ProspectMinAggregateInputType
    _max?: ProspectMaxAggregateInputType
  }

  export type ProspectGroupByOutputType = {
    id: number
    name: string | null
    address: string | null
    addressComplement: string | null
    postalCode: string | null
    city: string | null
    phone: string | null
    mobile: string | null
    activity: string | null
    email: string | null
    workforce: string | null
    managerLastname: string | null
    managerFirstname: string | null
    managerCivility: $Enums.Civility
    _count: ProspectCountAggregateOutputType | null
    _avg: ProspectAvgAggregateOutputType | null
    _sum: ProspectSumAggregateOutputType | null
    _min: ProspectMinAggregateOutputType | null
    _max: ProspectMaxAggregateOutputType | null
  }

  type GetProspectGroupByPayload<T extends ProspectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProspectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProspectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProspectGroupByOutputType[P]>
            : GetScalarType<T[P], ProspectGroupByOutputType[P]>
        }
      >
    >


  export type ProspectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    addressComplement?: boolean
    postalCode?: boolean
    city?: boolean
    phone?: boolean
    mobile?: boolean
    activity?: boolean
    email?: boolean
    workforce?: boolean
    managerLastname?: boolean
    managerFirstname?: boolean
    managerCivility?: boolean
  }, ExtArgs["result"]["prospect"]>

  export type ProspectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    addressComplement?: boolean
    postalCode?: boolean
    city?: boolean
    phone?: boolean
    mobile?: boolean
    activity?: boolean
    email?: boolean
    workforce?: boolean
    managerLastname?: boolean
    managerFirstname?: boolean
    managerCivility?: boolean
  }, ExtArgs["result"]["prospect"]>

  export type ProspectSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    addressComplement?: boolean
    postalCode?: boolean
    city?: boolean
    phone?: boolean
    mobile?: boolean
    activity?: boolean
    email?: boolean
    workforce?: boolean
    managerLastname?: boolean
    managerFirstname?: boolean
    managerCivility?: boolean
  }


  export type $ProspectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prospect"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      address: string | null
      addressComplement: string | null
      postalCode: string | null
      city: string | null
      phone: string | null
      mobile: string | null
      activity: string | null
      email: string | null
      workforce: string | null
      managerLastname: string | null
      managerFirstname: string | null
      managerCivility: $Enums.Civility
    }, ExtArgs["result"]["prospect"]>
    composites: {}
  }

  type ProspectGetPayload<S extends boolean | null | undefined | ProspectDefaultArgs> = $Result.GetResult<Prisma.$ProspectPayload, S>

  type ProspectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProspectFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProspectCountAggregateInputType | true
    }

  export interface ProspectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prospect'], meta: { name: 'Prospect' } }
    /**
     * Find zero or one Prospect that matches the filter.
     * @param {ProspectFindUniqueArgs} args - Arguments to find a Prospect
     * @example
     * // Get one Prospect
     * const prospect = await prisma.prospect.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProspectFindUniqueArgs>(args: SelectSubset<T, ProspectFindUniqueArgs<ExtArgs>>): Prisma__ProspectClient<$Result.GetResult<Prisma.$ProspectPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Prospect that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProspectFindUniqueOrThrowArgs} args - Arguments to find a Prospect
     * @example
     * // Get one Prospect
     * const prospect = await prisma.prospect.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProspectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProspectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProspectClient<$Result.GetResult<Prisma.$ProspectPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Prospect that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProspectFindFirstArgs} args - Arguments to find a Prospect
     * @example
     * // Get one Prospect
     * const prospect = await prisma.prospect.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProspectFindFirstArgs>(args?: SelectSubset<T, ProspectFindFirstArgs<ExtArgs>>): Prisma__ProspectClient<$Result.GetResult<Prisma.$ProspectPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Prospect that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProspectFindFirstOrThrowArgs} args - Arguments to find a Prospect
     * @example
     * // Get one Prospect
     * const prospect = await prisma.prospect.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProspectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProspectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProspectClient<$Result.GetResult<Prisma.$ProspectPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Prospects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProspectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prospects
     * const prospects = await prisma.prospect.findMany()
     * 
     * // Get first 10 Prospects
     * const prospects = await prisma.prospect.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prospectWithIdOnly = await prisma.prospect.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProspectFindManyArgs>(args?: SelectSubset<T, ProspectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProspectPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Prospect.
     * @param {ProspectCreateArgs} args - Arguments to create a Prospect.
     * @example
     * // Create one Prospect
     * const Prospect = await prisma.prospect.create({
     *   data: {
     *     // ... data to create a Prospect
     *   }
     * })
     * 
     */
    create<T extends ProspectCreateArgs>(args: SelectSubset<T, ProspectCreateArgs<ExtArgs>>): Prisma__ProspectClient<$Result.GetResult<Prisma.$ProspectPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Prospects.
     * @param {ProspectCreateManyArgs} args - Arguments to create many Prospects.
     * @example
     * // Create many Prospects
     * const prospect = await prisma.prospect.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProspectCreateManyArgs>(args?: SelectSubset<T, ProspectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prospects and returns the data saved in the database.
     * @param {ProspectCreateManyAndReturnArgs} args - Arguments to create many Prospects.
     * @example
     * // Create many Prospects
     * const prospect = await prisma.prospect.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prospects and only return the `id`
     * const prospectWithIdOnly = await prisma.prospect.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProspectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProspectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProspectPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Prospect.
     * @param {ProspectDeleteArgs} args - Arguments to delete one Prospect.
     * @example
     * // Delete one Prospect
     * const Prospect = await prisma.prospect.delete({
     *   where: {
     *     // ... filter to delete one Prospect
     *   }
     * })
     * 
     */
    delete<T extends ProspectDeleteArgs>(args: SelectSubset<T, ProspectDeleteArgs<ExtArgs>>): Prisma__ProspectClient<$Result.GetResult<Prisma.$ProspectPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Prospect.
     * @param {ProspectUpdateArgs} args - Arguments to update one Prospect.
     * @example
     * // Update one Prospect
     * const prospect = await prisma.prospect.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProspectUpdateArgs>(args: SelectSubset<T, ProspectUpdateArgs<ExtArgs>>): Prisma__ProspectClient<$Result.GetResult<Prisma.$ProspectPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Prospects.
     * @param {ProspectDeleteManyArgs} args - Arguments to filter Prospects to delete.
     * @example
     * // Delete a few Prospects
     * const { count } = await prisma.prospect.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProspectDeleteManyArgs>(args?: SelectSubset<T, ProspectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prospects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProspectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prospects
     * const prospect = await prisma.prospect.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProspectUpdateManyArgs>(args: SelectSubset<T, ProspectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Prospect.
     * @param {ProspectUpsertArgs} args - Arguments to update or create a Prospect.
     * @example
     * // Update or create a Prospect
     * const prospect = await prisma.prospect.upsert({
     *   create: {
     *     // ... data to create a Prospect
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prospect we want to update
     *   }
     * })
     */
    upsert<T extends ProspectUpsertArgs>(args: SelectSubset<T, ProspectUpsertArgs<ExtArgs>>): Prisma__ProspectClient<$Result.GetResult<Prisma.$ProspectPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Prospects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProspectCountArgs} args - Arguments to filter Prospects to count.
     * @example
     * // Count the number of Prospects
     * const count = await prisma.prospect.count({
     *   where: {
     *     // ... the filter for the Prospects we want to count
     *   }
     * })
    **/
    count<T extends ProspectCountArgs>(
      args?: Subset<T, ProspectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProspectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prospect.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProspectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProspectAggregateArgs>(args: Subset<T, ProspectAggregateArgs>): Prisma.PrismaPromise<GetProspectAggregateType<T>>

    /**
     * Group by Prospect.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProspectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProspectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProspectGroupByArgs['orderBy'] }
        : { orderBy?: ProspectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProspectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProspectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prospect model
   */
  readonly fields: ProspectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prospect.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProspectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Prospect model
   */ 
  interface ProspectFieldRefs {
    readonly id: FieldRef<"Prospect", 'Int'>
    readonly name: FieldRef<"Prospect", 'String'>
    readonly address: FieldRef<"Prospect", 'String'>
    readonly addressComplement: FieldRef<"Prospect", 'String'>
    readonly postalCode: FieldRef<"Prospect", 'String'>
    readonly city: FieldRef<"Prospect", 'String'>
    readonly phone: FieldRef<"Prospect", 'String'>
    readonly mobile: FieldRef<"Prospect", 'String'>
    readonly activity: FieldRef<"Prospect", 'String'>
    readonly email: FieldRef<"Prospect", 'String'>
    readonly workforce: FieldRef<"Prospect", 'String'>
    readonly managerLastname: FieldRef<"Prospect", 'String'>
    readonly managerFirstname: FieldRef<"Prospect", 'String'>
    readonly managerCivility: FieldRef<"Prospect", 'Civility'>
  }
    

  // Custom InputTypes
  /**
   * Prospect findUnique
   */
  export type ProspectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prospect
     */
    select?: ProspectSelect<ExtArgs> | null
    /**
     * Filter, which Prospect to fetch.
     */
    where: ProspectWhereUniqueInput
  }

  /**
   * Prospect findUniqueOrThrow
   */
  export type ProspectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prospect
     */
    select?: ProspectSelect<ExtArgs> | null
    /**
     * Filter, which Prospect to fetch.
     */
    where: ProspectWhereUniqueInput
  }

  /**
   * Prospect findFirst
   */
  export type ProspectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prospect
     */
    select?: ProspectSelect<ExtArgs> | null
    /**
     * Filter, which Prospect to fetch.
     */
    where?: ProspectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prospects to fetch.
     */
    orderBy?: ProspectOrderByWithRelationInput | ProspectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prospects.
     */
    cursor?: ProspectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prospects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prospects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prospects.
     */
    distinct?: ProspectScalarFieldEnum | ProspectScalarFieldEnum[]
  }

  /**
   * Prospect findFirstOrThrow
   */
  export type ProspectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prospect
     */
    select?: ProspectSelect<ExtArgs> | null
    /**
     * Filter, which Prospect to fetch.
     */
    where?: ProspectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prospects to fetch.
     */
    orderBy?: ProspectOrderByWithRelationInput | ProspectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prospects.
     */
    cursor?: ProspectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prospects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prospects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prospects.
     */
    distinct?: ProspectScalarFieldEnum | ProspectScalarFieldEnum[]
  }

  /**
   * Prospect findMany
   */
  export type ProspectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prospect
     */
    select?: ProspectSelect<ExtArgs> | null
    /**
     * Filter, which Prospects to fetch.
     */
    where?: ProspectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prospects to fetch.
     */
    orderBy?: ProspectOrderByWithRelationInput | ProspectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prospects.
     */
    cursor?: ProspectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prospects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prospects.
     */
    skip?: number
    distinct?: ProspectScalarFieldEnum | ProspectScalarFieldEnum[]
  }

  /**
   * Prospect create
   */
  export type ProspectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prospect
     */
    select?: ProspectSelect<ExtArgs> | null
    /**
     * The data needed to create a Prospect.
     */
    data?: XOR<ProspectCreateInput, ProspectUncheckedCreateInput>
  }

  /**
   * Prospect createMany
   */
  export type ProspectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prospects.
     */
    data: ProspectCreateManyInput | ProspectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prospect createManyAndReturn
   */
  export type ProspectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prospect
     */
    select?: ProspectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Prospects.
     */
    data: ProspectCreateManyInput | ProspectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prospect update
   */
  export type ProspectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prospect
     */
    select?: ProspectSelect<ExtArgs> | null
    /**
     * The data needed to update a Prospect.
     */
    data: XOR<ProspectUpdateInput, ProspectUncheckedUpdateInput>
    /**
     * Choose, which Prospect to update.
     */
    where: ProspectWhereUniqueInput
  }

  /**
   * Prospect updateMany
   */
  export type ProspectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prospects.
     */
    data: XOR<ProspectUpdateManyMutationInput, ProspectUncheckedUpdateManyInput>
    /**
     * Filter which Prospects to update
     */
    where?: ProspectWhereInput
  }

  /**
   * Prospect upsert
   */
  export type ProspectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prospect
     */
    select?: ProspectSelect<ExtArgs> | null
    /**
     * The filter to search for the Prospect to update in case it exists.
     */
    where: ProspectWhereUniqueInput
    /**
     * In case the Prospect found by the `where` argument doesn't exist, create a new Prospect with this data.
     */
    create: XOR<ProspectCreateInput, ProspectUncheckedCreateInput>
    /**
     * In case the Prospect was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProspectUpdateInput, ProspectUncheckedUpdateInput>
  }

  /**
   * Prospect delete
   */
  export type ProspectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prospect
     */
    select?: ProspectSelect<ExtArgs> | null
    /**
     * Filter which Prospect to delete.
     */
    where: ProspectWhereUniqueInput
  }

  /**
   * Prospect deleteMany
   */
  export type ProspectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prospects to delete
     */
    where?: ProspectWhereInput
  }

  /**
   * Prospect without action
   */
  export type ProspectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prospect
     */
    select?: ProspectSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProspectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    addressComplement: 'addressComplement',
    postalCode: 'postalCode',
    city: 'city',
    phone: 'phone',
    mobile: 'mobile',
    activity: 'activity',
    email: 'email',
    workforce: 'workforce',
    managerLastname: 'managerLastname',
    managerFirstname: 'managerFirstname',
    managerCivility: 'managerCivility'
  };

  export type ProspectScalarFieldEnum = (typeof ProspectScalarFieldEnum)[keyof typeof ProspectScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Civility'
   */
  export type EnumCivilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Civility'>
    


  /**
   * Reference to a field of type 'Civility[]'
   */
  export type ListEnumCivilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Civility[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ProspectWhereInput = {
    AND?: ProspectWhereInput | ProspectWhereInput[]
    OR?: ProspectWhereInput[]
    NOT?: ProspectWhereInput | ProspectWhereInput[]
    id?: IntFilter<"Prospect"> | number
    name?: StringNullableFilter<"Prospect"> | string | null
    address?: StringNullableFilter<"Prospect"> | string | null
    addressComplement?: StringNullableFilter<"Prospect"> | string | null
    postalCode?: StringNullableFilter<"Prospect"> | string | null
    city?: StringNullableFilter<"Prospect"> | string | null
    phone?: StringNullableFilter<"Prospect"> | string | null
    mobile?: StringNullableFilter<"Prospect"> | string | null
    activity?: StringNullableFilter<"Prospect"> | string | null
    email?: StringNullableFilter<"Prospect"> | string | null
    workforce?: StringNullableFilter<"Prospect"> | string | null
    managerLastname?: StringNullableFilter<"Prospect"> | string | null
    managerFirstname?: StringNullableFilter<"Prospect"> | string | null
    managerCivility?: EnumCivilityFilter<"Prospect"> | $Enums.Civility
  }

  export type ProspectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    addressComplement?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    activity?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    workforce?: SortOrderInput | SortOrder
    managerLastname?: SortOrderInput | SortOrder
    managerFirstname?: SortOrderInput | SortOrder
    managerCivility?: SortOrder
  }

  export type ProspectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProspectWhereInput | ProspectWhereInput[]
    OR?: ProspectWhereInput[]
    NOT?: ProspectWhereInput | ProspectWhereInput[]
    name?: StringNullableFilter<"Prospect"> | string | null
    address?: StringNullableFilter<"Prospect"> | string | null
    addressComplement?: StringNullableFilter<"Prospect"> | string | null
    postalCode?: StringNullableFilter<"Prospect"> | string | null
    city?: StringNullableFilter<"Prospect"> | string | null
    phone?: StringNullableFilter<"Prospect"> | string | null
    mobile?: StringNullableFilter<"Prospect"> | string | null
    activity?: StringNullableFilter<"Prospect"> | string | null
    email?: StringNullableFilter<"Prospect"> | string | null
    workforce?: StringNullableFilter<"Prospect"> | string | null
    managerLastname?: StringNullableFilter<"Prospect"> | string | null
    managerFirstname?: StringNullableFilter<"Prospect"> | string | null
    managerCivility?: EnumCivilityFilter<"Prospect"> | $Enums.Civility
  }, "id">

  export type ProspectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    addressComplement?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    activity?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    workforce?: SortOrderInput | SortOrder
    managerLastname?: SortOrderInput | SortOrder
    managerFirstname?: SortOrderInput | SortOrder
    managerCivility?: SortOrder
    _count?: ProspectCountOrderByAggregateInput
    _avg?: ProspectAvgOrderByAggregateInput
    _max?: ProspectMaxOrderByAggregateInput
    _min?: ProspectMinOrderByAggregateInput
    _sum?: ProspectSumOrderByAggregateInput
  }

  export type ProspectScalarWhereWithAggregatesInput = {
    AND?: ProspectScalarWhereWithAggregatesInput | ProspectScalarWhereWithAggregatesInput[]
    OR?: ProspectScalarWhereWithAggregatesInput[]
    NOT?: ProspectScalarWhereWithAggregatesInput | ProspectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Prospect"> | number
    name?: StringNullableWithAggregatesFilter<"Prospect"> | string | null
    address?: StringNullableWithAggregatesFilter<"Prospect"> | string | null
    addressComplement?: StringNullableWithAggregatesFilter<"Prospect"> | string | null
    postalCode?: StringNullableWithAggregatesFilter<"Prospect"> | string | null
    city?: StringNullableWithAggregatesFilter<"Prospect"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Prospect"> | string | null
    mobile?: StringNullableWithAggregatesFilter<"Prospect"> | string | null
    activity?: StringNullableWithAggregatesFilter<"Prospect"> | string | null
    email?: StringNullableWithAggregatesFilter<"Prospect"> | string | null
    workforce?: StringNullableWithAggregatesFilter<"Prospect"> | string | null
    managerLastname?: StringNullableWithAggregatesFilter<"Prospect"> | string | null
    managerFirstname?: StringNullableWithAggregatesFilter<"Prospect"> | string | null
    managerCivility?: EnumCivilityWithAggregatesFilter<"Prospect"> | $Enums.Civility
  }

  export type ProspectCreateInput = {
    name?: string | null
    address?: string | null
    addressComplement?: string | null
    postalCode?: string | null
    city?: string | null
    phone?: string | null
    mobile?: string | null
    activity?: string | null
    email?: string | null
    workforce?: string | null
    managerLastname?: string | null
    managerFirstname?: string | null
    managerCivility?: $Enums.Civility
  }

  export type ProspectUncheckedCreateInput = {
    id?: number
    name?: string | null
    address?: string | null
    addressComplement?: string | null
    postalCode?: string | null
    city?: string | null
    phone?: string | null
    mobile?: string | null
    activity?: string | null
    email?: string | null
    workforce?: string | null
    managerLastname?: string | null
    managerFirstname?: string | null
    managerCivility?: $Enums.Civility
  }

  export type ProspectUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addressComplement?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    activity?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    workforce?: NullableStringFieldUpdateOperationsInput | string | null
    managerLastname?: NullableStringFieldUpdateOperationsInput | string | null
    managerFirstname?: NullableStringFieldUpdateOperationsInput | string | null
    managerCivility?: EnumCivilityFieldUpdateOperationsInput | $Enums.Civility
  }

  export type ProspectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addressComplement?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    activity?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    workforce?: NullableStringFieldUpdateOperationsInput | string | null
    managerLastname?: NullableStringFieldUpdateOperationsInput | string | null
    managerFirstname?: NullableStringFieldUpdateOperationsInput | string | null
    managerCivility?: EnumCivilityFieldUpdateOperationsInput | $Enums.Civility
  }

  export type ProspectCreateManyInput = {
    id?: number
    name?: string | null
    address?: string | null
    addressComplement?: string | null
    postalCode?: string | null
    city?: string | null
    phone?: string | null
    mobile?: string | null
    activity?: string | null
    email?: string | null
    workforce?: string | null
    managerLastname?: string | null
    managerFirstname?: string | null
    managerCivility?: $Enums.Civility
  }

  export type ProspectUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addressComplement?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    activity?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    workforce?: NullableStringFieldUpdateOperationsInput | string | null
    managerLastname?: NullableStringFieldUpdateOperationsInput | string | null
    managerFirstname?: NullableStringFieldUpdateOperationsInput | string | null
    managerCivility?: EnumCivilityFieldUpdateOperationsInput | $Enums.Civility
  }

  export type ProspectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    addressComplement?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    activity?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    workforce?: NullableStringFieldUpdateOperationsInput | string | null
    managerLastname?: NullableStringFieldUpdateOperationsInput | string | null
    managerFirstname?: NullableStringFieldUpdateOperationsInput | string | null
    managerCivility?: EnumCivilityFieldUpdateOperationsInput | $Enums.Civility
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumCivilityFilter<$PrismaModel = never> = {
    equals?: $Enums.Civility | EnumCivilityFieldRefInput<$PrismaModel>
    in?: $Enums.Civility[] | ListEnumCivilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Civility[] | ListEnumCivilityFieldRefInput<$PrismaModel>
    not?: NestedEnumCivilityFilter<$PrismaModel> | $Enums.Civility
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProspectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    addressComplement?: SortOrder
    postalCode?: SortOrder
    city?: SortOrder
    phone?: SortOrder
    mobile?: SortOrder
    activity?: SortOrder
    email?: SortOrder
    workforce?: SortOrder
    managerLastname?: SortOrder
    managerFirstname?: SortOrder
    managerCivility?: SortOrder
  }

  export type ProspectAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProspectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    addressComplement?: SortOrder
    postalCode?: SortOrder
    city?: SortOrder
    phone?: SortOrder
    mobile?: SortOrder
    activity?: SortOrder
    email?: SortOrder
    workforce?: SortOrder
    managerLastname?: SortOrder
    managerFirstname?: SortOrder
    managerCivility?: SortOrder
  }

  export type ProspectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    addressComplement?: SortOrder
    postalCode?: SortOrder
    city?: SortOrder
    phone?: SortOrder
    mobile?: SortOrder
    activity?: SortOrder
    email?: SortOrder
    workforce?: SortOrder
    managerLastname?: SortOrder
    managerFirstname?: SortOrder
    managerCivility?: SortOrder
  }

  export type ProspectSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumCivilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Civility | EnumCivilityFieldRefInput<$PrismaModel>
    in?: $Enums.Civility[] | ListEnumCivilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Civility[] | ListEnumCivilityFieldRefInput<$PrismaModel>
    not?: NestedEnumCivilityWithAggregatesFilter<$PrismaModel> | $Enums.Civility
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCivilityFilter<$PrismaModel>
    _max?: NestedEnumCivilityFilter<$PrismaModel>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumCivilityFieldUpdateOperationsInput = {
    set?: $Enums.Civility
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumCivilityFilter<$PrismaModel = never> = {
    equals?: $Enums.Civility | EnumCivilityFieldRefInput<$PrismaModel>
    in?: $Enums.Civility[] | ListEnumCivilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Civility[] | ListEnumCivilityFieldRefInput<$PrismaModel>
    not?: NestedEnumCivilityFilter<$PrismaModel> | $Enums.Civility
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumCivilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Civility | EnumCivilityFieldRefInput<$PrismaModel>
    in?: $Enums.Civility[] | ListEnumCivilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Civility[] | ListEnumCivilityFieldRefInput<$PrismaModel>
    not?: NestedEnumCivilityWithAggregatesFilter<$PrismaModel> | $Enums.Civility
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCivilityFilter<$PrismaModel>
    _max?: NestedEnumCivilityFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ProspectDefaultArgs instead
     */
    export type ProspectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProspectDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
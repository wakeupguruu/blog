
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
 * Model USER
 * 
 */
export type USER = $Result.DefaultSelection<Prisma.$USERPayload>
/**
 * Model POST
 * 
 */
export type POST = $Result.DefaultSelection<Prisma.$POSTPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more USERS
 * const uSERS = await prisma.uSER.findMany()
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
   * // Fetch zero or more USERS
   * const uSERS = await prisma.uSER.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.uSER`: Exposes CRUD operations for the **USER** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more USERS
    * const uSERS = await prisma.uSER.findMany()
    * ```
    */
  get uSER(): Prisma.USERDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pOST`: Exposes CRUD operations for the **POST** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more POSTS
    * const pOSTS = await prisma.pOST.findMany()
    * ```
    */
  get pOST(): Prisma.POSTDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    USER: 'USER',
    POST: 'POST'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "uSER" | "pOST"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      USER: {
        payload: Prisma.$USERPayload<ExtArgs>
        fields: Prisma.USERFieldRefs
        operations: {
          findUnique: {
            args: Prisma.USERFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.USERFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERPayload>
          }
          findFirst: {
            args: Prisma.USERFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.USERFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERPayload>
          }
          findMany: {
            args: Prisma.USERFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERPayload>[]
          }
          create: {
            args: Prisma.USERCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERPayload>
          }
          createMany: {
            args: Prisma.USERCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.USERCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERPayload>[]
          }
          delete: {
            args: Prisma.USERDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERPayload>
          }
          update: {
            args: Prisma.USERUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERPayload>
          }
          deleteMany: {
            args: Prisma.USERDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.USERUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.USERUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERPayload>[]
          }
          upsert: {
            args: Prisma.USERUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USERPayload>
          }
          aggregate: {
            args: Prisma.USERAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUSER>
          }
          groupBy: {
            args: Prisma.USERGroupByArgs<ExtArgs>
            result: $Utils.Optional<USERGroupByOutputType>[]
          }
          count: {
            args: Prisma.USERCountArgs<ExtArgs>
            result: $Utils.Optional<USERCountAggregateOutputType> | number
          }
        }
      }
      POST: {
        payload: Prisma.$POSTPayload<ExtArgs>
        fields: Prisma.POSTFieldRefs
        operations: {
          findUnique: {
            args: Prisma.POSTFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POSTPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.POSTFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POSTPayload>
          }
          findFirst: {
            args: Prisma.POSTFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POSTPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.POSTFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POSTPayload>
          }
          findMany: {
            args: Prisma.POSTFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POSTPayload>[]
          }
          create: {
            args: Prisma.POSTCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POSTPayload>
          }
          createMany: {
            args: Prisma.POSTCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.POSTCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POSTPayload>[]
          }
          delete: {
            args: Prisma.POSTDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POSTPayload>
          }
          update: {
            args: Prisma.POSTUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POSTPayload>
          }
          deleteMany: {
            args: Prisma.POSTDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.POSTUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.POSTUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POSTPayload>[]
          }
          upsert: {
            args: Prisma.POSTUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$POSTPayload>
          }
          aggregate: {
            args: Prisma.POSTAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePOST>
          }
          groupBy: {
            args: Prisma.POSTGroupByArgs<ExtArgs>
            result: $Utils.Optional<POSTGroupByOutputType>[]
          }
          count: {
            args: Prisma.POSTCountArgs<ExtArgs>
            result: $Utils.Optional<POSTCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    uSER?: USEROmit
    pOST?: POSTOmit
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
    | 'updateManyAndReturn'
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
   * Count Type USERCountOutputType
   */

  export type USERCountOutputType = {
    post: number
  }

  export type USERCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | USERCountOutputTypeCountPostArgs
  }

  // Custom InputTypes
  /**
   * USERCountOutputType without action
   */
  export type USERCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USERCountOutputType
     */
    select?: USERCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * USERCountOutputType without action
   */
  export type USERCountOutputTypeCountPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: POSTWhereInput
  }


  /**
   * Models
   */

  /**
   * Model USER
   */

  export type AggregateUSER = {
    _count: USERCountAggregateOutputType | null
    _min: USERMinAggregateOutputType | null
    _max: USERMaxAggregateOutputType | null
  }

  export type USERMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
  }

  export type USERMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
  }

  export type USERCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    _all: number
  }


  export type USERMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
  }

  export type USERMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
  }

  export type USERCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    _all?: true
  }

  export type USERAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which USER to aggregate.
     */
    where?: USERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USERS to fetch.
     */
    orderBy?: USEROrderByWithRelationInput | USEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: USERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned USERS
    **/
    _count?: true | USERCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: USERMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: USERMaxAggregateInputType
  }

  export type GetUSERAggregateType<T extends USERAggregateArgs> = {
        [P in keyof T & keyof AggregateUSER]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUSER[P]>
      : GetScalarType<T[P], AggregateUSER[P]>
  }




  export type USERGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: USERWhereInput
    orderBy?: USEROrderByWithAggregationInput | USEROrderByWithAggregationInput[]
    by: USERScalarFieldEnum[] | USERScalarFieldEnum
    having?: USERScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: USERCountAggregateInputType | true
    _min?: USERMinAggregateInputType
    _max?: USERMaxAggregateInputType
  }

  export type USERGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    _count: USERCountAggregateOutputType | null
    _min: USERMinAggregateOutputType | null
    _max: USERMaxAggregateOutputType | null
  }

  type GetUSERGroupByPayload<T extends USERGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<USERGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof USERGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], USERGroupByOutputType[P]>
            : GetScalarType<T[P], USERGroupByOutputType[P]>
        }
      >
    >


  export type USERSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    post?: boolean | USER$postArgs<ExtArgs>
    _count?: boolean | USERCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uSER"]>

  export type USERSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
  }, ExtArgs["result"]["uSER"]>

  export type USERSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
  }, ExtArgs["result"]["uSER"]>

  export type USERSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
  }

  export type USEROmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name", ExtArgs["result"]["uSER"]>
  export type USERInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | USER$postArgs<ExtArgs>
    _count?: boolean | USERCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type USERIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type USERIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $USERPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "USER"
    objects: {
      post: Prisma.$POSTPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
    }, ExtArgs["result"]["uSER"]>
    composites: {}
  }

  type USERGetPayload<S extends boolean | null | undefined | USERDefaultArgs> = $Result.GetResult<Prisma.$USERPayload, S>

  type USERCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<USERFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: USERCountAggregateInputType | true
    }

  export interface USERDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['USER'], meta: { name: 'USER' } }
    /**
     * Find zero or one USER that matches the filter.
     * @param {USERFindUniqueArgs} args - Arguments to find a USER
     * @example
     * // Get one USER
     * const uSER = await prisma.uSER.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends USERFindUniqueArgs>(args: SelectSubset<T, USERFindUniqueArgs<ExtArgs>>): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one USER that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {USERFindUniqueOrThrowArgs} args - Arguments to find a USER
     * @example
     * // Get one USER
     * const uSER = await prisma.uSER.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends USERFindUniqueOrThrowArgs>(args: SelectSubset<T, USERFindUniqueOrThrowArgs<ExtArgs>>): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first USER that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERFindFirstArgs} args - Arguments to find a USER
     * @example
     * // Get one USER
     * const uSER = await prisma.uSER.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends USERFindFirstArgs>(args?: SelectSubset<T, USERFindFirstArgs<ExtArgs>>): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first USER that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERFindFirstOrThrowArgs} args - Arguments to find a USER
     * @example
     * // Get one USER
     * const uSER = await prisma.uSER.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends USERFindFirstOrThrowArgs>(args?: SelectSubset<T, USERFindFirstOrThrowArgs<ExtArgs>>): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more USERS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all USERS
     * const uSERS = await prisma.uSER.findMany()
     * 
     * // Get first 10 USERS
     * const uSERS = await prisma.uSER.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const uSERWithIdOnly = await prisma.uSER.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends USERFindManyArgs>(args?: SelectSubset<T, USERFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a USER.
     * @param {USERCreateArgs} args - Arguments to create a USER.
     * @example
     * // Create one USER
     * const USER = await prisma.uSER.create({
     *   data: {
     *     // ... data to create a USER
     *   }
     * })
     * 
     */
    create<T extends USERCreateArgs>(args: SelectSubset<T, USERCreateArgs<ExtArgs>>): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many USERS.
     * @param {USERCreateManyArgs} args - Arguments to create many USERS.
     * @example
     * // Create many USERS
     * const uSER = await prisma.uSER.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends USERCreateManyArgs>(args?: SelectSubset<T, USERCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many USERS and returns the data saved in the database.
     * @param {USERCreateManyAndReturnArgs} args - Arguments to create many USERS.
     * @example
     * // Create many USERS
     * const uSER = await prisma.uSER.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many USERS and only return the `id`
     * const uSERWithIdOnly = await prisma.uSER.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends USERCreateManyAndReturnArgs>(args?: SelectSubset<T, USERCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a USER.
     * @param {USERDeleteArgs} args - Arguments to delete one USER.
     * @example
     * // Delete one USER
     * const USER = await prisma.uSER.delete({
     *   where: {
     *     // ... filter to delete one USER
     *   }
     * })
     * 
     */
    delete<T extends USERDeleteArgs>(args: SelectSubset<T, USERDeleteArgs<ExtArgs>>): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one USER.
     * @param {USERUpdateArgs} args - Arguments to update one USER.
     * @example
     * // Update one USER
     * const uSER = await prisma.uSER.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends USERUpdateArgs>(args: SelectSubset<T, USERUpdateArgs<ExtArgs>>): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more USERS.
     * @param {USERDeleteManyArgs} args - Arguments to filter USERS to delete.
     * @example
     * // Delete a few USERS
     * const { count } = await prisma.uSER.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends USERDeleteManyArgs>(args?: SelectSubset<T, USERDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more USERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many USERS
     * const uSER = await prisma.uSER.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends USERUpdateManyArgs>(args: SelectSubset<T, USERUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more USERS and returns the data updated in the database.
     * @param {USERUpdateManyAndReturnArgs} args - Arguments to update many USERS.
     * @example
     * // Update many USERS
     * const uSER = await prisma.uSER.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more USERS and only return the `id`
     * const uSERWithIdOnly = await prisma.uSER.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends USERUpdateManyAndReturnArgs>(args: SelectSubset<T, USERUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one USER.
     * @param {USERUpsertArgs} args - Arguments to update or create a USER.
     * @example
     * // Update or create a USER
     * const uSER = await prisma.uSER.upsert({
     *   create: {
     *     // ... data to create a USER
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the USER we want to update
     *   }
     * })
     */
    upsert<T extends USERUpsertArgs>(args: SelectSubset<T, USERUpsertArgs<ExtArgs>>): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of USERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERCountArgs} args - Arguments to filter USERS to count.
     * @example
     * // Count the number of USERS
     * const count = await prisma.uSER.count({
     *   where: {
     *     // ... the filter for the USERS we want to count
     *   }
     * })
    **/
    count<T extends USERCountArgs>(
      args?: Subset<T, USERCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], USERCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a USER.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends USERAggregateArgs>(args: Subset<T, USERAggregateArgs>): Prisma.PrismaPromise<GetUSERAggregateType<T>>

    /**
     * Group by USER.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERGroupByArgs} args - Group by arguments.
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
      T extends USERGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: USERGroupByArgs['orderBy'] }
        : { orderBy?: USERGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, USERGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUSERGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the USER model
   */
  readonly fields: USERFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for USER.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__USERClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends USER$postArgs<ExtArgs> = {}>(args?: Subset<T, USER$postArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$POSTPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the USER model
   */
  interface USERFieldRefs {
    readonly id: FieldRef<"USER", 'String'>
    readonly email: FieldRef<"USER", 'String'>
    readonly password: FieldRef<"USER", 'String'>
    readonly name: FieldRef<"USER", 'String'>
  }
    

  // Custom InputTypes
  /**
   * USER findUnique
   */
  export type USERFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USERInclude<ExtArgs> | null
    /**
     * Filter, which USER to fetch.
     */
    where: USERWhereUniqueInput
  }

  /**
   * USER findUniqueOrThrow
   */
  export type USERFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USERInclude<ExtArgs> | null
    /**
     * Filter, which USER to fetch.
     */
    where: USERWhereUniqueInput
  }

  /**
   * USER findFirst
   */
  export type USERFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USERInclude<ExtArgs> | null
    /**
     * Filter, which USER to fetch.
     */
    where?: USERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USERS to fetch.
     */
    orderBy?: USEROrderByWithRelationInput | USEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for USERS.
     */
    cursor?: USERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of USERS.
     */
    distinct?: USERScalarFieldEnum | USERScalarFieldEnum[]
  }

  /**
   * USER findFirstOrThrow
   */
  export type USERFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USERInclude<ExtArgs> | null
    /**
     * Filter, which USER to fetch.
     */
    where?: USERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USERS to fetch.
     */
    orderBy?: USEROrderByWithRelationInput | USEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for USERS.
     */
    cursor?: USERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of USERS.
     */
    distinct?: USERScalarFieldEnum | USERScalarFieldEnum[]
  }

  /**
   * USER findMany
   */
  export type USERFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USERInclude<ExtArgs> | null
    /**
     * Filter, which USERS to fetch.
     */
    where?: USERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USERS to fetch.
     */
    orderBy?: USEROrderByWithRelationInput | USEROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing USERS.
     */
    cursor?: USERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USERS.
     */
    skip?: number
    distinct?: USERScalarFieldEnum | USERScalarFieldEnum[]
  }

  /**
   * USER create
   */
  export type USERCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USERInclude<ExtArgs> | null
    /**
     * The data needed to create a USER.
     */
    data: XOR<USERCreateInput, USERUncheckedCreateInput>
  }

  /**
   * USER createMany
   */
  export type USERCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many USERS.
     */
    data: USERCreateManyInput | USERCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * USER createManyAndReturn
   */
  export type USERCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * The data used to create many USERS.
     */
    data: USERCreateManyInput | USERCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * USER update
   */
  export type USERUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USERInclude<ExtArgs> | null
    /**
     * The data needed to update a USER.
     */
    data: XOR<USERUpdateInput, USERUncheckedUpdateInput>
    /**
     * Choose, which USER to update.
     */
    where: USERWhereUniqueInput
  }

  /**
   * USER updateMany
   */
  export type USERUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update USERS.
     */
    data: XOR<USERUpdateManyMutationInput, USERUncheckedUpdateManyInput>
    /**
     * Filter which USERS to update
     */
    where?: USERWhereInput
    /**
     * Limit how many USERS to update.
     */
    limit?: number
  }

  /**
   * USER updateManyAndReturn
   */
  export type USERUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * The data used to update USERS.
     */
    data: XOR<USERUpdateManyMutationInput, USERUncheckedUpdateManyInput>
    /**
     * Filter which USERS to update
     */
    where?: USERWhereInput
    /**
     * Limit how many USERS to update.
     */
    limit?: number
  }

  /**
   * USER upsert
   */
  export type USERUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USERInclude<ExtArgs> | null
    /**
     * The filter to search for the USER to update in case it exists.
     */
    where: USERWhereUniqueInput
    /**
     * In case the USER found by the `where` argument doesn't exist, create a new USER with this data.
     */
    create: XOR<USERCreateInput, USERUncheckedCreateInput>
    /**
     * In case the USER was found with the provided `where` argument, update it with this data.
     */
    update: XOR<USERUpdateInput, USERUncheckedUpdateInput>
  }

  /**
   * USER delete
   */
  export type USERDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USERInclude<ExtArgs> | null
    /**
     * Filter which USER to delete.
     */
    where: USERWhereUniqueInput
  }

  /**
   * USER deleteMany
   */
  export type USERDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which USERS to delete
     */
    where?: USERWhereInput
    /**
     * Limit how many USERS to delete.
     */
    limit?: number
  }

  /**
   * USER.post
   */
  export type USER$postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POST
     */
    select?: POSTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POST
     */
    omit?: POSTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POSTInclude<ExtArgs> | null
    where?: POSTWhereInput
    orderBy?: POSTOrderByWithRelationInput | POSTOrderByWithRelationInput[]
    cursor?: POSTWhereUniqueInput
    take?: number
    skip?: number
    distinct?: POSTScalarFieldEnum | POSTScalarFieldEnum[]
  }

  /**
   * USER without action
   */
  export type USERDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USER
     */
    omit?: USEROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USERInclude<ExtArgs> | null
  }


  /**
   * Model POST
   */

  export type AggregatePOST = {
    _count: POSTCountAggregateOutputType | null
    _min: POSTMinAggregateOutputType | null
    _max: POSTMaxAggregateOutputType | null
  }

  export type POSTMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    authorId: string | null
    published: boolean | null
  }

  export type POSTMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    authorId: string | null
    published: boolean | null
  }

  export type POSTCountAggregateOutputType = {
    id: number
    title: number
    content: number
    authorId: number
    published: number
    _all: number
  }


  export type POSTMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    authorId?: true
    published?: true
  }

  export type POSTMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    authorId?: true
    published?: true
  }

  export type POSTCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    authorId?: true
    published?: true
    _all?: true
  }

  export type POSTAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which POST to aggregate.
     */
    where?: POSTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of POSTS to fetch.
     */
    orderBy?: POSTOrderByWithRelationInput | POSTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: POSTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` POSTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` POSTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned POSTS
    **/
    _count?: true | POSTCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: POSTMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: POSTMaxAggregateInputType
  }

  export type GetPOSTAggregateType<T extends POSTAggregateArgs> = {
        [P in keyof T & keyof AggregatePOST]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePOST[P]>
      : GetScalarType<T[P], AggregatePOST[P]>
  }




  export type POSTGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: POSTWhereInput
    orderBy?: POSTOrderByWithAggregationInput | POSTOrderByWithAggregationInput[]
    by: POSTScalarFieldEnum[] | POSTScalarFieldEnum
    having?: POSTScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: POSTCountAggregateInputType | true
    _min?: POSTMinAggregateInputType
    _max?: POSTMaxAggregateInputType
  }

  export type POSTGroupByOutputType = {
    id: string
    title: string
    content: string
    authorId: string
    published: boolean
    _count: POSTCountAggregateOutputType | null
    _min: POSTMinAggregateOutputType | null
    _max: POSTMaxAggregateOutputType | null
  }

  type GetPOSTGroupByPayload<T extends POSTGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<POSTGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof POSTGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], POSTGroupByOutputType[P]>
            : GetScalarType<T[P], POSTGroupByOutputType[P]>
        }
      >
    >


  export type POSTSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    authorId?: boolean
    published?: boolean
    author?: boolean | USERDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pOST"]>

  export type POSTSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    authorId?: boolean
    published?: boolean
    author?: boolean | USERDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pOST"]>

  export type POSTSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    authorId?: boolean
    published?: boolean
    author?: boolean | USERDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pOST"]>

  export type POSTSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    authorId?: boolean
    published?: boolean
  }

  export type POSTOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "authorId" | "published", ExtArgs["result"]["pOST"]>
  export type POSTInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | USERDefaultArgs<ExtArgs>
  }
  export type POSTIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | USERDefaultArgs<ExtArgs>
  }
  export type POSTIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | USERDefaultArgs<ExtArgs>
  }

  export type $POSTPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "POST"
    objects: {
      author: Prisma.$USERPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      authorId: string
      published: boolean
    }, ExtArgs["result"]["pOST"]>
    composites: {}
  }

  type POSTGetPayload<S extends boolean | null | undefined | POSTDefaultArgs> = $Result.GetResult<Prisma.$POSTPayload, S>

  type POSTCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<POSTFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: POSTCountAggregateInputType | true
    }

  export interface POSTDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['POST'], meta: { name: 'POST' } }
    /**
     * Find zero or one POST that matches the filter.
     * @param {POSTFindUniqueArgs} args - Arguments to find a POST
     * @example
     * // Get one POST
     * const pOST = await prisma.pOST.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends POSTFindUniqueArgs>(args: SelectSubset<T, POSTFindUniqueArgs<ExtArgs>>): Prisma__POSTClient<$Result.GetResult<Prisma.$POSTPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one POST that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {POSTFindUniqueOrThrowArgs} args - Arguments to find a POST
     * @example
     * // Get one POST
     * const pOST = await prisma.pOST.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends POSTFindUniqueOrThrowArgs>(args: SelectSubset<T, POSTFindUniqueOrThrowArgs<ExtArgs>>): Prisma__POSTClient<$Result.GetResult<Prisma.$POSTPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first POST that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {POSTFindFirstArgs} args - Arguments to find a POST
     * @example
     * // Get one POST
     * const pOST = await prisma.pOST.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends POSTFindFirstArgs>(args?: SelectSubset<T, POSTFindFirstArgs<ExtArgs>>): Prisma__POSTClient<$Result.GetResult<Prisma.$POSTPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first POST that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {POSTFindFirstOrThrowArgs} args - Arguments to find a POST
     * @example
     * // Get one POST
     * const pOST = await prisma.pOST.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends POSTFindFirstOrThrowArgs>(args?: SelectSubset<T, POSTFindFirstOrThrowArgs<ExtArgs>>): Prisma__POSTClient<$Result.GetResult<Prisma.$POSTPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more POSTS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {POSTFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all POSTS
     * const pOSTS = await prisma.pOST.findMany()
     * 
     * // Get first 10 POSTS
     * const pOSTS = await prisma.pOST.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pOSTWithIdOnly = await prisma.pOST.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends POSTFindManyArgs>(args?: SelectSubset<T, POSTFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$POSTPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a POST.
     * @param {POSTCreateArgs} args - Arguments to create a POST.
     * @example
     * // Create one POST
     * const POST = await prisma.pOST.create({
     *   data: {
     *     // ... data to create a POST
     *   }
     * })
     * 
     */
    create<T extends POSTCreateArgs>(args: SelectSubset<T, POSTCreateArgs<ExtArgs>>): Prisma__POSTClient<$Result.GetResult<Prisma.$POSTPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many POSTS.
     * @param {POSTCreateManyArgs} args - Arguments to create many POSTS.
     * @example
     * // Create many POSTS
     * const pOST = await prisma.pOST.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends POSTCreateManyArgs>(args?: SelectSubset<T, POSTCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many POSTS and returns the data saved in the database.
     * @param {POSTCreateManyAndReturnArgs} args - Arguments to create many POSTS.
     * @example
     * // Create many POSTS
     * const pOST = await prisma.pOST.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many POSTS and only return the `id`
     * const pOSTWithIdOnly = await prisma.pOST.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends POSTCreateManyAndReturnArgs>(args?: SelectSubset<T, POSTCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$POSTPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a POST.
     * @param {POSTDeleteArgs} args - Arguments to delete one POST.
     * @example
     * // Delete one POST
     * const POST = await prisma.pOST.delete({
     *   where: {
     *     // ... filter to delete one POST
     *   }
     * })
     * 
     */
    delete<T extends POSTDeleteArgs>(args: SelectSubset<T, POSTDeleteArgs<ExtArgs>>): Prisma__POSTClient<$Result.GetResult<Prisma.$POSTPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one POST.
     * @param {POSTUpdateArgs} args - Arguments to update one POST.
     * @example
     * // Update one POST
     * const pOST = await prisma.pOST.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends POSTUpdateArgs>(args: SelectSubset<T, POSTUpdateArgs<ExtArgs>>): Prisma__POSTClient<$Result.GetResult<Prisma.$POSTPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more POSTS.
     * @param {POSTDeleteManyArgs} args - Arguments to filter POSTS to delete.
     * @example
     * // Delete a few POSTS
     * const { count } = await prisma.pOST.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends POSTDeleteManyArgs>(args?: SelectSubset<T, POSTDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more POSTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {POSTUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many POSTS
     * const pOST = await prisma.pOST.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends POSTUpdateManyArgs>(args: SelectSubset<T, POSTUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more POSTS and returns the data updated in the database.
     * @param {POSTUpdateManyAndReturnArgs} args - Arguments to update many POSTS.
     * @example
     * // Update many POSTS
     * const pOST = await prisma.pOST.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more POSTS and only return the `id`
     * const pOSTWithIdOnly = await prisma.pOST.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends POSTUpdateManyAndReturnArgs>(args: SelectSubset<T, POSTUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$POSTPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one POST.
     * @param {POSTUpsertArgs} args - Arguments to update or create a POST.
     * @example
     * // Update or create a POST
     * const pOST = await prisma.pOST.upsert({
     *   create: {
     *     // ... data to create a POST
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the POST we want to update
     *   }
     * })
     */
    upsert<T extends POSTUpsertArgs>(args: SelectSubset<T, POSTUpsertArgs<ExtArgs>>): Prisma__POSTClient<$Result.GetResult<Prisma.$POSTPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of POSTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {POSTCountArgs} args - Arguments to filter POSTS to count.
     * @example
     * // Count the number of POSTS
     * const count = await prisma.pOST.count({
     *   where: {
     *     // ... the filter for the POSTS we want to count
     *   }
     * })
    **/
    count<T extends POSTCountArgs>(
      args?: Subset<T, POSTCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], POSTCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a POST.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {POSTAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends POSTAggregateArgs>(args: Subset<T, POSTAggregateArgs>): Prisma.PrismaPromise<GetPOSTAggregateType<T>>

    /**
     * Group by POST.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {POSTGroupByArgs} args - Group by arguments.
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
      T extends POSTGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: POSTGroupByArgs['orderBy'] }
        : { orderBy?: POSTGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, POSTGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPOSTGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the POST model
   */
  readonly fields: POSTFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for POST.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__POSTClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends USERDefaultArgs<ExtArgs> = {}>(args?: Subset<T, USERDefaultArgs<ExtArgs>>): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the POST model
   */
  interface POSTFieldRefs {
    readonly id: FieldRef<"POST", 'String'>
    readonly title: FieldRef<"POST", 'String'>
    readonly content: FieldRef<"POST", 'String'>
    readonly authorId: FieldRef<"POST", 'String'>
    readonly published: FieldRef<"POST", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * POST findUnique
   */
  export type POSTFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POST
     */
    select?: POSTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POST
     */
    omit?: POSTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POSTInclude<ExtArgs> | null
    /**
     * Filter, which POST to fetch.
     */
    where: POSTWhereUniqueInput
  }

  /**
   * POST findUniqueOrThrow
   */
  export type POSTFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POST
     */
    select?: POSTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POST
     */
    omit?: POSTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POSTInclude<ExtArgs> | null
    /**
     * Filter, which POST to fetch.
     */
    where: POSTWhereUniqueInput
  }

  /**
   * POST findFirst
   */
  export type POSTFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POST
     */
    select?: POSTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POST
     */
    omit?: POSTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POSTInclude<ExtArgs> | null
    /**
     * Filter, which POST to fetch.
     */
    where?: POSTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of POSTS to fetch.
     */
    orderBy?: POSTOrderByWithRelationInput | POSTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for POSTS.
     */
    cursor?: POSTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` POSTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` POSTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of POSTS.
     */
    distinct?: POSTScalarFieldEnum | POSTScalarFieldEnum[]
  }

  /**
   * POST findFirstOrThrow
   */
  export type POSTFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POST
     */
    select?: POSTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POST
     */
    omit?: POSTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POSTInclude<ExtArgs> | null
    /**
     * Filter, which POST to fetch.
     */
    where?: POSTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of POSTS to fetch.
     */
    orderBy?: POSTOrderByWithRelationInput | POSTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for POSTS.
     */
    cursor?: POSTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` POSTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` POSTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of POSTS.
     */
    distinct?: POSTScalarFieldEnum | POSTScalarFieldEnum[]
  }

  /**
   * POST findMany
   */
  export type POSTFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POST
     */
    select?: POSTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POST
     */
    omit?: POSTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POSTInclude<ExtArgs> | null
    /**
     * Filter, which POSTS to fetch.
     */
    where?: POSTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of POSTS to fetch.
     */
    orderBy?: POSTOrderByWithRelationInput | POSTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing POSTS.
     */
    cursor?: POSTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` POSTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` POSTS.
     */
    skip?: number
    distinct?: POSTScalarFieldEnum | POSTScalarFieldEnum[]
  }

  /**
   * POST create
   */
  export type POSTCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POST
     */
    select?: POSTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POST
     */
    omit?: POSTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POSTInclude<ExtArgs> | null
    /**
     * The data needed to create a POST.
     */
    data: XOR<POSTCreateInput, POSTUncheckedCreateInput>
  }

  /**
   * POST createMany
   */
  export type POSTCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many POSTS.
     */
    data: POSTCreateManyInput | POSTCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * POST createManyAndReturn
   */
  export type POSTCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POST
     */
    select?: POSTSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the POST
     */
    omit?: POSTOmit<ExtArgs> | null
    /**
     * The data used to create many POSTS.
     */
    data: POSTCreateManyInput | POSTCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POSTIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * POST update
   */
  export type POSTUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POST
     */
    select?: POSTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POST
     */
    omit?: POSTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POSTInclude<ExtArgs> | null
    /**
     * The data needed to update a POST.
     */
    data: XOR<POSTUpdateInput, POSTUncheckedUpdateInput>
    /**
     * Choose, which POST to update.
     */
    where: POSTWhereUniqueInput
  }

  /**
   * POST updateMany
   */
  export type POSTUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update POSTS.
     */
    data: XOR<POSTUpdateManyMutationInput, POSTUncheckedUpdateManyInput>
    /**
     * Filter which POSTS to update
     */
    where?: POSTWhereInput
    /**
     * Limit how many POSTS to update.
     */
    limit?: number
  }

  /**
   * POST updateManyAndReturn
   */
  export type POSTUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POST
     */
    select?: POSTSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the POST
     */
    omit?: POSTOmit<ExtArgs> | null
    /**
     * The data used to update POSTS.
     */
    data: XOR<POSTUpdateManyMutationInput, POSTUncheckedUpdateManyInput>
    /**
     * Filter which POSTS to update
     */
    where?: POSTWhereInput
    /**
     * Limit how many POSTS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POSTIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * POST upsert
   */
  export type POSTUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POST
     */
    select?: POSTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POST
     */
    omit?: POSTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POSTInclude<ExtArgs> | null
    /**
     * The filter to search for the POST to update in case it exists.
     */
    where: POSTWhereUniqueInput
    /**
     * In case the POST found by the `where` argument doesn't exist, create a new POST with this data.
     */
    create: XOR<POSTCreateInput, POSTUncheckedCreateInput>
    /**
     * In case the POST was found with the provided `where` argument, update it with this data.
     */
    update: XOR<POSTUpdateInput, POSTUncheckedUpdateInput>
  }

  /**
   * POST delete
   */
  export type POSTDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POST
     */
    select?: POSTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POST
     */
    omit?: POSTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POSTInclude<ExtArgs> | null
    /**
     * Filter which POST to delete.
     */
    where: POSTWhereUniqueInput
  }

  /**
   * POST deleteMany
   */
  export type POSTDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which POSTS to delete
     */
    where?: POSTWhereInput
    /**
     * Limit how many POSTS to delete.
     */
    limit?: number
  }

  /**
   * POST without action
   */
  export type POSTDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the POST
     */
    select?: POSTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the POST
     */
    omit?: POSTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: POSTInclude<ExtArgs> | null
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


  export const USERScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name'
  };

  export type USERScalarFieldEnum = (typeof USERScalarFieldEnum)[keyof typeof USERScalarFieldEnum]


  export const POSTScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    authorId: 'authorId',
    published: 'published'
  };

  export type POSTScalarFieldEnum = (typeof POSTScalarFieldEnum)[keyof typeof POSTScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type USERWhereInput = {
    AND?: USERWhereInput | USERWhereInput[]
    OR?: USERWhereInput[]
    NOT?: USERWhereInput | USERWhereInput[]
    id?: StringFilter<"USER"> | string
    email?: StringFilter<"USER"> | string
    password?: StringFilter<"USER"> | string
    name?: StringFilter<"USER"> | string
    post?: POSTListRelationFilter
  }

  export type USEROrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    post?: POSTOrderByRelationAggregateInput
  }

  export type USERWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: USERWhereInput | USERWhereInput[]
    OR?: USERWhereInput[]
    NOT?: USERWhereInput | USERWhereInput[]
    password?: StringFilter<"USER"> | string
    name?: StringFilter<"USER"> | string
    post?: POSTListRelationFilter
  }, "id" | "email">

  export type USEROrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    _count?: USERCountOrderByAggregateInput
    _max?: USERMaxOrderByAggregateInput
    _min?: USERMinOrderByAggregateInput
  }

  export type USERScalarWhereWithAggregatesInput = {
    AND?: USERScalarWhereWithAggregatesInput | USERScalarWhereWithAggregatesInput[]
    OR?: USERScalarWhereWithAggregatesInput[]
    NOT?: USERScalarWhereWithAggregatesInput | USERScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"USER"> | string
    email?: StringWithAggregatesFilter<"USER"> | string
    password?: StringWithAggregatesFilter<"USER"> | string
    name?: StringWithAggregatesFilter<"USER"> | string
  }

  export type POSTWhereInput = {
    AND?: POSTWhereInput | POSTWhereInput[]
    OR?: POSTWhereInput[]
    NOT?: POSTWhereInput | POSTWhereInput[]
    id?: StringFilter<"POST"> | string
    title?: StringFilter<"POST"> | string
    content?: StringFilter<"POST"> | string
    authorId?: StringFilter<"POST"> | string
    published?: BoolFilter<"POST"> | boolean
    author?: XOR<USERScalarRelationFilter, USERWhereInput>
  }

  export type POSTOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    published?: SortOrder
    author?: USEROrderByWithRelationInput
  }

  export type POSTWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: POSTWhereInput | POSTWhereInput[]
    OR?: POSTWhereInput[]
    NOT?: POSTWhereInput | POSTWhereInput[]
    title?: StringFilter<"POST"> | string
    content?: StringFilter<"POST"> | string
    authorId?: StringFilter<"POST"> | string
    published?: BoolFilter<"POST"> | boolean
    author?: XOR<USERScalarRelationFilter, USERWhereInput>
  }, "id">

  export type POSTOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    published?: SortOrder
    _count?: POSTCountOrderByAggregateInput
    _max?: POSTMaxOrderByAggregateInput
    _min?: POSTMinOrderByAggregateInput
  }

  export type POSTScalarWhereWithAggregatesInput = {
    AND?: POSTScalarWhereWithAggregatesInput | POSTScalarWhereWithAggregatesInput[]
    OR?: POSTScalarWhereWithAggregatesInput[]
    NOT?: POSTScalarWhereWithAggregatesInput | POSTScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"POST"> | string
    title?: StringWithAggregatesFilter<"POST"> | string
    content?: StringWithAggregatesFilter<"POST"> | string
    authorId?: StringWithAggregatesFilter<"POST"> | string
    published?: BoolWithAggregatesFilter<"POST"> | boolean
  }

  export type USERCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    post?: POSTCreateNestedManyWithoutAuthorInput
  }

  export type USERUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    post?: POSTUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type USERUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    post?: POSTUpdateManyWithoutAuthorNestedInput
  }

  export type USERUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    post?: POSTUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type USERCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
  }

  export type USERUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type USERUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type POSTCreateInput = {
    id?: string
    title: string
    content: string
    published?: boolean
    author: USERCreateNestedOneWithoutPostInput
  }

  export type POSTUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    authorId: string
    published?: boolean
  }

  export type POSTUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    author?: USERUpdateOneRequiredWithoutPostNestedInput
  }

  export type POSTUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
  }

  export type POSTCreateManyInput = {
    id?: string
    title: string
    content: string
    authorId: string
    published?: boolean
  }

  export type POSTUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
  }

  export type POSTUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type POSTListRelationFilter = {
    every?: POSTWhereInput
    some?: POSTWhereInput
    none?: POSTWhereInput
  }

  export type POSTOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type USERCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type USERMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type USERMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type USERScalarRelationFilter = {
    is?: USERWhereInput
    isNot?: USERWhereInput
  }

  export type POSTCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    published?: SortOrder
  }

  export type POSTMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    published?: SortOrder
  }

  export type POSTMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    published?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type POSTCreateNestedManyWithoutAuthorInput = {
    create?: XOR<POSTCreateWithoutAuthorInput, POSTUncheckedCreateWithoutAuthorInput> | POSTCreateWithoutAuthorInput[] | POSTUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: POSTCreateOrConnectWithoutAuthorInput | POSTCreateOrConnectWithoutAuthorInput[]
    createMany?: POSTCreateManyAuthorInputEnvelope
    connect?: POSTWhereUniqueInput | POSTWhereUniqueInput[]
  }

  export type POSTUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<POSTCreateWithoutAuthorInput, POSTUncheckedCreateWithoutAuthorInput> | POSTCreateWithoutAuthorInput[] | POSTUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: POSTCreateOrConnectWithoutAuthorInput | POSTCreateOrConnectWithoutAuthorInput[]
    createMany?: POSTCreateManyAuthorInputEnvelope
    connect?: POSTWhereUniqueInput | POSTWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type POSTUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<POSTCreateWithoutAuthorInput, POSTUncheckedCreateWithoutAuthorInput> | POSTCreateWithoutAuthorInput[] | POSTUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: POSTCreateOrConnectWithoutAuthorInput | POSTCreateOrConnectWithoutAuthorInput[]
    upsert?: POSTUpsertWithWhereUniqueWithoutAuthorInput | POSTUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: POSTCreateManyAuthorInputEnvelope
    set?: POSTWhereUniqueInput | POSTWhereUniqueInput[]
    disconnect?: POSTWhereUniqueInput | POSTWhereUniqueInput[]
    delete?: POSTWhereUniqueInput | POSTWhereUniqueInput[]
    connect?: POSTWhereUniqueInput | POSTWhereUniqueInput[]
    update?: POSTUpdateWithWhereUniqueWithoutAuthorInput | POSTUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: POSTUpdateManyWithWhereWithoutAuthorInput | POSTUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: POSTScalarWhereInput | POSTScalarWhereInput[]
  }

  export type POSTUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<POSTCreateWithoutAuthorInput, POSTUncheckedCreateWithoutAuthorInput> | POSTCreateWithoutAuthorInput[] | POSTUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: POSTCreateOrConnectWithoutAuthorInput | POSTCreateOrConnectWithoutAuthorInput[]
    upsert?: POSTUpsertWithWhereUniqueWithoutAuthorInput | POSTUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: POSTCreateManyAuthorInputEnvelope
    set?: POSTWhereUniqueInput | POSTWhereUniqueInput[]
    disconnect?: POSTWhereUniqueInput | POSTWhereUniqueInput[]
    delete?: POSTWhereUniqueInput | POSTWhereUniqueInput[]
    connect?: POSTWhereUniqueInput | POSTWhereUniqueInput[]
    update?: POSTUpdateWithWhereUniqueWithoutAuthorInput | POSTUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: POSTUpdateManyWithWhereWithoutAuthorInput | POSTUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: POSTScalarWhereInput | POSTScalarWhereInput[]
  }

  export type USERCreateNestedOneWithoutPostInput = {
    create?: XOR<USERCreateWithoutPostInput, USERUncheckedCreateWithoutPostInput>
    connectOrCreate?: USERCreateOrConnectWithoutPostInput
    connect?: USERWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type USERUpdateOneRequiredWithoutPostNestedInput = {
    create?: XOR<USERCreateWithoutPostInput, USERUncheckedCreateWithoutPostInput>
    connectOrCreate?: USERCreateOrConnectWithoutPostInput
    upsert?: USERUpsertWithoutPostInput
    connect?: USERWhereUniqueInput
    update?: XOR<XOR<USERUpdateToOneWithWhereWithoutPostInput, USERUpdateWithoutPostInput>, USERUncheckedUpdateWithoutPostInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type POSTCreateWithoutAuthorInput = {
    id?: string
    title: string
    content: string
    published?: boolean
  }

  export type POSTUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    content: string
    published?: boolean
  }

  export type POSTCreateOrConnectWithoutAuthorInput = {
    where: POSTWhereUniqueInput
    create: XOR<POSTCreateWithoutAuthorInput, POSTUncheckedCreateWithoutAuthorInput>
  }

  export type POSTCreateManyAuthorInputEnvelope = {
    data: POSTCreateManyAuthorInput | POSTCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type POSTUpsertWithWhereUniqueWithoutAuthorInput = {
    where: POSTWhereUniqueInput
    update: XOR<POSTUpdateWithoutAuthorInput, POSTUncheckedUpdateWithoutAuthorInput>
    create: XOR<POSTCreateWithoutAuthorInput, POSTUncheckedCreateWithoutAuthorInput>
  }

  export type POSTUpdateWithWhereUniqueWithoutAuthorInput = {
    where: POSTWhereUniqueInput
    data: XOR<POSTUpdateWithoutAuthorInput, POSTUncheckedUpdateWithoutAuthorInput>
  }

  export type POSTUpdateManyWithWhereWithoutAuthorInput = {
    where: POSTScalarWhereInput
    data: XOR<POSTUpdateManyMutationInput, POSTUncheckedUpdateManyWithoutAuthorInput>
  }

  export type POSTScalarWhereInput = {
    AND?: POSTScalarWhereInput | POSTScalarWhereInput[]
    OR?: POSTScalarWhereInput[]
    NOT?: POSTScalarWhereInput | POSTScalarWhereInput[]
    id?: StringFilter<"POST"> | string
    title?: StringFilter<"POST"> | string
    content?: StringFilter<"POST"> | string
    authorId?: StringFilter<"POST"> | string
    published?: BoolFilter<"POST"> | boolean
  }

  export type USERCreateWithoutPostInput = {
    id?: string
    email: string
    password: string
    name: string
  }

  export type USERUncheckedCreateWithoutPostInput = {
    id?: string
    email: string
    password: string
    name: string
  }

  export type USERCreateOrConnectWithoutPostInput = {
    where: USERWhereUniqueInput
    create: XOR<USERCreateWithoutPostInput, USERUncheckedCreateWithoutPostInput>
  }

  export type USERUpsertWithoutPostInput = {
    update: XOR<USERUpdateWithoutPostInput, USERUncheckedUpdateWithoutPostInput>
    create: XOR<USERCreateWithoutPostInput, USERUncheckedCreateWithoutPostInput>
    where?: USERWhereInput
  }

  export type USERUpdateToOneWithWhereWithoutPostInput = {
    where?: USERWhereInput
    data: XOR<USERUpdateWithoutPostInput, USERUncheckedUpdateWithoutPostInput>
  }

  export type USERUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type USERUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type POSTCreateManyAuthorInput = {
    id?: string
    title: string
    content: string
    published?: boolean
  }

  export type POSTUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
  }

  export type POSTUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
  }

  export type POSTUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
  }



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
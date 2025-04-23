
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Station
 * 
 */
export type Station = $Result.DefaultSelection<Prisma.$StationPayload>
/**
 * Model Reading
 * 
 */
export type Reading = $Result.DefaultSelection<Prisma.$ReadingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN',
  STATION: 'STATION'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.station`: Exposes CRUD operations for the **Station** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stations
    * const stations = await prisma.station.findMany()
    * ```
    */
  get station(): Prisma.StationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reading`: Exposes CRUD operations for the **Reading** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Readings
    * const readings = await prisma.reading.findMany()
    * ```
    */
  get reading(): Prisma.ReadingDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    User: 'User',
    Station: 'Station',
    Reading: 'Reading'
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
      modelProps: "user" | "station" | "reading"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Station: {
        payload: Prisma.$StationPayload<ExtArgs>
        fields: Prisma.StationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          findFirst: {
            args: Prisma.StationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          findMany: {
            args: Prisma.StationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>[]
          }
          create: {
            args: Prisma.StationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          createMany: {
            args: Prisma.StationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>[]
          }
          delete: {
            args: Prisma.StationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          update: {
            args: Prisma.StationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          deleteMany: {
            args: Prisma.StationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>[]
          }
          upsert: {
            args: Prisma.StationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StationPayload>
          }
          aggregate: {
            args: Prisma.StationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStation>
          }
          groupBy: {
            args: Prisma.StationGroupByArgs<ExtArgs>
            result: $Utils.Optional<StationGroupByOutputType>[]
          }
          count: {
            args: Prisma.StationCountArgs<ExtArgs>
            result: $Utils.Optional<StationCountAggregateOutputType> | number
          }
        }
      }
      Reading: {
        payload: Prisma.$ReadingPayload<ExtArgs>
        fields: Prisma.ReadingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReadingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReadingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingPayload>
          }
          findFirst: {
            args: Prisma.ReadingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReadingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingPayload>
          }
          findMany: {
            args: Prisma.ReadingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingPayload>[]
          }
          create: {
            args: Prisma.ReadingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingPayload>
          }
          createMany: {
            args: Prisma.ReadingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReadingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingPayload>[]
          }
          delete: {
            args: Prisma.ReadingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingPayload>
          }
          update: {
            args: Prisma.ReadingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingPayload>
          }
          deleteMany: {
            args: Prisma.ReadingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReadingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReadingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingPayload>[]
          }
          upsert: {
            args: Prisma.ReadingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingPayload>
          }
          aggregate: {
            args: Prisma.ReadingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReading>
          }
          groupBy: {
            args: Prisma.ReadingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReadingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReadingCountArgs<ExtArgs>
            result: $Utils.Optional<ReadingCountAggregateOutputType> | number
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
    user?: UserOmit
    station?: StationOmit
    reading?: ReadingOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    stations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stations?: boolean | UserCountOutputTypeCountStationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StationWhereInput
  }


  /**
   * Count Type StationCountOutputType
   */

  export type StationCountOutputType = {
    readings: number
  }

  export type StationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    readings?: boolean | StationCountOutputTypeCountReadingsArgs
  }

  // Custom InputTypes
  /**
   * StationCountOutputType without action
   */
  export type StationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StationCountOutputType
     */
    select?: StationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StationCountOutputType without action
   */
  export type StationCountOutputTypeCountReadingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReadingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    first_name: string | null
    last_name: string | null
    documento: string | null
    password: string | null
    phone: string | null
    role: $Enums.Role | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    first_name: string | null
    last_name: string | null
    documento: string | null
    password: string | null
    phone: string | null
    role: $Enums.Role | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    first_name: number
    last_name: number
    documento: number
    password: number
    phone: number
    role: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    first_name?: true
    last_name?: true
    documento?: true
    password?: true
    phone?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    first_name?: true
    last_name?: true
    documento?: true
    password?: true
    phone?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    first_name?: true
    last_name?: true
    documento?: true
    password?: true
    phone?: true
    role?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    first_name: string
    last_name: string | null
    documento: string
    password: string
    phone: string
    role: $Enums.Role
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    documento?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
    stations?: boolean | User$stationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    documento?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    documento?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    documento?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "first_name" | "last_name" | "documento" | "password" | "phone" | "role" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stations?: boolean | User$stationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      stations: Prisma.$StationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      first_name: string
      last_name: string | null
      documento: string
      password: string
      phone: string
      role: $Enums.Role
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stations<T extends User$stationsArgs<ExtArgs> = {}>(args?: Subset<T, User$stationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly first_name: FieldRef<"User", 'String'>
    readonly last_name: FieldRef<"User", 'String'>
    readonly documento: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.stations
   */
  export type User$stationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    where?: StationWhereInput
    orderBy?: StationOrderByWithRelationInput | StationOrderByWithRelationInput[]
    cursor?: StationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StationScalarFieldEnum | StationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Station
   */

  export type AggregateStation = {
    _count: StationCountAggregateOutputType | null
    _avg: StationAvgAggregateOutputType | null
    _sum: StationSumAggregateOutputType | null
    _min: StationMinAggregateOutputType | null
    _max: StationMaxAggregateOutputType | null
  }

  export type StationAvgAggregateOutputType = {
    id: number | null
    lat: number | null
    long: number | null
    userId: number | null
  }

  export type StationSumAggregateOutputType = {
    id: number | null
    lat: number | null
    long: number | null
    userId: number | null
  }

  export type StationMinAggregateOutputType = {
    id: number | null
    code: string | null
    lat: number | null
    long: number | null
    muni: string | null
    estado: string | null
    userId: number | null
    role: $Enums.Role | null
    token: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type StationMaxAggregateOutputType = {
    id: number | null
    code: string | null
    lat: number | null
    long: number | null
    muni: string | null
    estado: string | null
    userId: number | null
    role: $Enums.Role | null
    token: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type StationCountAggregateOutputType = {
    id: number
    code: number
    lat: number
    long: number
    muni: number
    estado: number
    userId: number
    role: number
    token: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type StationAvgAggregateInputType = {
    id?: true
    lat?: true
    long?: true
    userId?: true
  }

  export type StationSumAggregateInputType = {
    id?: true
    lat?: true
    long?: true
    userId?: true
  }

  export type StationMinAggregateInputType = {
    id?: true
    code?: true
    lat?: true
    long?: true
    muni?: true
    estado?: true
    userId?: true
    role?: true
    token?: true
    created_at?: true
    updated_at?: true
  }

  export type StationMaxAggregateInputType = {
    id?: true
    code?: true
    lat?: true
    long?: true
    muni?: true
    estado?: true
    userId?: true
    role?: true
    token?: true
    created_at?: true
    updated_at?: true
  }

  export type StationCountAggregateInputType = {
    id?: true
    code?: true
    lat?: true
    long?: true
    muni?: true
    estado?: true
    userId?: true
    role?: true
    token?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type StationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Station to aggregate.
     */
    where?: StationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stations to fetch.
     */
    orderBy?: StationOrderByWithRelationInput | StationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stations
    **/
    _count?: true | StationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StationMaxAggregateInputType
  }

  export type GetStationAggregateType<T extends StationAggregateArgs> = {
        [P in keyof T & keyof AggregateStation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStation[P]>
      : GetScalarType<T[P], AggregateStation[P]>
  }




  export type StationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StationWhereInput
    orderBy?: StationOrderByWithAggregationInput | StationOrderByWithAggregationInput[]
    by: StationScalarFieldEnum[] | StationScalarFieldEnum
    having?: StationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StationCountAggregateInputType | true
    _avg?: StationAvgAggregateInputType
    _sum?: StationSumAggregateInputType
    _min?: StationMinAggregateInputType
    _max?: StationMaxAggregateInputType
  }

  export type StationGroupByOutputType = {
    id: number
    code: string
    lat: number
    long: number
    muni: string
    estado: string
    userId: number | null
    role: $Enums.Role
    token: string | null
    created_at: Date
    updated_at: Date
    _count: StationCountAggregateOutputType | null
    _avg: StationAvgAggregateOutputType | null
    _sum: StationSumAggregateOutputType | null
    _min: StationMinAggregateOutputType | null
    _max: StationMaxAggregateOutputType | null
  }

  type GetStationGroupByPayload<T extends StationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StationGroupByOutputType[P]>
            : GetScalarType<T[P], StationGroupByOutputType[P]>
        }
      >
    >


  export type StationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    lat?: boolean
    long?: boolean
    muni?: boolean
    estado?: boolean
    userId?: boolean
    role?: boolean
    token?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | Station$userArgs<ExtArgs>
    readings?: boolean | Station$readingsArgs<ExtArgs>
    _count?: boolean | StationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["station"]>

  export type StationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    lat?: boolean
    long?: boolean
    muni?: boolean
    estado?: boolean
    userId?: boolean
    role?: boolean
    token?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | Station$userArgs<ExtArgs>
  }, ExtArgs["result"]["station"]>

  export type StationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    lat?: boolean
    long?: boolean
    muni?: boolean
    estado?: boolean
    userId?: boolean
    role?: boolean
    token?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | Station$userArgs<ExtArgs>
  }, ExtArgs["result"]["station"]>

  export type StationSelectScalar = {
    id?: boolean
    code?: boolean
    lat?: boolean
    long?: boolean
    muni?: boolean
    estado?: boolean
    userId?: boolean
    role?: boolean
    token?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type StationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "lat" | "long" | "muni" | "estado" | "userId" | "role" | "token" | "created_at" | "updated_at", ExtArgs["result"]["station"]>
  export type StationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Station$userArgs<ExtArgs>
    readings?: boolean | Station$readingsArgs<ExtArgs>
    _count?: boolean | StationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Station$userArgs<ExtArgs>
  }
  export type StationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Station$userArgs<ExtArgs>
  }

  export type $StationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Station"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      readings: Prisma.$ReadingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      lat: number
      long: number
      muni: string
      estado: string
      userId: number | null
      role: $Enums.Role
      token: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["station"]>
    composites: {}
  }

  type StationGetPayload<S extends boolean | null | undefined | StationDefaultArgs> = $Result.GetResult<Prisma.$StationPayload, S>

  type StationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StationCountAggregateInputType | true
    }

  export interface StationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Station'], meta: { name: 'Station' } }
    /**
     * Find zero or one Station that matches the filter.
     * @param {StationFindUniqueArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StationFindUniqueArgs>(args: SelectSubset<T, StationFindUniqueArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Station that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StationFindUniqueOrThrowArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StationFindUniqueOrThrowArgs>(args: SelectSubset<T, StationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Station that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationFindFirstArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StationFindFirstArgs>(args?: SelectSubset<T, StationFindFirstArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Station that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationFindFirstOrThrowArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StationFindFirstOrThrowArgs>(args?: SelectSubset<T, StationFindFirstOrThrowArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stations
     * const stations = await prisma.station.findMany()
     * 
     * // Get first 10 Stations
     * const stations = await prisma.station.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stationWithIdOnly = await prisma.station.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StationFindManyArgs>(args?: SelectSubset<T, StationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Station.
     * @param {StationCreateArgs} args - Arguments to create a Station.
     * @example
     * // Create one Station
     * const Station = await prisma.station.create({
     *   data: {
     *     // ... data to create a Station
     *   }
     * })
     * 
     */
    create<T extends StationCreateArgs>(args: SelectSubset<T, StationCreateArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stations.
     * @param {StationCreateManyArgs} args - Arguments to create many Stations.
     * @example
     * // Create many Stations
     * const station = await prisma.station.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StationCreateManyArgs>(args?: SelectSubset<T, StationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stations and returns the data saved in the database.
     * @param {StationCreateManyAndReturnArgs} args - Arguments to create many Stations.
     * @example
     * // Create many Stations
     * const station = await prisma.station.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stations and only return the `id`
     * const stationWithIdOnly = await prisma.station.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StationCreateManyAndReturnArgs>(args?: SelectSubset<T, StationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Station.
     * @param {StationDeleteArgs} args - Arguments to delete one Station.
     * @example
     * // Delete one Station
     * const Station = await prisma.station.delete({
     *   where: {
     *     // ... filter to delete one Station
     *   }
     * })
     * 
     */
    delete<T extends StationDeleteArgs>(args: SelectSubset<T, StationDeleteArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Station.
     * @param {StationUpdateArgs} args - Arguments to update one Station.
     * @example
     * // Update one Station
     * const station = await prisma.station.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StationUpdateArgs>(args: SelectSubset<T, StationUpdateArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stations.
     * @param {StationDeleteManyArgs} args - Arguments to filter Stations to delete.
     * @example
     * // Delete a few Stations
     * const { count } = await prisma.station.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StationDeleteManyArgs>(args?: SelectSubset<T, StationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stations
     * const station = await prisma.station.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StationUpdateManyArgs>(args: SelectSubset<T, StationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stations and returns the data updated in the database.
     * @param {StationUpdateManyAndReturnArgs} args - Arguments to update many Stations.
     * @example
     * // Update many Stations
     * const station = await prisma.station.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stations and only return the `id`
     * const stationWithIdOnly = await prisma.station.updateManyAndReturn({
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
    updateManyAndReturn<T extends StationUpdateManyAndReturnArgs>(args: SelectSubset<T, StationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Station.
     * @param {StationUpsertArgs} args - Arguments to update or create a Station.
     * @example
     * // Update or create a Station
     * const station = await prisma.station.upsert({
     *   create: {
     *     // ... data to create a Station
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Station we want to update
     *   }
     * })
     */
    upsert<T extends StationUpsertArgs>(args: SelectSubset<T, StationUpsertArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationCountArgs} args - Arguments to filter Stations to count.
     * @example
     * // Count the number of Stations
     * const count = await prisma.station.count({
     *   where: {
     *     // ... the filter for the Stations we want to count
     *   }
     * })
    **/
    count<T extends StationCountArgs>(
      args?: Subset<T, StationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Station.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StationAggregateArgs>(args: Subset<T, StationAggregateArgs>): Prisma.PrismaPromise<GetStationAggregateType<T>>

    /**
     * Group by Station.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationGroupByArgs} args - Group by arguments.
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
      T extends StationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StationGroupByArgs['orderBy'] }
        : { orderBy?: StationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Station model
   */
  readonly fields: StationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Station.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Station$userArgs<ExtArgs> = {}>(args?: Subset<T, Station$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    readings<T extends Station$readingsArgs<ExtArgs> = {}>(args?: Subset<T, Station$readingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Station model
   */
  interface StationFieldRefs {
    readonly id: FieldRef<"Station", 'Int'>
    readonly code: FieldRef<"Station", 'String'>
    readonly lat: FieldRef<"Station", 'Float'>
    readonly long: FieldRef<"Station", 'Float'>
    readonly muni: FieldRef<"Station", 'String'>
    readonly estado: FieldRef<"Station", 'String'>
    readonly userId: FieldRef<"Station", 'Int'>
    readonly role: FieldRef<"Station", 'Role'>
    readonly token: FieldRef<"Station", 'String'>
    readonly created_at: FieldRef<"Station", 'DateTime'>
    readonly updated_at: FieldRef<"Station", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Station findUnique
   */
  export type StationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter, which Station to fetch.
     */
    where: StationWhereUniqueInput
  }

  /**
   * Station findUniqueOrThrow
   */
  export type StationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter, which Station to fetch.
     */
    where: StationWhereUniqueInput
  }

  /**
   * Station findFirst
   */
  export type StationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter, which Station to fetch.
     */
    where?: StationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stations to fetch.
     */
    orderBy?: StationOrderByWithRelationInput | StationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stations.
     */
    cursor?: StationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stations.
     */
    distinct?: StationScalarFieldEnum | StationScalarFieldEnum[]
  }

  /**
   * Station findFirstOrThrow
   */
  export type StationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter, which Station to fetch.
     */
    where?: StationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stations to fetch.
     */
    orderBy?: StationOrderByWithRelationInput | StationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stations.
     */
    cursor?: StationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stations.
     */
    distinct?: StationScalarFieldEnum | StationScalarFieldEnum[]
  }

  /**
   * Station findMany
   */
  export type StationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter, which Stations to fetch.
     */
    where?: StationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stations to fetch.
     */
    orderBy?: StationOrderByWithRelationInput | StationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stations.
     */
    cursor?: StationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stations.
     */
    skip?: number
    distinct?: StationScalarFieldEnum | StationScalarFieldEnum[]
  }

  /**
   * Station create
   */
  export type StationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * The data needed to create a Station.
     */
    data: XOR<StationCreateInput, StationUncheckedCreateInput>
  }

  /**
   * Station createMany
   */
  export type StationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stations.
     */
    data: StationCreateManyInput | StationCreateManyInput[]
  }

  /**
   * Station createManyAndReturn
   */
  export type StationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * The data used to create many Stations.
     */
    data: StationCreateManyInput | StationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Station update
   */
  export type StationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * The data needed to update a Station.
     */
    data: XOR<StationUpdateInput, StationUncheckedUpdateInput>
    /**
     * Choose, which Station to update.
     */
    where: StationWhereUniqueInput
  }

  /**
   * Station updateMany
   */
  export type StationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stations.
     */
    data: XOR<StationUpdateManyMutationInput, StationUncheckedUpdateManyInput>
    /**
     * Filter which Stations to update
     */
    where?: StationWhereInput
    /**
     * Limit how many Stations to update.
     */
    limit?: number
  }

  /**
   * Station updateManyAndReturn
   */
  export type StationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * The data used to update Stations.
     */
    data: XOR<StationUpdateManyMutationInput, StationUncheckedUpdateManyInput>
    /**
     * Filter which Stations to update
     */
    where?: StationWhereInput
    /**
     * Limit how many Stations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Station upsert
   */
  export type StationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * The filter to search for the Station to update in case it exists.
     */
    where: StationWhereUniqueInput
    /**
     * In case the Station found by the `where` argument doesn't exist, create a new Station with this data.
     */
    create: XOR<StationCreateInput, StationUncheckedCreateInput>
    /**
     * In case the Station was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StationUpdateInput, StationUncheckedUpdateInput>
  }

  /**
   * Station delete
   */
  export type StationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
    /**
     * Filter which Station to delete.
     */
    where: StationWhereUniqueInput
  }

  /**
   * Station deleteMany
   */
  export type StationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stations to delete
     */
    where?: StationWhereInput
    /**
     * Limit how many Stations to delete.
     */
    limit?: number
  }

  /**
   * Station.user
   */
  export type Station$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Station.readings
   */
  export type Station$readingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reading
     */
    omit?: ReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingInclude<ExtArgs> | null
    where?: ReadingWhereInput
    orderBy?: ReadingOrderByWithRelationInput | ReadingOrderByWithRelationInput[]
    cursor?: ReadingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReadingScalarFieldEnum | ReadingScalarFieldEnum[]
  }

  /**
   * Station without action
   */
  export type StationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Station
     */
    select?: StationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Station
     */
    omit?: StationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StationInclude<ExtArgs> | null
  }


  /**
   * Model Reading
   */

  export type AggregateReading = {
    _count: ReadingCountAggregateOutputType | null
    _avg: ReadingAvgAggregateOutputType | null
    _sum: ReadingSumAggregateOutputType | null
    _min: ReadingMinAggregateOutputType | null
    _max: ReadingMaxAggregateOutputType | null
  }

  export type ReadingAvgAggregateOutputType = {
    id: number | null
    stationId: number | null
    vaz: number | null
    prec: number | null
    lux: number | null
    irr_lux: number | null
    temp: number | null
    pres: number | null
    umi: number | null
    carga: number | null
    v_gen: number | null
    a_gen: number | null
    w_gen: number | null
    irr_gen: number | null
  }

  export type ReadingSumAggregateOutputType = {
    id: number | null
    stationId: number | null
    vaz: number | null
    prec: number | null
    lux: number | null
    irr_lux: number | null
    temp: number | null
    pres: number | null
    umi: number | null
    carga: number | null
    v_gen: number | null
    a_gen: number | null
    w_gen: number | null
    irr_gen: number | null
  }

  export type ReadingMinAggregateOutputType = {
    id: number | null
    stationId: number | null
    vaz: number | null
    prec: number | null
    lux: number | null
    irr_lux: number | null
    temp: number | null
    pres: number | null
    umi: number | null
    carga: number | null
    v_gen: number | null
    a_gen: number | null
    w_gen: number | null
    irr_gen: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ReadingMaxAggregateOutputType = {
    id: number | null
    stationId: number | null
    vaz: number | null
    prec: number | null
    lux: number | null
    irr_lux: number | null
    temp: number | null
    pres: number | null
    umi: number | null
    carga: number | null
    v_gen: number | null
    a_gen: number | null
    w_gen: number | null
    irr_gen: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ReadingCountAggregateOutputType = {
    id: number
    stationId: number
    vaz: number
    prec: number
    lux: number
    irr_lux: number
    temp: number
    pres: number
    umi: number
    carga: number
    v_gen: number
    a_gen: number
    w_gen: number
    irr_gen: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ReadingAvgAggregateInputType = {
    id?: true
    stationId?: true
    vaz?: true
    prec?: true
    lux?: true
    irr_lux?: true
    temp?: true
    pres?: true
    umi?: true
    carga?: true
    v_gen?: true
    a_gen?: true
    w_gen?: true
    irr_gen?: true
  }

  export type ReadingSumAggregateInputType = {
    id?: true
    stationId?: true
    vaz?: true
    prec?: true
    lux?: true
    irr_lux?: true
    temp?: true
    pres?: true
    umi?: true
    carga?: true
    v_gen?: true
    a_gen?: true
    w_gen?: true
    irr_gen?: true
  }

  export type ReadingMinAggregateInputType = {
    id?: true
    stationId?: true
    vaz?: true
    prec?: true
    lux?: true
    irr_lux?: true
    temp?: true
    pres?: true
    umi?: true
    carga?: true
    v_gen?: true
    a_gen?: true
    w_gen?: true
    irr_gen?: true
    created_at?: true
    updated_at?: true
  }

  export type ReadingMaxAggregateInputType = {
    id?: true
    stationId?: true
    vaz?: true
    prec?: true
    lux?: true
    irr_lux?: true
    temp?: true
    pres?: true
    umi?: true
    carga?: true
    v_gen?: true
    a_gen?: true
    w_gen?: true
    irr_gen?: true
    created_at?: true
    updated_at?: true
  }

  export type ReadingCountAggregateInputType = {
    id?: true
    stationId?: true
    vaz?: true
    prec?: true
    lux?: true
    irr_lux?: true
    temp?: true
    pres?: true
    umi?: true
    carga?: true
    v_gen?: true
    a_gen?: true
    w_gen?: true
    irr_gen?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ReadingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reading to aggregate.
     */
    where?: ReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Readings to fetch.
     */
    orderBy?: ReadingOrderByWithRelationInput | ReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Readings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Readings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Readings
    **/
    _count?: true | ReadingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReadingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReadingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReadingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReadingMaxAggregateInputType
  }

  export type GetReadingAggregateType<T extends ReadingAggregateArgs> = {
        [P in keyof T & keyof AggregateReading]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReading[P]>
      : GetScalarType<T[P], AggregateReading[P]>
  }




  export type ReadingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReadingWhereInput
    orderBy?: ReadingOrderByWithAggregationInput | ReadingOrderByWithAggregationInput[]
    by: ReadingScalarFieldEnum[] | ReadingScalarFieldEnum
    having?: ReadingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReadingCountAggregateInputType | true
    _avg?: ReadingAvgAggregateInputType
    _sum?: ReadingSumAggregateInputType
    _min?: ReadingMinAggregateInputType
    _max?: ReadingMaxAggregateInputType
  }

  export type ReadingGroupByOutputType = {
    id: number
    stationId: number
    vaz: number | null
    prec: number | null
    lux: number | null
    irr_lux: number | null
    temp: number | null
    pres: number | null
    umi: number | null
    carga: number | null
    v_gen: number | null
    a_gen: number | null
    w_gen: number | null
    irr_gen: number | null
    created_at: Date
    updated_at: Date
    _count: ReadingCountAggregateOutputType | null
    _avg: ReadingAvgAggregateOutputType | null
    _sum: ReadingSumAggregateOutputType | null
    _min: ReadingMinAggregateOutputType | null
    _max: ReadingMaxAggregateOutputType | null
  }

  type GetReadingGroupByPayload<T extends ReadingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReadingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReadingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReadingGroupByOutputType[P]>
            : GetScalarType<T[P], ReadingGroupByOutputType[P]>
        }
      >
    >


  export type ReadingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stationId?: boolean
    vaz?: boolean
    prec?: boolean
    lux?: boolean
    irr_lux?: boolean
    temp?: boolean
    pres?: boolean
    umi?: boolean
    carga?: boolean
    v_gen?: boolean
    a_gen?: boolean
    w_gen?: boolean
    irr_gen?: boolean
    created_at?: boolean
    updated_at?: boolean
    station?: boolean | StationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reading"]>

  export type ReadingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stationId?: boolean
    vaz?: boolean
    prec?: boolean
    lux?: boolean
    irr_lux?: boolean
    temp?: boolean
    pres?: boolean
    umi?: boolean
    carga?: boolean
    v_gen?: boolean
    a_gen?: boolean
    w_gen?: boolean
    irr_gen?: boolean
    created_at?: boolean
    updated_at?: boolean
    station?: boolean | StationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reading"]>

  export type ReadingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stationId?: boolean
    vaz?: boolean
    prec?: boolean
    lux?: boolean
    irr_lux?: boolean
    temp?: boolean
    pres?: boolean
    umi?: boolean
    carga?: boolean
    v_gen?: boolean
    a_gen?: boolean
    w_gen?: boolean
    irr_gen?: boolean
    created_at?: boolean
    updated_at?: boolean
    station?: boolean | StationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reading"]>

  export type ReadingSelectScalar = {
    id?: boolean
    stationId?: boolean
    vaz?: boolean
    prec?: boolean
    lux?: boolean
    irr_lux?: boolean
    temp?: boolean
    pres?: boolean
    umi?: boolean
    carga?: boolean
    v_gen?: boolean
    a_gen?: boolean
    w_gen?: boolean
    irr_gen?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ReadingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "stationId" | "vaz" | "prec" | "lux" | "irr_lux" | "temp" | "pres" | "umi" | "carga" | "v_gen" | "a_gen" | "w_gen" | "irr_gen" | "created_at" | "updated_at", ExtArgs["result"]["reading"]>
  export type ReadingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    station?: boolean | StationDefaultArgs<ExtArgs>
  }
  export type ReadingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    station?: boolean | StationDefaultArgs<ExtArgs>
  }
  export type ReadingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    station?: boolean | StationDefaultArgs<ExtArgs>
  }

  export type $ReadingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reading"
    objects: {
      station: Prisma.$StationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      stationId: number
      vaz: number | null
      prec: number | null
      lux: number | null
      irr_lux: number | null
      temp: number | null
      pres: number | null
      umi: number | null
      carga: number | null
      v_gen: number | null
      a_gen: number | null
      w_gen: number | null
      irr_gen: number | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["reading"]>
    composites: {}
  }

  type ReadingGetPayload<S extends boolean | null | undefined | ReadingDefaultArgs> = $Result.GetResult<Prisma.$ReadingPayload, S>

  type ReadingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReadingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReadingCountAggregateInputType | true
    }

  export interface ReadingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reading'], meta: { name: 'Reading' } }
    /**
     * Find zero or one Reading that matches the filter.
     * @param {ReadingFindUniqueArgs} args - Arguments to find a Reading
     * @example
     * // Get one Reading
     * const reading = await prisma.reading.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReadingFindUniqueArgs>(args: SelectSubset<T, ReadingFindUniqueArgs<ExtArgs>>): Prisma__ReadingClient<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reading that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReadingFindUniqueOrThrowArgs} args - Arguments to find a Reading
     * @example
     * // Get one Reading
     * const reading = await prisma.reading.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReadingFindUniqueOrThrowArgs>(args: SelectSubset<T, ReadingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReadingClient<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reading that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingFindFirstArgs} args - Arguments to find a Reading
     * @example
     * // Get one Reading
     * const reading = await prisma.reading.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReadingFindFirstArgs>(args?: SelectSubset<T, ReadingFindFirstArgs<ExtArgs>>): Prisma__ReadingClient<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reading that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingFindFirstOrThrowArgs} args - Arguments to find a Reading
     * @example
     * // Get one Reading
     * const reading = await prisma.reading.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReadingFindFirstOrThrowArgs>(args?: SelectSubset<T, ReadingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReadingClient<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Readings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Readings
     * const readings = await prisma.reading.findMany()
     * 
     * // Get first 10 Readings
     * const readings = await prisma.reading.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const readingWithIdOnly = await prisma.reading.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReadingFindManyArgs>(args?: SelectSubset<T, ReadingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reading.
     * @param {ReadingCreateArgs} args - Arguments to create a Reading.
     * @example
     * // Create one Reading
     * const Reading = await prisma.reading.create({
     *   data: {
     *     // ... data to create a Reading
     *   }
     * })
     * 
     */
    create<T extends ReadingCreateArgs>(args: SelectSubset<T, ReadingCreateArgs<ExtArgs>>): Prisma__ReadingClient<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Readings.
     * @param {ReadingCreateManyArgs} args - Arguments to create many Readings.
     * @example
     * // Create many Readings
     * const reading = await prisma.reading.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReadingCreateManyArgs>(args?: SelectSubset<T, ReadingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Readings and returns the data saved in the database.
     * @param {ReadingCreateManyAndReturnArgs} args - Arguments to create many Readings.
     * @example
     * // Create many Readings
     * const reading = await prisma.reading.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Readings and only return the `id`
     * const readingWithIdOnly = await prisma.reading.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReadingCreateManyAndReturnArgs>(args?: SelectSubset<T, ReadingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reading.
     * @param {ReadingDeleteArgs} args - Arguments to delete one Reading.
     * @example
     * // Delete one Reading
     * const Reading = await prisma.reading.delete({
     *   where: {
     *     // ... filter to delete one Reading
     *   }
     * })
     * 
     */
    delete<T extends ReadingDeleteArgs>(args: SelectSubset<T, ReadingDeleteArgs<ExtArgs>>): Prisma__ReadingClient<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reading.
     * @param {ReadingUpdateArgs} args - Arguments to update one Reading.
     * @example
     * // Update one Reading
     * const reading = await prisma.reading.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReadingUpdateArgs>(args: SelectSubset<T, ReadingUpdateArgs<ExtArgs>>): Prisma__ReadingClient<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Readings.
     * @param {ReadingDeleteManyArgs} args - Arguments to filter Readings to delete.
     * @example
     * // Delete a few Readings
     * const { count } = await prisma.reading.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReadingDeleteManyArgs>(args?: SelectSubset<T, ReadingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Readings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Readings
     * const reading = await prisma.reading.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReadingUpdateManyArgs>(args: SelectSubset<T, ReadingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Readings and returns the data updated in the database.
     * @param {ReadingUpdateManyAndReturnArgs} args - Arguments to update many Readings.
     * @example
     * // Update many Readings
     * const reading = await prisma.reading.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Readings and only return the `id`
     * const readingWithIdOnly = await prisma.reading.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReadingUpdateManyAndReturnArgs>(args: SelectSubset<T, ReadingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reading.
     * @param {ReadingUpsertArgs} args - Arguments to update or create a Reading.
     * @example
     * // Update or create a Reading
     * const reading = await prisma.reading.upsert({
     *   create: {
     *     // ... data to create a Reading
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reading we want to update
     *   }
     * })
     */
    upsert<T extends ReadingUpsertArgs>(args: SelectSubset<T, ReadingUpsertArgs<ExtArgs>>): Prisma__ReadingClient<$Result.GetResult<Prisma.$ReadingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Readings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingCountArgs} args - Arguments to filter Readings to count.
     * @example
     * // Count the number of Readings
     * const count = await prisma.reading.count({
     *   where: {
     *     // ... the filter for the Readings we want to count
     *   }
     * })
    **/
    count<T extends ReadingCountArgs>(
      args?: Subset<T, ReadingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReadingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reading.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReadingAggregateArgs>(args: Subset<T, ReadingAggregateArgs>): Prisma.PrismaPromise<GetReadingAggregateType<T>>

    /**
     * Group by Reading.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingGroupByArgs} args - Group by arguments.
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
      T extends ReadingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReadingGroupByArgs['orderBy'] }
        : { orderBy?: ReadingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReadingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReadingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reading model
   */
  readonly fields: ReadingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reading.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReadingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    station<T extends StationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StationDefaultArgs<ExtArgs>>): Prisma__StationClient<$Result.GetResult<Prisma.$StationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Reading model
   */
  interface ReadingFieldRefs {
    readonly id: FieldRef<"Reading", 'Int'>
    readonly stationId: FieldRef<"Reading", 'Int'>
    readonly vaz: FieldRef<"Reading", 'Float'>
    readonly prec: FieldRef<"Reading", 'Float'>
    readonly lux: FieldRef<"Reading", 'Float'>
    readonly irr_lux: FieldRef<"Reading", 'Float'>
    readonly temp: FieldRef<"Reading", 'Float'>
    readonly pres: FieldRef<"Reading", 'Float'>
    readonly umi: FieldRef<"Reading", 'Float'>
    readonly carga: FieldRef<"Reading", 'Float'>
    readonly v_gen: FieldRef<"Reading", 'Float'>
    readonly a_gen: FieldRef<"Reading", 'Float'>
    readonly w_gen: FieldRef<"Reading", 'Float'>
    readonly irr_gen: FieldRef<"Reading", 'Float'>
    readonly created_at: FieldRef<"Reading", 'DateTime'>
    readonly updated_at: FieldRef<"Reading", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reading findUnique
   */
  export type ReadingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reading
     */
    omit?: ReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingInclude<ExtArgs> | null
    /**
     * Filter, which Reading to fetch.
     */
    where: ReadingWhereUniqueInput
  }

  /**
   * Reading findUniqueOrThrow
   */
  export type ReadingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reading
     */
    omit?: ReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingInclude<ExtArgs> | null
    /**
     * Filter, which Reading to fetch.
     */
    where: ReadingWhereUniqueInput
  }

  /**
   * Reading findFirst
   */
  export type ReadingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reading
     */
    omit?: ReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingInclude<ExtArgs> | null
    /**
     * Filter, which Reading to fetch.
     */
    where?: ReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Readings to fetch.
     */
    orderBy?: ReadingOrderByWithRelationInput | ReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Readings.
     */
    cursor?: ReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Readings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Readings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Readings.
     */
    distinct?: ReadingScalarFieldEnum | ReadingScalarFieldEnum[]
  }

  /**
   * Reading findFirstOrThrow
   */
  export type ReadingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reading
     */
    omit?: ReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingInclude<ExtArgs> | null
    /**
     * Filter, which Reading to fetch.
     */
    where?: ReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Readings to fetch.
     */
    orderBy?: ReadingOrderByWithRelationInput | ReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Readings.
     */
    cursor?: ReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Readings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Readings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Readings.
     */
    distinct?: ReadingScalarFieldEnum | ReadingScalarFieldEnum[]
  }

  /**
   * Reading findMany
   */
  export type ReadingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reading
     */
    omit?: ReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingInclude<ExtArgs> | null
    /**
     * Filter, which Readings to fetch.
     */
    where?: ReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Readings to fetch.
     */
    orderBy?: ReadingOrderByWithRelationInput | ReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Readings.
     */
    cursor?: ReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Readings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Readings.
     */
    skip?: number
    distinct?: ReadingScalarFieldEnum | ReadingScalarFieldEnum[]
  }

  /**
   * Reading create
   */
  export type ReadingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reading
     */
    omit?: ReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingInclude<ExtArgs> | null
    /**
     * The data needed to create a Reading.
     */
    data: XOR<ReadingCreateInput, ReadingUncheckedCreateInput>
  }

  /**
   * Reading createMany
   */
  export type ReadingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Readings.
     */
    data: ReadingCreateManyInput | ReadingCreateManyInput[]
  }

  /**
   * Reading createManyAndReturn
   */
  export type ReadingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reading
     */
    omit?: ReadingOmit<ExtArgs> | null
    /**
     * The data used to create many Readings.
     */
    data: ReadingCreateManyInput | ReadingCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reading update
   */
  export type ReadingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reading
     */
    omit?: ReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingInclude<ExtArgs> | null
    /**
     * The data needed to update a Reading.
     */
    data: XOR<ReadingUpdateInput, ReadingUncheckedUpdateInput>
    /**
     * Choose, which Reading to update.
     */
    where: ReadingWhereUniqueInput
  }

  /**
   * Reading updateMany
   */
  export type ReadingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Readings.
     */
    data: XOR<ReadingUpdateManyMutationInput, ReadingUncheckedUpdateManyInput>
    /**
     * Filter which Readings to update
     */
    where?: ReadingWhereInput
    /**
     * Limit how many Readings to update.
     */
    limit?: number
  }

  /**
   * Reading updateManyAndReturn
   */
  export type ReadingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reading
     */
    omit?: ReadingOmit<ExtArgs> | null
    /**
     * The data used to update Readings.
     */
    data: XOR<ReadingUpdateManyMutationInput, ReadingUncheckedUpdateManyInput>
    /**
     * Filter which Readings to update
     */
    where?: ReadingWhereInput
    /**
     * Limit how many Readings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reading upsert
   */
  export type ReadingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reading
     */
    omit?: ReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingInclude<ExtArgs> | null
    /**
     * The filter to search for the Reading to update in case it exists.
     */
    where: ReadingWhereUniqueInput
    /**
     * In case the Reading found by the `where` argument doesn't exist, create a new Reading with this data.
     */
    create: XOR<ReadingCreateInput, ReadingUncheckedCreateInput>
    /**
     * In case the Reading was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReadingUpdateInput, ReadingUncheckedUpdateInput>
  }

  /**
   * Reading delete
   */
  export type ReadingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reading
     */
    omit?: ReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingInclude<ExtArgs> | null
    /**
     * Filter which Reading to delete.
     */
    where: ReadingWhereUniqueInput
  }

  /**
   * Reading deleteMany
   */
  export type ReadingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Readings to delete
     */
    where?: ReadingWhereInput
    /**
     * Limit how many Readings to delete.
     */
    limit?: number
  }

  /**
   * Reading without action
   */
  export type ReadingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reading
     */
    select?: ReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reading
     */
    omit?: ReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    first_name: 'first_name',
    last_name: 'last_name',
    documento: 'documento',
    password: 'password',
    phone: 'phone',
    role: 'role',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StationScalarFieldEnum: {
    id: 'id',
    code: 'code',
    lat: 'lat',
    long: 'long',
    muni: 'muni',
    estado: 'estado',
    userId: 'userId',
    role: 'role',
    token: 'token',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type StationScalarFieldEnum = (typeof StationScalarFieldEnum)[keyof typeof StationScalarFieldEnum]


  export const ReadingScalarFieldEnum: {
    id: 'id',
    stationId: 'stationId',
    vaz: 'vaz',
    prec: 'prec',
    lux: 'lux',
    irr_lux: 'irr_lux',
    temp: 'temp',
    pres: 'pres',
    umi: 'umi',
    carga: 'carga',
    v_gen: 'v_gen',
    a_gen: 'a_gen',
    w_gen: 'w_gen',
    irr_gen: 'irr_gen',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ReadingScalarFieldEnum = (typeof ReadingScalarFieldEnum)[keyof typeof ReadingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    first_name?: StringFilter<"User"> | string
    last_name?: StringNullableFilter<"User"> | string | null
    documento?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    stations?: StationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrderInput | SortOrder
    documento?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    stations?: StationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    documento?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    first_name?: StringFilter<"User"> | string
    last_name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    stations?: StationListRelationFilter
  }, "id" | "id" | "email" | "documento">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrderInput | SortOrder
    documento?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    first_name?: StringWithAggregatesFilter<"User"> | string
    last_name?: StringNullableWithAggregatesFilter<"User"> | string | null
    documento?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type StationWhereInput = {
    AND?: StationWhereInput | StationWhereInput[]
    OR?: StationWhereInput[]
    NOT?: StationWhereInput | StationWhereInput[]
    id?: IntFilter<"Station"> | number
    code?: StringFilter<"Station"> | string
    lat?: FloatFilter<"Station"> | number
    long?: FloatFilter<"Station"> | number
    muni?: StringFilter<"Station"> | string
    estado?: StringFilter<"Station"> | string
    userId?: IntNullableFilter<"Station"> | number | null
    role?: EnumRoleFilter<"Station"> | $Enums.Role
    token?: StringNullableFilter<"Station"> | string | null
    created_at?: DateTimeFilter<"Station"> | Date | string
    updated_at?: DateTimeFilter<"Station"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    readings?: ReadingListRelationFilter
  }

  export type StationOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    lat?: SortOrder
    long?: SortOrder
    muni?: SortOrder
    estado?: SortOrder
    userId?: SortOrderInput | SortOrder
    role?: SortOrder
    token?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    readings?: ReadingOrderByRelationAggregateInput
  }

  export type StationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    token?: string
    AND?: StationWhereInput | StationWhereInput[]
    OR?: StationWhereInput[]
    NOT?: StationWhereInput | StationWhereInput[]
    lat?: FloatFilter<"Station"> | number
    long?: FloatFilter<"Station"> | number
    muni?: StringFilter<"Station"> | string
    estado?: StringFilter<"Station"> | string
    userId?: IntNullableFilter<"Station"> | number | null
    role?: EnumRoleFilter<"Station"> | $Enums.Role
    created_at?: DateTimeFilter<"Station"> | Date | string
    updated_at?: DateTimeFilter<"Station"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    readings?: ReadingListRelationFilter
  }, "id" | "id" | "code" | "token">

  export type StationOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    lat?: SortOrder
    long?: SortOrder
    muni?: SortOrder
    estado?: SortOrder
    userId?: SortOrderInput | SortOrder
    role?: SortOrder
    token?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: StationCountOrderByAggregateInput
    _avg?: StationAvgOrderByAggregateInput
    _max?: StationMaxOrderByAggregateInput
    _min?: StationMinOrderByAggregateInput
    _sum?: StationSumOrderByAggregateInput
  }

  export type StationScalarWhereWithAggregatesInput = {
    AND?: StationScalarWhereWithAggregatesInput | StationScalarWhereWithAggregatesInput[]
    OR?: StationScalarWhereWithAggregatesInput[]
    NOT?: StationScalarWhereWithAggregatesInput | StationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Station"> | number
    code?: StringWithAggregatesFilter<"Station"> | string
    lat?: FloatWithAggregatesFilter<"Station"> | number
    long?: FloatWithAggregatesFilter<"Station"> | number
    muni?: StringWithAggregatesFilter<"Station"> | string
    estado?: StringWithAggregatesFilter<"Station"> | string
    userId?: IntNullableWithAggregatesFilter<"Station"> | number | null
    role?: EnumRoleWithAggregatesFilter<"Station"> | $Enums.Role
    token?: StringNullableWithAggregatesFilter<"Station"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Station"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Station"> | Date | string
  }

  export type ReadingWhereInput = {
    AND?: ReadingWhereInput | ReadingWhereInput[]
    OR?: ReadingWhereInput[]
    NOT?: ReadingWhereInput | ReadingWhereInput[]
    id?: IntFilter<"Reading"> | number
    stationId?: IntFilter<"Reading"> | number
    vaz?: FloatNullableFilter<"Reading"> | number | null
    prec?: FloatNullableFilter<"Reading"> | number | null
    lux?: FloatNullableFilter<"Reading"> | number | null
    irr_lux?: FloatNullableFilter<"Reading"> | number | null
    temp?: FloatNullableFilter<"Reading"> | number | null
    pres?: FloatNullableFilter<"Reading"> | number | null
    umi?: FloatNullableFilter<"Reading"> | number | null
    carga?: FloatNullableFilter<"Reading"> | number | null
    v_gen?: FloatNullableFilter<"Reading"> | number | null
    a_gen?: FloatNullableFilter<"Reading"> | number | null
    w_gen?: FloatNullableFilter<"Reading"> | number | null
    irr_gen?: FloatNullableFilter<"Reading"> | number | null
    created_at?: DateTimeFilter<"Reading"> | Date | string
    updated_at?: DateTimeFilter<"Reading"> | Date | string
    station?: XOR<StationScalarRelationFilter, StationWhereInput>
  }

  export type ReadingOrderByWithRelationInput = {
    id?: SortOrder
    stationId?: SortOrder
    vaz?: SortOrderInput | SortOrder
    prec?: SortOrderInput | SortOrder
    lux?: SortOrderInput | SortOrder
    irr_lux?: SortOrderInput | SortOrder
    temp?: SortOrderInput | SortOrder
    pres?: SortOrderInput | SortOrder
    umi?: SortOrderInput | SortOrder
    carga?: SortOrderInput | SortOrder
    v_gen?: SortOrderInput | SortOrder
    a_gen?: SortOrderInput | SortOrder
    w_gen?: SortOrderInput | SortOrder
    irr_gen?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    station?: StationOrderByWithRelationInput
  }

  export type ReadingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReadingWhereInput | ReadingWhereInput[]
    OR?: ReadingWhereInput[]
    NOT?: ReadingWhereInput | ReadingWhereInput[]
    stationId?: IntFilter<"Reading"> | number
    vaz?: FloatNullableFilter<"Reading"> | number | null
    prec?: FloatNullableFilter<"Reading"> | number | null
    lux?: FloatNullableFilter<"Reading"> | number | null
    irr_lux?: FloatNullableFilter<"Reading"> | number | null
    temp?: FloatNullableFilter<"Reading"> | number | null
    pres?: FloatNullableFilter<"Reading"> | number | null
    umi?: FloatNullableFilter<"Reading"> | number | null
    carga?: FloatNullableFilter<"Reading"> | number | null
    v_gen?: FloatNullableFilter<"Reading"> | number | null
    a_gen?: FloatNullableFilter<"Reading"> | number | null
    w_gen?: FloatNullableFilter<"Reading"> | number | null
    irr_gen?: FloatNullableFilter<"Reading"> | number | null
    created_at?: DateTimeFilter<"Reading"> | Date | string
    updated_at?: DateTimeFilter<"Reading"> | Date | string
    station?: XOR<StationScalarRelationFilter, StationWhereInput>
  }, "id" | "id">

  export type ReadingOrderByWithAggregationInput = {
    id?: SortOrder
    stationId?: SortOrder
    vaz?: SortOrderInput | SortOrder
    prec?: SortOrderInput | SortOrder
    lux?: SortOrderInput | SortOrder
    irr_lux?: SortOrderInput | SortOrder
    temp?: SortOrderInput | SortOrder
    pres?: SortOrderInput | SortOrder
    umi?: SortOrderInput | SortOrder
    carga?: SortOrderInput | SortOrder
    v_gen?: SortOrderInput | SortOrder
    a_gen?: SortOrderInput | SortOrder
    w_gen?: SortOrderInput | SortOrder
    irr_gen?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ReadingCountOrderByAggregateInput
    _avg?: ReadingAvgOrderByAggregateInput
    _max?: ReadingMaxOrderByAggregateInput
    _min?: ReadingMinOrderByAggregateInput
    _sum?: ReadingSumOrderByAggregateInput
  }

  export type ReadingScalarWhereWithAggregatesInput = {
    AND?: ReadingScalarWhereWithAggregatesInput | ReadingScalarWhereWithAggregatesInput[]
    OR?: ReadingScalarWhereWithAggregatesInput[]
    NOT?: ReadingScalarWhereWithAggregatesInput | ReadingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reading"> | number
    stationId?: IntWithAggregatesFilter<"Reading"> | number
    vaz?: FloatNullableWithAggregatesFilter<"Reading"> | number | null
    prec?: FloatNullableWithAggregatesFilter<"Reading"> | number | null
    lux?: FloatNullableWithAggregatesFilter<"Reading"> | number | null
    irr_lux?: FloatNullableWithAggregatesFilter<"Reading"> | number | null
    temp?: FloatNullableWithAggregatesFilter<"Reading"> | number | null
    pres?: FloatNullableWithAggregatesFilter<"Reading"> | number | null
    umi?: FloatNullableWithAggregatesFilter<"Reading"> | number | null
    carga?: FloatNullableWithAggregatesFilter<"Reading"> | number | null
    v_gen?: FloatNullableWithAggregatesFilter<"Reading"> | number | null
    a_gen?: FloatNullableWithAggregatesFilter<"Reading"> | number | null
    w_gen?: FloatNullableWithAggregatesFilter<"Reading"> | number | null
    irr_gen?: FloatNullableWithAggregatesFilter<"Reading"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"Reading"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Reading"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    first_name: string
    last_name?: string | null
    documento: string
    password: string
    phone: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    stations?: StationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    first_name: string
    last_name?: string | null
    documento: string
    password: string
    phone: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    stations?: StationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    documento?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    stations?: StationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    documento?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    stations?: StationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    first_name: string
    last_name?: string | null
    documento: string
    password: string
    phone: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    documento?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    documento?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StationCreateInput = {
    code: string
    lat: number
    long: number
    muni: string
    estado: string
    role?: $Enums.Role
    token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user?: UserCreateNestedOneWithoutStationsInput
    readings?: ReadingCreateNestedManyWithoutStationInput
  }

  export type StationUncheckedCreateInput = {
    id?: number
    code: string
    lat: number
    long: number
    muni: string
    estado: string
    userId?: number | null
    role?: $Enums.Role
    token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    readings?: ReadingUncheckedCreateNestedManyWithoutStationInput
  }

  export type StationUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    long?: FloatFieldUpdateOperationsInput | number
    muni?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutStationsNestedInput
    readings?: ReadingUpdateManyWithoutStationNestedInput
  }

  export type StationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    long?: FloatFieldUpdateOperationsInput | number
    muni?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    readings?: ReadingUncheckedUpdateManyWithoutStationNestedInput
  }

  export type StationCreateManyInput = {
    id?: number
    code: string
    lat: number
    long: number
    muni: string
    estado: string
    userId?: number | null
    role?: $Enums.Role
    token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StationUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    long?: FloatFieldUpdateOperationsInput | number
    muni?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    long?: FloatFieldUpdateOperationsInput | number
    muni?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReadingCreateInput = {
    vaz?: number | null
    prec?: number | null
    lux?: number | null
    irr_lux?: number | null
    temp?: number | null
    pres?: number | null
    umi?: number | null
    carga?: number | null
    v_gen?: number | null
    a_gen?: number | null
    w_gen?: number | null
    irr_gen?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    station: StationCreateNestedOneWithoutReadingsInput
  }

  export type ReadingUncheckedCreateInput = {
    id?: number
    stationId: number
    vaz?: number | null
    prec?: number | null
    lux?: number | null
    irr_lux?: number | null
    temp?: number | null
    pres?: number | null
    umi?: number | null
    carga?: number | null
    v_gen?: number | null
    a_gen?: number | null
    w_gen?: number | null
    irr_gen?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReadingUpdateInput = {
    vaz?: NullableFloatFieldUpdateOperationsInput | number | null
    prec?: NullableFloatFieldUpdateOperationsInput | number | null
    lux?: NullableFloatFieldUpdateOperationsInput | number | null
    irr_lux?: NullableFloatFieldUpdateOperationsInput | number | null
    temp?: NullableFloatFieldUpdateOperationsInput | number | null
    pres?: NullableFloatFieldUpdateOperationsInput | number | null
    umi?: NullableFloatFieldUpdateOperationsInput | number | null
    carga?: NullableFloatFieldUpdateOperationsInput | number | null
    v_gen?: NullableFloatFieldUpdateOperationsInput | number | null
    a_gen?: NullableFloatFieldUpdateOperationsInput | number | null
    w_gen?: NullableFloatFieldUpdateOperationsInput | number | null
    irr_gen?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    station?: StationUpdateOneRequiredWithoutReadingsNestedInput
  }

  export type ReadingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    stationId?: IntFieldUpdateOperationsInput | number
    vaz?: NullableFloatFieldUpdateOperationsInput | number | null
    prec?: NullableFloatFieldUpdateOperationsInput | number | null
    lux?: NullableFloatFieldUpdateOperationsInput | number | null
    irr_lux?: NullableFloatFieldUpdateOperationsInput | number | null
    temp?: NullableFloatFieldUpdateOperationsInput | number | null
    pres?: NullableFloatFieldUpdateOperationsInput | number | null
    umi?: NullableFloatFieldUpdateOperationsInput | number | null
    carga?: NullableFloatFieldUpdateOperationsInput | number | null
    v_gen?: NullableFloatFieldUpdateOperationsInput | number | null
    a_gen?: NullableFloatFieldUpdateOperationsInput | number | null
    w_gen?: NullableFloatFieldUpdateOperationsInput | number | null
    irr_gen?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReadingCreateManyInput = {
    id?: number
    stationId: number
    vaz?: number | null
    prec?: number | null
    lux?: number | null
    irr_lux?: number | null
    temp?: number | null
    pres?: number | null
    umi?: number | null
    carga?: number | null
    v_gen?: number | null
    a_gen?: number | null
    w_gen?: number | null
    irr_gen?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReadingUpdateManyMutationInput = {
    vaz?: NullableFloatFieldUpdateOperationsInput | number | null
    prec?: NullableFloatFieldUpdateOperationsInput | number | null
    lux?: NullableFloatFieldUpdateOperationsInput | number | null
    irr_lux?: NullableFloatFieldUpdateOperationsInput | number | null
    temp?: NullableFloatFieldUpdateOperationsInput | number | null
    pres?: NullableFloatFieldUpdateOperationsInput | number | null
    umi?: NullableFloatFieldUpdateOperationsInput | number | null
    carga?: NullableFloatFieldUpdateOperationsInput | number | null
    v_gen?: NullableFloatFieldUpdateOperationsInput | number | null
    a_gen?: NullableFloatFieldUpdateOperationsInput | number | null
    w_gen?: NullableFloatFieldUpdateOperationsInput | number | null
    irr_gen?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReadingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    stationId?: IntFieldUpdateOperationsInput | number
    vaz?: NullableFloatFieldUpdateOperationsInput | number | null
    prec?: NullableFloatFieldUpdateOperationsInput | number | null
    lux?: NullableFloatFieldUpdateOperationsInput | number | null
    irr_lux?: NullableFloatFieldUpdateOperationsInput | number | null
    temp?: NullableFloatFieldUpdateOperationsInput | number | null
    pres?: NullableFloatFieldUpdateOperationsInput | number | null
    umi?: NullableFloatFieldUpdateOperationsInput | number | null
    carga?: NullableFloatFieldUpdateOperationsInput | number | null
    v_gen?: NullableFloatFieldUpdateOperationsInput | number | null
    a_gen?: NullableFloatFieldUpdateOperationsInput | number | null
    w_gen?: NullableFloatFieldUpdateOperationsInput | number | null
    irr_gen?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StationListRelationFilter = {
    every?: StationWhereInput
    some?: StationWhereInput
    none?: StationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    documento?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    documento?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    documento?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ReadingListRelationFilter = {
    every?: ReadingWhereInput
    some?: ReadingWhereInput
    none?: ReadingWhereInput
  }

  export type ReadingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StationCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    lat?: SortOrder
    long?: SortOrder
    muni?: SortOrder
    estado?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StationAvgOrderByAggregateInput = {
    id?: SortOrder
    lat?: SortOrder
    long?: SortOrder
    userId?: SortOrder
  }

  export type StationMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    lat?: SortOrder
    long?: SortOrder
    muni?: SortOrder
    estado?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StationMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    lat?: SortOrder
    long?: SortOrder
    muni?: SortOrder
    estado?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StationSumOrderByAggregateInput = {
    id?: SortOrder
    lat?: SortOrder
    long?: SortOrder
    userId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type StationScalarRelationFilter = {
    is?: StationWhereInput
    isNot?: StationWhereInput
  }

  export type ReadingCountOrderByAggregateInput = {
    id?: SortOrder
    stationId?: SortOrder
    vaz?: SortOrder
    prec?: SortOrder
    lux?: SortOrder
    irr_lux?: SortOrder
    temp?: SortOrder
    pres?: SortOrder
    umi?: SortOrder
    carga?: SortOrder
    v_gen?: SortOrder
    a_gen?: SortOrder
    w_gen?: SortOrder
    irr_gen?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ReadingAvgOrderByAggregateInput = {
    id?: SortOrder
    stationId?: SortOrder
    vaz?: SortOrder
    prec?: SortOrder
    lux?: SortOrder
    irr_lux?: SortOrder
    temp?: SortOrder
    pres?: SortOrder
    umi?: SortOrder
    carga?: SortOrder
    v_gen?: SortOrder
    a_gen?: SortOrder
    w_gen?: SortOrder
    irr_gen?: SortOrder
  }

  export type ReadingMaxOrderByAggregateInput = {
    id?: SortOrder
    stationId?: SortOrder
    vaz?: SortOrder
    prec?: SortOrder
    lux?: SortOrder
    irr_lux?: SortOrder
    temp?: SortOrder
    pres?: SortOrder
    umi?: SortOrder
    carga?: SortOrder
    v_gen?: SortOrder
    a_gen?: SortOrder
    w_gen?: SortOrder
    irr_gen?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ReadingMinOrderByAggregateInput = {
    id?: SortOrder
    stationId?: SortOrder
    vaz?: SortOrder
    prec?: SortOrder
    lux?: SortOrder
    irr_lux?: SortOrder
    temp?: SortOrder
    pres?: SortOrder
    umi?: SortOrder
    carga?: SortOrder
    v_gen?: SortOrder
    a_gen?: SortOrder
    w_gen?: SortOrder
    irr_gen?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ReadingSumOrderByAggregateInput = {
    id?: SortOrder
    stationId?: SortOrder
    vaz?: SortOrder
    prec?: SortOrder
    lux?: SortOrder
    irr_lux?: SortOrder
    temp?: SortOrder
    pres?: SortOrder
    umi?: SortOrder
    carga?: SortOrder
    v_gen?: SortOrder
    a_gen?: SortOrder
    w_gen?: SortOrder
    irr_gen?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type StationCreateNestedManyWithoutUserInput = {
    create?: XOR<StationCreateWithoutUserInput, StationUncheckedCreateWithoutUserInput> | StationCreateWithoutUserInput[] | StationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StationCreateOrConnectWithoutUserInput | StationCreateOrConnectWithoutUserInput[]
    createMany?: StationCreateManyUserInputEnvelope
    connect?: StationWhereUniqueInput | StationWhereUniqueInput[]
  }

  export type StationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StationCreateWithoutUserInput, StationUncheckedCreateWithoutUserInput> | StationCreateWithoutUserInput[] | StationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StationCreateOrConnectWithoutUserInput | StationCreateOrConnectWithoutUserInput[]
    createMany?: StationCreateManyUserInputEnvelope
    connect?: StationWhereUniqueInput | StationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StationUpdateManyWithoutUserNestedInput = {
    create?: XOR<StationCreateWithoutUserInput, StationUncheckedCreateWithoutUserInput> | StationCreateWithoutUserInput[] | StationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StationCreateOrConnectWithoutUserInput | StationCreateOrConnectWithoutUserInput[]
    upsert?: StationUpsertWithWhereUniqueWithoutUserInput | StationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StationCreateManyUserInputEnvelope
    set?: StationWhereUniqueInput | StationWhereUniqueInput[]
    disconnect?: StationWhereUniqueInput | StationWhereUniqueInput[]
    delete?: StationWhereUniqueInput | StationWhereUniqueInput[]
    connect?: StationWhereUniqueInput | StationWhereUniqueInput[]
    update?: StationUpdateWithWhereUniqueWithoutUserInput | StationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StationUpdateManyWithWhereWithoutUserInput | StationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StationScalarWhereInput | StationScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StationCreateWithoutUserInput, StationUncheckedCreateWithoutUserInput> | StationCreateWithoutUserInput[] | StationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StationCreateOrConnectWithoutUserInput | StationCreateOrConnectWithoutUserInput[]
    upsert?: StationUpsertWithWhereUniqueWithoutUserInput | StationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StationCreateManyUserInputEnvelope
    set?: StationWhereUniqueInput | StationWhereUniqueInput[]
    disconnect?: StationWhereUniqueInput | StationWhereUniqueInput[]
    delete?: StationWhereUniqueInput | StationWhereUniqueInput[]
    connect?: StationWhereUniqueInput | StationWhereUniqueInput[]
    update?: StationUpdateWithWhereUniqueWithoutUserInput | StationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StationUpdateManyWithWhereWithoutUserInput | StationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StationScalarWhereInput | StationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutStationsInput = {
    create?: XOR<UserCreateWithoutStationsInput, UserUncheckedCreateWithoutStationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStationsInput
    connect?: UserWhereUniqueInput
  }

  export type ReadingCreateNestedManyWithoutStationInput = {
    create?: XOR<ReadingCreateWithoutStationInput, ReadingUncheckedCreateWithoutStationInput> | ReadingCreateWithoutStationInput[] | ReadingUncheckedCreateWithoutStationInput[]
    connectOrCreate?: ReadingCreateOrConnectWithoutStationInput | ReadingCreateOrConnectWithoutStationInput[]
    createMany?: ReadingCreateManyStationInputEnvelope
    connect?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
  }

  export type ReadingUncheckedCreateNestedManyWithoutStationInput = {
    create?: XOR<ReadingCreateWithoutStationInput, ReadingUncheckedCreateWithoutStationInput> | ReadingCreateWithoutStationInput[] | ReadingUncheckedCreateWithoutStationInput[]
    connectOrCreate?: ReadingCreateOrConnectWithoutStationInput | ReadingCreateOrConnectWithoutStationInput[]
    createMany?: ReadingCreateManyStationInputEnvelope
    connect?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneWithoutStationsNestedInput = {
    create?: XOR<UserCreateWithoutStationsInput, UserUncheckedCreateWithoutStationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStationsInput
    upsert?: UserUpsertWithoutStationsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStationsInput, UserUpdateWithoutStationsInput>, UserUncheckedUpdateWithoutStationsInput>
  }

  export type ReadingUpdateManyWithoutStationNestedInput = {
    create?: XOR<ReadingCreateWithoutStationInput, ReadingUncheckedCreateWithoutStationInput> | ReadingCreateWithoutStationInput[] | ReadingUncheckedCreateWithoutStationInput[]
    connectOrCreate?: ReadingCreateOrConnectWithoutStationInput | ReadingCreateOrConnectWithoutStationInput[]
    upsert?: ReadingUpsertWithWhereUniqueWithoutStationInput | ReadingUpsertWithWhereUniqueWithoutStationInput[]
    createMany?: ReadingCreateManyStationInputEnvelope
    set?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    disconnect?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    delete?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    connect?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    update?: ReadingUpdateWithWhereUniqueWithoutStationInput | ReadingUpdateWithWhereUniqueWithoutStationInput[]
    updateMany?: ReadingUpdateManyWithWhereWithoutStationInput | ReadingUpdateManyWithWhereWithoutStationInput[]
    deleteMany?: ReadingScalarWhereInput | ReadingScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReadingUncheckedUpdateManyWithoutStationNestedInput = {
    create?: XOR<ReadingCreateWithoutStationInput, ReadingUncheckedCreateWithoutStationInput> | ReadingCreateWithoutStationInput[] | ReadingUncheckedCreateWithoutStationInput[]
    connectOrCreate?: ReadingCreateOrConnectWithoutStationInput | ReadingCreateOrConnectWithoutStationInput[]
    upsert?: ReadingUpsertWithWhereUniqueWithoutStationInput | ReadingUpsertWithWhereUniqueWithoutStationInput[]
    createMany?: ReadingCreateManyStationInputEnvelope
    set?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    disconnect?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    delete?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    connect?: ReadingWhereUniqueInput | ReadingWhereUniqueInput[]
    update?: ReadingUpdateWithWhereUniqueWithoutStationInput | ReadingUpdateWithWhereUniqueWithoutStationInput[]
    updateMany?: ReadingUpdateManyWithWhereWithoutStationInput | ReadingUpdateManyWithWhereWithoutStationInput[]
    deleteMany?: ReadingScalarWhereInput | ReadingScalarWhereInput[]
  }

  export type StationCreateNestedOneWithoutReadingsInput = {
    create?: XOR<StationCreateWithoutReadingsInput, StationUncheckedCreateWithoutReadingsInput>
    connectOrCreate?: StationCreateOrConnectWithoutReadingsInput
    connect?: StationWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StationUpdateOneRequiredWithoutReadingsNestedInput = {
    create?: XOR<StationCreateWithoutReadingsInput, StationUncheckedCreateWithoutReadingsInput>
    connectOrCreate?: StationCreateOrConnectWithoutReadingsInput
    upsert?: StationUpsertWithoutReadingsInput
    connect?: StationWhereUniqueInput
    update?: XOR<XOR<StationUpdateToOneWithWhereWithoutReadingsInput, StationUpdateWithoutReadingsInput>, StationUncheckedUpdateWithoutReadingsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type StationCreateWithoutUserInput = {
    code: string
    lat: number
    long: number
    muni: string
    estado: string
    role?: $Enums.Role
    token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    readings?: ReadingCreateNestedManyWithoutStationInput
  }

  export type StationUncheckedCreateWithoutUserInput = {
    id?: number
    code: string
    lat: number
    long: number
    muni: string
    estado: string
    role?: $Enums.Role
    token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    readings?: ReadingUncheckedCreateNestedManyWithoutStationInput
  }

  export type StationCreateOrConnectWithoutUserInput = {
    where: StationWhereUniqueInput
    create: XOR<StationCreateWithoutUserInput, StationUncheckedCreateWithoutUserInput>
  }

  export type StationCreateManyUserInputEnvelope = {
    data: StationCreateManyUserInput | StationCreateManyUserInput[]
  }

  export type StationUpsertWithWhereUniqueWithoutUserInput = {
    where: StationWhereUniqueInput
    update: XOR<StationUpdateWithoutUserInput, StationUncheckedUpdateWithoutUserInput>
    create: XOR<StationCreateWithoutUserInput, StationUncheckedCreateWithoutUserInput>
  }

  export type StationUpdateWithWhereUniqueWithoutUserInput = {
    where: StationWhereUniqueInput
    data: XOR<StationUpdateWithoutUserInput, StationUncheckedUpdateWithoutUserInput>
  }

  export type StationUpdateManyWithWhereWithoutUserInput = {
    where: StationScalarWhereInput
    data: XOR<StationUpdateManyMutationInput, StationUncheckedUpdateManyWithoutUserInput>
  }

  export type StationScalarWhereInput = {
    AND?: StationScalarWhereInput | StationScalarWhereInput[]
    OR?: StationScalarWhereInput[]
    NOT?: StationScalarWhereInput | StationScalarWhereInput[]
    id?: IntFilter<"Station"> | number
    code?: StringFilter<"Station"> | string
    lat?: FloatFilter<"Station"> | number
    long?: FloatFilter<"Station"> | number
    muni?: StringFilter<"Station"> | string
    estado?: StringFilter<"Station"> | string
    userId?: IntNullableFilter<"Station"> | number | null
    role?: EnumRoleFilter<"Station"> | $Enums.Role
    token?: StringNullableFilter<"Station"> | string | null
    created_at?: DateTimeFilter<"Station"> | Date | string
    updated_at?: DateTimeFilter<"Station"> | Date | string
  }

  export type UserCreateWithoutStationsInput = {
    email: string
    first_name: string
    last_name?: string | null
    documento: string
    password: string
    phone: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUncheckedCreateWithoutStationsInput = {
    id?: number
    email: string
    first_name: string
    last_name?: string | null
    documento: string
    password: string
    phone: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserCreateOrConnectWithoutStationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStationsInput, UserUncheckedCreateWithoutStationsInput>
  }

  export type ReadingCreateWithoutStationInput = {
    vaz?: number | null
    prec?: number | null
    lux?: number | null
    irr_lux?: number | null
    temp?: number | null
    pres?: number | null
    umi?: number | null
    carga?: number | null
    v_gen?: number | null
    a_gen?: number | null
    w_gen?: number | null
    irr_gen?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReadingUncheckedCreateWithoutStationInput = {
    id?: number
    vaz?: number | null
    prec?: number | null
    lux?: number | null
    irr_lux?: number | null
    temp?: number | null
    pres?: number | null
    umi?: number | null
    carga?: number | null
    v_gen?: number | null
    a_gen?: number | null
    w_gen?: number | null
    irr_gen?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReadingCreateOrConnectWithoutStationInput = {
    where: ReadingWhereUniqueInput
    create: XOR<ReadingCreateWithoutStationInput, ReadingUncheckedCreateWithoutStationInput>
  }

  export type ReadingCreateManyStationInputEnvelope = {
    data: ReadingCreateManyStationInput | ReadingCreateManyStationInput[]
  }

  export type UserUpsertWithoutStationsInput = {
    update: XOR<UserUpdateWithoutStationsInput, UserUncheckedUpdateWithoutStationsInput>
    create: XOR<UserCreateWithoutStationsInput, UserUncheckedCreateWithoutStationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStationsInput, UserUncheckedUpdateWithoutStationsInput>
  }

  export type UserUpdateWithoutStationsInput = {
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    documento?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutStationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    documento?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReadingUpsertWithWhereUniqueWithoutStationInput = {
    where: ReadingWhereUniqueInput
    update: XOR<ReadingUpdateWithoutStationInput, ReadingUncheckedUpdateWithoutStationInput>
    create: XOR<ReadingCreateWithoutStationInput, ReadingUncheckedCreateWithoutStationInput>
  }

  export type ReadingUpdateWithWhereUniqueWithoutStationInput = {
    where: ReadingWhereUniqueInput
    data: XOR<ReadingUpdateWithoutStationInput, ReadingUncheckedUpdateWithoutStationInput>
  }

  export type ReadingUpdateManyWithWhereWithoutStationInput = {
    where: ReadingScalarWhereInput
    data: XOR<ReadingUpdateManyMutationInput, ReadingUncheckedUpdateManyWithoutStationInput>
  }

  export type ReadingScalarWhereInput = {
    AND?: ReadingScalarWhereInput | ReadingScalarWhereInput[]
    OR?: ReadingScalarWhereInput[]
    NOT?: ReadingScalarWhereInput | ReadingScalarWhereInput[]
    id?: IntFilter<"Reading"> | number
    stationId?: IntFilter<"Reading"> | number
    vaz?: FloatNullableFilter<"Reading"> | number | null
    prec?: FloatNullableFilter<"Reading"> | number | null
    lux?: FloatNullableFilter<"Reading"> | number | null
    irr_lux?: FloatNullableFilter<"Reading"> | number | null
    temp?: FloatNullableFilter<"Reading"> | number | null
    pres?: FloatNullableFilter<"Reading"> | number | null
    umi?: FloatNullableFilter<"Reading"> | number | null
    carga?: FloatNullableFilter<"Reading"> | number | null
    v_gen?: FloatNullableFilter<"Reading"> | number | null
    a_gen?: FloatNullableFilter<"Reading"> | number | null
    w_gen?: FloatNullableFilter<"Reading"> | number | null
    irr_gen?: FloatNullableFilter<"Reading"> | number | null
    created_at?: DateTimeFilter<"Reading"> | Date | string
    updated_at?: DateTimeFilter<"Reading"> | Date | string
  }

  export type StationCreateWithoutReadingsInput = {
    code: string
    lat: number
    long: number
    muni: string
    estado: string
    role?: $Enums.Role
    token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user?: UserCreateNestedOneWithoutStationsInput
  }

  export type StationUncheckedCreateWithoutReadingsInput = {
    id?: number
    code: string
    lat: number
    long: number
    muni: string
    estado: string
    userId?: number | null
    role?: $Enums.Role
    token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StationCreateOrConnectWithoutReadingsInput = {
    where: StationWhereUniqueInput
    create: XOR<StationCreateWithoutReadingsInput, StationUncheckedCreateWithoutReadingsInput>
  }

  export type StationUpsertWithoutReadingsInput = {
    update: XOR<StationUpdateWithoutReadingsInput, StationUncheckedUpdateWithoutReadingsInput>
    create: XOR<StationCreateWithoutReadingsInput, StationUncheckedCreateWithoutReadingsInput>
    where?: StationWhereInput
  }

  export type StationUpdateToOneWithWhereWithoutReadingsInput = {
    where?: StationWhereInput
    data: XOR<StationUpdateWithoutReadingsInput, StationUncheckedUpdateWithoutReadingsInput>
  }

  export type StationUpdateWithoutReadingsInput = {
    code?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    long?: FloatFieldUpdateOperationsInput | number
    muni?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutStationsNestedInput
  }

  export type StationUncheckedUpdateWithoutReadingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    long?: FloatFieldUpdateOperationsInput | number
    muni?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StationCreateManyUserInput = {
    id?: number
    code: string
    lat: number
    long: number
    muni: string
    estado: string
    role?: $Enums.Role
    token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StationUpdateWithoutUserInput = {
    code?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    long?: FloatFieldUpdateOperationsInput | number
    muni?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    readings?: ReadingUpdateManyWithoutStationNestedInput
  }

  export type StationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    long?: FloatFieldUpdateOperationsInput | number
    muni?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    readings?: ReadingUncheckedUpdateManyWithoutStationNestedInput
  }

  export type StationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    long?: FloatFieldUpdateOperationsInput | number
    muni?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReadingCreateManyStationInput = {
    id?: number
    vaz?: number | null
    prec?: number | null
    lux?: number | null
    irr_lux?: number | null
    temp?: number | null
    pres?: number | null
    umi?: number | null
    carga?: number | null
    v_gen?: number | null
    a_gen?: number | null
    w_gen?: number | null
    irr_gen?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReadingUpdateWithoutStationInput = {
    vaz?: NullableFloatFieldUpdateOperationsInput | number | null
    prec?: NullableFloatFieldUpdateOperationsInput | number | null
    lux?: NullableFloatFieldUpdateOperationsInput | number | null
    irr_lux?: NullableFloatFieldUpdateOperationsInput | number | null
    temp?: NullableFloatFieldUpdateOperationsInput | number | null
    pres?: NullableFloatFieldUpdateOperationsInput | number | null
    umi?: NullableFloatFieldUpdateOperationsInput | number | null
    carga?: NullableFloatFieldUpdateOperationsInput | number | null
    v_gen?: NullableFloatFieldUpdateOperationsInput | number | null
    a_gen?: NullableFloatFieldUpdateOperationsInput | number | null
    w_gen?: NullableFloatFieldUpdateOperationsInput | number | null
    irr_gen?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReadingUncheckedUpdateWithoutStationInput = {
    id?: IntFieldUpdateOperationsInput | number
    vaz?: NullableFloatFieldUpdateOperationsInput | number | null
    prec?: NullableFloatFieldUpdateOperationsInput | number | null
    lux?: NullableFloatFieldUpdateOperationsInput | number | null
    irr_lux?: NullableFloatFieldUpdateOperationsInput | number | null
    temp?: NullableFloatFieldUpdateOperationsInput | number | null
    pres?: NullableFloatFieldUpdateOperationsInput | number | null
    umi?: NullableFloatFieldUpdateOperationsInput | number | null
    carga?: NullableFloatFieldUpdateOperationsInput | number | null
    v_gen?: NullableFloatFieldUpdateOperationsInput | number | null
    a_gen?: NullableFloatFieldUpdateOperationsInput | number | null
    w_gen?: NullableFloatFieldUpdateOperationsInput | number | null
    irr_gen?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReadingUncheckedUpdateManyWithoutStationInput = {
    id?: IntFieldUpdateOperationsInput | number
    vaz?: NullableFloatFieldUpdateOperationsInput | number | null
    prec?: NullableFloatFieldUpdateOperationsInput | number | null
    lux?: NullableFloatFieldUpdateOperationsInput | number | null
    irr_lux?: NullableFloatFieldUpdateOperationsInput | number | null
    temp?: NullableFloatFieldUpdateOperationsInput | number | null
    pres?: NullableFloatFieldUpdateOperationsInput | number | null
    umi?: NullableFloatFieldUpdateOperationsInput | number | null
    carga?: NullableFloatFieldUpdateOperationsInput | number | null
    v_gen?: NullableFloatFieldUpdateOperationsInput | number | null
    a_gen?: NullableFloatFieldUpdateOperationsInput | number | null
    w_gen?: NullableFloatFieldUpdateOperationsInput | number | null
    irr_gen?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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
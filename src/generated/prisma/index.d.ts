
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
 * Model Pembeli
 * 
 */
export type Pembeli = $Result.DefaultSelection<Prisma.$PembeliPayload>
/**
 * Model Penjual
 * 
 */
export type Penjual = $Result.DefaultSelection<Prisma.$PenjualPayload>
/**
 * Model Pembayaran
 * 
 */
export type Pembayaran = $Result.DefaultSelection<Prisma.$PembayaranPayload>
/**
 * Model Pesanan
 * 
 */
export type Pesanan = $Result.DefaultSelection<Prisma.$PesananPayload>
/**
 * Model Produk
 * 
 */
export type Produk = $Result.DefaultSelection<Prisma.$ProdukPayload>
/**
 * Model PesananProduk
 * 
 */
export type PesananProduk = $Result.DefaultSelection<Prisma.$PesananProdukPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Pembelis
 * const pembelis = await prisma.pembeli.findMany()
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
   * // Fetch zero or more Pembelis
   * const pembelis = await prisma.pembeli.findMany()
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
   * `prisma.pembeli`: Exposes CRUD operations for the **Pembeli** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pembelis
    * const pembelis = await prisma.pembeli.findMany()
    * ```
    */
  get pembeli(): Prisma.PembeliDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.penjual`: Exposes CRUD operations for the **Penjual** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Penjuals
    * const penjuals = await prisma.penjual.findMany()
    * ```
    */
  get penjual(): Prisma.PenjualDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pembayaran`: Exposes CRUD operations for the **Pembayaran** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pembayarans
    * const pembayarans = await prisma.pembayaran.findMany()
    * ```
    */
  get pembayaran(): Prisma.PembayaranDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pesanan`: Exposes CRUD operations for the **Pesanan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pesanans
    * const pesanans = await prisma.pesanan.findMany()
    * ```
    */
  get pesanan(): Prisma.PesananDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produk`: Exposes CRUD operations for the **Produk** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produks
    * const produks = await prisma.produk.findMany()
    * ```
    */
  get produk(): Prisma.ProdukDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pesananProduk`: Exposes CRUD operations for the **PesananProduk** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PesananProduks
    * const pesananProduks = await prisma.pesananProduk.findMany()
    * ```
    */
  get pesananProduk(): Prisma.PesananProdukDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Pembeli: 'Pembeli',
    Penjual: 'Penjual',
    Pembayaran: 'Pembayaran',
    Pesanan: 'Pesanan',
    Produk: 'Produk',
    PesananProduk: 'PesananProduk'
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
      modelProps: "pembeli" | "penjual" | "pembayaran" | "pesanan" | "produk" | "pesananProduk"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Pembeli: {
        payload: Prisma.$PembeliPayload<ExtArgs>
        fields: Prisma.PembeliFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PembeliFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembeliPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PembeliFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembeliPayload>
          }
          findFirst: {
            args: Prisma.PembeliFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembeliPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PembeliFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembeliPayload>
          }
          findMany: {
            args: Prisma.PembeliFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembeliPayload>[]
          }
          create: {
            args: Prisma.PembeliCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembeliPayload>
          }
          createMany: {
            args: Prisma.PembeliCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PembeliCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembeliPayload>[]
          }
          delete: {
            args: Prisma.PembeliDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembeliPayload>
          }
          update: {
            args: Prisma.PembeliUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembeliPayload>
          }
          deleteMany: {
            args: Prisma.PembeliDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PembeliUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PembeliUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembeliPayload>[]
          }
          upsert: {
            args: Prisma.PembeliUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembeliPayload>
          }
          aggregate: {
            args: Prisma.PembeliAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePembeli>
          }
          groupBy: {
            args: Prisma.PembeliGroupByArgs<ExtArgs>
            result: $Utils.Optional<PembeliGroupByOutputType>[]
          }
          count: {
            args: Prisma.PembeliCountArgs<ExtArgs>
            result: $Utils.Optional<PembeliCountAggregateOutputType> | number
          }
        }
      }
      Penjual: {
        payload: Prisma.$PenjualPayload<ExtArgs>
        fields: Prisma.PenjualFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PenjualFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenjualPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PenjualFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenjualPayload>
          }
          findFirst: {
            args: Prisma.PenjualFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenjualPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PenjualFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenjualPayload>
          }
          findMany: {
            args: Prisma.PenjualFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenjualPayload>[]
          }
          create: {
            args: Prisma.PenjualCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenjualPayload>
          }
          createMany: {
            args: Prisma.PenjualCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PenjualCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenjualPayload>[]
          }
          delete: {
            args: Prisma.PenjualDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenjualPayload>
          }
          update: {
            args: Prisma.PenjualUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenjualPayload>
          }
          deleteMany: {
            args: Prisma.PenjualDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PenjualUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PenjualUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenjualPayload>[]
          }
          upsert: {
            args: Prisma.PenjualUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenjualPayload>
          }
          aggregate: {
            args: Prisma.PenjualAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePenjual>
          }
          groupBy: {
            args: Prisma.PenjualGroupByArgs<ExtArgs>
            result: $Utils.Optional<PenjualGroupByOutputType>[]
          }
          count: {
            args: Prisma.PenjualCountArgs<ExtArgs>
            result: $Utils.Optional<PenjualCountAggregateOutputType> | number
          }
        }
      }
      Pembayaran: {
        payload: Prisma.$PembayaranPayload<ExtArgs>
        fields: Prisma.PembayaranFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PembayaranFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembayaranPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PembayaranFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembayaranPayload>
          }
          findFirst: {
            args: Prisma.PembayaranFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembayaranPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PembayaranFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembayaranPayload>
          }
          findMany: {
            args: Prisma.PembayaranFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembayaranPayload>[]
          }
          create: {
            args: Prisma.PembayaranCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembayaranPayload>
          }
          createMany: {
            args: Prisma.PembayaranCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PembayaranCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembayaranPayload>[]
          }
          delete: {
            args: Prisma.PembayaranDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembayaranPayload>
          }
          update: {
            args: Prisma.PembayaranUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembayaranPayload>
          }
          deleteMany: {
            args: Prisma.PembayaranDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PembayaranUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PembayaranUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembayaranPayload>[]
          }
          upsert: {
            args: Prisma.PembayaranUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembayaranPayload>
          }
          aggregate: {
            args: Prisma.PembayaranAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePembayaran>
          }
          groupBy: {
            args: Prisma.PembayaranGroupByArgs<ExtArgs>
            result: $Utils.Optional<PembayaranGroupByOutputType>[]
          }
          count: {
            args: Prisma.PembayaranCountArgs<ExtArgs>
            result: $Utils.Optional<PembayaranCountAggregateOutputType> | number
          }
        }
      }
      Pesanan: {
        payload: Prisma.$PesananPayload<ExtArgs>
        fields: Prisma.PesananFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PesananFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesananPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PesananFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesananPayload>
          }
          findFirst: {
            args: Prisma.PesananFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesananPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PesananFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesananPayload>
          }
          findMany: {
            args: Prisma.PesananFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesananPayload>[]
          }
          create: {
            args: Prisma.PesananCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesananPayload>
          }
          createMany: {
            args: Prisma.PesananCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PesananCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesananPayload>[]
          }
          delete: {
            args: Prisma.PesananDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesananPayload>
          }
          update: {
            args: Prisma.PesananUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesananPayload>
          }
          deleteMany: {
            args: Prisma.PesananDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PesananUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PesananUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesananPayload>[]
          }
          upsert: {
            args: Prisma.PesananUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesananPayload>
          }
          aggregate: {
            args: Prisma.PesananAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePesanan>
          }
          groupBy: {
            args: Prisma.PesananGroupByArgs<ExtArgs>
            result: $Utils.Optional<PesananGroupByOutputType>[]
          }
          count: {
            args: Prisma.PesananCountArgs<ExtArgs>
            result: $Utils.Optional<PesananCountAggregateOutputType> | number
          }
        }
      }
      Produk: {
        payload: Prisma.$ProdukPayload<ExtArgs>
        fields: Prisma.ProdukFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProdukFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProdukFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>
          }
          findFirst: {
            args: Prisma.ProdukFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProdukFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>
          }
          findMany: {
            args: Prisma.ProdukFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>[]
          }
          create: {
            args: Prisma.ProdukCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>
          }
          createMany: {
            args: Prisma.ProdukCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProdukCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>[]
          }
          delete: {
            args: Prisma.ProdukDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>
          }
          update: {
            args: Prisma.ProdukUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>
          }
          deleteMany: {
            args: Prisma.ProdukDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProdukUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProdukUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>[]
          }
          upsert: {
            args: Prisma.ProdukUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>
          }
          aggregate: {
            args: Prisma.ProdukAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduk>
          }
          groupBy: {
            args: Prisma.ProdukGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdukGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProdukCountArgs<ExtArgs>
            result: $Utils.Optional<ProdukCountAggregateOutputType> | number
          }
        }
      }
      PesananProduk: {
        payload: Prisma.$PesananProdukPayload<ExtArgs>
        fields: Prisma.PesananProdukFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PesananProdukFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesananProdukPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PesananProdukFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesananProdukPayload>
          }
          findFirst: {
            args: Prisma.PesananProdukFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesananProdukPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PesananProdukFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesananProdukPayload>
          }
          findMany: {
            args: Prisma.PesananProdukFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesananProdukPayload>[]
          }
          create: {
            args: Prisma.PesananProdukCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesananProdukPayload>
          }
          createMany: {
            args: Prisma.PesananProdukCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PesananProdukCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesananProdukPayload>[]
          }
          delete: {
            args: Prisma.PesananProdukDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesananProdukPayload>
          }
          update: {
            args: Prisma.PesananProdukUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesananProdukPayload>
          }
          deleteMany: {
            args: Prisma.PesananProdukDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PesananProdukUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PesananProdukUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesananProdukPayload>[]
          }
          upsert: {
            args: Prisma.PesananProdukUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PesananProdukPayload>
          }
          aggregate: {
            args: Prisma.PesananProdukAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePesananProduk>
          }
          groupBy: {
            args: Prisma.PesananProdukGroupByArgs<ExtArgs>
            result: $Utils.Optional<PesananProdukGroupByOutputType>[]
          }
          count: {
            args: Prisma.PesananProdukCountArgs<ExtArgs>
            result: $Utils.Optional<PesananProdukCountAggregateOutputType> | number
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
    pembeli?: PembeliOmit
    penjual?: PenjualOmit
    pembayaran?: PembayaranOmit
    pesanan?: PesananOmit
    produk?: ProdukOmit
    pesananProduk?: PesananProdukOmit
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
   * Count Type PembeliCountOutputType
   */

  export type PembeliCountOutputType = {
    pembayaran: number
    pesanan: number
  }

  export type PembeliCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pembayaran?: boolean | PembeliCountOutputTypeCountPembayaranArgs
    pesanan?: boolean | PembeliCountOutputTypeCountPesananArgs
  }

  // Custom InputTypes
  /**
   * PembeliCountOutputType without action
   */
  export type PembeliCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PembeliCountOutputType
     */
    select?: PembeliCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PembeliCountOutputType without action
   */
  export type PembeliCountOutputTypeCountPembayaranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PembayaranWhereInput
  }

  /**
   * PembeliCountOutputType without action
   */
  export type PembeliCountOutputTypeCountPesananArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PesananWhereInput
  }


  /**
   * Count Type PenjualCountOutputType
   */

  export type PenjualCountOutputType = {
    pesanan: number
    produk: number
  }

  export type PenjualCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pesanan?: boolean | PenjualCountOutputTypeCountPesananArgs
    produk?: boolean | PenjualCountOutputTypeCountProdukArgs
  }

  // Custom InputTypes
  /**
   * PenjualCountOutputType without action
   */
  export type PenjualCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenjualCountOutputType
     */
    select?: PenjualCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PenjualCountOutputType without action
   */
  export type PenjualCountOutputTypeCountPesananArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PesananWhereInput
  }

  /**
   * PenjualCountOutputType without action
   */
  export type PenjualCountOutputTypeCountProdukArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdukWhereInput
  }


  /**
   * Count Type PesananCountOutputType
   */

  export type PesananCountOutputType = {
    pesananProduk: number
  }

  export type PesananCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pesananProduk?: boolean | PesananCountOutputTypeCountPesananProdukArgs
  }

  // Custom InputTypes
  /**
   * PesananCountOutputType without action
   */
  export type PesananCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesananCountOutputType
     */
    select?: PesananCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PesananCountOutputType without action
   */
  export type PesananCountOutputTypeCountPesananProdukArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PesananProdukWhereInput
  }


  /**
   * Count Type ProdukCountOutputType
   */

  export type ProdukCountOutputType = {
    pesananProduk: number
  }

  export type ProdukCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pesananProduk?: boolean | ProdukCountOutputTypeCountPesananProdukArgs
  }

  // Custom InputTypes
  /**
   * ProdukCountOutputType without action
   */
  export type ProdukCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdukCountOutputType
     */
    select?: ProdukCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdukCountOutputType without action
   */
  export type ProdukCountOutputTypeCountPesananProdukArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PesananProdukWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Pembeli
   */

  export type AggregatePembeli = {
    _count: PembeliCountAggregateOutputType | null
    _min: PembeliMinAggregateOutputType | null
    _max: PembeliMaxAggregateOutputType | null
  }

  export type PembeliMinAggregateOutputType = {
    id: string | null
    username: string | null
    role: string | null
  }

  export type PembeliMaxAggregateOutputType = {
    id: string | null
    username: string | null
    role: string | null
  }

  export type PembeliCountAggregateOutputType = {
    id: number
    username: number
    role: number
    _all: number
  }


  export type PembeliMinAggregateInputType = {
    id?: true
    username?: true
    role?: true
  }

  export type PembeliMaxAggregateInputType = {
    id?: true
    username?: true
    role?: true
  }

  export type PembeliCountAggregateInputType = {
    id?: true
    username?: true
    role?: true
    _all?: true
  }

  export type PembeliAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pembeli to aggregate.
     */
    where?: PembeliWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pembelis to fetch.
     */
    orderBy?: PembeliOrderByWithRelationInput | PembeliOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PembeliWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pembelis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pembelis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pembelis
    **/
    _count?: true | PembeliCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PembeliMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PembeliMaxAggregateInputType
  }

  export type GetPembeliAggregateType<T extends PembeliAggregateArgs> = {
        [P in keyof T & keyof AggregatePembeli]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePembeli[P]>
      : GetScalarType<T[P], AggregatePembeli[P]>
  }




  export type PembeliGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PembeliWhereInput
    orderBy?: PembeliOrderByWithAggregationInput | PembeliOrderByWithAggregationInput[]
    by: PembeliScalarFieldEnum[] | PembeliScalarFieldEnum
    having?: PembeliScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PembeliCountAggregateInputType | true
    _min?: PembeliMinAggregateInputType
    _max?: PembeliMaxAggregateInputType
  }

  export type PembeliGroupByOutputType = {
    id: string
    username: string
    role: string
    _count: PembeliCountAggregateOutputType | null
    _min: PembeliMinAggregateOutputType | null
    _max: PembeliMaxAggregateOutputType | null
  }

  type GetPembeliGroupByPayload<T extends PembeliGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PembeliGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PembeliGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PembeliGroupByOutputType[P]>
            : GetScalarType<T[P], PembeliGroupByOutputType[P]>
        }
      >
    >


  export type PembeliSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    role?: boolean
    pembayaran?: boolean | Pembeli$pembayaranArgs<ExtArgs>
    pesanan?: boolean | Pembeli$pesananArgs<ExtArgs>
    _count?: boolean | PembeliCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pembeli"]>

  export type PembeliSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    role?: boolean
  }, ExtArgs["result"]["pembeli"]>

  export type PembeliSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    role?: boolean
  }, ExtArgs["result"]["pembeli"]>

  export type PembeliSelectScalar = {
    id?: boolean
    username?: boolean
    role?: boolean
  }

  export type PembeliOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "role", ExtArgs["result"]["pembeli"]>
  export type PembeliInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pembayaran?: boolean | Pembeli$pembayaranArgs<ExtArgs>
    pesanan?: boolean | Pembeli$pesananArgs<ExtArgs>
    _count?: boolean | PembeliCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PembeliIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PembeliIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PembeliPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pembeli"
    objects: {
      pembayaran: Prisma.$PembayaranPayload<ExtArgs>[]
      pesanan: Prisma.$PesananPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      role: string
    }, ExtArgs["result"]["pembeli"]>
    composites: {}
  }

  type PembeliGetPayload<S extends boolean | null | undefined | PembeliDefaultArgs> = $Result.GetResult<Prisma.$PembeliPayload, S>

  type PembeliCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PembeliFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PembeliCountAggregateInputType | true
    }

  export interface PembeliDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pembeli'], meta: { name: 'Pembeli' } }
    /**
     * Find zero or one Pembeli that matches the filter.
     * @param {PembeliFindUniqueArgs} args - Arguments to find a Pembeli
     * @example
     * // Get one Pembeli
     * const pembeli = await prisma.pembeli.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PembeliFindUniqueArgs>(args: SelectSubset<T, PembeliFindUniqueArgs<ExtArgs>>): Prisma__PembeliClient<$Result.GetResult<Prisma.$PembeliPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pembeli that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PembeliFindUniqueOrThrowArgs} args - Arguments to find a Pembeli
     * @example
     * // Get one Pembeli
     * const pembeli = await prisma.pembeli.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PembeliFindUniqueOrThrowArgs>(args: SelectSubset<T, PembeliFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PembeliClient<$Result.GetResult<Prisma.$PembeliPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pembeli that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembeliFindFirstArgs} args - Arguments to find a Pembeli
     * @example
     * // Get one Pembeli
     * const pembeli = await prisma.pembeli.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PembeliFindFirstArgs>(args?: SelectSubset<T, PembeliFindFirstArgs<ExtArgs>>): Prisma__PembeliClient<$Result.GetResult<Prisma.$PembeliPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pembeli that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembeliFindFirstOrThrowArgs} args - Arguments to find a Pembeli
     * @example
     * // Get one Pembeli
     * const pembeli = await prisma.pembeli.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PembeliFindFirstOrThrowArgs>(args?: SelectSubset<T, PembeliFindFirstOrThrowArgs<ExtArgs>>): Prisma__PembeliClient<$Result.GetResult<Prisma.$PembeliPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pembelis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembeliFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pembelis
     * const pembelis = await prisma.pembeli.findMany()
     * 
     * // Get first 10 Pembelis
     * const pembelis = await prisma.pembeli.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pembeliWithIdOnly = await prisma.pembeli.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PembeliFindManyArgs>(args?: SelectSubset<T, PembeliFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PembeliPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pembeli.
     * @param {PembeliCreateArgs} args - Arguments to create a Pembeli.
     * @example
     * // Create one Pembeli
     * const Pembeli = await prisma.pembeli.create({
     *   data: {
     *     // ... data to create a Pembeli
     *   }
     * })
     * 
     */
    create<T extends PembeliCreateArgs>(args: SelectSubset<T, PembeliCreateArgs<ExtArgs>>): Prisma__PembeliClient<$Result.GetResult<Prisma.$PembeliPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pembelis.
     * @param {PembeliCreateManyArgs} args - Arguments to create many Pembelis.
     * @example
     * // Create many Pembelis
     * const pembeli = await prisma.pembeli.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PembeliCreateManyArgs>(args?: SelectSubset<T, PembeliCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pembelis and returns the data saved in the database.
     * @param {PembeliCreateManyAndReturnArgs} args - Arguments to create many Pembelis.
     * @example
     * // Create many Pembelis
     * const pembeli = await prisma.pembeli.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pembelis and only return the `id`
     * const pembeliWithIdOnly = await prisma.pembeli.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PembeliCreateManyAndReturnArgs>(args?: SelectSubset<T, PembeliCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PembeliPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pembeli.
     * @param {PembeliDeleteArgs} args - Arguments to delete one Pembeli.
     * @example
     * // Delete one Pembeli
     * const Pembeli = await prisma.pembeli.delete({
     *   where: {
     *     // ... filter to delete one Pembeli
     *   }
     * })
     * 
     */
    delete<T extends PembeliDeleteArgs>(args: SelectSubset<T, PembeliDeleteArgs<ExtArgs>>): Prisma__PembeliClient<$Result.GetResult<Prisma.$PembeliPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pembeli.
     * @param {PembeliUpdateArgs} args - Arguments to update one Pembeli.
     * @example
     * // Update one Pembeli
     * const pembeli = await prisma.pembeli.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PembeliUpdateArgs>(args: SelectSubset<T, PembeliUpdateArgs<ExtArgs>>): Prisma__PembeliClient<$Result.GetResult<Prisma.$PembeliPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pembelis.
     * @param {PembeliDeleteManyArgs} args - Arguments to filter Pembelis to delete.
     * @example
     * // Delete a few Pembelis
     * const { count } = await prisma.pembeli.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PembeliDeleteManyArgs>(args?: SelectSubset<T, PembeliDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pembelis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembeliUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pembelis
     * const pembeli = await prisma.pembeli.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PembeliUpdateManyArgs>(args: SelectSubset<T, PembeliUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pembelis and returns the data updated in the database.
     * @param {PembeliUpdateManyAndReturnArgs} args - Arguments to update many Pembelis.
     * @example
     * // Update many Pembelis
     * const pembeli = await prisma.pembeli.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pembelis and only return the `id`
     * const pembeliWithIdOnly = await prisma.pembeli.updateManyAndReturn({
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
    updateManyAndReturn<T extends PembeliUpdateManyAndReturnArgs>(args: SelectSubset<T, PembeliUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PembeliPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pembeli.
     * @param {PembeliUpsertArgs} args - Arguments to update or create a Pembeli.
     * @example
     * // Update or create a Pembeli
     * const pembeli = await prisma.pembeli.upsert({
     *   create: {
     *     // ... data to create a Pembeli
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pembeli we want to update
     *   }
     * })
     */
    upsert<T extends PembeliUpsertArgs>(args: SelectSubset<T, PembeliUpsertArgs<ExtArgs>>): Prisma__PembeliClient<$Result.GetResult<Prisma.$PembeliPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pembelis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembeliCountArgs} args - Arguments to filter Pembelis to count.
     * @example
     * // Count the number of Pembelis
     * const count = await prisma.pembeli.count({
     *   where: {
     *     // ... the filter for the Pembelis we want to count
     *   }
     * })
    **/
    count<T extends PembeliCountArgs>(
      args?: Subset<T, PembeliCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PembeliCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pembeli.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembeliAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PembeliAggregateArgs>(args: Subset<T, PembeliAggregateArgs>): Prisma.PrismaPromise<GetPembeliAggregateType<T>>

    /**
     * Group by Pembeli.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembeliGroupByArgs} args - Group by arguments.
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
      T extends PembeliGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PembeliGroupByArgs['orderBy'] }
        : { orderBy?: PembeliGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PembeliGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPembeliGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pembeli model
   */
  readonly fields: PembeliFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pembeli.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PembeliClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pembayaran<T extends Pembeli$pembayaranArgs<ExtArgs> = {}>(args?: Subset<T, Pembeli$pembayaranArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pesanan<T extends Pembeli$pesananArgs<ExtArgs> = {}>(args?: Subset<T, Pembeli$pesananArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PesananPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Pembeli model
   */
  interface PembeliFieldRefs {
    readonly id: FieldRef<"Pembeli", 'String'>
    readonly username: FieldRef<"Pembeli", 'String'>
    readonly role: FieldRef<"Pembeli", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pembeli findUnique
   */
  export type PembeliFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembeli
     */
    select?: PembeliSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembeli
     */
    omit?: PembeliOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembeliInclude<ExtArgs> | null
    /**
     * Filter, which Pembeli to fetch.
     */
    where: PembeliWhereUniqueInput
  }

  /**
   * Pembeli findUniqueOrThrow
   */
  export type PembeliFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembeli
     */
    select?: PembeliSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembeli
     */
    omit?: PembeliOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembeliInclude<ExtArgs> | null
    /**
     * Filter, which Pembeli to fetch.
     */
    where: PembeliWhereUniqueInput
  }

  /**
   * Pembeli findFirst
   */
  export type PembeliFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembeli
     */
    select?: PembeliSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembeli
     */
    omit?: PembeliOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembeliInclude<ExtArgs> | null
    /**
     * Filter, which Pembeli to fetch.
     */
    where?: PembeliWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pembelis to fetch.
     */
    orderBy?: PembeliOrderByWithRelationInput | PembeliOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pembelis.
     */
    cursor?: PembeliWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pembelis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pembelis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pembelis.
     */
    distinct?: PembeliScalarFieldEnum | PembeliScalarFieldEnum[]
  }

  /**
   * Pembeli findFirstOrThrow
   */
  export type PembeliFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembeli
     */
    select?: PembeliSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembeli
     */
    omit?: PembeliOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembeliInclude<ExtArgs> | null
    /**
     * Filter, which Pembeli to fetch.
     */
    where?: PembeliWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pembelis to fetch.
     */
    orderBy?: PembeliOrderByWithRelationInput | PembeliOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pembelis.
     */
    cursor?: PembeliWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pembelis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pembelis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pembelis.
     */
    distinct?: PembeliScalarFieldEnum | PembeliScalarFieldEnum[]
  }

  /**
   * Pembeli findMany
   */
  export type PembeliFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembeli
     */
    select?: PembeliSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembeli
     */
    omit?: PembeliOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembeliInclude<ExtArgs> | null
    /**
     * Filter, which Pembelis to fetch.
     */
    where?: PembeliWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pembelis to fetch.
     */
    orderBy?: PembeliOrderByWithRelationInput | PembeliOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pembelis.
     */
    cursor?: PembeliWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pembelis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pembelis.
     */
    skip?: number
    distinct?: PembeliScalarFieldEnum | PembeliScalarFieldEnum[]
  }

  /**
   * Pembeli create
   */
  export type PembeliCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembeli
     */
    select?: PembeliSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembeli
     */
    omit?: PembeliOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembeliInclude<ExtArgs> | null
    /**
     * The data needed to create a Pembeli.
     */
    data: XOR<PembeliCreateInput, PembeliUncheckedCreateInput>
  }

  /**
   * Pembeli createMany
   */
  export type PembeliCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pembelis.
     */
    data: PembeliCreateManyInput | PembeliCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pembeli createManyAndReturn
   */
  export type PembeliCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembeli
     */
    select?: PembeliSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pembeli
     */
    omit?: PembeliOmit<ExtArgs> | null
    /**
     * The data used to create many Pembelis.
     */
    data: PembeliCreateManyInput | PembeliCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pembeli update
   */
  export type PembeliUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembeli
     */
    select?: PembeliSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembeli
     */
    omit?: PembeliOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembeliInclude<ExtArgs> | null
    /**
     * The data needed to update a Pembeli.
     */
    data: XOR<PembeliUpdateInput, PembeliUncheckedUpdateInput>
    /**
     * Choose, which Pembeli to update.
     */
    where: PembeliWhereUniqueInput
  }

  /**
   * Pembeli updateMany
   */
  export type PembeliUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pembelis.
     */
    data: XOR<PembeliUpdateManyMutationInput, PembeliUncheckedUpdateManyInput>
    /**
     * Filter which Pembelis to update
     */
    where?: PembeliWhereInput
    /**
     * Limit how many Pembelis to update.
     */
    limit?: number
  }

  /**
   * Pembeli updateManyAndReturn
   */
  export type PembeliUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembeli
     */
    select?: PembeliSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pembeli
     */
    omit?: PembeliOmit<ExtArgs> | null
    /**
     * The data used to update Pembelis.
     */
    data: XOR<PembeliUpdateManyMutationInput, PembeliUncheckedUpdateManyInput>
    /**
     * Filter which Pembelis to update
     */
    where?: PembeliWhereInput
    /**
     * Limit how many Pembelis to update.
     */
    limit?: number
  }

  /**
   * Pembeli upsert
   */
  export type PembeliUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembeli
     */
    select?: PembeliSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembeli
     */
    omit?: PembeliOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembeliInclude<ExtArgs> | null
    /**
     * The filter to search for the Pembeli to update in case it exists.
     */
    where: PembeliWhereUniqueInput
    /**
     * In case the Pembeli found by the `where` argument doesn't exist, create a new Pembeli with this data.
     */
    create: XOR<PembeliCreateInput, PembeliUncheckedCreateInput>
    /**
     * In case the Pembeli was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PembeliUpdateInput, PembeliUncheckedUpdateInput>
  }

  /**
   * Pembeli delete
   */
  export type PembeliDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembeli
     */
    select?: PembeliSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembeli
     */
    omit?: PembeliOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembeliInclude<ExtArgs> | null
    /**
     * Filter which Pembeli to delete.
     */
    where: PembeliWhereUniqueInput
  }

  /**
   * Pembeli deleteMany
   */
  export type PembeliDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pembelis to delete
     */
    where?: PembeliWhereInput
    /**
     * Limit how many Pembelis to delete.
     */
    limit?: number
  }

  /**
   * Pembeli.pembayaran
   */
  export type Pembeli$pembayaranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembayaran
     */
    omit?: PembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
    where?: PembayaranWhereInput
    orderBy?: PembayaranOrderByWithRelationInput | PembayaranOrderByWithRelationInput[]
    cursor?: PembayaranWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PembayaranScalarFieldEnum | PembayaranScalarFieldEnum[]
  }

  /**
   * Pembeli.pesanan
   */
  export type Pembeli$pesananArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: PesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pesanan
     */
    omit?: PesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesananInclude<ExtArgs> | null
    where?: PesananWhereInput
    orderBy?: PesananOrderByWithRelationInput | PesananOrderByWithRelationInput[]
    cursor?: PesananWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PesananScalarFieldEnum | PesananScalarFieldEnum[]
  }

  /**
   * Pembeli without action
   */
  export type PembeliDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembeli
     */
    select?: PembeliSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembeli
     */
    omit?: PembeliOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembeliInclude<ExtArgs> | null
  }


  /**
   * Model Penjual
   */

  export type AggregatePenjual = {
    _count: PenjualCountAggregateOutputType | null
    _min: PenjualMinAggregateOutputType | null
    _max: PenjualMaxAggregateOutputType | null
  }

  export type PenjualMinAggregateOutputType = {
    id: string | null
    username: string | null
    role: string | null
  }

  export type PenjualMaxAggregateOutputType = {
    id: string | null
    username: string | null
    role: string | null
  }

  export type PenjualCountAggregateOutputType = {
    id: number
    username: number
    role: number
    _all: number
  }


  export type PenjualMinAggregateInputType = {
    id?: true
    username?: true
    role?: true
  }

  export type PenjualMaxAggregateInputType = {
    id?: true
    username?: true
    role?: true
  }

  export type PenjualCountAggregateInputType = {
    id?: true
    username?: true
    role?: true
    _all?: true
  }

  export type PenjualAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Penjual to aggregate.
     */
    where?: PenjualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penjuals to fetch.
     */
    orderBy?: PenjualOrderByWithRelationInput | PenjualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PenjualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penjuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penjuals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Penjuals
    **/
    _count?: true | PenjualCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PenjualMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PenjualMaxAggregateInputType
  }

  export type GetPenjualAggregateType<T extends PenjualAggregateArgs> = {
        [P in keyof T & keyof AggregatePenjual]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePenjual[P]>
      : GetScalarType<T[P], AggregatePenjual[P]>
  }




  export type PenjualGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PenjualWhereInput
    orderBy?: PenjualOrderByWithAggregationInput | PenjualOrderByWithAggregationInput[]
    by: PenjualScalarFieldEnum[] | PenjualScalarFieldEnum
    having?: PenjualScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PenjualCountAggregateInputType | true
    _min?: PenjualMinAggregateInputType
    _max?: PenjualMaxAggregateInputType
  }

  export type PenjualGroupByOutputType = {
    id: string
    username: string
    role: string
    _count: PenjualCountAggregateOutputType | null
    _min: PenjualMinAggregateOutputType | null
    _max: PenjualMaxAggregateOutputType | null
  }

  type GetPenjualGroupByPayload<T extends PenjualGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PenjualGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PenjualGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PenjualGroupByOutputType[P]>
            : GetScalarType<T[P], PenjualGroupByOutputType[P]>
        }
      >
    >


  export type PenjualSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    role?: boolean
    pesanan?: boolean | Penjual$pesananArgs<ExtArgs>
    produk?: boolean | Penjual$produkArgs<ExtArgs>
    _count?: boolean | PenjualCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["penjual"]>

  export type PenjualSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    role?: boolean
  }, ExtArgs["result"]["penjual"]>

  export type PenjualSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    role?: boolean
  }, ExtArgs["result"]["penjual"]>

  export type PenjualSelectScalar = {
    id?: boolean
    username?: boolean
    role?: boolean
  }

  export type PenjualOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "role", ExtArgs["result"]["penjual"]>
  export type PenjualInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pesanan?: boolean | Penjual$pesananArgs<ExtArgs>
    produk?: boolean | Penjual$produkArgs<ExtArgs>
    _count?: boolean | PenjualCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PenjualIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PenjualIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PenjualPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Penjual"
    objects: {
      pesanan: Prisma.$PesananPayload<ExtArgs>[]
      produk: Prisma.$ProdukPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      role: string
    }, ExtArgs["result"]["penjual"]>
    composites: {}
  }

  type PenjualGetPayload<S extends boolean | null | undefined | PenjualDefaultArgs> = $Result.GetResult<Prisma.$PenjualPayload, S>

  type PenjualCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PenjualFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PenjualCountAggregateInputType | true
    }

  export interface PenjualDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Penjual'], meta: { name: 'Penjual' } }
    /**
     * Find zero or one Penjual that matches the filter.
     * @param {PenjualFindUniqueArgs} args - Arguments to find a Penjual
     * @example
     * // Get one Penjual
     * const penjual = await prisma.penjual.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PenjualFindUniqueArgs>(args: SelectSubset<T, PenjualFindUniqueArgs<ExtArgs>>): Prisma__PenjualClient<$Result.GetResult<Prisma.$PenjualPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Penjual that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PenjualFindUniqueOrThrowArgs} args - Arguments to find a Penjual
     * @example
     * // Get one Penjual
     * const penjual = await prisma.penjual.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PenjualFindUniqueOrThrowArgs>(args: SelectSubset<T, PenjualFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PenjualClient<$Result.GetResult<Prisma.$PenjualPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Penjual that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenjualFindFirstArgs} args - Arguments to find a Penjual
     * @example
     * // Get one Penjual
     * const penjual = await prisma.penjual.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PenjualFindFirstArgs>(args?: SelectSubset<T, PenjualFindFirstArgs<ExtArgs>>): Prisma__PenjualClient<$Result.GetResult<Prisma.$PenjualPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Penjual that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenjualFindFirstOrThrowArgs} args - Arguments to find a Penjual
     * @example
     * // Get one Penjual
     * const penjual = await prisma.penjual.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PenjualFindFirstOrThrowArgs>(args?: SelectSubset<T, PenjualFindFirstOrThrowArgs<ExtArgs>>): Prisma__PenjualClient<$Result.GetResult<Prisma.$PenjualPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Penjuals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenjualFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Penjuals
     * const penjuals = await prisma.penjual.findMany()
     * 
     * // Get first 10 Penjuals
     * const penjuals = await prisma.penjual.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const penjualWithIdOnly = await prisma.penjual.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PenjualFindManyArgs>(args?: SelectSubset<T, PenjualFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenjualPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Penjual.
     * @param {PenjualCreateArgs} args - Arguments to create a Penjual.
     * @example
     * // Create one Penjual
     * const Penjual = await prisma.penjual.create({
     *   data: {
     *     // ... data to create a Penjual
     *   }
     * })
     * 
     */
    create<T extends PenjualCreateArgs>(args: SelectSubset<T, PenjualCreateArgs<ExtArgs>>): Prisma__PenjualClient<$Result.GetResult<Prisma.$PenjualPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Penjuals.
     * @param {PenjualCreateManyArgs} args - Arguments to create many Penjuals.
     * @example
     * // Create many Penjuals
     * const penjual = await prisma.penjual.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PenjualCreateManyArgs>(args?: SelectSubset<T, PenjualCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Penjuals and returns the data saved in the database.
     * @param {PenjualCreateManyAndReturnArgs} args - Arguments to create many Penjuals.
     * @example
     * // Create many Penjuals
     * const penjual = await prisma.penjual.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Penjuals and only return the `id`
     * const penjualWithIdOnly = await prisma.penjual.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PenjualCreateManyAndReturnArgs>(args?: SelectSubset<T, PenjualCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenjualPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Penjual.
     * @param {PenjualDeleteArgs} args - Arguments to delete one Penjual.
     * @example
     * // Delete one Penjual
     * const Penjual = await prisma.penjual.delete({
     *   where: {
     *     // ... filter to delete one Penjual
     *   }
     * })
     * 
     */
    delete<T extends PenjualDeleteArgs>(args: SelectSubset<T, PenjualDeleteArgs<ExtArgs>>): Prisma__PenjualClient<$Result.GetResult<Prisma.$PenjualPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Penjual.
     * @param {PenjualUpdateArgs} args - Arguments to update one Penjual.
     * @example
     * // Update one Penjual
     * const penjual = await prisma.penjual.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PenjualUpdateArgs>(args: SelectSubset<T, PenjualUpdateArgs<ExtArgs>>): Prisma__PenjualClient<$Result.GetResult<Prisma.$PenjualPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Penjuals.
     * @param {PenjualDeleteManyArgs} args - Arguments to filter Penjuals to delete.
     * @example
     * // Delete a few Penjuals
     * const { count } = await prisma.penjual.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PenjualDeleteManyArgs>(args?: SelectSubset<T, PenjualDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Penjuals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenjualUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Penjuals
     * const penjual = await prisma.penjual.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PenjualUpdateManyArgs>(args: SelectSubset<T, PenjualUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Penjuals and returns the data updated in the database.
     * @param {PenjualUpdateManyAndReturnArgs} args - Arguments to update many Penjuals.
     * @example
     * // Update many Penjuals
     * const penjual = await prisma.penjual.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Penjuals and only return the `id`
     * const penjualWithIdOnly = await prisma.penjual.updateManyAndReturn({
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
    updateManyAndReturn<T extends PenjualUpdateManyAndReturnArgs>(args: SelectSubset<T, PenjualUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenjualPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Penjual.
     * @param {PenjualUpsertArgs} args - Arguments to update or create a Penjual.
     * @example
     * // Update or create a Penjual
     * const penjual = await prisma.penjual.upsert({
     *   create: {
     *     // ... data to create a Penjual
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Penjual we want to update
     *   }
     * })
     */
    upsert<T extends PenjualUpsertArgs>(args: SelectSubset<T, PenjualUpsertArgs<ExtArgs>>): Prisma__PenjualClient<$Result.GetResult<Prisma.$PenjualPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Penjuals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenjualCountArgs} args - Arguments to filter Penjuals to count.
     * @example
     * // Count the number of Penjuals
     * const count = await prisma.penjual.count({
     *   where: {
     *     // ... the filter for the Penjuals we want to count
     *   }
     * })
    **/
    count<T extends PenjualCountArgs>(
      args?: Subset<T, PenjualCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PenjualCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Penjual.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenjualAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PenjualAggregateArgs>(args: Subset<T, PenjualAggregateArgs>): Prisma.PrismaPromise<GetPenjualAggregateType<T>>

    /**
     * Group by Penjual.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenjualGroupByArgs} args - Group by arguments.
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
      T extends PenjualGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PenjualGroupByArgs['orderBy'] }
        : { orderBy?: PenjualGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PenjualGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPenjualGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Penjual model
   */
  readonly fields: PenjualFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Penjual.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PenjualClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pesanan<T extends Penjual$pesananArgs<ExtArgs> = {}>(args?: Subset<T, Penjual$pesananArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PesananPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    produk<T extends Penjual$produkArgs<ExtArgs> = {}>(args?: Subset<T, Penjual$produkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Penjual model
   */
  interface PenjualFieldRefs {
    readonly id: FieldRef<"Penjual", 'String'>
    readonly username: FieldRef<"Penjual", 'String'>
    readonly role: FieldRef<"Penjual", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Penjual findUnique
   */
  export type PenjualFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjual
     */
    select?: PenjualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penjual
     */
    omit?: PenjualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjualInclude<ExtArgs> | null
    /**
     * Filter, which Penjual to fetch.
     */
    where: PenjualWhereUniqueInput
  }

  /**
   * Penjual findUniqueOrThrow
   */
  export type PenjualFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjual
     */
    select?: PenjualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penjual
     */
    omit?: PenjualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjualInclude<ExtArgs> | null
    /**
     * Filter, which Penjual to fetch.
     */
    where: PenjualWhereUniqueInput
  }

  /**
   * Penjual findFirst
   */
  export type PenjualFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjual
     */
    select?: PenjualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penjual
     */
    omit?: PenjualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjualInclude<ExtArgs> | null
    /**
     * Filter, which Penjual to fetch.
     */
    where?: PenjualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penjuals to fetch.
     */
    orderBy?: PenjualOrderByWithRelationInput | PenjualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Penjuals.
     */
    cursor?: PenjualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penjuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penjuals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Penjuals.
     */
    distinct?: PenjualScalarFieldEnum | PenjualScalarFieldEnum[]
  }

  /**
   * Penjual findFirstOrThrow
   */
  export type PenjualFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjual
     */
    select?: PenjualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penjual
     */
    omit?: PenjualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjualInclude<ExtArgs> | null
    /**
     * Filter, which Penjual to fetch.
     */
    where?: PenjualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penjuals to fetch.
     */
    orderBy?: PenjualOrderByWithRelationInput | PenjualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Penjuals.
     */
    cursor?: PenjualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penjuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penjuals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Penjuals.
     */
    distinct?: PenjualScalarFieldEnum | PenjualScalarFieldEnum[]
  }

  /**
   * Penjual findMany
   */
  export type PenjualFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjual
     */
    select?: PenjualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penjual
     */
    omit?: PenjualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjualInclude<ExtArgs> | null
    /**
     * Filter, which Penjuals to fetch.
     */
    where?: PenjualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penjuals to fetch.
     */
    orderBy?: PenjualOrderByWithRelationInput | PenjualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Penjuals.
     */
    cursor?: PenjualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penjuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penjuals.
     */
    skip?: number
    distinct?: PenjualScalarFieldEnum | PenjualScalarFieldEnum[]
  }

  /**
   * Penjual create
   */
  export type PenjualCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjual
     */
    select?: PenjualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penjual
     */
    omit?: PenjualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjualInclude<ExtArgs> | null
    /**
     * The data needed to create a Penjual.
     */
    data: XOR<PenjualCreateInput, PenjualUncheckedCreateInput>
  }

  /**
   * Penjual createMany
   */
  export type PenjualCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Penjuals.
     */
    data: PenjualCreateManyInput | PenjualCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Penjual createManyAndReturn
   */
  export type PenjualCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjual
     */
    select?: PenjualSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Penjual
     */
    omit?: PenjualOmit<ExtArgs> | null
    /**
     * The data used to create many Penjuals.
     */
    data: PenjualCreateManyInput | PenjualCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Penjual update
   */
  export type PenjualUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjual
     */
    select?: PenjualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penjual
     */
    omit?: PenjualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjualInclude<ExtArgs> | null
    /**
     * The data needed to update a Penjual.
     */
    data: XOR<PenjualUpdateInput, PenjualUncheckedUpdateInput>
    /**
     * Choose, which Penjual to update.
     */
    where: PenjualWhereUniqueInput
  }

  /**
   * Penjual updateMany
   */
  export type PenjualUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Penjuals.
     */
    data: XOR<PenjualUpdateManyMutationInput, PenjualUncheckedUpdateManyInput>
    /**
     * Filter which Penjuals to update
     */
    where?: PenjualWhereInput
    /**
     * Limit how many Penjuals to update.
     */
    limit?: number
  }

  /**
   * Penjual updateManyAndReturn
   */
  export type PenjualUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjual
     */
    select?: PenjualSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Penjual
     */
    omit?: PenjualOmit<ExtArgs> | null
    /**
     * The data used to update Penjuals.
     */
    data: XOR<PenjualUpdateManyMutationInput, PenjualUncheckedUpdateManyInput>
    /**
     * Filter which Penjuals to update
     */
    where?: PenjualWhereInput
    /**
     * Limit how many Penjuals to update.
     */
    limit?: number
  }

  /**
   * Penjual upsert
   */
  export type PenjualUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjual
     */
    select?: PenjualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penjual
     */
    omit?: PenjualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjualInclude<ExtArgs> | null
    /**
     * The filter to search for the Penjual to update in case it exists.
     */
    where: PenjualWhereUniqueInput
    /**
     * In case the Penjual found by the `where` argument doesn't exist, create a new Penjual with this data.
     */
    create: XOR<PenjualCreateInput, PenjualUncheckedCreateInput>
    /**
     * In case the Penjual was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PenjualUpdateInput, PenjualUncheckedUpdateInput>
  }

  /**
   * Penjual delete
   */
  export type PenjualDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjual
     */
    select?: PenjualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penjual
     */
    omit?: PenjualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjualInclude<ExtArgs> | null
    /**
     * Filter which Penjual to delete.
     */
    where: PenjualWhereUniqueInput
  }

  /**
   * Penjual deleteMany
   */
  export type PenjualDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Penjuals to delete
     */
    where?: PenjualWhereInput
    /**
     * Limit how many Penjuals to delete.
     */
    limit?: number
  }

  /**
   * Penjual.pesanan
   */
  export type Penjual$pesananArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: PesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pesanan
     */
    omit?: PesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesananInclude<ExtArgs> | null
    where?: PesananWhereInput
    orderBy?: PesananOrderByWithRelationInput | PesananOrderByWithRelationInput[]
    cursor?: PesananWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PesananScalarFieldEnum | PesananScalarFieldEnum[]
  }

  /**
   * Penjual.produk
   */
  export type Penjual$produkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    where?: ProdukWhereInput
    orderBy?: ProdukOrderByWithRelationInput | ProdukOrderByWithRelationInput[]
    cursor?: ProdukWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }

  /**
   * Penjual without action
   */
  export type PenjualDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penjual
     */
    select?: PenjualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penjual
     */
    omit?: PenjualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenjualInclude<ExtArgs> | null
  }


  /**
   * Model Pembayaran
   */

  export type AggregatePembayaran = {
    _count: PembayaranCountAggregateOutputType | null
    _avg: PembayaranAvgAggregateOutputType | null
    _sum: PembayaranSumAggregateOutputType | null
    _min: PembayaranMinAggregateOutputType | null
    _max: PembayaranMaxAggregateOutputType | null
  }

  export type PembayaranAvgAggregateOutputType = {
    id: number | null
    jumlah: number | null
  }

  export type PembayaranSumAggregateOutputType = {
    id: number | null
    jumlah: number | null
  }

  export type PembayaranMinAggregateOutputType = {
    id: number | null
    jumlah: number | null
    pembeliId: string | null
  }

  export type PembayaranMaxAggregateOutputType = {
    id: number | null
    jumlah: number | null
    pembeliId: string | null
  }

  export type PembayaranCountAggregateOutputType = {
    id: number
    jumlah: number
    pembeliId: number
    _all: number
  }


  export type PembayaranAvgAggregateInputType = {
    id?: true
    jumlah?: true
  }

  export type PembayaranSumAggregateInputType = {
    id?: true
    jumlah?: true
  }

  export type PembayaranMinAggregateInputType = {
    id?: true
    jumlah?: true
    pembeliId?: true
  }

  export type PembayaranMaxAggregateInputType = {
    id?: true
    jumlah?: true
    pembeliId?: true
  }

  export type PembayaranCountAggregateInputType = {
    id?: true
    jumlah?: true
    pembeliId?: true
    _all?: true
  }

  export type PembayaranAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pembayaran to aggregate.
     */
    where?: PembayaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pembayarans to fetch.
     */
    orderBy?: PembayaranOrderByWithRelationInput | PembayaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PembayaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pembayarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pembayarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pembayarans
    **/
    _count?: true | PembayaranCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PembayaranAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PembayaranSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PembayaranMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PembayaranMaxAggregateInputType
  }

  export type GetPembayaranAggregateType<T extends PembayaranAggregateArgs> = {
        [P in keyof T & keyof AggregatePembayaran]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePembayaran[P]>
      : GetScalarType<T[P], AggregatePembayaran[P]>
  }




  export type PembayaranGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PembayaranWhereInput
    orderBy?: PembayaranOrderByWithAggregationInput | PembayaranOrderByWithAggregationInput[]
    by: PembayaranScalarFieldEnum[] | PembayaranScalarFieldEnum
    having?: PembayaranScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PembayaranCountAggregateInputType | true
    _avg?: PembayaranAvgAggregateInputType
    _sum?: PembayaranSumAggregateInputType
    _min?: PembayaranMinAggregateInputType
    _max?: PembayaranMaxAggregateInputType
  }

  export type PembayaranGroupByOutputType = {
    id: number
    jumlah: number
    pembeliId: string
    _count: PembayaranCountAggregateOutputType | null
    _avg: PembayaranAvgAggregateOutputType | null
    _sum: PembayaranSumAggregateOutputType | null
    _min: PembayaranMinAggregateOutputType | null
    _max: PembayaranMaxAggregateOutputType | null
  }

  type GetPembayaranGroupByPayload<T extends PembayaranGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PembayaranGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PembayaranGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PembayaranGroupByOutputType[P]>
            : GetScalarType<T[P], PembayaranGroupByOutputType[P]>
        }
      >
    >


  export type PembayaranSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jumlah?: boolean
    pembeliId?: boolean
    pembeli?: boolean | PembeliDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pembayaran"]>

  export type PembayaranSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jumlah?: boolean
    pembeliId?: boolean
    pembeli?: boolean | PembeliDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pembayaran"]>

  export type PembayaranSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jumlah?: boolean
    pembeliId?: boolean
    pembeli?: boolean | PembeliDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pembayaran"]>

  export type PembayaranSelectScalar = {
    id?: boolean
    jumlah?: boolean
    pembeliId?: boolean
  }

  export type PembayaranOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jumlah" | "pembeliId", ExtArgs["result"]["pembayaran"]>
  export type PembayaranInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pembeli?: boolean | PembeliDefaultArgs<ExtArgs>
  }
  export type PembayaranIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pembeli?: boolean | PembeliDefaultArgs<ExtArgs>
  }
  export type PembayaranIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pembeli?: boolean | PembeliDefaultArgs<ExtArgs>
  }

  export type $PembayaranPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pembayaran"
    objects: {
      pembeli: Prisma.$PembeliPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      jumlah: number
      pembeliId: string
    }, ExtArgs["result"]["pembayaran"]>
    composites: {}
  }

  type PembayaranGetPayload<S extends boolean | null | undefined | PembayaranDefaultArgs> = $Result.GetResult<Prisma.$PembayaranPayload, S>

  type PembayaranCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PembayaranFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PembayaranCountAggregateInputType | true
    }

  export interface PembayaranDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pembayaran'], meta: { name: 'Pembayaran' } }
    /**
     * Find zero or one Pembayaran that matches the filter.
     * @param {PembayaranFindUniqueArgs} args - Arguments to find a Pembayaran
     * @example
     * // Get one Pembayaran
     * const pembayaran = await prisma.pembayaran.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PembayaranFindUniqueArgs>(args: SelectSubset<T, PembayaranFindUniqueArgs<ExtArgs>>): Prisma__PembayaranClient<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pembayaran that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PembayaranFindUniqueOrThrowArgs} args - Arguments to find a Pembayaran
     * @example
     * // Get one Pembayaran
     * const pembayaran = await prisma.pembayaran.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PembayaranFindUniqueOrThrowArgs>(args: SelectSubset<T, PembayaranFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PembayaranClient<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pembayaran that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembayaranFindFirstArgs} args - Arguments to find a Pembayaran
     * @example
     * // Get one Pembayaran
     * const pembayaran = await prisma.pembayaran.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PembayaranFindFirstArgs>(args?: SelectSubset<T, PembayaranFindFirstArgs<ExtArgs>>): Prisma__PembayaranClient<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pembayaran that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembayaranFindFirstOrThrowArgs} args - Arguments to find a Pembayaran
     * @example
     * // Get one Pembayaran
     * const pembayaran = await prisma.pembayaran.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PembayaranFindFirstOrThrowArgs>(args?: SelectSubset<T, PembayaranFindFirstOrThrowArgs<ExtArgs>>): Prisma__PembayaranClient<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pembayarans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembayaranFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pembayarans
     * const pembayarans = await prisma.pembayaran.findMany()
     * 
     * // Get first 10 Pembayarans
     * const pembayarans = await prisma.pembayaran.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pembayaranWithIdOnly = await prisma.pembayaran.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PembayaranFindManyArgs>(args?: SelectSubset<T, PembayaranFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pembayaran.
     * @param {PembayaranCreateArgs} args - Arguments to create a Pembayaran.
     * @example
     * // Create one Pembayaran
     * const Pembayaran = await prisma.pembayaran.create({
     *   data: {
     *     // ... data to create a Pembayaran
     *   }
     * })
     * 
     */
    create<T extends PembayaranCreateArgs>(args: SelectSubset<T, PembayaranCreateArgs<ExtArgs>>): Prisma__PembayaranClient<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pembayarans.
     * @param {PembayaranCreateManyArgs} args - Arguments to create many Pembayarans.
     * @example
     * // Create many Pembayarans
     * const pembayaran = await prisma.pembayaran.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PembayaranCreateManyArgs>(args?: SelectSubset<T, PembayaranCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pembayarans and returns the data saved in the database.
     * @param {PembayaranCreateManyAndReturnArgs} args - Arguments to create many Pembayarans.
     * @example
     * // Create many Pembayarans
     * const pembayaran = await prisma.pembayaran.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pembayarans and only return the `id`
     * const pembayaranWithIdOnly = await prisma.pembayaran.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PembayaranCreateManyAndReturnArgs>(args?: SelectSubset<T, PembayaranCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pembayaran.
     * @param {PembayaranDeleteArgs} args - Arguments to delete one Pembayaran.
     * @example
     * // Delete one Pembayaran
     * const Pembayaran = await prisma.pembayaran.delete({
     *   where: {
     *     // ... filter to delete one Pembayaran
     *   }
     * })
     * 
     */
    delete<T extends PembayaranDeleteArgs>(args: SelectSubset<T, PembayaranDeleteArgs<ExtArgs>>): Prisma__PembayaranClient<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pembayaran.
     * @param {PembayaranUpdateArgs} args - Arguments to update one Pembayaran.
     * @example
     * // Update one Pembayaran
     * const pembayaran = await prisma.pembayaran.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PembayaranUpdateArgs>(args: SelectSubset<T, PembayaranUpdateArgs<ExtArgs>>): Prisma__PembayaranClient<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pembayarans.
     * @param {PembayaranDeleteManyArgs} args - Arguments to filter Pembayarans to delete.
     * @example
     * // Delete a few Pembayarans
     * const { count } = await prisma.pembayaran.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PembayaranDeleteManyArgs>(args?: SelectSubset<T, PembayaranDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pembayarans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembayaranUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pembayarans
     * const pembayaran = await prisma.pembayaran.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PembayaranUpdateManyArgs>(args: SelectSubset<T, PembayaranUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pembayarans and returns the data updated in the database.
     * @param {PembayaranUpdateManyAndReturnArgs} args - Arguments to update many Pembayarans.
     * @example
     * // Update many Pembayarans
     * const pembayaran = await prisma.pembayaran.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pembayarans and only return the `id`
     * const pembayaranWithIdOnly = await prisma.pembayaran.updateManyAndReturn({
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
    updateManyAndReturn<T extends PembayaranUpdateManyAndReturnArgs>(args: SelectSubset<T, PembayaranUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pembayaran.
     * @param {PembayaranUpsertArgs} args - Arguments to update or create a Pembayaran.
     * @example
     * // Update or create a Pembayaran
     * const pembayaran = await prisma.pembayaran.upsert({
     *   create: {
     *     // ... data to create a Pembayaran
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pembayaran we want to update
     *   }
     * })
     */
    upsert<T extends PembayaranUpsertArgs>(args: SelectSubset<T, PembayaranUpsertArgs<ExtArgs>>): Prisma__PembayaranClient<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pembayarans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembayaranCountArgs} args - Arguments to filter Pembayarans to count.
     * @example
     * // Count the number of Pembayarans
     * const count = await prisma.pembayaran.count({
     *   where: {
     *     // ... the filter for the Pembayarans we want to count
     *   }
     * })
    **/
    count<T extends PembayaranCountArgs>(
      args?: Subset<T, PembayaranCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PembayaranCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pembayaran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembayaranAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PembayaranAggregateArgs>(args: Subset<T, PembayaranAggregateArgs>): Prisma.PrismaPromise<GetPembayaranAggregateType<T>>

    /**
     * Group by Pembayaran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembayaranGroupByArgs} args - Group by arguments.
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
      T extends PembayaranGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PembayaranGroupByArgs['orderBy'] }
        : { orderBy?: PembayaranGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PembayaranGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPembayaranGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pembayaran model
   */
  readonly fields: PembayaranFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pembayaran.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PembayaranClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pembeli<T extends PembeliDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PembeliDefaultArgs<ExtArgs>>): Prisma__PembeliClient<$Result.GetResult<Prisma.$PembeliPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Pembayaran model
   */
  interface PembayaranFieldRefs {
    readonly id: FieldRef<"Pembayaran", 'Int'>
    readonly jumlah: FieldRef<"Pembayaran", 'Float'>
    readonly pembeliId: FieldRef<"Pembayaran", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pembayaran findUnique
   */
  export type PembayaranFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembayaran
     */
    omit?: PembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
    /**
     * Filter, which Pembayaran to fetch.
     */
    where: PembayaranWhereUniqueInput
  }

  /**
   * Pembayaran findUniqueOrThrow
   */
  export type PembayaranFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembayaran
     */
    omit?: PembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
    /**
     * Filter, which Pembayaran to fetch.
     */
    where: PembayaranWhereUniqueInput
  }

  /**
   * Pembayaran findFirst
   */
  export type PembayaranFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembayaran
     */
    omit?: PembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
    /**
     * Filter, which Pembayaran to fetch.
     */
    where?: PembayaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pembayarans to fetch.
     */
    orderBy?: PembayaranOrderByWithRelationInput | PembayaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pembayarans.
     */
    cursor?: PembayaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pembayarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pembayarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pembayarans.
     */
    distinct?: PembayaranScalarFieldEnum | PembayaranScalarFieldEnum[]
  }

  /**
   * Pembayaran findFirstOrThrow
   */
  export type PembayaranFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembayaran
     */
    omit?: PembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
    /**
     * Filter, which Pembayaran to fetch.
     */
    where?: PembayaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pembayarans to fetch.
     */
    orderBy?: PembayaranOrderByWithRelationInput | PembayaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pembayarans.
     */
    cursor?: PembayaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pembayarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pembayarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pembayarans.
     */
    distinct?: PembayaranScalarFieldEnum | PembayaranScalarFieldEnum[]
  }

  /**
   * Pembayaran findMany
   */
  export type PembayaranFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembayaran
     */
    omit?: PembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
    /**
     * Filter, which Pembayarans to fetch.
     */
    where?: PembayaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pembayarans to fetch.
     */
    orderBy?: PembayaranOrderByWithRelationInput | PembayaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pembayarans.
     */
    cursor?: PembayaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pembayarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pembayarans.
     */
    skip?: number
    distinct?: PembayaranScalarFieldEnum | PembayaranScalarFieldEnum[]
  }

  /**
   * Pembayaran create
   */
  export type PembayaranCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembayaran
     */
    omit?: PembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
    /**
     * The data needed to create a Pembayaran.
     */
    data: XOR<PembayaranCreateInput, PembayaranUncheckedCreateInput>
  }

  /**
   * Pembayaran createMany
   */
  export type PembayaranCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pembayarans.
     */
    data: PembayaranCreateManyInput | PembayaranCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pembayaran createManyAndReturn
   */
  export type PembayaranCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pembayaran
     */
    omit?: PembayaranOmit<ExtArgs> | null
    /**
     * The data used to create many Pembayarans.
     */
    data: PembayaranCreateManyInput | PembayaranCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pembayaran update
   */
  export type PembayaranUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembayaran
     */
    omit?: PembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
    /**
     * The data needed to update a Pembayaran.
     */
    data: XOR<PembayaranUpdateInput, PembayaranUncheckedUpdateInput>
    /**
     * Choose, which Pembayaran to update.
     */
    where: PembayaranWhereUniqueInput
  }

  /**
   * Pembayaran updateMany
   */
  export type PembayaranUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pembayarans.
     */
    data: XOR<PembayaranUpdateManyMutationInput, PembayaranUncheckedUpdateManyInput>
    /**
     * Filter which Pembayarans to update
     */
    where?: PembayaranWhereInput
    /**
     * Limit how many Pembayarans to update.
     */
    limit?: number
  }

  /**
   * Pembayaran updateManyAndReturn
   */
  export type PembayaranUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pembayaran
     */
    omit?: PembayaranOmit<ExtArgs> | null
    /**
     * The data used to update Pembayarans.
     */
    data: XOR<PembayaranUpdateManyMutationInput, PembayaranUncheckedUpdateManyInput>
    /**
     * Filter which Pembayarans to update
     */
    where?: PembayaranWhereInput
    /**
     * Limit how many Pembayarans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pembayaran upsert
   */
  export type PembayaranUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembayaran
     */
    omit?: PembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
    /**
     * The filter to search for the Pembayaran to update in case it exists.
     */
    where: PembayaranWhereUniqueInput
    /**
     * In case the Pembayaran found by the `where` argument doesn't exist, create a new Pembayaran with this data.
     */
    create: XOR<PembayaranCreateInput, PembayaranUncheckedCreateInput>
    /**
     * In case the Pembayaran was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PembayaranUpdateInput, PembayaranUncheckedUpdateInput>
  }

  /**
   * Pembayaran delete
   */
  export type PembayaranDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembayaran
     */
    omit?: PembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
    /**
     * Filter which Pembayaran to delete.
     */
    where: PembayaranWhereUniqueInput
  }

  /**
   * Pembayaran deleteMany
   */
  export type PembayaranDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pembayarans to delete
     */
    where?: PembayaranWhereInput
    /**
     * Limit how many Pembayarans to delete.
     */
    limit?: number
  }

  /**
   * Pembayaran without action
   */
  export type PembayaranDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembayaran
     */
    omit?: PembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
  }


  /**
   * Model Pesanan
   */

  export type AggregatePesanan = {
    _count: PesananCountAggregateOutputType | null
    _avg: PesananAvgAggregateOutputType | null
    _sum: PesananSumAggregateOutputType | null
    _min: PesananMinAggregateOutputType | null
    _max: PesananMaxAggregateOutputType | null
  }

  export type PesananAvgAggregateOutputType = {
    jumlahProduk: number | null
  }

  export type PesananSumAggregateOutputType = {
    jumlahProduk: number | null
  }

  export type PesananMinAggregateOutputType = {
    id: string | null
    jumlahProduk: number | null
    tanggal: Date | null
    status: boolean | null
    pembeliId: string | null
    penjualId: string | null
  }

  export type PesananMaxAggregateOutputType = {
    id: string | null
    jumlahProduk: number | null
    tanggal: Date | null
    status: boolean | null
    pembeliId: string | null
    penjualId: string | null
  }

  export type PesananCountAggregateOutputType = {
    id: number
    jumlahProduk: number
    tanggal: number
    status: number
    pembeliId: number
    penjualId: number
    _all: number
  }


  export type PesananAvgAggregateInputType = {
    jumlahProduk?: true
  }

  export type PesananSumAggregateInputType = {
    jumlahProduk?: true
  }

  export type PesananMinAggregateInputType = {
    id?: true
    jumlahProduk?: true
    tanggal?: true
    status?: true
    pembeliId?: true
    penjualId?: true
  }

  export type PesananMaxAggregateInputType = {
    id?: true
    jumlahProduk?: true
    tanggal?: true
    status?: true
    pembeliId?: true
    penjualId?: true
  }

  export type PesananCountAggregateInputType = {
    id?: true
    jumlahProduk?: true
    tanggal?: true
    status?: true
    pembeliId?: true
    penjualId?: true
    _all?: true
  }

  export type PesananAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pesanan to aggregate.
     */
    where?: PesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pesanans to fetch.
     */
    orderBy?: PesananOrderByWithRelationInput | PesananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pesanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pesanans
    **/
    _count?: true | PesananCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PesananAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PesananSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PesananMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PesananMaxAggregateInputType
  }

  export type GetPesananAggregateType<T extends PesananAggregateArgs> = {
        [P in keyof T & keyof AggregatePesanan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePesanan[P]>
      : GetScalarType<T[P], AggregatePesanan[P]>
  }




  export type PesananGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PesananWhereInput
    orderBy?: PesananOrderByWithAggregationInput | PesananOrderByWithAggregationInput[]
    by: PesananScalarFieldEnum[] | PesananScalarFieldEnum
    having?: PesananScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PesananCountAggregateInputType | true
    _avg?: PesananAvgAggregateInputType
    _sum?: PesananSumAggregateInputType
    _min?: PesananMinAggregateInputType
    _max?: PesananMaxAggregateInputType
  }

  export type PesananGroupByOutputType = {
    id: string
    jumlahProduk: number
    tanggal: Date
    status: boolean
    pembeliId: string
    penjualId: string
    _count: PesananCountAggregateOutputType | null
    _avg: PesananAvgAggregateOutputType | null
    _sum: PesananSumAggregateOutputType | null
    _min: PesananMinAggregateOutputType | null
    _max: PesananMaxAggregateOutputType | null
  }

  type GetPesananGroupByPayload<T extends PesananGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PesananGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PesananGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PesananGroupByOutputType[P]>
            : GetScalarType<T[P], PesananGroupByOutputType[P]>
        }
      >
    >


  export type PesananSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jumlahProduk?: boolean
    tanggal?: boolean
    status?: boolean
    pembeliId?: boolean
    penjualId?: boolean
    pembeli?: boolean | PembeliDefaultArgs<ExtArgs>
    penjual?: boolean | PenjualDefaultArgs<ExtArgs>
    pesananProduk?: boolean | Pesanan$pesananProdukArgs<ExtArgs>
    _count?: boolean | PesananCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pesanan"]>

  export type PesananSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jumlahProduk?: boolean
    tanggal?: boolean
    status?: boolean
    pembeliId?: boolean
    penjualId?: boolean
    pembeli?: boolean | PembeliDefaultArgs<ExtArgs>
    penjual?: boolean | PenjualDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pesanan"]>

  export type PesananSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jumlahProduk?: boolean
    tanggal?: boolean
    status?: boolean
    pembeliId?: boolean
    penjualId?: boolean
    pembeli?: boolean | PembeliDefaultArgs<ExtArgs>
    penjual?: boolean | PenjualDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pesanan"]>

  export type PesananSelectScalar = {
    id?: boolean
    jumlahProduk?: boolean
    tanggal?: boolean
    status?: boolean
    pembeliId?: boolean
    penjualId?: boolean
  }

  export type PesananOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jumlahProduk" | "tanggal" | "status" | "pembeliId" | "penjualId", ExtArgs["result"]["pesanan"]>
  export type PesananInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pembeli?: boolean | PembeliDefaultArgs<ExtArgs>
    penjual?: boolean | PenjualDefaultArgs<ExtArgs>
    pesananProduk?: boolean | Pesanan$pesananProdukArgs<ExtArgs>
    _count?: boolean | PesananCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PesananIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pembeli?: boolean | PembeliDefaultArgs<ExtArgs>
    penjual?: boolean | PenjualDefaultArgs<ExtArgs>
  }
  export type PesananIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pembeli?: boolean | PembeliDefaultArgs<ExtArgs>
    penjual?: boolean | PenjualDefaultArgs<ExtArgs>
  }

  export type $PesananPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pesanan"
    objects: {
      pembeli: Prisma.$PembeliPayload<ExtArgs>
      penjual: Prisma.$PenjualPayload<ExtArgs>
      pesananProduk: Prisma.$PesananProdukPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jumlahProduk: number
      tanggal: Date
      status: boolean
      pembeliId: string
      penjualId: string
    }, ExtArgs["result"]["pesanan"]>
    composites: {}
  }

  type PesananGetPayload<S extends boolean | null | undefined | PesananDefaultArgs> = $Result.GetResult<Prisma.$PesananPayload, S>

  type PesananCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PesananFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PesananCountAggregateInputType | true
    }

  export interface PesananDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pesanan'], meta: { name: 'Pesanan' } }
    /**
     * Find zero or one Pesanan that matches the filter.
     * @param {PesananFindUniqueArgs} args - Arguments to find a Pesanan
     * @example
     * // Get one Pesanan
     * const pesanan = await prisma.pesanan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PesananFindUniqueArgs>(args: SelectSubset<T, PesananFindUniqueArgs<ExtArgs>>): Prisma__PesananClient<$Result.GetResult<Prisma.$PesananPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pesanan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PesananFindUniqueOrThrowArgs} args - Arguments to find a Pesanan
     * @example
     * // Get one Pesanan
     * const pesanan = await prisma.pesanan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PesananFindUniqueOrThrowArgs>(args: SelectSubset<T, PesananFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PesananClient<$Result.GetResult<Prisma.$PesananPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pesanan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesananFindFirstArgs} args - Arguments to find a Pesanan
     * @example
     * // Get one Pesanan
     * const pesanan = await prisma.pesanan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PesananFindFirstArgs>(args?: SelectSubset<T, PesananFindFirstArgs<ExtArgs>>): Prisma__PesananClient<$Result.GetResult<Prisma.$PesananPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pesanan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesananFindFirstOrThrowArgs} args - Arguments to find a Pesanan
     * @example
     * // Get one Pesanan
     * const pesanan = await prisma.pesanan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PesananFindFirstOrThrowArgs>(args?: SelectSubset<T, PesananFindFirstOrThrowArgs<ExtArgs>>): Prisma__PesananClient<$Result.GetResult<Prisma.$PesananPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pesanans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesananFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pesanans
     * const pesanans = await prisma.pesanan.findMany()
     * 
     * // Get first 10 Pesanans
     * const pesanans = await prisma.pesanan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pesananWithIdOnly = await prisma.pesanan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PesananFindManyArgs>(args?: SelectSubset<T, PesananFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PesananPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pesanan.
     * @param {PesananCreateArgs} args - Arguments to create a Pesanan.
     * @example
     * // Create one Pesanan
     * const Pesanan = await prisma.pesanan.create({
     *   data: {
     *     // ... data to create a Pesanan
     *   }
     * })
     * 
     */
    create<T extends PesananCreateArgs>(args: SelectSubset<T, PesananCreateArgs<ExtArgs>>): Prisma__PesananClient<$Result.GetResult<Prisma.$PesananPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pesanans.
     * @param {PesananCreateManyArgs} args - Arguments to create many Pesanans.
     * @example
     * // Create many Pesanans
     * const pesanan = await prisma.pesanan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PesananCreateManyArgs>(args?: SelectSubset<T, PesananCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pesanans and returns the data saved in the database.
     * @param {PesananCreateManyAndReturnArgs} args - Arguments to create many Pesanans.
     * @example
     * // Create many Pesanans
     * const pesanan = await prisma.pesanan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pesanans and only return the `id`
     * const pesananWithIdOnly = await prisma.pesanan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PesananCreateManyAndReturnArgs>(args?: SelectSubset<T, PesananCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PesananPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pesanan.
     * @param {PesananDeleteArgs} args - Arguments to delete one Pesanan.
     * @example
     * // Delete one Pesanan
     * const Pesanan = await prisma.pesanan.delete({
     *   where: {
     *     // ... filter to delete one Pesanan
     *   }
     * })
     * 
     */
    delete<T extends PesananDeleteArgs>(args: SelectSubset<T, PesananDeleteArgs<ExtArgs>>): Prisma__PesananClient<$Result.GetResult<Prisma.$PesananPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pesanan.
     * @param {PesananUpdateArgs} args - Arguments to update one Pesanan.
     * @example
     * // Update one Pesanan
     * const pesanan = await prisma.pesanan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PesananUpdateArgs>(args: SelectSubset<T, PesananUpdateArgs<ExtArgs>>): Prisma__PesananClient<$Result.GetResult<Prisma.$PesananPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pesanans.
     * @param {PesananDeleteManyArgs} args - Arguments to filter Pesanans to delete.
     * @example
     * // Delete a few Pesanans
     * const { count } = await prisma.pesanan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PesananDeleteManyArgs>(args?: SelectSubset<T, PesananDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pesanans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesananUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pesanans
     * const pesanan = await prisma.pesanan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PesananUpdateManyArgs>(args: SelectSubset<T, PesananUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pesanans and returns the data updated in the database.
     * @param {PesananUpdateManyAndReturnArgs} args - Arguments to update many Pesanans.
     * @example
     * // Update many Pesanans
     * const pesanan = await prisma.pesanan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pesanans and only return the `id`
     * const pesananWithIdOnly = await prisma.pesanan.updateManyAndReturn({
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
    updateManyAndReturn<T extends PesananUpdateManyAndReturnArgs>(args: SelectSubset<T, PesananUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PesananPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pesanan.
     * @param {PesananUpsertArgs} args - Arguments to update or create a Pesanan.
     * @example
     * // Update or create a Pesanan
     * const pesanan = await prisma.pesanan.upsert({
     *   create: {
     *     // ... data to create a Pesanan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pesanan we want to update
     *   }
     * })
     */
    upsert<T extends PesananUpsertArgs>(args: SelectSubset<T, PesananUpsertArgs<ExtArgs>>): Prisma__PesananClient<$Result.GetResult<Prisma.$PesananPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pesanans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesananCountArgs} args - Arguments to filter Pesanans to count.
     * @example
     * // Count the number of Pesanans
     * const count = await prisma.pesanan.count({
     *   where: {
     *     // ... the filter for the Pesanans we want to count
     *   }
     * })
    **/
    count<T extends PesananCountArgs>(
      args?: Subset<T, PesananCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PesananCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pesanan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesananAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PesananAggregateArgs>(args: Subset<T, PesananAggregateArgs>): Prisma.PrismaPromise<GetPesananAggregateType<T>>

    /**
     * Group by Pesanan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesananGroupByArgs} args - Group by arguments.
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
      T extends PesananGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PesananGroupByArgs['orderBy'] }
        : { orderBy?: PesananGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PesananGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPesananGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pesanan model
   */
  readonly fields: PesananFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pesanan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PesananClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pembeli<T extends PembeliDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PembeliDefaultArgs<ExtArgs>>): Prisma__PembeliClient<$Result.GetResult<Prisma.$PembeliPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    penjual<T extends PenjualDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PenjualDefaultArgs<ExtArgs>>): Prisma__PenjualClient<$Result.GetResult<Prisma.$PenjualPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pesananProduk<T extends Pesanan$pesananProdukArgs<ExtArgs> = {}>(args?: Subset<T, Pesanan$pesananProdukArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PesananProdukPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Pesanan model
   */
  interface PesananFieldRefs {
    readonly id: FieldRef<"Pesanan", 'String'>
    readonly jumlahProduk: FieldRef<"Pesanan", 'Int'>
    readonly tanggal: FieldRef<"Pesanan", 'DateTime'>
    readonly status: FieldRef<"Pesanan", 'Boolean'>
    readonly pembeliId: FieldRef<"Pesanan", 'String'>
    readonly penjualId: FieldRef<"Pesanan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pesanan findUnique
   */
  export type PesananFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: PesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pesanan
     */
    omit?: PesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesananInclude<ExtArgs> | null
    /**
     * Filter, which Pesanan to fetch.
     */
    where: PesananWhereUniqueInput
  }

  /**
   * Pesanan findUniqueOrThrow
   */
  export type PesananFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: PesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pesanan
     */
    omit?: PesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesananInclude<ExtArgs> | null
    /**
     * Filter, which Pesanan to fetch.
     */
    where: PesananWhereUniqueInput
  }

  /**
   * Pesanan findFirst
   */
  export type PesananFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: PesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pesanan
     */
    omit?: PesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesananInclude<ExtArgs> | null
    /**
     * Filter, which Pesanan to fetch.
     */
    where?: PesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pesanans to fetch.
     */
    orderBy?: PesananOrderByWithRelationInput | PesananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pesanans.
     */
    cursor?: PesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pesanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pesanans.
     */
    distinct?: PesananScalarFieldEnum | PesananScalarFieldEnum[]
  }

  /**
   * Pesanan findFirstOrThrow
   */
  export type PesananFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: PesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pesanan
     */
    omit?: PesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesananInclude<ExtArgs> | null
    /**
     * Filter, which Pesanan to fetch.
     */
    where?: PesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pesanans to fetch.
     */
    orderBy?: PesananOrderByWithRelationInput | PesananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pesanans.
     */
    cursor?: PesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pesanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pesanans.
     */
    distinct?: PesananScalarFieldEnum | PesananScalarFieldEnum[]
  }

  /**
   * Pesanan findMany
   */
  export type PesananFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: PesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pesanan
     */
    omit?: PesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesananInclude<ExtArgs> | null
    /**
     * Filter, which Pesanans to fetch.
     */
    where?: PesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pesanans to fetch.
     */
    orderBy?: PesananOrderByWithRelationInput | PesananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pesanans.
     */
    cursor?: PesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pesanans.
     */
    skip?: number
    distinct?: PesananScalarFieldEnum | PesananScalarFieldEnum[]
  }

  /**
   * Pesanan create
   */
  export type PesananCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: PesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pesanan
     */
    omit?: PesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesananInclude<ExtArgs> | null
    /**
     * The data needed to create a Pesanan.
     */
    data: XOR<PesananCreateInput, PesananUncheckedCreateInput>
  }

  /**
   * Pesanan createMany
   */
  export type PesananCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pesanans.
     */
    data: PesananCreateManyInput | PesananCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pesanan createManyAndReturn
   */
  export type PesananCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: PesananSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pesanan
     */
    omit?: PesananOmit<ExtArgs> | null
    /**
     * The data used to create many Pesanans.
     */
    data: PesananCreateManyInput | PesananCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesananIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pesanan update
   */
  export type PesananUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: PesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pesanan
     */
    omit?: PesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesananInclude<ExtArgs> | null
    /**
     * The data needed to update a Pesanan.
     */
    data: XOR<PesananUpdateInput, PesananUncheckedUpdateInput>
    /**
     * Choose, which Pesanan to update.
     */
    where: PesananWhereUniqueInput
  }

  /**
   * Pesanan updateMany
   */
  export type PesananUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pesanans.
     */
    data: XOR<PesananUpdateManyMutationInput, PesananUncheckedUpdateManyInput>
    /**
     * Filter which Pesanans to update
     */
    where?: PesananWhereInput
    /**
     * Limit how many Pesanans to update.
     */
    limit?: number
  }

  /**
   * Pesanan updateManyAndReturn
   */
  export type PesananUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: PesananSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pesanan
     */
    omit?: PesananOmit<ExtArgs> | null
    /**
     * The data used to update Pesanans.
     */
    data: XOR<PesananUpdateManyMutationInput, PesananUncheckedUpdateManyInput>
    /**
     * Filter which Pesanans to update
     */
    where?: PesananWhereInput
    /**
     * Limit how many Pesanans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesananIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pesanan upsert
   */
  export type PesananUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: PesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pesanan
     */
    omit?: PesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesananInclude<ExtArgs> | null
    /**
     * The filter to search for the Pesanan to update in case it exists.
     */
    where: PesananWhereUniqueInput
    /**
     * In case the Pesanan found by the `where` argument doesn't exist, create a new Pesanan with this data.
     */
    create: XOR<PesananCreateInput, PesananUncheckedCreateInput>
    /**
     * In case the Pesanan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PesananUpdateInput, PesananUncheckedUpdateInput>
  }

  /**
   * Pesanan delete
   */
  export type PesananDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: PesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pesanan
     */
    omit?: PesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesananInclude<ExtArgs> | null
    /**
     * Filter which Pesanan to delete.
     */
    where: PesananWhereUniqueInput
  }

  /**
   * Pesanan deleteMany
   */
  export type PesananDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pesanans to delete
     */
    where?: PesananWhereInput
    /**
     * Limit how many Pesanans to delete.
     */
    limit?: number
  }

  /**
   * Pesanan.pesananProduk
   */
  export type Pesanan$pesananProdukArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesananProduk
     */
    select?: PesananProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PesananProduk
     */
    omit?: PesananProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesananProdukInclude<ExtArgs> | null
    where?: PesananProdukWhereInput
    orderBy?: PesananProdukOrderByWithRelationInput | PesananProdukOrderByWithRelationInput[]
    cursor?: PesananProdukWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PesananProdukScalarFieldEnum | PesananProdukScalarFieldEnum[]
  }

  /**
   * Pesanan without action
   */
  export type PesananDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pesanan
     */
    select?: PesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pesanan
     */
    omit?: PesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesananInclude<ExtArgs> | null
  }


  /**
   * Model Produk
   */

  export type AggregateProduk = {
    _count: ProdukCountAggregateOutputType | null
    _avg: ProdukAvgAggregateOutputType | null
    _sum: ProdukSumAggregateOutputType | null
    _min: ProdukMinAggregateOutputType | null
    _max: ProdukMaxAggregateOutputType | null
  }

  export type ProdukAvgAggregateOutputType = {
    id: number | null
    harga: number | null
    stock: number | null
  }

  export type ProdukSumAggregateOutputType = {
    id: number | null
    harga: number | null
    stock: number | null
  }

  export type ProdukMinAggregateOutputType = {
    id: number | null
    nama: string | null
    harga: number | null
    jenis: string | null
    stock: number | null
    gambarUrl: string | null
    penjualId: string | null
    tanggalDibuat: Date | null
    diperbarui: Date | null
  }

  export type ProdukMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    harga: number | null
    jenis: string | null
    stock: number | null
    gambarUrl: string | null
    penjualId: string | null
    tanggalDibuat: Date | null
    diperbarui: Date | null
  }

  export type ProdukCountAggregateOutputType = {
    id: number
    nama: number
    harga: number
    jenis: number
    stock: number
    gambarUrl: number
    penjualId: number
    tanggalDibuat: number
    diperbarui: number
    _all: number
  }


  export type ProdukAvgAggregateInputType = {
    id?: true
    harga?: true
    stock?: true
  }

  export type ProdukSumAggregateInputType = {
    id?: true
    harga?: true
    stock?: true
  }

  export type ProdukMinAggregateInputType = {
    id?: true
    nama?: true
    harga?: true
    jenis?: true
    stock?: true
    gambarUrl?: true
    penjualId?: true
    tanggalDibuat?: true
    diperbarui?: true
  }

  export type ProdukMaxAggregateInputType = {
    id?: true
    nama?: true
    harga?: true
    jenis?: true
    stock?: true
    gambarUrl?: true
    penjualId?: true
    tanggalDibuat?: true
    diperbarui?: true
  }

  export type ProdukCountAggregateInputType = {
    id?: true
    nama?: true
    harga?: true
    jenis?: true
    stock?: true
    gambarUrl?: true
    penjualId?: true
    tanggalDibuat?: true
    diperbarui?: true
    _all?: true
  }

  export type ProdukAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produk to aggregate.
     */
    where?: ProdukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produks to fetch.
     */
    orderBy?: ProdukOrderByWithRelationInput | ProdukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProdukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produks
    **/
    _count?: true | ProdukCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdukAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdukSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdukMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdukMaxAggregateInputType
  }

  export type GetProdukAggregateType<T extends ProdukAggregateArgs> = {
        [P in keyof T & keyof AggregateProduk]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduk[P]>
      : GetScalarType<T[P], AggregateProduk[P]>
  }




  export type ProdukGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdukWhereInput
    orderBy?: ProdukOrderByWithAggregationInput | ProdukOrderByWithAggregationInput[]
    by: ProdukScalarFieldEnum[] | ProdukScalarFieldEnum
    having?: ProdukScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdukCountAggregateInputType | true
    _avg?: ProdukAvgAggregateInputType
    _sum?: ProdukSumAggregateInputType
    _min?: ProdukMinAggregateInputType
    _max?: ProdukMaxAggregateInputType
  }

  export type ProdukGroupByOutputType = {
    id: number
    nama: string
    harga: number
    jenis: string
    stock: number
    gambarUrl: string | null
    penjualId: string
    tanggalDibuat: Date
    diperbarui: Date
    _count: ProdukCountAggregateOutputType | null
    _avg: ProdukAvgAggregateOutputType | null
    _sum: ProdukSumAggregateOutputType | null
    _min: ProdukMinAggregateOutputType | null
    _max: ProdukMaxAggregateOutputType | null
  }

  type GetProdukGroupByPayload<T extends ProdukGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdukGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdukGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdukGroupByOutputType[P]>
            : GetScalarType<T[P], ProdukGroupByOutputType[P]>
        }
      >
    >


  export type ProdukSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    harga?: boolean
    jenis?: boolean
    stock?: boolean
    gambarUrl?: boolean
    penjualId?: boolean
    tanggalDibuat?: boolean
    diperbarui?: boolean
    penjual?: boolean | PenjualDefaultArgs<ExtArgs>
    pesananProduk?: boolean | Produk$pesananProdukArgs<ExtArgs>
    _count?: boolean | ProdukCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produk"]>

  export type ProdukSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    harga?: boolean
    jenis?: boolean
    stock?: boolean
    gambarUrl?: boolean
    penjualId?: boolean
    tanggalDibuat?: boolean
    diperbarui?: boolean
    penjual?: boolean | PenjualDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produk"]>

  export type ProdukSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    harga?: boolean
    jenis?: boolean
    stock?: boolean
    gambarUrl?: boolean
    penjualId?: boolean
    tanggalDibuat?: boolean
    diperbarui?: boolean
    penjual?: boolean | PenjualDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produk"]>

  export type ProdukSelectScalar = {
    id?: boolean
    nama?: boolean
    harga?: boolean
    jenis?: boolean
    stock?: boolean
    gambarUrl?: boolean
    penjualId?: boolean
    tanggalDibuat?: boolean
    diperbarui?: boolean
  }

  export type ProdukOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "harga" | "jenis" | "stock" | "gambarUrl" | "penjualId" | "tanggalDibuat" | "diperbarui", ExtArgs["result"]["produk"]>
  export type ProdukInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    penjual?: boolean | PenjualDefaultArgs<ExtArgs>
    pesananProduk?: boolean | Produk$pesananProdukArgs<ExtArgs>
    _count?: boolean | ProdukCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProdukIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    penjual?: boolean | PenjualDefaultArgs<ExtArgs>
  }
  export type ProdukIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    penjual?: boolean | PenjualDefaultArgs<ExtArgs>
  }

  export type $ProdukPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produk"
    objects: {
      penjual: Prisma.$PenjualPayload<ExtArgs>
      pesananProduk: Prisma.$PesananProdukPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      harga: number
      jenis: string
      stock: number
      gambarUrl: string | null
      penjualId: string
      tanggalDibuat: Date
      diperbarui: Date
    }, ExtArgs["result"]["produk"]>
    composites: {}
  }

  type ProdukGetPayload<S extends boolean | null | undefined | ProdukDefaultArgs> = $Result.GetResult<Prisma.$ProdukPayload, S>

  type ProdukCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProdukFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdukCountAggregateInputType | true
    }

  export interface ProdukDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produk'], meta: { name: 'Produk' } }
    /**
     * Find zero or one Produk that matches the filter.
     * @param {ProdukFindUniqueArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProdukFindUniqueArgs>(args: SelectSubset<T, ProdukFindUniqueArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produk that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProdukFindUniqueOrThrowArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProdukFindUniqueOrThrowArgs>(args: SelectSubset<T, ProdukFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produk that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukFindFirstArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProdukFindFirstArgs>(args?: SelectSubset<T, ProdukFindFirstArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produk that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukFindFirstOrThrowArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProdukFindFirstOrThrowArgs>(args?: SelectSubset<T, ProdukFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produks
     * const produks = await prisma.produk.findMany()
     * 
     * // Get first 10 Produks
     * const produks = await prisma.produk.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produkWithIdOnly = await prisma.produk.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProdukFindManyArgs>(args?: SelectSubset<T, ProdukFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produk.
     * @param {ProdukCreateArgs} args - Arguments to create a Produk.
     * @example
     * // Create one Produk
     * const Produk = await prisma.produk.create({
     *   data: {
     *     // ... data to create a Produk
     *   }
     * })
     * 
     */
    create<T extends ProdukCreateArgs>(args: SelectSubset<T, ProdukCreateArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produks.
     * @param {ProdukCreateManyArgs} args - Arguments to create many Produks.
     * @example
     * // Create many Produks
     * const produk = await prisma.produk.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProdukCreateManyArgs>(args?: SelectSubset<T, ProdukCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produks and returns the data saved in the database.
     * @param {ProdukCreateManyAndReturnArgs} args - Arguments to create many Produks.
     * @example
     * // Create many Produks
     * const produk = await prisma.produk.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produks and only return the `id`
     * const produkWithIdOnly = await prisma.produk.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProdukCreateManyAndReturnArgs>(args?: SelectSubset<T, ProdukCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produk.
     * @param {ProdukDeleteArgs} args - Arguments to delete one Produk.
     * @example
     * // Delete one Produk
     * const Produk = await prisma.produk.delete({
     *   where: {
     *     // ... filter to delete one Produk
     *   }
     * })
     * 
     */
    delete<T extends ProdukDeleteArgs>(args: SelectSubset<T, ProdukDeleteArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produk.
     * @param {ProdukUpdateArgs} args - Arguments to update one Produk.
     * @example
     * // Update one Produk
     * const produk = await prisma.produk.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProdukUpdateArgs>(args: SelectSubset<T, ProdukUpdateArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produks.
     * @param {ProdukDeleteManyArgs} args - Arguments to filter Produks to delete.
     * @example
     * // Delete a few Produks
     * const { count } = await prisma.produk.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProdukDeleteManyArgs>(args?: SelectSubset<T, ProdukDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produks
     * const produk = await prisma.produk.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProdukUpdateManyArgs>(args: SelectSubset<T, ProdukUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produks and returns the data updated in the database.
     * @param {ProdukUpdateManyAndReturnArgs} args - Arguments to update many Produks.
     * @example
     * // Update many Produks
     * const produk = await prisma.produk.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produks and only return the `id`
     * const produkWithIdOnly = await prisma.produk.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProdukUpdateManyAndReturnArgs>(args: SelectSubset<T, ProdukUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produk.
     * @param {ProdukUpsertArgs} args - Arguments to update or create a Produk.
     * @example
     * // Update or create a Produk
     * const produk = await prisma.produk.upsert({
     *   create: {
     *     // ... data to create a Produk
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produk we want to update
     *   }
     * })
     */
    upsert<T extends ProdukUpsertArgs>(args: SelectSubset<T, ProdukUpsertArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukCountArgs} args - Arguments to filter Produks to count.
     * @example
     * // Count the number of Produks
     * const count = await prisma.produk.count({
     *   where: {
     *     // ... the filter for the Produks we want to count
     *   }
     * })
    **/
    count<T extends ProdukCountArgs>(
      args?: Subset<T, ProdukCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdukCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProdukAggregateArgs>(args: Subset<T, ProdukAggregateArgs>): Prisma.PrismaPromise<GetProdukAggregateType<T>>

    /**
     * Group by Produk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukGroupByArgs} args - Group by arguments.
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
      T extends ProdukGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProdukGroupByArgs['orderBy'] }
        : { orderBy?: ProdukGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProdukGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdukGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produk model
   */
  readonly fields: ProdukFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produk.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProdukClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    penjual<T extends PenjualDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PenjualDefaultArgs<ExtArgs>>): Prisma__PenjualClient<$Result.GetResult<Prisma.$PenjualPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pesananProduk<T extends Produk$pesananProdukArgs<ExtArgs> = {}>(args?: Subset<T, Produk$pesananProdukArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PesananProdukPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Produk model
   */
  interface ProdukFieldRefs {
    readonly id: FieldRef<"Produk", 'Int'>
    readonly nama: FieldRef<"Produk", 'String'>
    readonly harga: FieldRef<"Produk", 'Int'>
    readonly jenis: FieldRef<"Produk", 'String'>
    readonly stock: FieldRef<"Produk", 'Int'>
    readonly gambarUrl: FieldRef<"Produk", 'String'>
    readonly penjualId: FieldRef<"Produk", 'String'>
    readonly tanggalDibuat: FieldRef<"Produk", 'DateTime'>
    readonly diperbarui: FieldRef<"Produk", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Produk findUnique
   */
  export type ProdukFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * Filter, which Produk to fetch.
     */
    where: ProdukWhereUniqueInput
  }

  /**
   * Produk findUniqueOrThrow
   */
  export type ProdukFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * Filter, which Produk to fetch.
     */
    where: ProdukWhereUniqueInput
  }

  /**
   * Produk findFirst
   */
  export type ProdukFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * Filter, which Produk to fetch.
     */
    where?: ProdukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produks to fetch.
     */
    orderBy?: ProdukOrderByWithRelationInput | ProdukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produks.
     */
    cursor?: ProdukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produks.
     */
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }

  /**
   * Produk findFirstOrThrow
   */
  export type ProdukFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * Filter, which Produk to fetch.
     */
    where?: ProdukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produks to fetch.
     */
    orderBy?: ProdukOrderByWithRelationInput | ProdukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produks.
     */
    cursor?: ProdukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produks.
     */
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }

  /**
   * Produk findMany
   */
  export type ProdukFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * Filter, which Produks to fetch.
     */
    where?: ProdukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produks to fetch.
     */
    orderBy?: ProdukOrderByWithRelationInput | ProdukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produks.
     */
    cursor?: ProdukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produks.
     */
    skip?: number
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }

  /**
   * Produk create
   */
  export type ProdukCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * The data needed to create a Produk.
     */
    data: XOR<ProdukCreateInput, ProdukUncheckedCreateInput>
  }

  /**
   * Produk createMany
   */
  export type ProdukCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produks.
     */
    data: ProdukCreateManyInput | ProdukCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produk createManyAndReturn
   */
  export type ProdukCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * The data used to create many Produks.
     */
    data: ProdukCreateManyInput | ProdukCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produk update
   */
  export type ProdukUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * The data needed to update a Produk.
     */
    data: XOR<ProdukUpdateInput, ProdukUncheckedUpdateInput>
    /**
     * Choose, which Produk to update.
     */
    where: ProdukWhereUniqueInput
  }

  /**
   * Produk updateMany
   */
  export type ProdukUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produks.
     */
    data: XOR<ProdukUpdateManyMutationInput, ProdukUncheckedUpdateManyInput>
    /**
     * Filter which Produks to update
     */
    where?: ProdukWhereInput
    /**
     * Limit how many Produks to update.
     */
    limit?: number
  }

  /**
   * Produk updateManyAndReturn
   */
  export type ProdukUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * The data used to update Produks.
     */
    data: XOR<ProdukUpdateManyMutationInput, ProdukUncheckedUpdateManyInput>
    /**
     * Filter which Produks to update
     */
    where?: ProdukWhereInput
    /**
     * Limit how many Produks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produk upsert
   */
  export type ProdukUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * The filter to search for the Produk to update in case it exists.
     */
    where: ProdukWhereUniqueInput
    /**
     * In case the Produk found by the `where` argument doesn't exist, create a new Produk with this data.
     */
    create: XOR<ProdukCreateInput, ProdukUncheckedCreateInput>
    /**
     * In case the Produk was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProdukUpdateInput, ProdukUncheckedUpdateInput>
  }

  /**
   * Produk delete
   */
  export type ProdukDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * Filter which Produk to delete.
     */
    where: ProdukWhereUniqueInput
  }

  /**
   * Produk deleteMany
   */
  export type ProdukDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produks to delete
     */
    where?: ProdukWhereInput
    /**
     * Limit how many Produks to delete.
     */
    limit?: number
  }

  /**
   * Produk.pesananProduk
   */
  export type Produk$pesananProdukArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesananProduk
     */
    select?: PesananProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PesananProduk
     */
    omit?: PesananProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesananProdukInclude<ExtArgs> | null
    where?: PesananProdukWhereInput
    orderBy?: PesananProdukOrderByWithRelationInput | PesananProdukOrderByWithRelationInput[]
    cursor?: PesananProdukWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PesananProdukScalarFieldEnum | PesananProdukScalarFieldEnum[]
  }

  /**
   * Produk without action
   */
  export type ProdukDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
  }


  /**
   * Model PesananProduk
   */

  export type AggregatePesananProduk = {
    _count: PesananProdukCountAggregateOutputType | null
    _avg: PesananProdukAvgAggregateOutputType | null
    _sum: PesananProdukSumAggregateOutputType | null
    _min: PesananProdukMinAggregateOutputType | null
    _max: PesananProdukMaxAggregateOutputType | null
  }

  export type PesananProdukAvgAggregateOutputType = {
    produkId: number | null
    jumlahProduk: number | null
  }

  export type PesananProdukSumAggregateOutputType = {
    produkId: number | null
    jumlahProduk: number | null
  }

  export type PesananProdukMinAggregateOutputType = {
    pesananId: string | null
    produkId: number | null
    jumlahProduk: number | null
  }

  export type PesananProdukMaxAggregateOutputType = {
    pesananId: string | null
    produkId: number | null
    jumlahProduk: number | null
  }

  export type PesananProdukCountAggregateOutputType = {
    pesananId: number
    produkId: number
    jumlahProduk: number
    _all: number
  }


  export type PesananProdukAvgAggregateInputType = {
    produkId?: true
    jumlahProduk?: true
  }

  export type PesananProdukSumAggregateInputType = {
    produkId?: true
    jumlahProduk?: true
  }

  export type PesananProdukMinAggregateInputType = {
    pesananId?: true
    produkId?: true
    jumlahProduk?: true
  }

  export type PesananProdukMaxAggregateInputType = {
    pesananId?: true
    produkId?: true
    jumlahProduk?: true
  }

  export type PesananProdukCountAggregateInputType = {
    pesananId?: true
    produkId?: true
    jumlahProduk?: true
    _all?: true
  }

  export type PesananProdukAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PesananProduk to aggregate.
     */
    where?: PesananProdukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PesananProduks to fetch.
     */
    orderBy?: PesananProdukOrderByWithRelationInput | PesananProdukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PesananProdukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PesananProduks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PesananProduks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PesananProduks
    **/
    _count?: true | PesananProdukCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PesananProdukAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PesananProdukSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PesananProdukMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PesananProdukMaxAggregateInputType
  }

  export type GetPesananProdukAggregateType<T extends PesananProdukAggregateArgs> = {
        [P in keyof T & keyof AggregatePesananProduk]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePesananProduk[P]>
      : GetScalarType<T[P], AggregatePesananProduk[P]>
  }




  export type PesananProdukGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PesananProdukWhereInput
    orderBy?: PesananProdukOrderByWithAggregationInput | PesananProdukOrderByWithAggregationInput[]
    by: PesananProdukScalarFieldEnum[] | PesananProdukScalarFieldEnum
    having?: PesananProdukScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PesananProdukCountAggregateInputType | true
    _avg?: PesananProdukAvgAggregateInputType
    _sum?: PesananProdukSumAggregateInputType
    _min?: PesananProdukMinAggregateInputType
    _max?: PesananProdukMaxAggregateInputType
  }

  export type PesananProdukGroupByOutputType = {
    pesananId: string
    produkId: number
    jumlahProduk: number
    _count: PesananProdukCountAggregateOutputType | null
    _avg: PesananProdukAvgAggregateOutputType | null
    _sum: PesananProdukSumAggregateOutputType | null
    _min: PesananProdukMinAggregateOutputType | null
    _max: PesananProdukMaxAggregateOutputType | null
  }

  type GetPesananProdukGroupByPayload<T extends PesananProdukGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PesananProdukGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PesananProdukGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PesananProdukGroupByOutputType[P]>
            : GetScalarType<T[P], PesananProdukGroupByOutputType[P]>
        }
      >
    >


  export type PesananProdukSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pesananId?: boolean
    produkId?: boolean
    jumlahProduk?: boolean
    pesanan?: boolean | PesananDefaultArgs<ExtArgs>
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pesananProduk"]>

  export type PesananProdukSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pesananId?: boolean
    produkId?: boolean
    jumlahProduk?: boolean
    pesanan?: boolean | PesananDefaultArgs<ExtArgs>
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pesananProduk"]>

  export type PesananProdukSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pesananId?: boolean
    produkId?: boolean
    jumlahProduk?: boolean
    pesanan?: boolean | PesananDefaultArgs<ExtArgs>
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pesananProduk"]>

  export type PesananProdukSelectScalar = {
    pesananId?: boolean
    produkId?: boolean
    jumlahProduk?: boolean
  }

  export type PesananProdukOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pesananId" | "produkId" | "jumlahProduk", ExtArgs["result"]["pesananProduk"]>
  export type PesananProdukInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pesanan?: boolean | PesananDefaultArgs<ExtArgs>
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
  }
  export type PesananProdukIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pesanan?: boolean | PesananDefaultArgs<ExtArgs>
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
  }
  export type PesananProdukIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pesanan?: boolean | PesananDefaultArgs<ExtArgs>
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
  }

  export type $PesananProdukPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PesananProduk"
    objects: {
      pesanan: Prisma.$PesananPayload<ExtArgs>
      produk: Prisma.$ProdukPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      pesananId: string
      produkId: number
      jumlahProduk: number
    }, ExtArgs["result"]["pesananProduk"]>
    composites: {}
  }

  type PesananProdukGetPayload<S extends boolean | null | undefined | PesananProdukDefaultArgs> = $Result.GetResult<Prisma.$PesananProdukPayload, S>

  type PesananProdukCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PesananProdukFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PesananProdukCountAggregateInputType | true
    }

  export interface PesananProdukDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PesananProduk'], meta: { name: 'PesananProduk' } }
    /**
     * Find zero or one PesananProduk that matches the filter.
     * @param {PesananProdukFindUniqueArgs} args - Arguments to find a PesananProduk
     * @example
     * // Get one PesananProduk
     * const pesananProduk = await prisma.pesananProduk.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PesananProdukFindUniqueArgs>(args: SelectSubset<T, PesananProdukFindUniqueArgs<ExtArgs>>): Prisma__PesananProdukClient<$Result.GetResult<Prisma.$PesananProdukPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PesananProduk that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PesananProdukFindUniqueOrThrowArgs} args - Arguments to find a PesananProduk
     * @example
     * // Get one PesananProduk
     * const pesananProduk = await prisma.pesananProduk.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PesananProdukFindUniqueOrThrowArgs>(args: SelectSubset<T, PesananProdukFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PesananProdukClient<$Result.GetResult<Prisma.$PesananProdukPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PesananProduk that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesananProdukFindFirstArgs} args - Arguments to find a PesananProduk
     * @example
     * // Get one PesananProduk
     * const pesananProduk = await prisma.pesananProduk.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PesananProdukFindFirstArgs>(args?: SelectSubset<T, PesananProdukFindFirstArgs<ExtArgs>>): Prisma__PesananProdukClient<$Result.GetResult<Prisma.$PesananProdukPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PesananProduk that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesananProdukFindFirstOrThrowArgs} args - Arguments to find a PesananProduk
     * @example
     * // Get one PesananProduk
     * const pesananProduk = await prisma.pesananProduk.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PesananProdukFindFirstOrThrowArgs>(args?: SelectSubset<T, PesananProdukFindFirstOrThrowArgs<ExtArgs>>): Prisma__PesananProdukClient<$Result.GetResult<Prisma.$PesananProdukPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PesananProduks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesananProdukFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PesananProduks
     * const pesananProduks = await prisma.pesananProduk.findMany()
     * 
     * // Get first 10 PesananProduks
     * const pesananProduks = await prisma.pesananProduk.findMany({ take: 10 })
     * 
     * // Only select the `pesananId`
     * const pesananProdukWithPesananIdOnly = await prisma.pesananProduk.findMany({ select: { pesananId: true } })
     * 
     */
    findMany<T extends PesananProdukFindManyArgs>(args?: SelectSubset<T, PesananProdukFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PesananProdukPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PesananProduk.
     * @param {PesananProdukCreateArgs} args - Arguments to create a PesananProduk.
     * @example
     * // Create one PesananProduk
     * const PesananProduk = await prisma.pesananProduk.create({
     *   data: {
     *     // ... data to create a PesananProduk
     *   }
     * })
     * 
     */
    create<T extends PesananProdukCreateArgs>(args: SelectSubset<T, PesananProdukCreateArgs<ExtArgs>>): Prisma__PesananProdukClient<$Result.GetResult<Prisma.$PesananProdukPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PesananProduks.
     * @param {PesananProdukCreateManyArgs} args - Arguments to create many PesananProduks.
     * @example
     * // Create many PesananProduks
     * const pesananProduk = await prisma.pesananProduk.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PesananProdukCreateManyArgs>(args?: SelectSubset<T, PesananProdukCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PesananProduks and returns the data saved in the database.
     * @param {PesananProdukCreateManyAndReturnArgs} args - Arguments to create many PesananProduks.
     * @example
     * // Create many PesananProduks
     * const pesananProduk = await prisma.pesananProduk.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PesananProduks and only return the `pesananId`
     * const pesananProdukWithPesananIdOnly = await prisma.pesananProduk.createManyAndReturn({
     *   select: { pesananId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PesananProdukCreateManyAndReturnArgs>(args?: SelectSubset<T, PesananProdukCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PesananProdukPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PesananProduk.
     * @param {PesananProdukDeleteArgs} args - Arguments to delete one PesananProduk.
     * @example
     * // Delete one PesananProduk
     * const PesananProduk = await prisma.pesananProduk.delete({
     *   where: {
     *     // ... filter to delete one PesananProduk
     *   }
     * })
     * 
     */
    delete<T extends PesananProdukDeleteArgs>(args: SelectSubset<T, PesananProdukDeleteArgs<ExtArgs>>): Prisma__PesananProdukClient<$Result.GetResult<Prisma.$PesananProdukPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PesananProduk.
     * @param {PesananProdukUpdateArgs} args - Arguments to update one PesananProduk.
     * @example
     * // Update one PesananProduk
     * const pesananProduk = await prisma.pesananProduk.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PesananProdukUpdateArgs>(args: SelectSubset<T, PesananProdukUpdateArgs<ExtArgs>>): Prisma__PesananProdukClient<$Result.GetResult<Prisma.$PesananProdukPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PesananProduks.
     * @param {PesananProdukDeleteManyArgs} args - Arguments to filter PesananProduks to delete.
     * @example
     * // Delete a few PesananProduks
     * const { count } = await prisma.pesananProduk.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PesananProdukDeleteManyArgs>(args?: SelectSubset<T, PesananProdukDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PesananProduks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesananProdukUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PesananProduks
     * const pesananProduk = await prisma.pesananProduk.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PesananProdukUpdateManyArgs>(args: SelectSubset<T, PesananProdukUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PesananProduks and returns the data updated in the database.
     * @param {PesananProdukUpdateManyAndReturnArgs} args - Arguments to update many PesananProduks.
     * @example
     * // Update many PesananProduks
     * const pesananProduk = await prisma.pesananProduk.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PesananProduks and only return the `pesananId`
     * const pesananProdukWithPesananIdOnly = await prisma.pesananProduk.updateManyAndReturn({
     *   select: { pesananId: true },
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
    updateManyAndReturn<T extends PesananProdukUpdateManyAndReturnArgs>(args: SelectSubset<T, PesananProdukUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PesananProdukPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PesananProduk.
     * @param {PesananProdukUpsertArgs} args - Arguments to update or create a PesananProduk.
     * @example
     * // Update or create a PesananProduk
     * const pesananProduk = await prisma.pesananProduk.upsert({
     *   create: {
     *     // ... data to create a PesananProduk
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PesananProduk we want to update
     *   }
     * })
     */
    upsert<T extends PesananProdukUpsertArgs>(args: SelectSubset<T, PesananProdukUpsertArgs<ExtArgs>>): Prisma__PesananProdukClient<$Result.GetResult<Prisma.$PesananProdukPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PesananProduks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesananProdukCountArgs} args - Arguments to filter PesananProduks to count.
     * @example
     * // Count the number of PesananProduks
     * const count = await prisma.pesananProduk.count({
     *   where: {
     *     // ... the filter for the PesananProduks we want to count
     *   }
     * })
    **/
    count<T extends PesananProdukCountArgs>(
      args?: Subset<T, PesananProdukCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PesananProdukCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PesananProduk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesananProdukAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PesananProdukAggregateArgs>(args: Subset<T, PesananProdukAggregateArgs>): Prisma.PrismaPromise<GetPesananProdukAggregateType<T>>

    /**
     * Group by PesananProduk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PesananProdukGroupByArgs} args - Group by arguments.
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
      T extends PesananProdukGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PesananProdukGroupByArgs['orderBy'] }
        : { orderBy?: PesananProdukGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PesananProdukGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPesananProdukGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PesananProduk model
   */
  readonly fields: PesananProdukFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PesananProduk.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PesananProdukClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pesanan<T extends PesananDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PesananDefaultArgs<ExtArgs>>): Prisma__PesananClient<$Result.GetResult<Prisma.$PesananPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produk<T extends ProdukDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdukDefaultArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PesananProduk model
   */
  interface PesananProdukFieldRefs {
    readonly pesananId: FieldRef<"PesananProduk", 'String'>
    readonly produkId: FieldRef<"PesananProduk", 'Int'>
    readonly jumlahProduk: FieldRef<"PesananProduk", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PesananProduk findUnique
   */
  export type PesananProdukFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesananProduk
     */
    select?: PesananProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PesananProduk
     */
    omit?: PesananProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesananProdukInclude<ExtArgs> | null
    /**
     * Filter, which PesananProduk to fetch.
     */
    where: PesananProdukWhereUniqueInput
  }

  /**
   * PesananProduk findUniqueOrThrow
   */
  export type PesananProdukFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesananProduk
     */
    select?: PesananProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PesananProduk
     */
    omit?: PesananProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesananProdukInclude<ExtArgs> | null
    /**
     * Filter, which PesananProduk to fetch.
     */
    where: PesananProdukWhereUniqueInput
  }

  /**
   * PesananProduk findFirst
   */
  export type PesananProdukFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesananProduk
     */
    select?: PesananProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PesananProduk
     */
    omit?: PesananProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesananProdukInclude<ExtArgs> | null
    /**
     * Filter, which PesananProduk to fetch.
     */
    where?: PesananProdukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PesananProduks to fetch.
     */
    orderBy?: PesananProdukOrderByWithRelationInput | PesananProdukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PesananProduks.
     */
    cursor?: PesananProdukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PesananProduks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PesananProduks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PesananProduks.
     */
    distinct?: PesananProdukScalarFieldEnum | PesananProdukScalarFieldEnum[]
  }

  /**
   * PesananProduk findFirstOrThrow
   */
  export type PesananProdukFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesananProduk
     */
    select?: PesananProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PesananProduk
     */
    omit?: PesananProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesananProdukInclude<ExtArgs> | null
    /**
     * Filter, which PesananProduk to fetch.
     */
    where?: PesananProdukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PesananProduks to fetch.
     */
    orderBy?: PesananProdukOrderByWithRelationInput | PesananProdukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PesananProduks.
     */
    cursor?: PesananProdukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PesananProduks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PesananProduks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PesananProduks.
     */
    distinct?: PesananProdukScalarFieldEnum | PesananProdukScalarFieldEnum[]
  }

  /**
   * PesananProduk findMany
   */
  export type PesananProdukFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesananProduk
     */
    select?: PesananProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PesananProduk
     */
    omit?: PesananProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesananProdukInclude<ExtArgs> | null
    /**
     * Filter, which PesananProduks to fetch.
     */
    where?: PesananProdukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PesananProduks to fetch.
     */
    orderBy?: PesananProdukOrderByWithRelationInput | PesananProdukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PesananProduks.
     */
    cursor?: PesananProdukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PesananProduks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PesananProduks.
     */
    skip?: number
    distinct?: PesananProdukScalarFieldEnum | PesananProdukScalarFieldEnum[]
  }

  /**
   * PesananProduk create
   */
  export type PesananProdukCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesananProduk
     */
    select?: PesananProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PesananProduk
     */
    omit?: PesananProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesananProdukInclude<ExtArgs> | null
    /**
     * The data needed to create a PesananProduk.
     */
    data: XOR<PesananProdukCreateInput, PesananProdukUncheckedCreateInput>
  }

  /**
   * PesananProduk createMany
   */
  export type PesananProdukCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PesananProduks.
     */
    data: PesananProdukCreateManyInput | PesananProdukCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PesananProduk createManyAndReturn
   */
  export type PesananProdukCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesananProduk
     */
    select?: PesananProdukSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PesananProduk
     */
    omit?: PesananProdukOmit<ExtArgs> | null
    /**
     * The data used to create many PesananProduks.
     */
    data: PesananProdukCreateManyInput | PesananProdukCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesananProdukIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PesananProduk update
   */
  export type PesananProdukUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesananProduk
     */
    select?: PesananProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PesananProduk
     */
    omit?: PesananProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesananProdukInclude<ExtArgs> | null
    /**
     * The data needed to update a PesananProduk.
     */
    data: XOR<PesananProdukUpdateInput, PesananProdukUncheckedUpdateInput>
    /**
     * Choose, which PesananProduk to update.
     */
    where: PesananProdukWhereUniqueInput
  }

  /**
   * PesananProduk updateMany
   */
  export type PesananProdukUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PesananProduks.
     */
    data: XOR<PesananProdukUpdateManyMutationInput, PesananProdukUncheckedUpdateManyInput>
    /**
     * Filter which PesananProduks to update
     */
    where?: PesananProdukWhereInput
    /**
     * Limit how many PesananProduks to update.
     */
    limit?: number
  }

  /**
   * PesananProduk updateManyAndReturn
   */
  export type PesananProdukUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesananProduk
     */
    select?: PesananProdukSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PesananProduk
     */
    omit?: PesananProdukOmit<ExtArgs> | null
    /**
     * The data used to update PesananProduks.
     */
    data: XOR<PesananProdukUpdateManyMutationInput, PesananProdukUncheckedUpdateManyInput>
    /**
     * Filter which PesananProduks to update
     */
    where?: PesananProdukWhereInput
    /**
     * Limit how many PesananProduks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesananProdukIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PesananProduk upsert
   */
  export type PesananProdukUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesananProduk
     */
    select?: PesananProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PesananProduk
     */
    omit?: PesananProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesananProdukInclude<ExtArgs> | null
    /**
     * The filter to search for the PesananProduk to update in case it exists.
     */
    where: PesananProdukWhereUniqueInput
    /**
     * In case the PesananProduk found by the `where` argument doesn't exist, create a new PesananProduk with this data.
     */
    create: XOR<PesananProdukCreateInput, PesananProdukUncheckedCreateInput>
    /**
     * In case the PesananProduk was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PesananProdukUpdateInput, PesananProdukUncheckedUpdateInput>
  }

  /**
   * PesananProduk delete
   */
  export type PesananProdukDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesananProduk
     */
    select?: PesananProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PesananProduk
     */
    omit?: PesananProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesananProdukInclude<ExtArgs> | null
    /**
     * Filter which PesananProduk to delete.
     */
    where: PesananProdukWhereUniqueInput
  }

  /**
   * PesananProduk deleteMany
   */
  export type PesananProdukDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PesananProduks to delete
     */
    where?: PesananProdukWhereInput
    /**
     * Limit how many PesananProduks to delete.
     */
    limit?: number
  }

  /**
   * PesananProduk without action
   */
  export type PesananProdukDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PesananProduk
     */
    select?: PesananProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PesananProduk
     */
    omit?: PesananProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PesananProdukInclude<ExtArgs> | null
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


  export const PembeliScalarFieldEnum: {
    id: 'id',
    username: 'username',
    role: 'role'
  };

  export type PembeliScalarFieldEnum = (typeof PembeliScalarFieldEnum)[keyof typeof PembeliScalarFieldEnum]


  export const PenjualScalarFieldEnum: {
    id: 'id',
    username: 'username',
    role: 'role'
  };

  export type PenjualScalarFieldEnum = (typeof PenjualScalarFieldEnum)[keyof typeof PenjualScalarFieldEnum]


  export const PembayaranScalarFieldEnum: {
    id: 'id',
    jumlah: 'jumlah',
    pembeliId: 'pembeliId'
  };

  export type PembayaranScalarFieldEnum = (typeof PembayaranScalarFieldEnum)[keyof typeof PembayaranScalarFieldEnum]


  export const PesananScalarFieldEnum: {
    id: 'id',
    jumlahProduk: 'jumlahProduk',
    tanggal: 'tanggal',
    status: 'status',
    pembeliId: 'pembeliId',
    penjualId: 'penjualId'
  };

  export type PesananScalarFieldEnum = (typeof PesananScalarFieldEnum)[keyof typeof PesananScalarFieldEnum]


  export const ProdukScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    harga: 'harga',
    jenis: 'jenis',
    stock: 'stock',
    gambarUrl: 'gambarUrl',
    penjualId: 'penjualId',
    tanggalDibuat: 'tanggalDibuat',
    diperbarui: 'diperbarui'
  };

  export type ProdukScalarFieldEnum = (typeof ProdukScalarFieldEnum)[keyof typeof ProdukScalarFieldEnum]


  export const PesananProdukScalarFieldEnum: {
    pesananId: 'pesananId',
    produkId: 'produkId',
    jumlahProduk: 'jumlahProduk'
  };

  export type PesananProdukScalarFieldEnum = (typeof PesananProdukScalarFieldEnum)[keyof typeof PesananProdukScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type PembeliWhereInput = {
    AND?: PembeliWhereInput | PembeliWhereInput[]
    OR?: PembeliWhereInput[]
    NOT?: PembeliWhereInput | PembeliWhereInput[]
    id?: StringFilter<"Pembeli"> | string
    username?: StringFilter<"Pembeli"> | string
    role?: StringFilter<"Pembeli"> | string
    pembayaran?: PembayaranListRelationFilter
    pesanan?: PesananListRelationFilter
  }

  export type PembeliOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    role?: SortOrder
    pembayaran?: PembayaranOrderByRelationAggregateInput
    pesanan?: PesananOrderByRelationAggregateInput
  }

  export type PembeliWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PembeliWhereInput | PembeliWhereInput[]
    OR?: PembeliWhereInput[]
    NOT?: PembeliWhereInput | PembeliWhereInput[]
    username?: StringFilter<"Pembeli"> | string
    role?: StringFilter<"Pembeli"> | string
    pembayaran?: PembayaranListRelationFilter
    pesanan?: PesananListRelationFilter
  }, "id">

  export type PembeliOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    role?: SortOrder
    _count?: PembeliCountOrderByAggregateInput
    _max?: PembeliMaxOrderByAggregateInput
    _min?: PembeliMinOrderByAggregateInput
  }

  export type PembeliScalarWhereWithAggregatesInput = {
    AND?: PembeliScalarWhereWithAggregatesInput | PembeliScalarWhereWithAggregatesInput[]
    OR?: PembeliScalarWhereWithAggregatesInput[]
    NOT?: PembeliScalarWhereWithAggregatesInput | PembeliScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pembeli"> | string
    username?: StringWithAggregatesFilter<"Pembeli"> | string
    role?: StringWithAggregatesFilter<"Pembeli"> | string
  }

  export type PenjualWhereInput = {
    AND?: PenjualWhereInput | PenjualWhereInput[]
    OR?: PenjualWhereInput[]
    NOT?: PenjualWhereInput | PenjualWhereInput[]
    id?: StringFilter<"Penjual"> | string
    username?: StringFilter<"Penjual"> | string
    role?: StringFilter<"Penjual"> | string
    pesanan?: PesananListRelationFilter
    produk?: ProdukListRelationFilter
  }

  export type PenjualOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    role?: SortOrder
    pesanan?: PesananOrderByRelationAggregateInput
    produk?: ProdukOrderByRelationAggregateInput
  }

  export type PenjualWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PenjualWhereInput | PenjualWhereInput[]
    OR?: PenjualWhereInput[]
    NOT?: PenjualWhereInput | PenjualWhereInput[]
    username?: StringFilter<"Penjual"> | string
    role?: StringFilter<"Penjual"> | string
    pesanan?: PesananListRelationFilter
    produk?: ProdukListRelationFilter
  }, "id">

  export type PenjualOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    role?: SortOrder
    _count?: PenjualCountOrderByAggregateInput
    _max?: PenjualMaxOrderByAggregateInput
    _min?: PenjualMinOrderByAggregateInput
  }

  export type PenjualScalarWhereWithAggregatesInput = {
    AND?: PenjualScalarWhereWithAggregatesInput | PenjualScalarWhereWithAggregatesInput[]
    OR?: PenjualScalarWhereWithAggregatesInput[]
    NOT?: PenjualScalarWhereWithAggregatesInput | PenjualScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Penjual"> | string
    username?: StringWithAggregatesFilter<"Penjual"> | string
    role?: StringWithAggregatesFilter<"Penjual"> | string
  }

  export type PembayaranWhereInput = {
    AND?: PembayaranWhereInput | PembayaranWhereInput[]
    OR?: PembayaranWhereInput[]
    NOT?: PembayaranWhereInput | PembayaranWhereInput[]
    id?: IntFilter<"Pembayaran"> | number
    jumlah?: FloatFilter<"Pembayaran"> | number
    pembeliId?: StringFilter<"Pembayaran"> | string
    pembeli?: XOR<PembeliScalarRelationFilter, PembeliWhereInput>
  }

  export type PembayaranOrderByWithRelationInput = {
    id?: SortOrder
    jumlah?: SortOrder
    pembeliId?: SortOrder
    pembeli?: PembeliOrderByWithRelationInput
  }

  export type PembayaranWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PembayaranWhereInput | PembayaranWhereInput[]
    OR?: PembayaranWhereInput[]
    NOT?: PembayaranWhereInput | PembayaranWhereInput[]
    jumlah?: FloatFilter<"Pembayaran"> | number
    pembeliId?: StringFilter<"Pembayaran"> | string
    pembeli?: XOR<PembeliScalarRelationFilter, PembeliWhereInput>
  }, "id">

  export type PembayaranOrderByWithAggregationInput = {
    id?: SortOrder
    jumlah?: SortOrder
    pembeliId?: SortOrder
    _count?: PembayaranCountOrderByAggregateInput
    _avg?: PembayaranAvgOrderByAggregateInput
    _max?: PembayaranMaxOrderByAggregateInput
    _min?: PembayaranMinOrderByAggregateInput
    _sum?: PembayaranSumOrderByAggregateInput
  }

  export type PembayaranScalarWhereWithAggregatesInput = {
    AND?: PembayaranScalarWhereWithAggregatesInput | PembayaranScalarWhereWithAggregatesInput[]
    OR?: PembayaranScalarWhereWithAggregatesInput[]
    NOT?: PembayaranScalarWhereWithAggregatesInput | PembayaranScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pembayaran"> | number
    jumlah?: FloatWithAggregatesFilter<"Pembayaran"> | number
    pembeliId?: StringWithAggregatesFilter<"Pembayaran"> | string
  }

  export type PesananWhereInput = {
    AND?: PesananWhereInput | PesananWhereInput[]
    OR?: PesananWhereInput[]
    NOT?: PesananWhereInput | PesananWhereInput[]
    id?: StringFilter<"Pesanan"> | string
    jumlahProduk?: IntFilter<"Pesanan"> | number
    tanggal?: DateTimeFilter<"Pesanan"> | Date | string
    status?: BoolFilter<"Pesanan"> | boolean
    pembeliId?: StringFilter<"Pesanan"> | string
    penjualId?: StringFilter<"Pesanan"> | string
    pembeli?: XOR<PembeliScalarRelationFilter, PembeliWhereInput>
    penjual?: XOR<PenjualScalarRelationFilter, PenjualWhereInput>
    pesananProduk?: PesananProdukListRelationFilter
  }

  export type PesananOrderByWithRelationInput = {
    id?: SortOrder
    jumlahProduk?: SortOrder
    tanggal?: SortOrder
    status?: SortOrder
    pembeliId?: SortOrder
    penjualId?: SortOrder
    pembeli?: PembeliOrderByWithRelationInput
    penjual?: PenjualOrderByWithRelationInput
    pesananProduk?: PesananProdukOrderByRelationAggregateInput
  }

  export type PesananWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PesananWhereInput | PesananWhereInput[]
    OR?: PesananWhereInput[]
    NOT?: PesananWhereInput | PesananWhereInput[]
    jumlahProduk?: IntFilter<"Pesanan"> | number
    tanggal?: DateTimeFilter<"Pesanan"> | Date | string
    status?: BoolFilter<"Pesanan"> | boolean
    pembeliId?: StringFilter<"Pesanan"> | string
    penjualId?: StringFilter<"Pesanan"> | string
    pembeli?: XOR<PembeliScalarRelationFilter, PembeliWhereInput>
    penjual?: XOR<PenjualScalarRelationFilter, PenjualWhereInput>
    pesananProduk?: PesananProdukListRelationFilter
  }, "id">

  export type PesananOrderByWithAggregationInput = {
    id?: SortOrder
    jumlahProduk?: SortOrder
    tanggal?: SortOrder
    status?: SortOrder
    pembeliId?: SortOrder
    penjualId?: SortOrder
    _count?: PesananCountOrderByAggregateInput
    _avg?: PesananAvgOrderByAggregateInput
    _max?: PesananMaxOrderByAggregateInput
    _min?: PesananMinOrderByAggregateInput
    _sum?: PesananSumOrderByAggregateInput
  }

  export type PesananScalarWhereWithAggregatesInput = {
    AND?: PesananScalarWhereWithAggregatesInput | PesananScalarWhereWithAggregatesInput[]
    OR?: PesananScalarWhereWithAggregatesInput[]
    NOT?: PesananScalarWhereWithAggregatesInput | PesananScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pesanan"> | string
    jumlahProduk?: IntWithAggregatesFilter<"Pesanan"> | number
    tanggal?: DateTimeWithAggregatesFilter<"Pesanan"> | Date | string
    status?: BoolWithAggregatesFilter<"Pesanan"> | boolean
    pembeliId?: StringWithAggregatesFilter<"Pesanan"> | string
    penjualId?: StringWithAggregatesFilter<"Pesanan"> | string
  }

  export type ProdukWhereInput = {
    AND?: ProdukWhereInput | ProdukWhereInput[]
    OR?: ProdukWhereInput[]
    NOT?: ProdukWhereInput | ProdukWhereInput[]
    id?: IntFilter<"Produk"> | number
    nama?: StringFilter<"Produk"> | string
    harga?: IntFilter<"Produk"> | number
    jenis?: StringFilter<"Produk"> | string
    stock?: IntFilter<"Produk"> | number
    gambarUrl?: StringNullableFilter<"Produk"> | string | null
    penjualId?: StringFilter<"Produk"> | string
    tanggalDibuat?: DateTimeFilter<"Produk"> | Date | string
    diperbarui?: DateTimeFilter<"Produk"> | Date | string
    penjual?: XOR<PenjualScalarRelationFilter, PenjualWhereInput>
    pesananProduk?: PesananProdukListRelationFilter
  }

  export type ProdukOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    harga?: SortOrder
    jenis?: SortOrder
    stock?: SortOrder
    gambarUrl?: SortOrderInput | SortOrder
    penjualId?: SortOrder
    tanggalDibuat?: SortOrder
    diperbarui?: SortOrder
    penjual?: PenjualOrderByWithRelationInput
    pesananProduk?: PesananProdukOrderByRelationAggregateInput
  }

  export type ProdukWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProdukWhereInput | ProdukWhereInput[]
    OR?: ProdukWhereInput[]
    NOT?: ProdukWhereInput | ProdukWhereInput[]
    nama?: StringFilter<"Produk"> | string
    harga?: IntFilter<"Produk"> | number
    jenis?: StringFilter<"Produk"> | string
    stock?: IntFilter<"Produk"> | number
    gambarUrl?: StringNullableFilter<"Produk"> | string | null
    penjualId?: StringFilter<"Produk"> | string
    tanggalDibuat?: DateTimeFilter<"Produk"> | Date | string
    diperbarui?: DateTimeFilter<"Produk"> | Date | string
    penjual?: XOR<PenjualScalarRelationFilter, PenjualWhereInput>
    pesananProduk?: PesananProdukListRelationFilter
  }, "id">

  export type ProdukOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    harga?: SortOrder
    jenis?: SortOrder
    stock?: SortOrder
    gambarUrl?: SortOrderInput | SortOrder
    penjualId?: SortOrder
    tanggalDibuat?: SortOrder
    diperbarui?: SortOrder
    _count?: ProdukCountOrderByAggregateInput
    _avg?: ProdukAvgOrderByAggregateInput
    _max?: ProdukMaxOrderByAggregateInput
    _min?: ProdukMinOrderByAggregateInput
    _sum?: ProdukSumOrderByAggregateInput
  }

  export type ProdukScalarWhereWithAggregatesInput = {
    AND?: ProdukScalarWhereWithAggregatesInput | ProdukScalarWhereWithAggregatesInput[]
    OR?: ProdukScalarWhereWithAggregatesInput[]
    NOT?: ProdukScalarWhereWithAggregatesInput | ProdukScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Produk"> | number
    nama?: StringWithAggregatesFilter<"Produk"> | string
    harga?: IntWithAggregatesFilter<"Produk"> | number
    jenis?: StringWithAggregatesFilter<"Produk"> | string
    stock?: IntWithAggregatesFilter<"Produk"> | number
    gambarUrl?: StringNullableWithAggregatesFilter<"Produk"> | string | null
    penjualId?: StringWithAggregatesFilter<"Produk"> | string
    tanggalDibuat?: DateTimeWithAggregatesFilter<"Produk"> | Date | string
    diperbarui?: DateTimeWithAggregatesFilter<"Produk"> | Date | string
  }

  export type PesananProdukWhereInput = {
    AND?: PesananProdukWhereInput | PesananProdukWhereInput[]
    OR?: PesananProdukWhereInput[]
    NOT?: PesananProdukWhereInput | PesananProdukWhereInput[]
    pesananId?: StringFilter<"PesananProduk"> | string
    produkId?: IntFilter<"PesananProduk"> | number
    jumlahProduk?: IntFilter<"PesananProduk"> | number
    pesanan?: XOR<PesananScalarRelationFilter, PesananWhereInput>
    produk?: XOR<ProdukScalarRelationFilter, ProdukWhereInput>
  }

  export type PesananProdukOrderByWithRelationInput = {
    pesananId?: SortOrder
    produkId?: SortOrder
    jumlahProduk?: SortOrder
    pesanan?: PesananOrderByWithRelationInput
    produk?: ProdukOrderByWithRelationInput
  }

  export type PesananProdukWhereUniqueInput = Prisma.AtLeast<{
    pesananId_produkId?: PesananProdukPesananIdProdukIdCompoundUniqueInput
    AND?: PesananProdukWhereInput | PesananProdukWhereInput[]
    OR?: PesananProdukWhereInput[]
    NOT?: PesananProdukWhereInput | PesananProdukWhereInput[]
    pesananId?: StringFilter<"PesananProduk"> | string
    produkId?: IntFilter<"PesananProduk"> | number
    jumlahProduk?: IntFilter<"PesananProduk"> | number
    pesanan?: XOR<PesananScalarRelationFilter, PesananWhereInput>
    produk?: XOR<ProdukScalarRelationFilter, ProdukWhereInput>
  }, "pesananId_produkId">

  export type PesananProdukOrderByWithAggregationInput = {
    pesananId?: SortOrder
    produkId?: SortOrder
    jumlahProduk?: SortOrder
    _count?: PesananProdukCountOrderByAggregateInput
    _avg?: PesananProdukAvgOrderByAggregateInput
    _max?: PesananProdukMaxOrderByAggregateInput
    _min?: PesananProdukMinOrderByAggregateInput
    _sum?: PesananProdukSumOrderByAggregateInput
  }

  export type PesananProdukScalarWhereWithAggregatesInput = {
    AND?: PesananProdukScalarWhereWithAggregatesInput | PesananProdukScalarWhereWithAggregatesInput[]
    OR?: PesananProdukScalarWhereWithAggregatesInput[]
    NOT?: PesananProdukScalarWhereWithAggregatesInput | PesananProdukScalarWhereWithAggregatesInput[]
    pesananId?: StringWithAggregatesFilter<"PesananProduk"> | string
    produkId?: IntWithAggregatesFilter<"PesananProduk"> | number
    jumlahProduk?: IntWithAggregatesFilter<"PesananProduk"> | number
  }

  export type PembeliCreateInput = {
    id: string
    username: string
    role: string
    pembayaran?: PembayaranCreateNestedManyWithoutPembeliInput
    pesanan?: PesananCreateNestedManyWithoutPembeliInput
  }

  export type PembeliUncheckedCreateInput = {
    id: string
    username: string
    role: string
    pembayaran?: PembayaranUncheckedCreateNestedManyWithoutPembeliInput
    pesanan?: PesananUncheckedCreateNestedManyWithoutPembeliInput
  }

  export type PembeliUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    pembayaran?: PembayaranUpdateManyWithoutPembeliNestedInput
    pesanan?: PesananUpdateManyWithoutPembeliNestedInput
  }

  export type PembeliUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    pembayaran?: PembayaranUncheckedUpdateManyWithoutPembeliNestedInput
    pesanan?: PesananUncheckedUpdateManyWithoutPembeliNestedInput
  }

  export type PembeliCreateManyInput = {
    id: string
    username: string
    role: string
  }

  export type PembeliUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type PembeliUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type PenjualCreateInput = {
    id: string
    username: string
    role: string
    pesanan?: PesananCreateNestedManyWithoutPenjualInput
    produk?: ProdukCreateNestedManyWithoutPenjualInput
  }

  export type PenjualUncheckedCreateInput = {
    id: string
    username: string
    role: string
    pesanan?: PesananUncheckedCreateNestedManyWithoutPenjualInput
    produk?: ProdukUncheckedCreateNestedManyWithoutPenjualInput
  }

  export type PenjualUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    pesanan?: PesananUpdateManyWithoutPenjualNestedInput
    produk?: ProdukUpdateManyWithoutPenjualNestedInput
  }

  export type PenjualUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    pesanan?: PesananUncheckedUpdateManyWithoutPenjualNestedInput
    produk?: ProdukUncheckedUpdateManyWithoutPenjualNestedInput
  }

  export type PenjualCreateManyInput = {
    id: string
    username: string
    role: string
  }

  export type PenjualUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type PenjualUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type PembayaranCreateInput = {
    jumlah: number
    pembeli: PembeliCreateNestedOneWithoutPembayaranInput
  }

  export type PembayaranUncheckedCreateInput = {
    id?: number
    jumlah: number
    pembeliId: string
  }

  export type PembayaranUpdateInput = {
    jumlah?: FloatFieldUpdateOperationsInput | number
    pembeli?: PembeliUpdateOneRequiredWithoutPembayaranNestedInput
  }

  export type PembayaranUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    jumlah?: FloatFieldUpdateOperationsInput | number
    pembeliId?: StringFieldUpdateOperationsInput | string
  }

  export type PembayaranCreateManyInput = {
    id?: number
    jumlah: number
    pembeliId: string
  }

  export type PembayaranUpdateManyMutationInput = {
    jumlah?: FloatFieldUpdateOperationsInput | number
  }

  export type PembayaranUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    jumlah?: FloatFieldUpdateOperationsInput | number
    pembeliId?: StringFieldUpdateOperationsInput | string
  }

  export type PesananCreateInput = {
    id?: string
    jumlahProduk: number
    tanggal?: Date | string
    status: boolean
    pembeli: PembeliCreateNestedOneWithoutPesananInput
    penjual: PenjualCreateNestedOneWithoutPesananInput
    pesananProduk?: PesananProdukCreateNestedManyWithoutPesananInput
  }

  export type PesananUncheckedCreateInput = {
    id?: string
    jumlahProduk: number
    tanggal?: Date | string
    status: boolean
    pembeliId: string
    penjualId: string
    pesananProduk?: PesananProdukUncheckedCreateNestedManyWithoutPesananInput
  }

  export type PesananUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlahProduk?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    pembeli?: PembeliUpdateOneRequiredWithoutPesananNestedInput
    penjual?: PenjualUpdateOneRequiredWithoutPesananNestedInput
    pesananProduk?: PesananProdukUpdateManyWithoutPesananNestedInput
  }

  export type PesananUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlahProduk?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    pembeliId?: StringFieldUpdateOperationsInput | string
    penjualId?: StringFieldUpdateOperationsInput | string
    pesananProduk?: PesananProdukUncheckedUpdateManyWithoutPesananNestedInput
  }

  export type PesananCreateManyInput = {
    id?: string
    jumlahProduk: number
    tanggal?: Date | string
    status: boolean
    pembeliId: string
    penjualId: string
  }

  export type PesananUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlahProduk?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PesananUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlahProduk?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    pembeliId?: StringFieldUpdateOperationsInput | string
    penjualId?: StringFieldUpdateOperationsInput | string
  }

  export type ProdukCreateInput = {
    nama: string
    harga: number
    jenis: string
    stock: number
    gambarUrl?: string | null
    tanggalDibuat?: Date | string
    diperbarui?: Date | string
    penjual: PenjualCreateNestedOneWithoutProdukInput
    pesananProduk?: PesananProdukCreateNestedManyWithoutProdukInput
  }

  export type ProdukUncheckedCreateInput = {
    id?: number
    nama: string
    harga: number
    jenis: string
    stock: number
    gambarUrl?: string | null
    penjualId: string
    tanggalDibuat?: Date | string
    diperbarui?: Date | string
    pesananProduk?: PesananProdukUncheckedCreateNestedManyWithoutProdukInput
  }

  export type ProdukUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    jenis?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    gambarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalDibuat?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui?: DateTimeFieldUpdateOperationsInput | Date | string
    penjual?: PenjualUpdateOneRequiredWithoutProdukNestedInput
    pesananProduk?: PesananProdukUpdateManyWithoutProdukNestedInput
  }

  export type ProdukUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    jenis?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    gambarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    penjualId?: StringFieldUpdateOperationsInput | string
    tanggalDibuat?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui?: DateTimeFieldUpdateOperationsInput | Date | string
    pesananProduk?: PesananProdukUncheckedUpdateManyWithoutProdukNestedInput
  }

  export type ProdukCreateManyInput = {
    id?: number
    nama: string
    harga: number
    jenis: string
    stock: number
    gambarUrl?: string | null
    penjualId: string
    tanggalDibuat?: Date | string
    diperbarui?: Date | string
  }

  export type ProdukUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    jenis?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    gambarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalDibuat?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProdukUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    jenis?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    gambarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    penjualId?: StringFieldUpdateOperationsInput | string
    tanggalDibuat?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PesananProdukCreateInput = {
    jumlahProduk?: number
    pesanan: PesananCreateNestedOneWithoutPesananProdukInput
    produk: ProdukCreateNestedOneWithoutPesananProdukInput
  }

  export type PesananProdukUncheckedCreateInput = {
    pesananId: string
    produkId: number
    jumlahProduk?: number
  }

  export type PesananProdukUpdateInput = {
    jumlahProduk?: IntFieldUpdateOperationsInput | number
    pesanan?: PesananUpdateOneRequiredWithoutPesananProdukNestedInput
    produk?: ProdukUpdateOneRequiredWithoutPesananProdukNestedInput
  }

  export type PesananProdukUncheckedUpdateInput = {
    pesananId?: StringFieldUpdateOperationsInput | string
    produkId?: IntFieldUpdateOperationsInput | number
    jumlahProduk?: IntFieldUpdateOperationsInput | number
  }

  export type PesananProdukCreateManyInput = {
    pesananId: string
    produkId: number
    jumlahProduk?: number
  }

  export type PesananProdukUpdateManyMutationInput = {
    jumlahProduk?: IntFieldUpdateOperationsInput | number
  }

  export type PesananProdukUncheckedUpdateManyInput = {
    pesananId?: StringFieldUpdateOperationsInput | string
    produkId?: IntFieldUpdateOperationsInput | number
    jumlahProduk?: IntFieldUpdateOperationsInput | number
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

  export type PembayaranListRelationFilter = {
    every?: PembayaranWhereInput
    some?: PembayaranWhereInput
    none?: PembayaranWhereInput
  }

  export type PesananListRelationFilter = {
    every?: PesananWhereInput
    some?: PesananWhereInput
    none?: PesananWhereInput
  }

  export type PembayaranOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PesananOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PembeliCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    role?: SortOrder
  }

  export type PembeliMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    role?: SortOrder
  }

  export type PembeliMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    role?: SortOrder
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

  export type ProdukListRelationFilter = {
    every?: ProdukWhereInput
    some?: ProdukWhereInput
    none?: ProdukWhereInput
  }

  export type ProdukOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PenjualCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    role?: SortOrder
  }

  export type PenjualMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    role?: SortOrder
  }

  export type PenjualMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    role?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type PembeliScalarRelationFilter = {
    is?: PembeliWhereInput
    isNot?: PembeliWhereInput
  }

  export type PembayaranCountOrderByAggregateInput = {
    id?: SortOrder
    jumlah?: SortOrder
    pembeliId?: SortOrder
  }

  export type PembayaranAvgOrderByAggregateInput = {
    id?: SortOrder
    jumlah?: SortOrder
  }

  export type PembayaranMaxOrderByAggregateInput = {
    id?: SortOrder
    jumlah?: SortOrder
    pembeliId?: SortOrder
  }

  export type PembayaranMinOrderByAggregateInput = {
    id?: SortOrder
    jumlah?: SortOrder
    pembeliId?: SortOrder
  }

  export type PembayaranSumOrderByAggregateInput = {
    id?: SortOrder
    jumlah?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PenjualScalarRelationFilter = {
    is?: PenjualWhereInput
    isNot?: PenjualWhereInput
  }

  export type PesananProdukListRelationFilter = {
    every?: PesananProdukWhereInput
    some?: PesananProdukWhereInput
    none?: PesananProdukWhereInput
  }

  export type PesananProdukOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PesananCountOrderByAggregateInput = {
    id?: SortOrder
    jumlahProduk?: SortOrder
    tanggal?: SortOrder
    status?: SortOrder
    pembeliId?: SortOrder
    penjualId?: SortOrder
  }

  export type PesananAvgOrderByAggregateInput = {
    jumlahProduk?: SortOrder
  }

  export type PesananMaxOrderByAggregateInput = {
    id?: SortOrder
    jumlahProduk?: SortOrder
    tanggal?: SortOrder
    status?: SortOrder
    pembeliId?: SortOrder
    penjualId?: SortOrder
  }

  export type PesananMinOrderByAggregateInput = {
    id?: SortOrder
    jumlahProduk?: SortOrder
    tanggal?: SortOrder
    status?: SortOrder
    pembeliId?: SortOrder
    penjualId?: SortOrder
  }

  export type PesananSumOrderByAggregateInput = {
    jumlahProduk?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProdukCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    harga?: SortOrder
    jenis?: SortOrder
    stock?: SortOrder
    gambarUrl?: SortOrder
    penjualId?: SortOrder
    tanggalDibuat?: SortOrder
    diperbarui?: SortOrder
  }

  export type ProdukAvgOrderByAggregateInput = {
    id?: SortOrder
    harga?: SortOrder
    stock?: SortOrder
  }

  export type ProdukMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    harga?: SortOrder
    jenis?: SortOrder
    stock?: SortOrder
    gambarUrl?: SortOrder
    penjualId?: SortOrder
    tanggalDibuat?: SortOrder
    diperbarui?: SortOrder
  }

  export type ProdukMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    harga?: SortOrder
    jenis?: SortOrder
    stock?: SortOrder
    gambarUrl?: SortOrder
    penjualId?: SortOrder
    tanggalDibuat?: SortOrder
    diperbarui?: SortOrder
  }

  export type ProdukSumOrderByAggregateInput = {
    id?: SortOrder
    harga?: SortOrder
    stock?: SortOrder
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

  export type PesananScalarRelationFilter = {
    is?: PesananWhereInput
    isNot?: PesananWhereInput
  }

  export type ProdukScalarRelationFilter = {
    is?: ProdukWhereInput
    isNot?: ProdukWhereInput
  }

  export type PesananProdukPesananIdProdukIdCompoundUniqueInput = {
    pesananId: string
    produkId: number
  }

  export type PesananProdukCountOrderByAggregateInput = {
    pesananId?: SortOrder
    produkId?: SortOrder
    jumlahProduk?: SortOrder
  }

  export type PesananProdukAvgOrderByAggregateInput = {
    produkId?: SortOrder
    jumlahProduk?: SortOrder
  }

  export type PesananProdukMaxOrderByAggregateInput = {
    pesananId?: SortOrder
    produkId?: SortOrder
    jumlahProduk?: SortOrder
  }

  export type PesananProdukMinOrderByAggregateInput = {
    pesananId?: SortOrder
    produkId?: SortOrder
    jumlahProduk?: SortOrder
  }

  export type PesananProdukSumOrderByAggregateInput = {
    produkId?: SortOrder
    jumlahProduk?: SortOrder
  }

  export type PembayaranCreateNestedManyWithoutPembeliInput = {
    create?: XOR<PembayaranCreateWithoutPembeliInput, PembayaranUncheckedCreateWithoutPembeliInput> | PembayaranCreateWithoutPembeliInput[] | PembayaranUncheckedCreateWithoutPembeliInput[]
    connectOrCreate?: PembayaranCreateOrConnectWithoutPembeliInput | PembayaranCreateOrConnectWithoutPembeliInput[]
    createMany?: PembayaranCreateManyPembeliInputEnvelope
    connect?: PembayaranWhereUniqueInput | PembayaranWhereUniqueInput[]
  }

  export type PesananCreateNestedManyWithoutPembeliInput = {
    create?: XOR<PesananCreateWithoutPembeliInput, PesananUncheckedCreateWithoutPembeliInput> | PesananCreateWithoutPembeliInput[] | PesananUncheckedCreateWithoutPembeliInput[]
    connectOrCreate?: PesananCreateOrConnectWithoutPembeliInput | PesananCreateOrConnectWithoutPembeliInput[]
    createMany?: PesananCreateManyPembeliInputEnvelope
    connect?: PesananWhereUniqueInput | PesananWhereUniqueInput[]
  }

  export type PembayaranUncheckedCreateNestedManyWithoutPembeliInput = {
    create?: XOR<PembayaranCreateWithoutPembeliInput, PembayaranUncheckedCreateWithoutPembeliInput> | PembayaranCreateWithoutPembeliInput[] | PembayaranUncheckedCreateWithoutPembeliInput[]
    connectOrCreate?: PembayaranCreateOrConnectWithoutPembeliInput | PembayaranCreateOrConnectWithoutPembeliInput[]
    createMany?: PembayaranCreateManyPembeliInputEnvelope
    connect?: PembayaranWhereUniqueInput | PembayaranWhereUniqueInput[]
  }

  export type PesananUncheckedCreateNestedManyWithoutPembeliInput = {
    create?: XOR<PesananCreateWithoutPembeliInput, PesananUncheckedCreateWithoutPembeliInput> | PesananCreateWithoutPembeliInput[] | PesananUncheckedCreateWithoutPembeliInput[]
    connectOrCreate?: PesananCreateOrConnectWithoutPembeliInput | PesananCreateOrConnectWithoutPembeliInput[]
    createMany?: PesananCreateManyPembeliInputEnvelope
    connect?: PesananWhereUniqueInput | PesananWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type PembayaranUpdateManyWithoutPembeliNestedInput = {
    create?: XOR<PembayaranCreateWithoutPembeliInput, PembayaranUncheckedCreateWithoutPembeliInput> | PembayaranCreateWithoutPembeliInput[] | PembayaranUncheckedCreateWithoutPembeliInput[]
    connectOrCreate?: PembayaranCreateOrConnectWithoutPembeliInput | PembayaranCreateOrConnectWithoutPembeliInput[]
    upsert?: PembayaranUpsertWithWhereUniqueWithoutPembeliInput | PembayaranUpsertWithWhereUniqueWithoutPembeliInput[]
    createMany?: PembayaranCreateManyPembeliInputEnvelope
    set?: PembayaranWhereUniqueInput | PembayaranWhereUniqueInput[]
    disconnect?: PembayaranWhereUniqueInput | PembayaranWhereUniqueInput[]
    delete?: PembayaranWhereUniqueInput | PembayaranWhereUniqueInput[]
    connect?: PembayaranWhereUniqueInput | PembayaranWhereUniqueInput[]
    update?: PembayaranUpdateWithWhereUniqueWithoutPembeliInput | PembayaranUpdateWithWhereUniqueWithoutPembeliInput[]
    updateMany?: PembayaranUpdateManyWithWhereWithoutPembeliInput | PembayaranUpdateManyWithWhereWithoutPembeliInput[]
    deleteMany?: PembayaranScalarWhereInput | PembayaranScalarWhereInput[]
  }

  export type PesananUpdateManyWithoutPembeliNestedInput = {
    create?: XOR<PesananCreateWithoutPembeliInput, PesananUncheckedCreateWithoutPembeliInput> | PesananCreateWithoutPembeliInput[] | PesananUncheckedCreateWithoutPembeliInput[]
    connectOrCreate?: PesananCreateOrConnectWithoutPembeliInput | PesananCreateOrConnectWithoutPembeliInput[]
    upsert?: PesananUpsertWithWhereUniqueWithoutPembeliInput | PesananUpsertWithWhereUniqueWithoutPembeliInput[]
    createMany?: PesananCreateManyPembeliInputEnvelope
    set?: PesananWhereUniqueInput | PesananWhereUniqueInput[]
    disconnect?: PesananWhereUniqueInput | PesananWhereUniqueInput[]
    delete?: PesananWhereUniqueInput | PesananWhereUniqueInput[]
    connect?: PesananWhereUniqueInput | PesananWhereUniqueInput[]
    update?: PesananUpdateWithWhereUniqueWithoutPembeliInput | PesananUpdateWithWhereUniqueWithoutPembeliInput[]
    updateMany?: PesananUpdateManyWithWhereWithoutPembeliInput | PesananUpdateManyWithWhereWithoutPembeliInput[]
    deleteMany?: PesananScalarWhereInput | PesananScalarWhereInput[]
  }

  export type PembayaranUncheckedUpdateManyWithoutPembeliNestedInput = {
    create?: XOR<PembayaranCreateWithoutPembeliInput, PembayaranUncheckedCreateWithoutPembeliInput> | PembayaranCreateWithoutPembeliInput[] | PembayaranUncheckedCreateWithoutPembeliInput[]
    connectOrCreate?: PembayaranCreateOrConnectWithoutPembeliInput | PembayaranCreateOrConnectWithoutPembeliInput[]
    upsert?: PembayaranUpsertWithWhereUniqueWithoutPembeliInput | PembayaranUpsertWithWhereUniqueWithoutPembeliInput[]
    createMany?: PembayaranCreateManyPembeliInputEnvelope
    set?: PembayaranWhereUniqueInput | PembayaranWhereUniqueInput[]
    disconnect?: PembayaranWhereUniqueInput | PembayaranWhereUniqueInput[]
    delete?: PembayaranWhereUniqueInput | PembayaranWhereUniqueInput[]
    connect?: PembayaranWhereUniqueInput | PembayaranWhereUniqueInput[]
    update?: PembayaranUpdateWithWhereUniqueWithoutPembeliInput | PembayaranUpdateWithWhereUniqueWithoutPembeliInput[]
    updateMany?: PembayaranUpdateManyWithWhereWithoutPembeliInput | PembayaranUpdateManyWithWhereWithoutPembeliInput[]
    deleteMany?: PembayaranScalarWhereInput | PembayaranScalarWhereInput[]
  }

  export type PesananUncheckedUpdateManyWithoutPembeliNestedInput = {
    create?: XOR<PesananCreateWithoutPembeliInput, PesananUncheckedCreateWithoutPembeliInput> | PesananCreateWithoutPembeliInput[] | PesananUncheckedCreateWithoutPembeliInput[]
    connectOrCreate?: PesananCreateOrConnectWithoutPembeliInput | PesananCreateOrConnectWithoutPembeliInput[]
    upsert?: PesananUpsertWithWhereUniqueWithoutPembeliInput | PesananUpsertWithWhereUniqueWithoutPembeliInput[]
    createMany?: PesananCreateManyPembeliInputEnvelope
    set?: PesananWhereUniqueInput | PesananWhereUniqueInput[]
    disconnect?: PesananWhereUniqueInput | PesananWhereUniqueInput[]
    delete?: PesananWhereUniqueInput | PesananWhereUniqueInput[]
    connect?: PesananWhereUniqueInput | PesananWhereUniqueInput[]
    update?: PesananUpdateWithWhereUniqueWithoutPembeliInput | PesananUpdateWithWhereUniqueWithoutPembeliInput[]
    updateMany?: PesananUpdateManyWithWhereWithoutPembeliInput | PesananUpdateManyWithWhereWithoutPembeliInput[]
    deleteMany?: PesananScalarWhereInput | PesananScalarWhereInput[]
  }

  export type PesananCreateNestedManyWithoutPenjualInput = {
    create?: XOR<PesananCreateWithoutPenjualInput, PesananUncheckedCreateWithoutPenjualInput> | PesananCreateWithoutPenjualInput[] | PesananUncheckedCreateWithoutPenjualInput[]
    connectOrCreate?: PesananCreateOrConnectWithoutPenjualInput | PesananCreateOrConnectWithoutPenjualInput[]
    createMany?: PesananCreateManyPenjualInputEnvelope
    connect?: PesananWhereUniqueInput | PesananWhereUniqueInput[]
  }

  export type ProdukCreateNestedManyWithoutPenjualInput = {
    create?: XOR<ProdukCreateWithoutPenjualInput, ProdukUncheckedCreateWithoutPenjualInput> | ProdukCreateWithoutPenjualInput[] | ProdukUncheckedCreateWithoutPenjualInput[]
    connectOrCreate?: ProdukCreateOrConnectWithoutPenjualInput | ProdukCreateOrConnectWithoutPenjualInput[]
    createMany?: ProdukCreateManyPenjualInputEnvelope
    connect?: ProdukWhereUniqueInput | ProdukWhereUniqueInput[]
  }

  export type PesananUncheckedCreateNestedManyWithoutPenjualInput = {
    create?: XOR<PesananCreateWithoutPenjualInput, PesananUncheckedCreateWithoutPenjualInput> | PesananCreateWithoutPenjualInput[] | PesananUncheckedCreateWithoutPenjualInput[]
    connectOrCreate?: PesananCreateOrConnectWithoutPenjualInput | PesananCreateOrConnectWithoutPenjualInput[]
    createMany?: PesananCreateManyPenjualInputEnvelope
    connect?: PesananWhereUniqueInput | PesananWhereUniqueInput[]
  }

  export type ProdukUncheckedCreateNestedManyWithoutPenjualInput = {
    create?: XOR<ProdukCreateWithoutPenjualInput, ProdukUncheckedCreateWithoutPenjualInput> | ProdukCreateWithoutPenjualInput[] | ProdukUncheckedCreateWithoutPenjualInput[]
    connectOrCreate?: ProdukCreateOrConnectWithoutPenjualInput | ProdukCreateOrConnectWithoutPenjualInput[]
    createMany?: ProdukCreateManyPenjualInputEnvelope
    connect?: ProdukWhereUniqueInput | ProdukWhereUniqueInput[]
  }

  export type PesananUpdateManyWithoutPenjualNestedInput = {
    create?: XOR<PesananCreateWithoutPenjualInput, PesananUncheckedCreateWithoutPenjualInput> | PesananCreateWithoutPenjualInput[] | PesananUncheckedCreateWithoutPenjualInput[]
    connectOrCreate?: PesananCreateOrConnectWithoutPenjualInput | PesananCreateOrConnectWithoutPenjualInput[]
    upsert?: PesananUpsertWithWhereUniqueWithoutPenjualInput | PesananUpsertWithWhereUniqueWithoutPenjualInput[]
    createMany?: PesananCreateManyPenjualInputEnvelope
    set?: PesananWhereUniqueInput | PesananWhereUniqueInput[]
    disconnect?: PesananWhereUniqueInput | PesananWhereUniqueInput[]
    delete?: PesananWhereUniqueInput | PesananWhereUniqueInput[]
    connect?: PesananWhereUniqueInput | PesananWhereUniqueInput[]
    update?: PesananUpdateWithWhereUniqueWithoutPenjualInput | PesananUpdateWithWhereUniqueWithoutPenjualInput[]
    updateMany?: PesananUpdateManyWithWhereWithoutPenjualInput | PesananUpdateManyWithWhereWithoutPenjualInput[]
    deleteMany?: PesananScalarWhereInput | PesananScalarWhereInput[]
  }

  export type ProdukUpdateManyWithoutPenjualNestedInput = {
    create?: XOR<ProdukCreateWithoutPenjualInput, ProdukUncheckedCreateWithoutPenjualInput> | ProdukCreateWithoutPenjualInput[] | ProdukUncheckedCreateWithoutPenjualInput[]
    connectOrCreate?: ProdukCreateOrConnectWithoutPenjualInput | ProdukCreateOrConnectWithoutPenjualInput[]
    upsert?: ProdukUpsertWithWhereUniqueWithoutPenjualInput | ProdukUpsertWithWhereUniqueWithoutPenjualInput[]
    createMany?: ProdukCreateManyPenjualInputEnvelope
    set?: ProdukWhereUniqueInput | ProdukWhereUniqueInput[]
    disconnect?: ProdukWhereUniqueInput | ProdukWhereUniqueInput[]
    delete?: ProdukWhereUniqueInput | ProdukWhereUniqueInput[]
    connect?: ProdukWhereUniqueInput | ProdukWhereUniqueInput[]
    update?: ProdukUpdateWithWhereUniqueWithoutPenjualInput | ProdukUpdateWithWhereUniqueWithoutPenjualInput[]
    updateMany?: ProdukUpdateManyWithWhereWithoutPenjualInput | ProdukUpdateManyWithWhereWithoutPenjualInput[]
    deleteMany?: ProdukScalarWhereInput | ProdukScalarWhereInput[]
  }

  export type PesananUncheckedUpdateManyWithoutPenjualNestedInput = {
    create?: XOR<PesananCreateWithoutPenjualInput, PesananUncheckedCreateWithoutPenjualInput> | PesananCreateWithoutPenjualInput[] | PesananUncheckedCreateWithoutPenjualInput[]
    connectOrCreate?: PesananCreateOrConnectWithoutPenjualInput | PesananCreateOrConnectWithoutPenjualInput[]
    upsert?: PesananUpsertWithWhereUniqueWithoutPenjualInput | PesananUpsertWithWhereUniqueWithoutPenjualInput[]
    createMany?: PesananCreateManyPenjualInputEnvelope
    set?: PesananWhereUniqueInput | PesananWhereUniqueInput[]
    disconnect?: PesananWhereUniqueInput | PesananWhereUniqueInput[]
    delete?: PesananWhereUniqueInput | PesananWhereUniqueInput[]
    connect?: PesananWhereUniqueInput | PesananWhereUniqueInput[]
    update?: PesananUpdateWithWhereUniqueWithoutPenjualInput | PesananUpdateWithWhereUniqueWithoutPenjualInput[]
    updateMany?: PesananUpdateManyWithWhereWithoutPenjualInput | PesananUpdateManyWithWhereWithoutPenjualInput[]
    deleteMany?: PesananScalarWhereInput | PesananScalarWhereInput[]
  }

  export type ProdukUncheckedUpdateManyWithoutPenjualNestedInput = {
    create?: XOR<ProdukCreateWithoutPenjualInput, ProdukUncheckedCreateWithoutPenjualInput> | ProdukCreateWithoutPenjualInput[] | ProdukUncheckedCreateWithoutPenjualInput[]
    connectOrCreate?: ProdukCreateOrConnectWithoutPenjualInput | ProdukCreateOrConnectWithoutPenjualInput[]
    upsert?: ProdukUpsertWithWhereUniqueWithoutPenjualInput | ProdukUpsertWithWhereUniqueWithoutPenjualInput[]
    createMany?: ProdukCreateManyPenjualInputEnvelope
    set?: ProdukWhereUniqueInput | ProdukWhereUniqueInput[]
    disconnect?: ProdukWhereUniqueInput | ProdukWhereUniqueInput[]
    delete?: ProdukWhereUniqueInput | ProdukWhereUniqueInput[]
    connect?: ProdukWhereUniqueInput | ProdukWhereUniqueInput[]
    update?: ProdukUpdateWithWhereUniqueWithoutPenjualInput | ProdukUpdateWithWhereUniqueWithoutPenjualInput[]
    updateMany?: ProdukUpdateManyWithWhereWithoutPenjualInput | ProdukUpdateManyWithWhereWithoutPenjualInput[]
    deleteMany?: ProdukScalarWhereInput | ProdukScalarWhereInput[]
  }

  export type PembeliCreateNestedOneWithoutPembayaranInput = {
    create?: XOR<PembeliCreateWithoutPembayaranInput, PembeliUncheckedCreateWithoutPembayaranInput>
    connectOrCreate?: PembeliCreateOrConnectWithoutPembayaranInput
    connect?: PembeliWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PembeliUpdateOneRequiredWithoutPembayaranNestedInput = {
    create?: XOR<PembeliCreateWithoutPembayaranInput, PembeliUncheckedCreateWithoutPembayaranInput>
    connectOrCreate?: PembeliCreateOrConnectWithoutPembayaranInput
    upsert?: PembeliUpsertWithoutPembayaranInput
    connect?: PembeliWhereUniqueInput
    update?: XOR<XOR<PembeliUpdateToOneWithWhereWithoutPembayaranInput, PembeliUpdateWithoutPembayaranInput>, PembeliUncheckedUpdateWithoutPembayaranInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PembeliCreateNestedOneWithoutPesananInput = {
    create?: XOR<PembeliCreateWithoutPesananInput, PembeliUncheckedCreateWithoutPesananInput>
    connectOrCreate?: PembeliCreateOrConnectWithoutPesananInput
    connect?: PembeliWhereUniqueInput
  }

  export type PenjualCreateNestedOneWithoutPesananInput = {
    create?: XOR<PenjualCreateWithoutPesananInput, PenjualUncheckedCreateWithoutPesananInput>
    connectOrCreate?: PenjualCreateOrConnectWithoutPesananInput
    connect?: PenjualWhereUniqueInput
  }

  export type PesananProdukCreateNestedManyWithoutPesananInput = {
    create?: XOR<PesananProdukCreateWithoutPesananInput, PesananProdukUncheckedCreateWithoutPesananInput> | PesananProdukCreateWithoutPesananInput[] | PesananProdukUncheckedCreateWithoutPesananInput[]
    connectOrCreate?: PesananProdukCreateOrConnectWithoutPesananInput | PesananProdukCreateOrConnectWithoutPesananInput[]
    createMany?: PesananProdukCreateManyPesananInputEnvelope
    connect?: PesananProdukWhereUniqueInput | PesananProdukWhereUniqueInput[]
  }

  export type PesananProdukUncheckedCreateNestedManyWithoutPesananInput = {
    create?: XOR<PesananProdukCreateWithoutPesananInput, PesananProdukUncheckedCreateWithoutPesananInput> | PesananProdukCreateWithoutPesananInput[] | PesananProdukUncheckedCreateWithoutPesananInput[]
    connectOrCreate?: PesananProdukCreateOrConnectWithoutPesananInput | PesananProdukCreateOrConnectWithoutPesananInput[]
    createMany?: PesananProdukCreateManyPesananInputEnvelope
    connect?: PesananProdukWhereUniqueInput | PesananProdukWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PembeliUpdateOneRequiredWithoutPesananNestedInput = {
    create?: XOR<PembeliCreateWithoutPesananInput, PembeliUncheckedCreateWithoutPesananInput>
    connectOrCreate?: PembeliCreateOrConnectWithoutPesananInput
    upsert?: PembeliUpsertWithoutPesananInput
    connect?: PembeliWhereUniqueInput
    update?: XOR<XOR<PembeliUpdateToOneWithWhereWithoutPesananInput, PembeliUpdateWithoutPesananInput>, PembeliUncheckedUpdateWithoutPesananInput>
  }

  export type PenjualUpdateOneRequiredWithoutPesananNestedInput = {
    create?: XOR<PenjualCreateWithoutPesananInput, PenjualUncheckedCreateWithoutPesananInput>
    connectOrCreate?: PenjualCreateOrConnectWithoutPesananInput
    upsert?: PenjualUpsertWithoutPesananInput
    connect?: PenjualWhereUniqueInput
    update?: XOR<XOR<PenjualUpdateToOneWithWhereWithoutPesananInput, PenjualUpdateWithoutPesananInput>, PenjualUncheckedUpdateWithoutPesananInput>
  }

  export type PesananProdukUpdateManyWithoutPesananNestedInput = {
    create?: XOR<PesananProdukCreateWithoutPesananInput, PesananProdukUncheckedCreateWithoutPesananInput> | PesananProdukCreateWithoutPesananInput[] | PesananProdukUncheckedCreateWithoutPesananInput[]
    connectOrCreate?: PesananProdukCreateOrConnectWithoutPesananInput | PesananProdukCreateOrConnectWithoutPesananInput[]
    upsert?: PesananProdukUpsertWithWhereUniqueWithoutPesananInput | PesananProdukUpsertWithWhereUniqueWithoutPesananInput[]
    createMany?: PesananProdukCreateManyPesananInputEnvelope
    set?: PesananProdukWhereUniqueInput | PesananProdukWhereUniqueInput[]
    disconnect?: PesananProdukWhereUniqueInput | PesananProdukWhereUniqueInput[]
    delete?: PesananProdukWhereUniqueInput | PesananProdukWhereUniqueInput[]
    connect?: PesananProdukWhereUniqueInput | PesananProdukWhereUniqueInput[]
    update?: PesananProdukUpdateWithWhereUniqueWithoutPesananInput | PesananProdukUpdateWithWhereUniqueWithoutPesananInput[]
    updateMany?: PesananProdukUpdateManyWithWhereWithoutPesananInput | PesananProdukUpdateManyWithWhereWithoutPesananInput[]
    deleteMany?: PesananProdukScalarWhereInput | PesananProdukScalarWhereInput[]
  }

  export type PesananProdukUncheckedUpdateManyWithoutPesananNestedInput = {
    create?: XOR<PesananProdukCreateWithoutPesananInput, PesananProdukUncheckedCreateWithoutPesananInput> | PesananProdukCreateWithoutPesananInput[] | PesananProdukUncheckedCreateWithoutPesananInput[]
    connectOrCreate?: PesananProdukCreateOrConnectWithoutPesananInput | PesananProdukCreateOrConnectWithoutPesananInput[]
    upsert?: PesananProdukUpsertWithWhereUniqueWithoutPesananInput | PesananProdukUpsertWithWhereUniqueWithoutPesananInput[]
    createMany?: PesananProdukCreateManyPesananInputEnvelope
    set?: PesananProdukWhereUniqueInput | PesananProdukWhereUniqueInput[]
    disconnect?: PesananProdukWhereUniqueInput | PesananProdukWhereUniqueInput[]
    delete?: PesananProdukWhereUniqueInput | PesananProdukWhereUniqueInput[]
    connect?: PesananProdukWhereUniqueInput | PesananProdukWhereUniqueInput[]
    update?: PesananProdukUpdateWithWhereUniqueWithoutPesananInput | PesananProdukUpdateWithWhereUniqueWithoutPesananInput[]
    updateMany?: PesananProdukUpdateManyWithWhereWithoutPesananInput | PesananProdukUpdateManyWithWhereWithoutPesananInput[]
    deleteMany?: PesananProdukScalarWhereInput | PesananProdukScalarWhereInput[]
  }

  export type PenjualCreateNestedOneWithoutProdukInput = {
    create?: XOR<PenjualCreateWithoutProdukInput, PenjualUncheckedCreateWithoutProdukInput>
    connectOrCreate?: PenjualCreateOrConnectWithoutProdukInput
    connect?: PenjualWhereUniqueInput
  }

  export type PesananProdukCreateNestedManyWithoutProdukInput = {
    create?: XOR<PesananProdukCreateWithoutProdukInput, PesananProdukUncheckedCreateWithoutProdukInput> | PesananProdukCreateWithoutProdukInput[] | PesananProdukUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: PesananProdukCreateOrConnectWithoutProdukInput | PesananProdukCreateOrConnectWithoutProdukInput[]
    createMany?: PesananProdukCreateManyProdukInputEnvelope
    connect?: PesananProdukWhereUniqueInput | PesananProdukWhereUniqueInput[]
  }

  export type PesananProdukUncheckedCreateNestedManyWithoutProdukInput = {
    create?: XOR<PesananProdukCreateWithoutProdukInput, PesananProdukUncheckedCreateWithoutProdukInput> | PesananProdukCreateWithoutProdukInput[] | PesananProdukUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: PesananProdukCreateOrConnectWithoutProdukInput | PesananProdukCreateOrConnectWithoutProdukInput[]
    createMany?: PesananProdukCreateManyProdukInputEnvelope
    connect?: PesananProdukWhereUniqueInput | PesananProdukWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PenjualUpdateOneRequiredWithoutProdukNestedInput = {
    create?: XOR<PenjualCreateWithoutProdukInput, PenjualUncheckedCreateWithoutProdukInput>
    connectOrCreate?: PenjualCreateOrConnectWithoutProdukInput
    upsert?: PenjualUpsertWithoutProdukInput
    connect?: PenjualWhereUniqueInput
    update?: XOR<XOR<PenjualUpdateToOneWithWhereWithoutProdukInput, PenjualUpdateWithoutProdukInput>, PenjualUncheckedUpdateWithoutProdukInput>
  }

  export type PesananProdukUpdateManyWithoutProdukNestedInput = {
    create?: XOR<PesananProdukCreateWithoutProdukInput, PesananProdukUncheckedCreateWithoutProdukInput> | PesananProdukCreateWithoutProdukInput[] | PesananProdukUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: PesananProdukCreateOrConnectWithoutProdukInput | PesananProdukCreateOrConnectWithoutProdukInput[]
    upsert?: PesananProdukUpsertWithWhereUniqueWithoutProdukInput | PesananProdukUpsertWithWhereUniqueWithoutProdukInput[]
    createMany?: PesananProdukCreateManyProdukInputEnvelope
    set?: PesananProdukWhereUniqueInput | PesananProdukWhereUniqueInput[]
    disconnect?: PesananProdukWhereUniqueInput | PesananProdukWhereUniqueInput[]
    delete?: PesananProdukWhereUniqueInput | PesananProdukWhereUniqueInput[]
    connect?: PesananProdukWhereUniqueInput | PesananProdukWhereUniqueInput[]
    update?: PesananProdukUpdateWithWhereUniqueWithoutProdukInput | PesananProdukUpdateWithWhereUniqueWithoutProdukInput[]
    updateMany?: PesananProdukUpdateManyWithWhereWithoutProdukInput | PesananProdukUpdateManyWithWhereWithoutProdukInput[]
    deleteMany?: PesananProdukScalarWhereInput | PesananProdukScalarWhereInput[]
  }

  export type PesananProdukUncheckedUpdateManyWithoutProdukNestedInput = {
    create?: XOR<PesananProdukCreateWithoutProdukInput, PesananProdukUncheckedCreateWithoutProdukInput> | PesananProdukCreateWithoutProdukInput[] | PesananProdukUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: PesananProdukCreateOrConnectWithoutProdukInput | PesananProdukCreateOrConnectWithoutProdukInput[]
    upsert?: PesananProdukUpsertWithWhereUniqueWithoutProdukInput | PesananProdukUpsertWithWhereUniqueWithoutProdukInput[]
    createMany?: PesananProdukCreateManyProdukInputEnvelope
    set?: PesananProdukWhereUniqueInput | PesananProdukWhereUniqueInput[]
    disconnect?: PesananProdukWhereUniqueInput | PesananProdukWhereUniqueInput[]
    delete?: PesananProdukWhereUniqueInput | PesananProdukWhereUniqueInput[]
    connect?: PesananProdukWhereUniqueInput | PesananProdukWhereUniqueInput[]
    update?: PesananProdukUpdateWithWhereUniqueWithoutProdukInput | PesananProdukUpdateWithWhereUniqueWithoutProdukInput[]
    updateMany?: PesananProdukUpdateManyWithWhereWithoutProdukInput | PesananProdukUpdateManyWithWhereWithoutProdukInput[]
    deleteMany?: PesananProdukScalarWhereInput | PesananProdukScalarWhereInput[]
  }

  export type PesananCreateNestedOneWithoutPesananProdukInput = {
    create?: XOR<PesananCreateWithoutPesananProdukInput, PesananUncheckedCreateWithoutPesananProdukInput>
    connectOrCreate?: PesananCreateOrConnectWithoutPesananProdukInput
    connect?: PesananWhereUniqueInput
  }

  export type ProdukCreateNestedOneWithoutPesananProdukInput = {
    create?: XOR<ProdukCreateWithoutPesananProdukInput, ProdukUncheckedCreateWithoutPesananProdukInput>
    connectOrCreate?: ProdukCreateOrConnectWithoutPesananProdukInput
    connect?: ProdukWhereUniqueInput
  }

  export type PesananUpdateOneRequiredWithoutPesananProdukNestedInput = {
    create?: XOR<PesananCreateWithoutPesananProdukInput, PesananUncheckedCreateWithoutPesananProdukInput>
    connectOrCreate?: PesananCreateOrConnectWithoutPesananProdukInput
    upsert?: PesananUpsertWithoutPesananProdukInput
    connect?: PesananWhereUniqueInput
    update?: XOR<XOR<PesananUpdateToOneWithWhereWithoutPesananProdukInput, PesananUpdateWithoutPesananProdukInput>, PesananUncheckedUpdateWithoutPesananProdukInput>
  }

  export type ProdukUpdateOneRequiredWithoutPesananProdukNestedInput = {
    create?: XOR<ProdukCreateWithoutPesananProdukInput, ProdukUncheckedCreateWithoutPesananProdukInput>
    connectOrCreate?: ProdukCreateOrConnectWithoutPesananProdukInput
    upsert?: ProdukUpsertWithoutPesananProdukInput
    connect?: ProdukWhereUniqueInput
    update?: XOR<XOR<ProdukUpdateToOneWithWhereWithoutPesananProdukInput, ProdukUpdateWithoutPesananProdukInput>, ProdukUncheckedUpdateWithoutPesananProdukInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type PembayaranCreateWithoutPembeliInput = {
    jumlah: number
  }

  export type PembayaranUncheckedCreateWithoutPembeliInput = {
    id?: number
    jumlah: number
  }

  export type PembayaranCreateOrConnectWithoutPembeliInput = {
    where: PembayaranWhereUniqueInput
    create: XOR<PembayaranCreateWithoutPembeliInput, PembayaranUncheckedCreateWithoutPembeliInput>
  }

  export type PembayaranCreateManyPembeliInputEnvelope = {
    data: PembayaranCreateManyPembeliInput | PembayaranCreateManyPembeliInput[]
    skipDuplicates?: boolean
  }

  export type PesananCreateWithoutPembeliInput = {
    id?: string
    jumlahProduk: number
    tanggal?: Date | string
    status: boolean
    penjual: PenjualCreateNestedOneWithoutPesananInput
    pesananProduk?: PesananProdukCreateNestedManyWithoutPesananInput
  }

  export type PesananUncheckedCreateWithoutPembeliInput = {
    id?: string
    jumlahProduk: number
    tanggal?: Date | string
    status: boolean
    penjualId: string
    pesananProduk?: PesananProdukUncheckedCreateNestedManyWithoutPesananInput
  }

  export type PesananCreateOrConnectWithoutPembeliInput = {
    where: PesananWhereUniqueInput
    create: XOR<PesananCreateWithoutPembeliInput, PesananUncheckedCreateWithoutPembeliInput>
  }

  export type PesananCreateManyPembeliInputEnvelope = {
    data: PesananCreateManyPembeliInput | PesananCreateManyPembeliInput[]
    skipDuplicates?: boolean
  }

  export type PembayaranUpsertWithWhereUniqueWithoutPembeliInput = {
    where: PembayaranWhereUniqueInput
    update: XOR<PembayaranUpdateWithoutPembeliInput, PembayaranUncheckedUpdateWithoutPembeliInput>
    create: XOR<PembayaranCreateWithoutPembeliInput, PembayaranUncheckedCreateWithoutPembeliInput>
  }

  export type PembayaranUpdateWithWhereUniqueWithoutPembeliInput = {
    where: PembayaranWhereUniqueInput
    data: XOR<PembayaranUpdateWithoutPembeliInput, PembayaranUncheckedUpdateWithoutPembeliInput>
  }

  export type PembayaranUpdateManyWithWhereWithoutPembeliInput = {
    where: PembayaranScalarWhereInput
    data: XOR<PembayaranUpdateManyMutationInput, PembayaranUncheckedUpdateManyWithoutPembeliInput>
  }

  export type PembayaranScalarWhereInput = {
    AND?: PembayaranScalarWhereInput | PembayaranScalarWhereInput[]
    OR?: PembayaranScalarWhereInput[]
    NOT?: PembayaranScalarWhereInput | PembayaranScalarWhereInput[]
    id?: IntFilter<"Pembayaran"> | number
    jumlah?: FloatFilter<"Pembayaran"> | number
    pembeliId?: StringFilter<"Pembayaran"> | string
  }

  export type PesananUpsertWithWhereUniqueWithoutPembeliInput = {
    where: PesananWhereUniqueInput
    update: XOR<PesananUpdateWithoutPembeliInput, PesananUncheckedUpdateWithoutPembeliInput>
    create: XOR<PesananCreateWithoutPembeliInput, PesananUncheckedCreateWithoutPembeliInput>
  }

  export type PesananUpdateWithWhereUniqueWithoutPembeliInput = {
    where: PesananWhereUniqueInput
    data: XOR<PesananUpdateWithoutPembeliInput, PesananUncheckedUpdateWithoutPembeliInput>
  }

  export type PesananUpdateManyWithWhereWithoutPembeliInput = {
    where: PesananScalarWhereInput
    data: XOR<PesananUpdateManyMutationInput, PesananUncheckedUpdateManyWithoutPembeliInput>
  }

  export type PesananScalarWhereInput = {
    AND?: PesananScalarWhereInput | PesananScalarWhereInput[]
    OR?: PesananScalarWhereInput[]
    NOT?: PesananScalarWhereInput | PesananScalarWhereInput[]
    id?: StringFilter<"Pesanan"> | string
    jumlahProduk?: IntFilter<"Pesanan"> | number
    tanggal?: DateTimeFilter<"Pesanan"> | Date | string
    status?: BoolFilter<"Pesanan"> | boolean
    pembeliId?: StringFilter<"Pesanan"> | string
    penjualId?: StringFilter<"Pesanan"> | string
  }

  export type PesananCreateWithoutPenjualInput = {
    id?: string
    jumlahProduk: number
    tanggal?: Date | string
    status: boolean
    pembeli: PembeliCreateNestedOneWithoutPesananInput
    pesananProduk?: PesananProdukCreateNestedManyWithoutPesananInput
  }

  export type PesananUncheckedCreateWithoutPenjualInput = {
    id?: string
    jumlahProduk: number
    tanggal?: Date | string
    status: boolean
    pembeliId: string
    pesananProduk?: PesananProdukUncheckedCreateNestedManyWithoutPesananInput
  }

  export type PesananCreateOrConnectWithoutPenjualInput = {
    where: PesananWhereUniqueInput
    create: XOR<PesananCreateWithoutPenjualInput, PesananUncheckedCreateWithoutPenjualInput>
  }

  export type PesananCreateManyPenjualInputEnvelope = {
    data: PesananCreateManyPenjualInput | PesananCreateManyPenjualInput[]
    skipDuplicates?: boolean
  }

  export type ProdukCreateWithoutPenjualInput = {
    nama: string
    harga: number
    jenis: string
    stock: number
    gambarUrl?: string | null
    tanggalDibuat?: Date | string
    diperbarui?: Date | string
    pesananProduk?: PesananProdukCreateNestedManyWithoutProdukInput
  }

  export type ProdukUncheckedCreateWithoutPenjualInput = {
    id?: number
    nama: string
    harga: number
    jenis: string
    stock: number
    gambarUrl?: string | null
    tanggalDibuat?: Date | string
    diperbarui?: Date | string
    pesananProduk?: PesananProdukUncheckedCreateNestedManyWithoutProdukInput
  }

  export type ProdukCreateOrConnectWithoutPenjualInput = {
    where: ProdukWhereUniqueInput
    create: XOR<ProdukCreateWithoutPenjualInput, ProdukUncheckedCreateWithoutPenjualInput>
  }

  export type ProdukCreateManyPenjualInputEnvelope = {
    data: ProdukCreateManyPenjualInput | ProdukCreateManyPenjualInput[]
    skipDuplicates?: boolean
  }

  export type PesananUpsertWithWhereUniqueWithoutPenjualInput = {
    where: PesananWhereUniqueInput
    update: XOR<PesananUpdateWithoutPenjualInput, PesananUncheckedUpdateWithoutPenjualInput>
    create: XOR<PesananCreateWithoutPenjualInput, PesananUncheckedCreateWithoutPenjualInput>
  }

  export type PesananUpdateWithWhereUniqueWithoutPenjualInput = {
    where: PesananWhereUniqueInput
    data: XOR<PesananUpdateWithoutPenjualInput, PesananUncheckedUpdateWithoutPenjualInput>
  }

  export type PesananUpdateManyWithWhereWithoutPenjualInput = {
    where: PesananScalarWhereInput
    data: XOR<PesananUpdateManyMutationInput, PesananUncheckedUpdateManyWithoutPenjualInput>
  }

  export type ProdukUpsertWithWhereUniqueWithoutPenjualInput = {
    where: ProdukWhereUniqueInput
    update: XOR<ProdukUpdateWithoutPenjualInput, ProdukUncheckedUpdateWithoutPenjualInput>
    create: XOR<ProdukCreateWithoutPenjualInput, ProdukUncheckedCreateWithoutPenjualInput>
  }

  export type ProdukUpdateWithWhereUniqueWithoutPenjualInput = {
    where: ProdukWhereUniqueInput
    data: XOR<ProdukUpdateWithoutPenjualInput, ProdukUncheckedUpdateWithoutPenjualInput>
  }

  export type ProdukUpdateManyWithWhereWithoutPenjualInput = {
    where: ProdukScalarWhereInput
    data: XOR<ProdukUpdateManyMutationInput, ProdukUncheckedUpdateManyWithoutPenjualInput>
  }

  export type ProdukScalarWhereInput = {
    AND?: ProdukScalarWhereInput | ProdukScalarWhereInput[]
    OR?: ProdukScalarWhereInput[]
    NOT?: ProdukScalarWhereInput | ProdukScalarWhereInput[]
    id?: IntFilter<"Produk"> | number
    nama?: StringFilter<"Produk"> | string
    harga?: IntFilter<"Produk"> | number
    jenis?: StringFilter<"Produk"> | string
    stock?: IntFilter<"Produk"> | number
    gambarUrl?: StringNullableFilter<"Produk"> | string | null
    penjualId?: StringFilter<"Produk"> | string
    tanggalDibuat?: DateTimeFilter<"Produk"> | Date | string
    diperbarui?: DateTimeFilter<"Produk"> | Date | string
  }

  export type PembeliCreateWithoutPembayaranInput = {
    id: string
    username: string
    role: string
    pesanan?: PesananCreateNestedManyWithoutPembeliInput
  }

  export type PembeliUncheckedCreateWithoutPembayaranInput = {
    id: string
    username: string
    role: string
    pesanan?: PesananUncheckedCreateNestedManyWithoutPembeliInput
  }

  export type PembeliCreateOrConnectWithoutPembayaranInput = {
    where: PembeliWhereUniqueInput
    create: XOR<PembeliCreateWithoutPembayaranInput, PembeliUncheckedCreateWithoutPembayaranInput>
  }

  export type PembeliUpsertWithoutPembayaranInput = {
    update: XOR<PembeliUpdateWithoutPembayaranInput, PembeliUncheckedUpdateWithoutPembayaranInput>
    create: XOR<PembeliCreateWithoutPembayaranInput, PembeliUncheckedCreateWithoutPembayaranInput>
    where?: PembeliWhereInput
  }

  export type PembeliUpdateToOneWithWhereWithoutPembayaranInput = {
    where?: PembeliWhereInput
    data: XOR<PembeliUpdateWithoutPembayaranInput, PembeliUncheckedUpdateWithoutPembayaranInput>
  }

  export type PembeliUpdateWithoutPembayaranInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    pesanan?: PesananUpdateManyWithoutPembeliNestedInput
  }

  export type PembeliUncheckedUpdateWithoutPembayaranInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    pesanan?: PesananUncheckedUpdateManyWithoutPembeliNestedInput
  }

  export type PembeliCreateWithoutPesananInput = {
    id: string
    username: string
    role: string
    pembayaran?: PembayaranCreateNestedManyWithoutPembeliInput
  }

  export type PembeliUncheckedCreateWithoutPesananInput = {
    id: string
    username: string
    role: string
    pembayaran?: PembayaranUncheckedCreateNestedManyWithoutPembeliInput
  }

  export type PembeliCreateOrConnectWithoutPesananInput = {
    where: PembeliWhereUniqueInput
    create: XOR<PembeliCreateWithoutPesananInput, PembeliUncheckedCreateWithoutPesananInput>
  }

  export type PenjualCreateWithoutPesananInput = {
    id: string
    username: string
    role: string
    produk?: ProdukCreateNestedManyWithoutPenjualInput
  }

  export type PenjualUncheckedCreateWithoutPesananInput = {
    id: string
    username: string
    role: string
    produk?: ProdukUncheckedCreateNestedManyWithoutPenjualInput
  }

  export type PenjualCreateOrConnectWithoutPesananInput = {
    where: PenjualWhereUniqueInput
    create: XOR<PenjualCreateWithoutPesananInput, PenjualUncheckedCreateWithoutPesananInput>
  }

  export type PesananProdukCreateWithoutPesananInput = {
    jumlahProduk?: number
    produk: ProdukCreateNestedOneWithoutPesananProdukInput
  }

  export type PesananProdukUncheckedCreateWithoutPesananInput = {
    produkId: number
    jumlahProduk?: number
  }

  export type PesananProdukCreateOrConnectWithoutPesananInput = {
    where: PesananProdukWhereUniqueInput
    create: XOR<PesananProdukCreateWithoutPesananInput, PesananProdukUncheckedCreateWithoutPesananInput>
  }

  export type PesananProdukCreateManyPesananInputEnvelope = {
    data: PesananProdukCreateManyPesananInput | PesananProdukCreateManyPesananInput[]
    skipDuplicates?: boolean
  }

  export type PembeliUpsertWithoutPesananInput = {
    update: XOR<PembeliUpdateWithoutPesananInput, PembeliUncheckedUpdateWithoutPesananInput>
    create: XOR<PembeliCreateWithoutPesananInput, PembeliUncheckedCreateWithoutPesananInput>
    where?: PembeliWhereInput
  }

  export type PembeliUpdateToOneWithWhereWithoutPesananInput = {
    where?: PembeliWhereInput
    data: XOR<PembeliUpdateWithoutPesananInput, PembeliUncheckedUpdateWithoutPesananInput>
  }

  export type PembeliUpdateWithoutPesananInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    pembayaran?: PembayaranUpdateManyWithoutPembeliNestedInput
  }

  export type PembeliUncheckedUpdateWithoutPesananInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    pembayaran?: PembayaranUncheckedUpdateManyWithoutPembeliNestedInput
  }

  export type PenjualUpsertWithoutPesananInput = {
    update: XOR<PenjualUpdateWithoutPesananInput, PenjualUncheckedUpdateWithoutPesananInput>
    create: XOR<PenjualCreateWithoutPesananInput, PenjualUncheckedCreateWithoutPesananInput>
    where?: PenjualWhereInput
  }

  export type PenjualUpdateToOneWithWhereWithoutPesananInput = {
    where?: PenjualWhereInput
    data: XOR<PenjualUpdateWithoutPesananInput, PenjualUncheckedUpdateWithoutPesananInput>
  }

  export type PenjualUpdateWithoutPesananInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    produk?: ProdukUpdateManyWithoutPenjualNestedInput
  }

  export type PenjualUncheckedUpdateWithoutPesananInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    produk?: ProdukUncheckedUpdateManyWithoutPenjualNestedInput
  }

  export type PesananProdukUpsertWithWhereUniqueWithoutPesananInput = {
    where: PesananProdukWhereUniqueInput
    update: XOR<PesananProdukUpdateWithoutPesananInput, PesananProdukUncheckedUpdateWithoutPesananInput>
    create: XOR<PesananProdukCreateWithoutPesananInput, PesananProdukUncheckedCreateWithoutPesananInput>
  }

  export type PesananProdukUpdateWithWhereUniqueWithoutPesananInput = {
    where: PesananProdukWhereUniqueInput
    data: XOR<PesananProdukUpdateWithoutPesananInput, PesananProdukUncheckedUpdateWithoutPesananInput>
  }

  export type PesananProdukUpdateManyWithWhereWithoutPesananInput = {
    where: PesananProdukScalarWhereInput
    data: XOR<PesananProdukUpdateManyMutationInput, PesananProdukUncheckedUpdateManyWithoutPesananInput>
  }

  export type PesananProdukScalarWhereInput = {
    AND?: PesananProdukScalarWhereInput | PesananProdukScalarWhereInput[]
    OR?: PesananProdukScalarWhereInput[]
    NOT?: PesananProdukScalarWhereInput | PesananProdukScalarWhereInput[]
    pesananId?: StringFilter<"PesananProduk"> | string
    produkId?: IntFilter<"PesananProduk"> | number
    jumlahProduk?: IntFilter<"PesananProduk"> | number
  }

  export type PenjualCreateWithoutProdukInput = {
    id: string
    username: string
    role: string
    pesanan?: PesananCreateNestedManyWithoutPenjualInput
  }

  export type PenjualUncheckedCreateWithoutProdukInput = {
    id: string
    username: string
    role: string
    pesanan?: PesananUncheckedCreateNestedManyWithoutPenjualInput
  }

  export type PenjualCreateOrConnectWithoutProdukInput = {
    where: PenjualWhereUniqueInput
    create: XOR<PenjualCreateWithoutProdukInput, PenjualUncheckedCreateWithoutProdukInput>
  }

  export type PesananProdukCreateWithoutProdukInput = {
    jumlahProduk?: number
    pesanan: PesananCreateNestedOneWithoutPesananProdukInput
  }

  export type PesananProdukUncheckedCreateWithoutProdukInput = {
    pesananId: string
    jumlahProduk?: number
  }

  export type PesananProdukCreateOrConnectWithoutProdukInput = {
    where: PesananProdukWhereUniqueInput
    create: XOR<PesananProdukCreateWithoutProdukInput, PesananProdukUncheckedCreateWithoutProdukInput>
  }

  export type PesananProdukCreateManyProdukInputEnvelope = {
    data: PesananProdukCreateManyProdukInput | PesananProdukCreateManyProdukInput[]
    skipDuplicates?: boolean
  }

  export type PenjualUpsertWithoutProdukInput = {
    update: XOR<PenjualUpdateWithoutProdukInput, PenjualUncheckedUpdateWithoutProdukInput>
    create: XOR<PenjualCreateWithoutProdukInput, PenjualUncheckedCreateWithoutProdukInput>
    where?: PenjualWhereInput
  }

  export type PenjualUpdateToOneWithWhereWithoutProdukInput = {
    where?: PenjualWhereInput
    data: XOR<PenjualUpdateWithoutProdukInput, PenjualUncheckedUpdateWithoutProdukInput>
  }

  export type PenjualUpdateWithoutProdukInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    pesanan?: PesananUpdateManyWithoutPenjualNestedInput
  }

  export type PenjualUncheckedUpdateWithoutProdukInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    pesanan?: PesananUncheckedUpdateManyWithoutPenjualNestedInput
  }

  export type PesananProdukUpsertWithWhereUniqueWithoutProdukInput = {
    where: PesananProdukWhereUniqueInput
    update: XOR<PesananProdukUpdateWithoutProdukInput, PesananProdukUncheckedUpdateWithoutProdukInput>
    create: XOR<PesananProdukCreateWithoutProdukInput, PesananProdukUncheckedCreateWithoutProdukInput>
  }

  export type PesananProdukUpdateWithWhereUniqueWithoutProdukInput = {
    where: PesananProdukWhereUniqueInput
    data: XOR<PesananProdukUpdateWithoutProdukInput, PesananProdukUncheckedUpdateWithoutProdukInput>
  }

  export type PesananProdukUpdateManyWithWhereWithoutProdukInput = {
    where: PesananProdukScalarWhereInput
    data: XOR<PesananProdukUpdateManyMutationInput, PesananProdukUncheckedUpdateManyWithoutProdukInput>
  }

  export type PesananCreateWithoutPesananProdukInput = {
    id?: string
    jumlahProduk: number
    tanggal?: Date | string
    status: boolean
    pembeli: PembeliCreateNestedOneWithoutPesananInput
    penjual: PenjualCreateNestedOneWithoutPesananInput
  }

  export type PesananUncheckedCreateWithoutPesananProdukInput = {
    id?: string
    jumlahProduk: number
    tanggal?: Date | string
    status: boolean
    pembeliId: string
    penjualId: string
  }

  export type PesananCreateOrConnectWithoutPesananProdukInput = {
    where: PesananWhereUniqueInput
    create: XOR<PesananCreateWithoutPesananProdukInput, PesananUncheckedCreateWithoutPesananProdukInput>
  }

  export type ProdukCreateWithoutPesananProdukInput = {
    nama: string
    harga: number
    jenis: string
    stock: number
    gambarUrl?: string | null
    tanggalDibuat?: Date | string
    diperbarui?: Date | string
    penjual: PenjualCreateNestedOneWithoutProdukInput
  }

  export type ProdukUncheckedCreateWithoutPesananProdukInput = {
    id?: number
    nama: string
    harga: number
    jenis: string
    stock: number
    gambarUrl?: string | null
    penjualId: string
    tanggalDibuat?: Date | string
    diperbarui?: Date | string
  }

  export type ProdukCreateOrConnectWithoutPesananProdukInput = {
    where: ProdukWhereUniqueInput
    create: XOR<ProdukCreateWithoutPesananProdukInput, ProdukUncheckedCreateWithoutPesananProdukInput>
  }

  export type PesananUpsertWithoutPesananProdukInput = {
    update: XOR<PesananUpdateWithoutPesananProdukInput, PesananUncheckedUpdateWithoutPesananProdukInput>
    create: XOR<PesananCreateWithoutPesananProdukInput, PesananUncheckedCreateWithoutPesananProdukInput>
    where?: PesananWhereInput
  }

  export type PesananUpdateToOneWithWhereWithoutPesananProdukInput = {
    where?: PesananWhereInput
    data: XOR<PesananUpdateWithoutPesananProdukInput, PesananUncheckedUpdateWithoutPesananProdukInput>
  }

  export type PesananUpdateWithoutPesananProdukInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlahProduk?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    pembeli?: PembeliUpdateOneRequiredWithoutPesananNestedInput
    penjual?: PenjualUpdateOneRequiredWithoutPesananNestedInput
  }

  export type PesananUncheckedUpdateWithoutPesananProdukInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlahProduk?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    pembeliId?: StringFieldUpdateOperationsInput | string
    penjualId?: StringFieldUpdateOperationsInput | string
  }

  export type ProdukUpsertWithoutPesananProdukInput = {
    update: XOR<ProdukUpdateWithoutPesananProdukInput, ProdukUncheckedUpdateWithoutPesananProdukInput>
    create: XOR<ProdukCreateWithoutPesananProdukInput, ProdukUncheckedCreateWithoutPesananProdukInput>
    where?: ProdukWhereInput
  }

  export type ProdukUpdateToOneWithWhereWithoutPesananProdukInput = {
    where?: ProdukWhereInput
    data: XOR<ProdukUpdateWithoutPesananProdukInput, ProdukUncheckedUpdateWithoutPesananProdukInput>
  }

  export type ProdukUpdateWithoutPesananProdukInput = {
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    jenis?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    gambarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalDibuat?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui?: DateTimeFieldUpdateOperationsInput | Date | string
    penjual?: PenjualUpdateOneRequiredWithoutProdukNestedInput
  }

  export type ProdukUncheckedUpdateWithoutPesananProdukInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    jenis?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    gambarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    penjualId?: StringFieldUpdateOperationsInput | string
    tanggalDibuat?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PembayaranCreateManyPembeliInput = {
    id?: number
    jumlah: number
  }

  export type PesananCreateManyPembeliInput = {
    id?: string
    jumlahProduk: number
    tanggal?: Date | string
    status: boolean
    penjualId: string
  }

  export type PembayaranUpdateWithoutPembeliInput = {
    jumlah?: FloatFieldUpdateOperationsInput | number
  }

  export type PembayaranUncheckedUpdateWithoutPembeliInput = {
    id?: IntFieldUpdateOperationsInput | number
    jumlah?: FloatFieldUpdateOperationsInput | number
  }

  export type PembayaranUncheckedUpdateManyWithoutPembeliInput = {
    id?: IntFieldUpdateOperationsInput | number
    jumlah?: FloatFieldUpdateOperationsInput | number
  }

  export type PesananUpdateWithoutPembeliInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlahProduk?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    penjual?: PenjualUpdateOneRequiredWithoutPesananNestedInput
    pesananProduk?: PesananProdukUpdateManyWithoutPesananNestedInput
  }

  export type PesananUncheckedUpdateWithoutPembeliInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlahProduk?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    penjualId?: StringFieldUpdateOperationsInput | string
    pesananProduk?: PesananProdukUncheckedUpdateManyWithoutPesananNestedInput
  }

  export type PesananUncheckedUpdateManyWithoutPembeliInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlahProduk?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    penjualId?: StringFieldUpdateOperationsInput | string
  }

  export type PesananCreateManyPenjualInput = {
    id?: string
    jumlahProduk: number
    tanggal?: Date | string
    status: boolean
    pembeliId: string
  }

  export type ProdukCreateManyPenjualInput = {
    id?: number
    nama: string
    harga: number
    jenis: string
    stock: number
    gambarUrl?: string | null
    tanggalDibuat?: Date | string
    diperbarui?: Date | string
  }

  export type PesananUpdateWithoutPenjualInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlahProduk?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    pembeli?: PembeliUpdateOneRequiredWithoutPesananNestedInput
    pesananProduk?: PesananProdukUpdateManyWithoutPesananNestedInput
  }

  export type PesananUncheckedUpdateWithoutPenjualInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlahProduk?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    pembeliId?: StringFieldUpdateOperationsInput | string
    pesananProduk?: PesananProdukUncheckedUpdateManyWithoutPesananNestedInput
  }

  export type PesananUncheckedUpdateManyWithoutPenjualInput = {
    id?: StringFieldUpdateOperationsInput | string
    jumlahProduk?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    pembeliId?: StringFieldUpdateOperationsInput | string
  }

  export type ProdukUpdateWithoutPenjualInput = {
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    jenis?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    gambarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalDibuat?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui?: DateTimeFieldUpdateOperationsInput | Date | string
    pesananProduk?: PesananProdukUpdateManyWithoutProdukNestedInput
  }

  export type ProdukUncheckedUpdateWithoutPenjualInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    jenis?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    gambarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalDibuat?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui?: DateTimeFieldUpdateOperationsInput | Date | string
    pesananProduk?: PesananProdukUncheckedUpdateManyWithoutProdukNestedInput
  }

  export type ProdukUncheckedUpdateManyWithoutPenjualInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    jenis?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    gambarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalDibuat?: DateTimeFieldUpdateOperationsInput | Date | string
    diperbarui?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PesananProdukCreateManyPesananInput = {
    produkId: number
    jumlahProduk?: number
  }

  export type PesananProdukUpdateWithoutPesananInput = {
    jumlahProduk?: IntFieldUpdateOperationsInput | number
    produk?: ProdukUpdateOneRequiredWithoutPesananProdukNestedInput
  }

  export type PesananProdukUncheckedUpdateWithoutPesananInput = {
    produkId?: IntFieldUpdateOperationsInput | number
    jumlahProduk?: IntFieldUpdateOperationsInput | number
  }

  export type PesananProdukUncheckedUpdateManyWithoutPesananInput = {
    produkId?: IntFieldUpdateOperationsInput | number
    jumlahProduk?: IntFieldUpdateOperationsInput | number
  }

  export type PesananProdukCreateManyProdukInput = {
    pesananId: string
    jumlahProduk?: number
  }

  export type PesananProdukUpdateWithoutProdukInput = {
    jumlahProduk?: IntFieldUpdateOperationsInput | number
    pesanan?: PesananUpdateOneRequiredWithoutPesananProdukNestedInput
  }

  export type PesananProdukUncheckedUpdateWithoutProdukInput = {
    pesananId?: StringFieldUpdateOperationsInput | string
    jumlahProduk?: IntFieldUpdateOperationsInput | number
  }

  export type PesananProdukUncheckedUpdateManyWithoutProdukInput = {
    pesananId?: StringFieldUpdateOperationsInput | string
    jumlahProduk?: IntFieldUpdateOperationsInput | number
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
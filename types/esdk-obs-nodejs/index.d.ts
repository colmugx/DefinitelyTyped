// TypeScript Version: 3.9.7
// Project: https://github.com/huaweicloud/huaweicloud-sdk-nodejs-obs
// Definitions by: colmugx <https://github.com/colmugx>

export = OBS;

/**
 * basic options
 */
declare namespace OBS {
    type TimeoutRange = 10
    | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20
    | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30
    | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40
    | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50
    | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60

    type MaxRetryCountRange = 1 | 2 | 3 | 4 | 5

    interface Options {
        /**
         * AK
         */
        access_key_id: string
        /**
         * SK
         */
        secret_access_key: string
        /**
         * Endpoint for accessing OBS, which contains the protocol type, domain name (or IP address), and port number.
         * For example, https://your-endpoint:443
         */
        server: string
        /**
         * Maximum number of retries when an HTTP/HTTPS connection is abnormal.
         * The default value is 3.
         */
        max_retry_count?: MaxRetryCountRange
        /**
         * Timeout period (in seconds) of an HTTP/HTTPS request.
         * The default value is 60.
         */
        timeout?: TimeoutRange
        /**
         * Whether to verify the server certificate. Possible values are:
         * - Path to the server-side root certificate file in .pem format
         * - true: The default CAs are used to verify the server-side certificate.
         * - false: The server-side certificates will not be verified.
         */
        ssl_verify?: boolean | string
        /**
         * Persistent connection mode (in seconds) If the value is equal to or larger than 0,
         * the persistent connection mode is enabled and this value is used as the initial delay of the TCP Keep-Alive packets.
         */
        long_conn_param?: number
        /**
         * Whether to use self-defined domain name to access OBS.
         * The default value is false.
         */
        is_cname?: boolean
    }

    interface LogOptions {
        /**
         * Full path to the log file
         */
        file_full_path: string
        /**
         * Log file size in bytes
         */
        max_log_size: string | number
        /**
         * Maximum number of retained log files
         */
        backups: string | number
        /**
         * Log level. Possible values are debug, info, warn, and error.
         */
        level: 'debug' | 'info' | 'warn' | 'error'
        /**
         * Whether to print logs to the console
         */
        log_to_console?: boolean
        /**
         * Log name.
         * When there are multiple instances of ObsClient, this parameter is used to identify log files.
         */
        name?: string
    }

    interface InterfaceResult {
        RequestId: string
        Id2: string
        // TODO: generics
        [k: string]: any
    }

    interface CommonMsg {
        /**
         * HTTP status code. If the value is smaller than 300, the operation succeeds.
         * Otherwise, the operation fails.
         */
        Status: number
        /**
         * Error code returned by the OBS server.
         * If Status is smaller than 300, the value is null.
         */
        Code: string
        /**
         * Error description returned by the OBS server.
         * If Status is smaller than 300, the value is null.
         */
        Message: string
        /**
         * Server ID.
         * If Status is smaller than 300, the value is null.
         */
        HostId: string
        /**
         * Request ID returned by the OBS server
         */
        RequestId: string
        /**
         * Request ID2 returned by the OBS server
         */
        Id2: string
        /**
         * Detailed error code returned by the OBS server.
         * If Status is smaller than 300, the value is null.
         */
        Indicator: string
    }

    interface Result {
        InterfaceResult: InterfaceResult
        CommonMsg: CommonMsg
    }

    type Callback = (err: any, result: Result) => any
}

/**
 * bucket
 */
declare namespace OBS {
    interface Bucket {
        /**
         * Bucket name.
         */
        Bucket: string
    }

    interface CreateBucket extends Bucket {
        /**
         * Pre-defined access control policy that can be specified during the bucket creation
         */
        ACL?: string
        // TODO: bucket region
        /**
         * Bucket storage class that can be specified during the bucket creation
         */
        StorageClass?: string
        /**
         * Bucket location
         */
        Location?: string
    }

    interface GetBucket {
        /**
         * Whether to query the bucket location
         */
        QueryLocation?: boolean
    }
}

declare class OBS {
    constructor(params: OBS.Options);

    abortMultipartUpload(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    appendObject(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    close(): void;

    completeMultipartUpload(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    copyObject(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    copyPart(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    createBucket(params: OBS.CreateBucket, callback?: OBS.Callback): Promise<OBS.Result>;

    createPostSignatureSync(params: any): Promise<OBS.Result>;

    createSignedUrlSync(params: any): Promise<OBS.Result>;

    createV2SignedUrlSync(params: any): Promise<OBS.Result>;

    createV4PostSignatureSync(params: any): Promise<OBS.Result>;

    createV4SignedUrlSync(params: any): Promise<OBS.Result>;

    deleteBucket(params: OBS.Bucket, callback?: OBS.Callback): Promise<OBS.Result>;

    deleteBucketCors(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    deleteBucketDirectColdAccess(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    deleteBucketEncryption(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    deleteBucketLifecycle(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    deleteBucketLifecycleConfiguration(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    deleteBucketPolicy(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    deleteBucketReplication(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    deleteBucketTagging(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    deleteBucketWebsite(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    deleteBucketWebsiteConfiguration(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    deleteObject(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    deleteObjects(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    downloadFile(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    exec(funcName: any, params: any, callback?: OBS.Callback): void;

    factory(params: any): void;

    getBucketAcl(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    getBucketCors(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    getBucketDirectColdAccess(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    getBucketEncryption(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    getBucketLifecycle(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    getBucketLifecycleConfiguration(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    getBucketLocation(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    getBucketLogging(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    getBucketLoggingConfiguration(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    getBucketMetadata(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    getBucketNotification(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    getBucketPolicy(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    getBucketQuota(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    getBucketReplication(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    getBucketRequesterPayment(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    getBucketStorageInfo(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    getBucketStoragePolicy(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    getBucketTagging(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    getBucketVersioning(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    getBucketVersioningConfiguration(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    getBucketWebsite(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    getBucketWebsiteConfiguration(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    getObject(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    getObjectAcl(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    getObjectMetadata(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    headBucket(params: OBS.Bucket, callback?: OBS.Callback): Promise<OBS.Result>;

    initLog(params: OBS.LogOptions): void;

    initiateMultipartUpload(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    listBuckets(params: OBS.GetBucket, callback?: OBS.Callback): Promise<OBS.Result>;

    listMultipartUploads(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    listObjects(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    listParts(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    listVersions(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    optionsBucket(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    optionsObject(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    putObject(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    refresh(
        access_key_id: any,
        secret_access_key: any,
        security_token: any
    ): void;

    renameObject(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    restoreObject(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    setBucketAcl(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    setBucketCors(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    setBucketDirectColdAccess(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    setBucketEncryption(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    setBucketLifecycle(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    setBucketLifecycleConfiguration(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    setBucketLogging(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    setBucketLoggingConfiguration(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    setBucketNotification(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    setBucketPolicy(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    setBucketQuota(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    setBucketReplication(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    setBucketRequesterPayment(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    setBucketStoragePolicy(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    setBucketTagging(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    setBucketVersioning(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    setBucketVersioningConfiguration(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    setBucketWebsite(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    setBucketWebsiteConfiguration(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    setObjectAcl(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    setObjectMetadata(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    uploadFile(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    uploadPart(params: any, callback?: OBS.Callback): Promise<OBS.Result>;
}

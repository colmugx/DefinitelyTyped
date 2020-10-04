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
}

/**
 * bucket
 */
declare namespace OBS {
    interface CreateBucket {
        Bucket: string
    }
}

declare class OBS {
    constructor(params: OBS.Options);

    AbortMultipartUpload(param: any, callback: any): any;

    AppendObject(param: any, callback: any): any;

    Close(): void;

    CompleteMultipartUpload(param: any, callback: any): any;

    CopyObject(param: any, callback: any): any;

    CopyPart(param: any, callback: any): any;

    CreateBucket(param: any, callback: any): any;

    CreatePostSignatureSync(param: any): any;

    CreateSignedUrlSync(param: any): any;

    CreateV2SignedUrlSync(param: any): any;

    CreateV4PostSignatureSync(param: any): any;

    CreateV4SignedUrlSync(param: any): any;

    DeleteBucket(param: any, callback: any): any;

    DeleteBucketCors(param: any, callback: any): any;

    DeleteBucketDirectColdAccess(param: any, callback: any): any;

    DeleteBucketEncryption(param: any, callback: any): any;

    DeleteBucketLifecycle(param: any, callback: any): any;

    DeleteBucketLifecycleConfiguration(param: any, callback: any): any;

    DeleteBucketPolicy(param: any, callback: any): any;

    DeleteBucketReplication(param: any, callback: any): any;

    DeleteBucketTagging(param: any, callback: any): any;

    DeleteBucketWebsite(param: any, callback: any): any;

    DeleteBucketWebsiteConfiguration(param: any, callback: any): any;

    DeleteObject(param: any, callback: any): any;

    DeleteObjects(param: any, callback: any): any;

    DownloadFile(param: any, callback: any): any;

    Exec(funcName: any, param: any, callback: any): void;

    Factory(param: any): void;

    GetBucketAcl(param: any, callback: any): any;

    GetBucketCors(param: any, callback: any): any;

    GetBucketDirectColdAccess(param: any, callback: any): any;

    GetBucketEncryption(param: any, callback: any): any;

    GetBucketLifecycle(param: any, callback: any): any;

    GetBucketLifecycleConfiguration(param: any, callback: any): any;

    GetBucketLocation(param: any, callback: any): any;

    GetBucketLogging(param: any, callback: any): any;

    GetBucketLoggingConfiguration(param: any, callback: any): any;

    GetBucketMetadata(param: any, callback: any): any;

    GetBucketNotification(param: any, callback: any): any;

    GetBucketPolicy(param: any, callback: any): any;

    GetBucketQuota(param: any, callback: any): any;

    GetBucketReplication(param: any, callback: any): any;

    GetBucketRequesterPayment(param: any, callback: any): any;

    GetBucketStorageInfo(param: any, callback: any): any;

    GetBucketStoragePolicy(param: any, callback: any): any;

    GetBucketTagging(param: any, callback: any): any;

    GetBucketVersioning(param: any, callback: any): any;

    GetBucketVersioningConfiguration(param: any, callback: any): any;

    GetBucketWebsite(param: any, callback: any): any;

    GetBucketWebsiteConfiguration(param: any, callback: any): any;

    GetObject(param: any, callback: any): any;

    GetObjectAcl(param: any, callback: any): any;

    GetObjectMetadata(param: any, callback: any): any;

    HeadBucket(param: any, callback: any): any;

    InitLog(param: any): void;

    InitiateMultipartUpload(param: any, callback: any): any;

    ListBuckets(param: any, callback: any): any;

    ListMultipartUploads(param: any, callback: any): any;

    ListObjects(param: any, callback: any): any;

    ListParts(param: any, callback: any): any;

    ListVersions(param: any, callback: any): any;

    OptionsBucket(param: any, callback: any): any;

    OptionsObject(param: any, callback: any): any;

    PutObject(param: any, callback: any): any;

    Refresh(
        access_key_id: any,
        secret_access_key: any,
        security_token: any
    ): void;

    RenameObject(param: any, callback: any): any;

    RestoreObject(param: any, callback: any): any;

    SetBucketAcl(param: any, callback: any): any;

    SetBucketCors(param: any, callback: any): any;

    SetBucketDirectColdAccess(param: any, callback: any): any;

    SetBucketEncryption(param: any, callback: any): any;

    SetBucketLifecycle(param: any, callback: any): any;

    SetBucketLifecycleConfiguration(param: any, callback: any): any;

    SetBucketLogging(param: any, callback: any): any;

    SetBucketLoggingConfiguration(param: any, callback: any): any;

    SetBucketNotification(param: any, callback: any): any;

    SetBucketPolicy(param: any, callback: any): any;

    SetBucketQuota(param: any, callback: any): any;

    SetBucketReplication(param: any, callback: any): any;

    SetBucketRequesterPayment(param: any, callback: any): any;

    SetBucketStoragePolicy(param: any, callback: any): any;

    SetBucketTagging(param: any, callback: any): any;

    SetBucketVersioning(param: any, callback: any): any;

    SetBucketVersioningConfiguration(param: any, callback: any): any;

    SetBucketWebsite(param: any, callback: any): any;

    SetBucketWebsiteConfiguration(param: any, callback: any): any;

    SetObjectAcl(param: any, callback: any): any;

    SetObjectMetadata(param: any, callback: any): any;

    UploadFile(param: any, callback: any): any;

    UploadPart(param: any, callback: any): any;

    abortMultipartUpload(param: any, callback: any): any;

    appendObject(param: any, callback: any): any;

    close(): void;

    completeMultipartUpload(param: any, callback: any): any;

    copyObject(param: any, callback: any): any;

    copyPart(param: any, callback: any): any;

    createBucket(param: any, callback: any): any;

    createPostSignatureSync(param: any): any;

    createSignedUrlSync(param: any): any;

    createV2SignedUrlSync(param: any): any;

    createV4PostSignatureSync(param: any): any;

    createV4SignedUrlSync(param: any): any;

    deleteBucket(param: any, callback: any): any;

    deleteBucketCors(param: any, callback: any): any;

    deleteBucketDirectColdAccess(param: any, callback: any): any;

    deleteBucketEncryption(param: any, callback: any): any;

    deleteBucketLifecycle(param: any, callback: any): any;

    deleteBucketLifecycleConfiguration(param: any, callback: any): any;

    deleteBucketPolicy(param: any, callback: any): any;

    deleteBucketReplication(param: any, callback: any): any;

    deleteBucketTagging(param: any, callback: any): any;

    deleteBucketWebsite(param: any, callback: any): any;

    deleteBucketWebsiteConfiguration(param: any, callback: any): any;

    deleteObject(param: any, callback: any): any;

    deleteObjects(param: any, callback: any): any;

    downloadFile(param: any, callback: any): any;

    exec(funcName: any, param: any, callback: any): void;

    factory(param: any): void;

    getBucketAcl(param: any, callback: any): any;

    getBucketCors(param: any, callback: any): any;

    getBucketDirectColdAccess(param: any, callback: any): any;

    getBucketEncryption(param: any, callback: any): any;

    getBucketLifecycle(param: any, callback: any): any;

    getBucketLifecycleConfiguration(param: any, callback: any): any;

    getBucketLocation(param: any, callback: any): any;

    getBucketLogging(param: any, callback: any): any;

    getBucketLoggingConfiguration(param: any, callback: any): any;

    getBucketMetadata(param: any, callback: any): any;

    getBucketNotification(param: any, callback: any): any;

    getBucketPolicy(param: any, callback: any): any;

    getBucketQuota(param: any, callback: any): any;

    getBucketReplication(param: any, callback: any): any;

    getBucketRequesterPayment(param: any, callback: any): any;

    getBucketStorageInfo(param: any, callback: any): any;

    getBucketStoragePolicy(param: any, callback: any): any;

    getBucketTagging(param: any, callback: any): any;

    getBucketVersioning(param: any, callback: any): any;

    getBucketVersioningConfiguration(param: any, callback: any): any;

    getBucketWebsite(param: any, callback: any): any;

    getBucketWebsiteConfiguration(param: any, callback: any): any;

    getObject(param: any, callback: any): any;

    getObjectAcl(param: any, callback: any): any;

    getObjectMetadata(param: any, callback: any): any;

    headBucket(param: any, callback: any): any;

    initLog(param: OBS.LogOptions): void;

    initiateMultipartUpload(param: any, callback: any): any;

    listBuckets(param: any, callback: any): any;

    listMultipartUploads(param: any, callback: any): any;

    listObjects(param: any, callback: any): any;

    listParts(param: any, callback: any): any;

    listVersions(param: any, callback: any): any;

    optionsBucket(param: any, callback: any): any;

    optionsObject(param: any, callback: any): any;

    putObject(param: any, callback: any): any;

    refresh(
        access_key_id: any,
        secret_access_key: any,
        security_token: any
    ): void;

    renameObject(param: any, callback: any): any;

    restoreObject(param: any, callback: any): any;

    setBucketAcl(param: any, callback: any): any;

    setBucketCors(param: any, callback: any): any;

    setBucketDirectColdAccess(param: any, callback: any): any;

    setBucketEncryption(param: any, callback: any): any;

    setBucketLifecycle(param: any, callback: any): any;

    setBucketLifecycleConfiguration(param: any, callback: any): any;

    setBucketLogging(param: any, callback: any): any;

    setBucketLoggingConfiguration(param: any, callback: any): any;

    setBucketNotification(param: any, callback: any): any;

    setBucketPolicy(param: any, callback: any): any;

    setBucketQuota(param: any, callback: any): any;

    setBucketReplication(param: any, callback: any): any;

    setBucketRequesterPayment(param: any, callback: any): any;

    setBucketStoragePolicy(param: any, callback: any): any;

    setBucketTagging(param: any, callback: any): any;

    setBucketVersioning(param: any, callback: any): any;

    setBucketVersioningConfiguration(param: any, callback: any): any;

    setBucketWebsite(param: any, callback: any): any;

    setBucketWebsiteConfiguration(param: any, callback: any): any;

    setObjectAcl(param: any, callback: any): any;

    setObjectMetadata(param: any, callback: any): any;

    uploadFile(param: any, callback: any): any;

    uploadPart(param: any, callback: any): any;
}

// TypeScript Version: 3.9.7
// Project: https://github.com/huaweicloud/huaweicloud-sdk-nodejs-obs
// Document Refrences: https://support.huaweicloud.com/intl/en-us/api-obs_nodejs_sdk_api_en/obs_39_0001.html
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
        | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60;

    type MaxRetryCountRange = 1 | 2 | 3 | 4 | 5;

    type Callback = (err: any, result: Result) => any;

    enum Acl {
        Private = 'private',
        PublicRead = 'public-read',
        PublicReadWrite = 'public-read-write',
        PublicReadDelivered = 'public-read-delivered',
        PublicReadWriteDelivered = 'public-read-write-delivered',
        AuthenticatedRead = 'authenticated-read',
        BucketOwnerRead = 'bucket-owner-read',
        BucketOwnerFullControl = 'bucket-owner-full-control',
        LogDeliveryWrite = 'log-delivery-write',
    }

    enum StorageClass {
        Standard = 'STANDARD',
        Warm = 'WARM',
        Cold = 'COLD',
    }

    enum Permission {
        Read = 'READ',
        Write = 'WRITE',
        ReadAcp = 'READ_ACP',
        WriteAcp = 'WRITE_ACP',
        FullControl = 'FULL_CONTROL',
    }

    enum Group {
        AllUsers = 'AllUsers',
        AuthenticatedUsers = 'AuthenticatedUsers',
        LogDelivery = 'LogDelivery',
    }

    enum RestoreTier {
        Expedited = 'Expedited',
        Standard = 'Standard',
        Bulk = 'Bulk',
    }

    enum Grantee {
        Group = 'Group',
        User = 'CanonicalUser',
    }

    enum Metadata {
        Copy = 'COPY',
        Replace = 'REPLACE',
    }

    enum EventObject {
        CreatedAll = 'ObjectCreated:*',
        CreatedPut = 'ObjectCreated:Put',
        CreatedPost = 'ObjectCreated:Post',
        CreatedCopy = 'ObjectCreated:Copy',
        CreatedCompleteMultipartUpload = 'ObjectCreated:CompleteMultipartUpload',
        RemovedAll = 'ObjectRemoved:*',
        RemovedDelete = 'ObjectRemoved:Delete',
        RemovedDeleteMarkerCreated = 'ObjectRemoved:DeleteMarkerCreated',
    }

    interface Options {
        /**
         * AK
         */
        access_key_id: string;
        /**
         * SK
         */
        secret_access_key: string;
        /**
         * Endpoint for accessing OBS, which contains the protocol type, domain name (or IP address), and port number.
         * For example, https://your-endpoint:443
         */
        server: string;
        /**
         * Maximum number of retries when an HTTP/HTTPS connection is abnormal.
         * The default value is 3.
         */
        max_retry_count?: MaxRetryCountRange;
        /**
         * Timeout period (in seconds) of an HTTP/HTTPS request.
         * The default value is 60.
         */
        timeout?: TimeoutRange;
        /**
         * Whether to verify the server certificate. Possible values are:
         * - Path to the server-side root certificate file in .pem format
         * - true: The default CAs are used to verify the server-side certificate.
         * - false: The server-side certificates will not be verified.
         */
        ssl_verify?: boolean | string;
        /**
         * Persistent connection mode (in seconds) If the value is equal to or larger than 0,
         * the persistent connection mode is enabled and this value is used as the initial delay of the TCP Keep-Alive packets.
         */
        long_conn_param?: number;
        /**
         * Whether to use self-defined domain name to access OBS.
         * The default value is false.
         */
        is_cname?: boolean;
    }

    interface LogOptions {
        /**
         * Full path to the log file
         */
        file_full_path: string;
        /**
         * Log file size in bytes
         */
        max_log_size: string | number;
        /**
         * Maximum number of retained log files
         */
        backups: string | number;
        /**
         * Log level. Possible values are debug, info, warn, and error.
         */
        level: 'debug' | 'info' | 'warn' | 'error';
        /**
         * Whether to print logs to the console
         */
        log_to_console?: boolean;
        /**
         * Log name.
         * When there are multiple instances of ObsClient, this parameter is used to identify log files.
         */
        name?: string;
    }

    interface InterfaceResult {
        RequestId: string;
        Id2: string;
        // TODO: generics
        [k: string]: any;
    }

    interface CommonMsg {
        /**
         * HTTP status code. If the value is smaller than 300, the operation succeeds.
         * Otherwise, the operation fails.
         */
        Status: number;
        /**
         * Error code returned by the OBS server.
         * If Status is smaller than 300, the value is null.
         */
        Code: string;
        /**
         * Error description returned by the OBS server.
         * If Status is smaller than 300, the value is null.
         */
        Message: string;
        /**
         * Server ID.
         * If Status is smaller than 300, the value is null.
         */
        HostId: string;
        /**
         * Request ID returned by the OBS server
         */
        RequestId: string;
        /**
         * Request ID2 returned by the OBS server
         */
        Id2: string;
        /**
         * Detailed error code returned by the OBS server.
         * If Status is smaller than 300, the value is null.
         */
        Indicator: string;
    }

    interface Result {
        InterfaceResult: InterfaceResult;
        CommonMsg: CommonMsg;
    }
}

/**
 * bucket
 */
declare namespace OBS {
    interface Bucket {
        /**
         * Bucket name.
         */
        Bucket: string;
    }

    interface BucketACL extends Bucket {
        /**
         * Pre-defined access control policy that can be specified during the bucket creation
         */
        ACL?: Acl;
        /**
         * Bucket owner
         */
        Owner?: {
            /** ID of the domain to which the bucket owner belongs */
            ID: string;
        };
        /**
         * List of grantees' permission information
         */
        Grants?: {
            Grantee: {
                /** Grantee Types */
                Type: Grantee;
                /** ID of the domain to which the grantee belongs */
                ID?: string;
                /** Group */
                URI?: Group;
            };
            Permission: Permission;
            /** Whether an object inherits the ACL of its residing bucket */
            Delivered?: boolean;
        }[];
    }

    interface BucketPolicy extends Bucket {
        /**
         * Policy information in the JSON format.
         */
        Policy: string
    }

    interface BucketStorageQuota extends Bucket {
        /**
         * Bucket quota.
         * The value is a non-negative **integer**.
         */
        StorageQuota: number
    }

    interface BucketStorageClass extends  Bucket {
        /**
         * Storage class of the bucket
         */
        StorageClass: StorageClass
    }

    interface CreateBucket extends Bucket {
        /**
         * Pre-defined access control policy that can be specified during the bucket creation
         */
        ACL?: Acl;
        /**
         * Bucket storage class that can be specified during the bucket creation
         */
        StorageClass?: StorageClass;
        /**
         * Bucket location
         */
        Location?: string;
    }

    interface GetBucket {
        /**
         * Whether to query the bucket location
         */
        QueryLocation?: boolean;
    }

    interface BucketMetadata extends Bucket {
        /**
         * Origin of the cross-domain request specified by the pre-request.
         * Generally, it is a domain name.
         */
        Origin?: string;
        /**
         * HTTP headers in the cross-domain request
         */
        RequestHeader?: string;
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
    /**
     * Create a bucket
     * @param params create params
     * @param callback callback
     */
    createBucket(params: OBS.CreateBucket, callback?: OBS.Callback): Promise<OBS.Result>;

    createPostSignatureSync(params: any): Promise<OBS.Result>;

    createSignedUrlSync(params: any): Promise<OBS.Result>;

    createV2SignedUrlSync(params: any): Promise<OBS.Result>;

    createV4PostSignatureSync(params: any): Promise<OBS.Result>;

    createV4SignedUrlSync(params: any): Promise<OBS.Result>;

    /**
     * Delete a bucket
     * @param params params
     * @param callback callback
     */
    deleteBucket(params: OBS.Bucket, callback?: OBS.Callback): Promise<OBS.Result>;

    deleteBucketCors(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    deleteBucketDirectColdAccess(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    deleteBucketEncryption(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    deleteBucketLifecycle(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    deleteBucketLifecycleConfiguration(params: any, callback?: OBS.Callback): Promise<OBS.Result>;
    /**
     * Deleting a Bucket Policy
     * @param params params
     * @param callback callback
     */
    deleteBucketPolicy(params: OBS.Bucket, callback?: OBS.Callback): Promise<OBS.Result>;

    deleteBucketReplication(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    deleteBucketTagging(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    deleteBucketWebsite(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    deleteBucketWebsiteConfiguration(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    deleteObject(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    deleteObjects(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    downloadFile(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    exec(funcName: any, params: any, callback?: OBS.Callback): void;

    factory(params: any): void;
    /**
     * get the bucket ACL
     * @param params params
     * @param callback callback
     */
    getBucketAcl(params: OBS.Bucket, callback?: OBS.Callback): Promise<OBS.Result>;

    getBucketCors(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    getBucketDirectColdAccess(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    getBucketEncryption(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    getBucketLifecycle(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    getBucketLifecycleConfiguration(params: any, callback?: OBS.Callback): Promise<OBS.Result>;
    /**
     * Obtaining a Bucket Location
     * @param params params
     * @param callback callback
     */
    getBucketLocation(params: OBS.Bucket, callback?: OBS.Callback): Promise<OBS.Result>;

    getBucketLogging(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    getBucketLoggingConfiguration(params: any, callback?: OBS.Callback): Promise<OBS.Result>;
    /**
     * Obtain the bucket metadata
     * @param params params
     * @param callback callback
     */
    getBucketMetadata(params: OBS.BucketMetadata, callback?: OBS.Callback): Promise<OBS.Result>;

    getBucketNotification(params: any, callback?: OBS.Callback): Promise<OBS.Result>;
    /**
     * Obtaining a Bucket Policy
     * @param params params
     * @param callback callback
     */
    getBucketPolicy(params: OBS.Bucket, callback?: OBS.Callback): Promise<OBS.Result>;
    /**
     * Obtaining a Bucket Quota
     * @param params params
     * @param callback callback
     */
    getBucketQuota(params: OBS.Bucket, callback?: OBS.Callback): Promise<OBS.Result>;

    getBucketReplication(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    getBucketRequesterPayment(params: any, callback?: OBS.Callback): Promise<OBS.Result>;
    /**
     * Obtaining Storage Information About a Bucket
     * @param params params
     * @param callback callback
     */
    getBucketStorageInfo(params: OBS.Bucket, callback?: OBS.Callback): Promise<OBS.Result>;
    /**
     * Obtaining the Storage Class of a Bucket
     * @param params params
     * @param callback callback
     */
    getBucketStoragePolicy(params: OBS.Bucket, callback?: OBS.Callback): Promise<OBS.Result>;

    getBucketTagging(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    getBucketVersioning(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    getBucketVersioningConfiguration(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    getBucketWebsite(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    getBucketWebsiteConfiguration(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    getObject(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    getObjectAcl(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    getObjectMetadata(params: any, callback?: OBS.Callback): Promise<OBS.Result>;
    /**
     * Identifying Whether a Bucket Exists
     * @param params params
     * @param callback callback
     */
    headBucket(params: OBS.Bucket, callback?: OBS.Callback): Promise<OBS.Result>;

    initLog(params: OBS.LogOptions): void;

    initiateMultipartUpload(params: any, callback?: OBS.Callback): Promise<OBS.Result>;
    /**
     * List buckets
     * @param params params
     * @param callback callback
     */
    listBuckets(params: OBS.GetBucket, callback?: OBS.Callback): Promise<OBS.Result>;

    listMultipartUploads(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    listObjects(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    listParts(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    listVersions(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    optionsBucket(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    optionsObject(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    putObject(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    refresh(access_key_id: any, secret_access_key: any, security_token: any): void;

    renameObject(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    restoreObject(params: any, callback?: OBS.Callback): Promise<OBS.Result>;
    /**
     * set the bucket ACL
     * @param params params
     * @param callback callback
     */
    setBucketAcl(params: OBS.BucketACL, callback?: OBS.Callback): Promise<OBS.Result>;

    setBucketCors(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    setBucketDirectColdAccess(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    setBucketEncryption(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    setBucketLifecycle(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    setBucketLifecycleConfiguration(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    setBucketLogging(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    setBucketLoggingConfiguration(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    setBucketNotification(params: any, callback?: OBS.Callback): Promise<OBS.Result>;
    /**
     * Setting a Bucket Policy
     * @param params params
     * @param callback callback
     */
    setBucketPolicy(params: OBS.BucketPolicy, callback?: OBS.Callback): Promise<OBS.Result>;
    /**
     * Setting a Bucket Quota
     * @param params params
     * @param callback callback
     */
    setBucketQuota(params: OBS.BucketStorageQuota, callback?: OBS.Callback): Promise<OBS.Result>;

    setBucketReplication(params: any, callback?: OBS.Callback): Promise<OBS.Result>;

    setBucketRequesterPayment(params: any, callback?: OBS.Callback): Promise<OBS.Result>;
    /**
     * Setting the Storage Class for a Bucket
     * @param params params
     * @param callback callback
     */
    setBucketStoragePolicy(params: OBS.BucketStorageClass, callback?: OBS.Callback): Promise<OBS.Result>;

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

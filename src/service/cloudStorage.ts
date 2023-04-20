

import * as objectstorage from "oci-objectstorage";
import { ConfigFileAuthenticationDetailsProvider } from "oci-common";
import st from "stream";


// Create a default authentication provider that uses the DEFAULT
// profile in the configuration file.
// Refer to <see href="https://docs.cloud.oracle.com/en-us/iaas/Content/API/Concepts/sdkconfig.htm#SDK_and_CLI_Configuration_File>the public documentation</see> on how to prepare a configuration file.
function stream2buffer(stream: any): Promise<Buffer> {

    return new Promise<Buffer>((resolve, reject) => {
        const _buf = Array<any>();
        stream.on("data", (chunk: any) => _buf.push(chunk));
        stream.on("end", () => resolve(Buffer.concat(_buf)));
        stream.on("error", (err: any) => reject(`error converting stream - ${err}`));

    });
}


export async function uploadFile(fileName: string, size: number, file: any, contentType: string) {
    const provider: ConfigFileAuthenticationDetailsProvider = new ConfigFileAuthenticationDetailsProvider();
    try {
        const client = new objectstorage.ObjectStorageClient({
            authenticationDetailsProvider: provider
        });

        const putObjectRequest: objectstorage.requests.PutObjectRequest = {
            namespaceName: "yzs1kakzoczk",
            bucketName: "bucket-20230410-2311",
            objectName: fileName,
            contentLength: size,

            putObjectBody: file,
            //ifMatch: "EXAMPLE-ifMatch-Value",
            //ifNoneMatch: "2",
            //opcClientRequestId: "ocid1.bucket.oc1.ca-toronto-1.aaaaaaaadlyags6fvysup2lvqhkewx7ciez74ea6taygxx7dbq5iwzthk4iq",
            //expect: "EXAMPLE-expect-Value",
            //contentMD5: "900150983cd24fb0d6963f7d28e17f72",
            contentType: contentType
            //contentLanguage: "EXAMPLE-contentLanguage-Value",
            //contentEncoding: "EXAMPLE-contentEncoding-Value",
            //contentDisposition: "EXAMPLE-contentDisposition-Value",
            //cacheControl: "EXAMPLE-cacheControl-Value",
            //opcSseCustomerAlgorithm: "EXAMPLE-opcSseCustomerAlgorithm-Value",
            //opcSseCustomerKey: "EXAMPLE-opcSseCustomerKey-Value",
            //opcSseCustomerKeySha256: "EXAMPLE-opcSseCustomerKeySha256-Value",
            //opcSseKmsKeyId: "ocid1.test.oc1..<unique_ID>EXAMPLE-opcSseKmsKeyId-Value",
            //storageTier: objectstorage.models.StorageTier.InfrequentAccess
        };

        // Send request to the Client.
        return await client.putObject(putObjectRequest);

    } catch (error) {
        throw error
    }
}

export async function getFile(fileName: string,) {
    const provider: ConfigFileAuthenticationDetailsProvider = new ConfigFileAuthenticationDetailsProvider();
    try {
        const client = new objectstorage.ObjectStorageClient({
            authenticationDetailsProvider: provider
        });

        
        const getObjectRequest: objectstorage.requests.GetObjectRequest = {
            namespaceName: "yzs1kakzoczk",
            bucketName: "bucket-20230410-2311",
            objectName: fileName,
        };

        // Send request to the Client.

        let responseObj = await client.getObject(getObjectRequest);
        //console.log(responseObj.value)

        return {
            contenType: responseObj.contentType,
            data: await stream2buffer(responseObj.value)
        }

    } catch (error) {
        throw error
    }
}
//https://objectstorage.ca-toronto-1.oraclecloud.com/p/6KlX-9qJHQLC9d6AJeC6r5LzC-QfDypRCFBeehGr2SZ_9Gh6d7ZuHb_nze7D1t9U/n/yzs1kakzoczk/b/bucket-20230410-2311/o/
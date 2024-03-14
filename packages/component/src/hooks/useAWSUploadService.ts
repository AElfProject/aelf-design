import { useCallback, useMemo } from 'react';
import { CognitoIdentityClient } from '@aws-sdk/client-cognito-identity';
import { ObjectCannedACL, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-provider-cognito-identity';

export interface IUploadService {
  identityPoolID: string;
  bucket: string;
  region: string;
}

export default function useAWSUploadService(props: IUploadService) {
  const { region, bucket, identityPoolID } = props;

  const s3Client = useMemo(() => {
    if (!identityPoolID || !bucket || !region) {
      return null;
    }

    const client = new S3Client({
      region: region,
      credentials: fromCognitoIdentityPool({
        client: new CognitoIdentityClient({
          region: region,
        }),
        identityPoolId: identityPoolID || '',
      }),
    });
    return client;
  }, [identityPoolID, region, bucket]);

  const awsUploadFile = useCallback(
    async (file: File) => {
      const FileKey = `${Date.now()}-${file.name}`;
      const params = {
        ACL: 'public-read' as ObjectCannedACL,
        Bucket: bucket,
        Key: FileKey,
      };
      try {
        const res = await s3Client?.send(
          new PutObjectCommand({
            Body: file,
            ContentType: file.type,
            ContentLength: file.size,
            ...params,
          }),
        );
        console.log(res);
        return `https://${bucket}.s3.${region}.amazonaws.com/${encodeURIComponent(FileKey)}`;
      } catch (error) {
        console.error('=====awsUploadFile error:', error);
        return Promise.reject(error);
      }
    },
    [s3Client, bucket, region],
  );

  return {
    awsUploadFile,
  };
}

import { Storage } from "@google-cloud/storage";

export const googleStorage = new Storage({
  projectId: process.env.GOOGLE_PROJECT_ID,
  // keyFilename: process.env.GOOGLE_SERVICE_KEYFILE_NAME,
  credentials: process.env.GOOGLE_STORAGE_CREDENTIALS_JSON
    ? JSON.parse(process.env.GOOGLE_STORAGE_CREDENTIALS_JSON)
    : undefined,
  });

export const googleBucket = googleStorage.bucket(process.env.GOOGLE_STORAGE_BUCKET_NAME || '');

export function uploadGoogleFile(filePath: string, destFileName: string, generationMatchPrecondition: number) {
  const options = {
    destination: destFileName,
    preconditionOpts: {ifGenerationMatch: generationMatchPrecondition},
  };
  const url = `https://storage.googleapis.com/${process.env.GOOGLE_STORAGE_BUCKET_NAME ?  process.env.GOOGLE_STORAGE_BUCKET_NAME + '/': ''}${destFileName}`;
  
  return async function uploadFile() {
    await googleBucket.upload(filePath, options);
    await googleBucket.file(destFileName).makePublic()
    return url;
  }
}
import * as path from 'path';
import { Storage } from '@google-cloud/storage';
process.env.GOOGLE_APPLICATION_CREDENTIALS = path.resolve('./cloud-storage-key.json');
const storage = new Storage({
    projectId: 'diy-mechatronics'
});
const bucket = storage.bucket('resume.nishkal.in');

const file = 'resume.pdf';
(async ()=>{
    await bucket.upload(file, {
        gzip: true,
        public: true,
        destination: file,
        contentType : 'application/octet-stream',
        metadata: {
            cacheControl: `public, max-age=0`,
        }
    });
})();

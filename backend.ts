import fs from 'fs';
//backend
export const UploadRoute = (app: any) => {
    app.post("/upload", (req, res) => {
        const files:xFile[] = req.body.files;
        const firstFile = files[0]
        WriteFile(firstFile, (err) => {
          if (err) {
            res.send({ error: err, response: null });
          } else {
            res.send({ error: null, response: firstFile.fileName });
          }
        });
    });
}


const WriteFile = ({ fileName, b64 }: xFile, cb: (err: any) => void) => {
    fs.writeFile(fileName, b64.replace(/^data:([A-Za-z-+/]+);base64,/, ''),'base64', cb);
};

export interface xFile {
  b64: string;
  fileName: string;
}

import * as fs from 'fs';
import Buffer from 'buffer';// remove this line
export const UploadRoute = (app: any) => {
    app.post("/upload", (req, res) => {
        const files = req.body.files;
        const fileName = files[0].fileName;
        const fileBytes = files[0].fileBytes;
        const buffer = Buffer.from(fileBytes as any);
        fs.writeFile(fileName, buffer, (err) => {
            if (err) {
                res.send({error: err,response:null});
            } else {
                res.send({error: null,response:fileName});
            }
        });
    });
}
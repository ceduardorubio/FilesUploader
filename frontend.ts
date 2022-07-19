
// FrontEndt
  const GetFileUint8Array = async (file: File) => {
    let fileBytes = await GetFileBytes(file);    
    let fileName = file.name;
    return {
        fileBytes,
        fileName
    };
  }

  const GetFileBytes = (file: File) => {
    return new Promise<ArrayBuffer>((resolve) => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        let arrayBuffer: ArrayBuffer = reader.result as ArrayBuffer;
        let fileBytes = new Uint8Array(arrayBuffer);
        resolve(fileBytes);
      };
      reader.readAsArrayBuffer(file);
    });
  }

  const SendFile = async (http:any, file: File) => {
    let fileBytes = await GetFileUint8Array(file);
    return http.post("/upload", { files: [fileBytes] });
  }

// Frontend
  const GetFilesToB64 = async (files: File[]) => {
    let filesB64: {
      b64: string;
      fileName: string;
    }[] = [];
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      let fb64 = await GetFileToB64(file);
      filesB64.push(fb64);
    }
    return filesB64;
  };

  const GetFileToB64 = async (file: File) => {
    let b64 = await ReadFile(file);
    let fileName = file.name;
    return {
      b64,
      fileName,
    };
  };

  const ReadFile = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const SendFile = async (http:any, file: File) => {
    let fileB64 = await GetFileToB64(file);
    return http.post("/upload", { files: [fileB64] });
  }
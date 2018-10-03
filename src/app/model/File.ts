export class FileAttributes {
  size: number;
  creationDate: Date;
  lastModifiedDate: Date;
  lastAccessDate: Date;
}

class FileType {
}

export class File {
  id: number;
  fileName = '';
  isDirectory: boolean;
  parentDirectory = '';
  fileAttributes: FileAttributes = new FileAttributes();
  fileType: FileType = new FileType();
  systemName;
  fileContent;
}

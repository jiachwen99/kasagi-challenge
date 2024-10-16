import * as fs from 'fs';

const OBJECT_FILE = process.env.FILE || 'objects.txt';

enum ObjectType {
  Integer = 'Integer',
  RealNumber = 'Real Number',
  String = 'String',
  Alphanumeric = 'Alphanumeric',
  Undefined = 'Undefined',
}

function identifyObjectType(obj: string): ObjectType {
  if (/^-?\d+$/.test(obj)) return ObjectType.Integer;
  if (/^-?\d+\.\d+$/.test(obj)) return ObjectType.RealNumber;
  if (/^[a-zA-Z]+$/.test(obj)) return ObjectType.String;
  if (/^[a-zA-Z0-9]+$/.test(obj)) return ObjectType.Alphanumeric;
  return ObjectType.Undefined;
}

function processFile(): void {
  try {
    console.log(`Attempting to read file: ${OBJECT_FILE}`);
    console.log(`File exists: ${fs.existsSync(OBJECT_FILE)}`);
    console.log(`Is directory: ${fs.statSync(OBJECT_FILE).isDirectory()}`);
    
    const data = fs.readFileSync(OBJECT_FILE, 'utf-8');
    const objects = data.split(',').map(obj => obj.trim()).filter(obj => obj.length > 0);

    objects.forEach(obj => {
      const type = identifyObjectType(obj);
      console.log(`${type} : ${obj}`);
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error processing file: ${error.message}`);
      console.error(`Stack trace: ${error.stack}`);
    } else {
      console.error('Unknown error occurred');
    }
    process.exit(1);
  }
}

processFile();

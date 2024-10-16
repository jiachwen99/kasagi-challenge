import * as fs from 'fs';
import * as crypto from 'crypto';

const OUTPUT_FILE = process.env.FILE || 'objects.txt';
const TARGET_SIZE = 10 * 1024 * 1024;

function generateString(): string {
    return crypto.randomBytes(10).toString('base64').replace(/[^a-zA-Z]/g, '').slice(0, 10);
}

function generateRealNumber(): string {
    return (Math.random() * 1000).toFixed(6);
}

function generateInteger(): string {
    return Math.floor(Math.random() * 1000000).toString();
}

function generateAlphanumeric(): string {
    const alphanumeric = crypto.randomBytes(10).toString('base64').replace(/[^a-zA-Z0-9]/g, '').slice(0, 10);
    const leftSpaces = ' '.repeat(Math.floor(Math.random() * 10));
    const rightSpaces = ' '.repeat(Math.floor(Math.random() * 10));
    return `${leftSpaces}${alphanumeric}${rightSpaces}`;
}

function generateFile(): void {
    const randomizers = [
        generateString, 
        generateRealNumber,
        generateInteger,
        generateAlphanumeric
    ];

    let buffer = '';
    let totalSize = 0;

    while (totalSize < TARGET_SIZE) {
        const object = randomizers[Math.floor(Math.random() * randomizers.length)]();
        const separator = totalSize > 0 ? ',' : '';
        const newData = separator + object;
        
        if (totalSize + Buffer.byteLength(newData) <= TARGET_SIZE) {
            buffer += newData;
            totalSize += Buffer.byteLength(newData);
        } else {
            break;
        }
    }

    fs.writeFileSync(OUTPUT_FILE, buffer);
    console.log(`File ${OUTPUT_FILE} has been generated with a size of ${totalSize} bytes.`);
}

generateFile();

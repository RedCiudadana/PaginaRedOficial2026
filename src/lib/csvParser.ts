export async function parseCSV(filePath: string): Promise<any[]> {
  try {
    const response = await fetch(filePath);
    const text = await response.text();

    const lines = text.trim().split('\n');
    const headers = lines[0].split(',');

    const data = lines.slice(1).map(line => {
      const values = parseCSVLine(line);
      const obj: any = {};

      headers.forEach((header, index) => {
        const value = values[index];
        obj[header.trim()] = parseValue(value);
      });

      return obj;
    });

    return data;
  } catch (error) {
    console.error('Error parsing CSV:', error);
    return [];
  }
}

function parseCSVLine(line: string): string[] {
  const values: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      values.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }

  values.push(current.trim());
  return values;
}

function parseValue(value: string): any {
  value = value.trim();

  if (value === '') return null;
  if (value === 'true') return true;
  if (value === 'false') return false;
  if (!isNaN(Number(value)) && value !== '') return Number(value);
  if (value.includes(',') && !value.startsWith('[')) {
    return value.split(',').map(v => v.trim());
  }

  return value;
}

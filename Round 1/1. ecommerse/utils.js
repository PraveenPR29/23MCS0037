import { v4 as uuidv4 } from 'uuid';

export const generateProductId = (data) => {
  return `${data.company}-${data.id}-${uuidv4()}`;
};

import { v4 as uuidv4 } from 'uuid';

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()
  const { email } = await readBody(event)

  const headers = new Headers();
  headers.append('X-Appwrite-Project', runtimeConfig.APPRWITE_PROJECT);
  headers.append('X-Appwrite-Key', runtimeConfig.APPRWITE_KEY);

  const body = new FormData();
  body.append('documentId', uuidv4());
  body.append('data', JSON.stringify({
    email
  }));

  return fetch('https://appwrite.coolify.voorhoede.nl/v1/databases/6467621ac1f8023bb7db/collections/646762237f1ff7822c19/documents\n', {
    method: 'POST',
    headers,
    body,
  }).then(response => response.text())
})

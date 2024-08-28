export default async function getISS(): Promise<any> {
  const url = "http://api.open-notify.org/iss-now.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    return response.json();
  } catch (error: any) {
    console.error(error.message);
    return {};
  }
}

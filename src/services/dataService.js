const host = "https://parseapi.back4app.com/classes/Products";
const appId = "BYq7gOBHGRd1x0x8EPpmZqhu4GmX0Lcyh2FZMxIB";
const apiKey = "hZad1JXbZ6hUj4E6nsOqg21BjyDmOOWe428jmYYk";

export async function fetchAllProducts() {
    try {
        const response = await fetch(host, {
            method: "GET",
            headers: {
                "X-Parse-Application-Id": appId,
                "X-Parse-REST-API-Key": apiKey,
                "X-Parse-Revocable-Session": "1",
            },
        });

        const result = await response.json();

        return result.results;
    } catch (err) {
        throw Error(err);
    }
}

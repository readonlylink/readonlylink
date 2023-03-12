export type Json = JsonAtom | JsonArray | JsonObject

export type JsonAtom = string | number | boolean | null

export type JsonArray = Array<Json>

export type JsonObject = { [x: string]: Json }

export function isJsonObject(json: Json): json is JsonObject {
  return typeof json === 'object' && json !== null && !isJsonArray(json)
}

export function isJsonArray(json: Json): json is JsonArray {
  return json instanceof Array
}

import * as ut from "../ut"

export async function test(
  description: string,
  fn: () => Promise<void>
): Promise<void> {
  await fn()
    .then(() => {
      const head = ut.colors.blue("Ok")
      console.log(`${head}: ${description}`)
    })
    .catch((error) => {
      const head = ut.colors.red("Fail")
      console.error(`${head}: ${description}`)
      console.error(error)
      throw error
    })
}

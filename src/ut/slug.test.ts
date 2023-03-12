import * as ut from "./index"

const target = "構造-the-constructivization-of-mathematics"

// prettier-ignore
{
  ut.assertEqual(target, ut.slug("構造 / The constructivization of mathematics"))
  ut.assertEqual(target, ut.slug("[構造] / The constructivization of mathematics---"))
  ut.assertEqual(target, ut.slug("---[構造] / The constructivization of mathematics---"))
  ut.assertEqual(target, ut.slug("---「構造」 / The constructivization of mathematics---"))
  ut.assertEqual(target, ut.slug("---「構造」 / The constructivization of mathematics___"))
  ut.assertEqual(target, ut.slug("---「構造」 / The_constructivization_of_mathematics___"))
}

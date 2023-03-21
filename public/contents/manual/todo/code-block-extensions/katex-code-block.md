---
title: Katex Code Block
---

To use **Katex Code Block** extensions,
name a code block by `katex`.

# Quadratic equation

What is the root formula of the following general quadratic equation?

```katex
ax^2 + bx +c
```

```plaintext
ax^2 + bx +c
```

The root formula is:

```katex
-b \pm \sqrt{b^2 - 4ac} \over 2a
```

```plaintext
-b \pm \sqrt{b^2 - 4ac} \over 2a
```

# Chemical equations

```katex
\ce{CO2 + C -> 2 CO}
```

```plaintext
\ce{CO2 + C -> 2 CO}
```

```katex
\ce{Hg^2+ ->[I-] HgI2 ->[I-] [Hg^{II}I4]^2-}
```

```plaintext
\ce{Hg^2+ ->[I-] HgI2 ->[I-] [Hg^{II}I4]^2-}
```

```katex
C_p[\ce{H2O(l)}] = \pu{75.3 J // mol K}
```

```plaintext
C_p[\ce{H2O(l)}] = \pu{75.3 J // mol K}
```

## Complex examples

```katex
\ce{
  Zn^2+
  <=>[+ 2OH-][+ 2H+]
  $\underset{\text{amphoteres Hydroxid}}{\ce{Zn(OH)2 v}}$
  <=>[+ 2OH-][+ 2H+]
  $\underset{\text{Hydroxozikat}}{\ce{[Zn(OH)4]^2-}}$
}
```

```plaintext
\ce{
  Zn^2+
  <=>[+ 2OH-][+ 2H+]
  $\underset{\text{amphoteres Hydroxid}}{\ce{Zn(OH)2 v}}$
  <=>[+ 2OH-][+ 2H+]
  $\underset{\text{Hydroxozikat}}{\ce{[Zn(OH)4]^2-}}$
}
```

```katex
\ce{$K = \ce{\frac{[Hg^2+][Hg]}{[Hg2^2+]}}$}
```

```plaintext
\ce{$K = \ce{\frac{[Hg^2+][Hg]}{[Hg2^2+]}}$}
```

```katex
\ce{
  Hg^2+ ->[I-]
  $\underset{\mathrm{red}}{\ce{HgI2}}$
  ->[I-]
  $\underset{\mathrm{red}}{\ce{[Hg^{II}I4]^2-}}$
}
```

```plaintext
\ce{
  Hg^2+ ->[I-]
  $\underset{\mathrm{red}}{\ce{HgI2}}$
  ->[I-]
  $\underset{\mathrm{red}}{\ce{[Hg^{II}I4]^2-}}$
}
```

Please visit [**mhchem**'s manual](https://mhchem.github.io/MathJax-mhchem) from more examples.

# References

- [TeX](https://en.wikipedia.org/wiki/TeX)
  - [TeX Users Group](https://tug.org/index.html)
- [KaTex](https://katex.org)
  - [Supported Functions](https://katex.org/docs/supported.html)
- [mhchem](https://mhchem.github.io/MathJax-mhchem) is a tool for writing beautiful chemical equations easily.

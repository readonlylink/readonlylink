---
title: Dialog List Item
subtitle: Dan's Little Books style dialog
---

To use **Dialog List Item** extensions,
name a item by `dialog`, like the following:

# Simple dialog

- [dialog]

  - What is number?

  - Number is about counting.

    1, 2, 3, ...

  - We should starting from 0.

  - Ok,

    0, 1, 2, 3, ...

  - That's much better!

  - What's next?

```plaintext
- [dialog]

  - What is number?

  - Number is about counting.

    1, 2, 3, ...

  - We should starting from 0.

  - Ok,

    0, 1, 2, 3, ...

  - That's much better!

  - What's next?

```

# About indexing

Multiple dialogs in the same document will share the same indexing.

- [dialog]

  - What's after 3?

  - 4, 5, 6, ...

  - How many numbers are there?

  - Infinitely many!

# Dialog with notes

- [dialog]

  - What is the point of a judgment?

  - A judgment is an attitude
    that a person takes towards expressions.
    When we come to know something, we are making a judgment.

    - Thanks, Per Martin-Löf (1942-).

```plaintext
- [dialog]

  - What is the point of a judgment?

  - A judgment is an attitude that a person takes towards expressions.
    When we come to know something, we are making a judgment.

    - Thanks, Per Martin-L6f (1942-).
```

# Reminder

We can also use **Reminder List Item** extensions,
to render reminder cards of _Rules_ and _Laws_ in the little books:

- [reminder] Natural Number

  - We can construct natural number, by `zero` and `add1`.

```plaintext
- [reminder] Natural Number

  - We can construct natural number, by `zero` and `add1`.
```

Another one, from "The Little Typer":

- [reminder] Everything Is an Expression

  - In some languages (such as Pie), values are also expressions.
    Evaluation such languages finds an expression,
    not some other kind of thing.

## Multiple reminder entries

- [reminder] Before type theory

  - In programming, we do _not_ write types, we only write terms.

  - In logic, we do _not_ write terms, we only write types
    -- propositions and their inference rules.

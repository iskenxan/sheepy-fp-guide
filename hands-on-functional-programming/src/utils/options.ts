export const listOptions = [
  { value: "map", label: "change every value" },
  {
    value: "addIndex",
    label:
      "receive the index of each element along with the value when iterating over a list"
  },
  { value: "pluck", label: "pull a property off each value" },
  { value: "filter", label: "select values based on custom logic" },
  { value: "slice", label: "select values from a specific index range" },
  { value: "take", label: "select values from the start" },
  {
    value: "takeWhile",
    label: "select values from the start based on custom logic"
  },
  { value: "takeLast", label: "select values from the end" },
  {
    value: "takeLastWhile",
    label: "select values from the end based on custom logic	"
  },
  { value: "init", label: "remove the last value" },
  { value: "without", label: "remove specific values" },
  { value: "reject", label: "remove values based on custom logic" },
  { value: "uniq", label: "dedupe, remove all duplicates" },
  {
    value: "uniqWith",
    label: "dedupe, remove all duplicates based on custom logic"
  },
  { value: "remove", label: "remove values based on index" },
  { value: "drop", label: "remove values from the start" },
  { label: "remove values based on index", value: "remove" },
  { label: "remove values from the start", value: "drop" },
  {
    label: "remove values from the start based on custom logic",
    value: "dropWhile"
  },
  { label: "remove values from the end", value: "dropLast" },
  {
    label: "remove values from the end based on custom logic",
    value: "dropLastWhile"
  },
  { label: "compute the sum", value: "sum" },
  { label: "compute the product", value: "product" },
  { label: "compute the average", value: "mean" },
  { label: "compute the median", value: "median" },
  {
    label: "compute based on custom logic and only output the final value",
    value: "reduce / reduceRight"
  },
  {
    label:
      "compute based on custom logic and output the values as they are calculated",
    value: "scan"
  },
  { label: "take the first value", value: "head" },
  { label: "take the last value", value: "last" },
  { label: "take a value from a specific index", value: "nth" },
  {
    label: "take the first occurrence of a value based on custom logic",
    value: "ind"
  },
  {
    label: "take the last occurrence of a value based on custom logic",
    value: "findLast"
  },
  { label: "know if a specific value is present", value: "includ" },
  { label: "know where the first occurrence of a value is", value: "indexOf" },
  {
    label:
      "know where the first occurrence of a value is based on custom logic",
    value: "findIndex"
  },
  {
    label: "know where the last occurrence of a value is based on custom logic",
    value: "findLastInde"
  },
  {
    label: "know if a condition is satisfied by all of the values",
    value: "all"
  },
  {
    label: "know if a condition is satisfied by any of the values",
    value: "any"
  },
  {
    label: "know if a condition is satisfied by none of the values",
    value: "none"
  },
  { label: "replace a value at a specific index", value: "update" },
  {
    label: "replace a value at a specific index based on custom logic",
    value: "adjust / lensPath"
  },
  { label: "add a value at the start", value: "prepend" },
  { label: "add a value at the end", value: "append" },
  { label: "add a value at a specific index", value: "inser" },
  { label: "add multiple values at a specific index", value: "insertAll" },
  { label: "group values based on custom logic", value: "groupBy" },
  { label: "know how many values it contains", value: "length" },
  { label: "get a specific range of integer values", value: "range" },
  { label: "split at a specific index", value: "splitAt" },
  { label: "split based on custom logic", value: "splitWhen" },
  { label: "split into chunks of a specific length", value: "splitEvery" },
  { label: "reverse", value: "reverse" },
  { label: "sort", value: "sort" },
  { label: "sort based on custom logic", value: "sortBy" },
  { label: "concatenate two lists", value: "concat" },
  { label: "find the common values in two lists", value: "intersection" },
  {
    label: "find the common values in two lists based on custom logic",
    value: "intersectionWith"
  },
  {
    label: "find the distinct values compared to another list",
    value: "difference"
  },
  {
    label:
      "find the distinct values compared to another list based on custom logic",
    value: "differenceWith"
  },
  { label: "combine two lists into a list of unique values", value: "union" },
  {
    label:
      "combine two lists into a list of unique values based on custom logic",
    value: "unionWith"
  },
  { label: "combine two lists into a list of pairs", value: "zip" },
  {
    label: "combine two lists into a list of pairs based on custom logic",
    value: "zipWith"
  },
  { label: "convert list of objects into one object", value: "indexBy" },
  {
    label:
      "split a list into two sub lists based on a single predicate function",
    value: "partition"
  }
];

export const objectOptions = [
  { label: "change every value", value: "map / mapObjIndexed" },
  { label: "select a specific key's value", value: "prop / path" },
  {
    label:
      "select a specific key's value or return a default if it is not found",
    value: "propOr / pathOr"
  },
  { label: "select specific keys' values", value: "props" },
  { label: "select specific keys", value: "pick / pickAll" },
  { label: "select keys based on custom logic", value: "filter / pickBy" },
  { label: "remove a specific key", value: "dissoc / dissocPath" },
  { label: "remove specific keys", value: "omit" },
  { label: "remove specific keys based on custom logic", value: "reject" },
  { label: "add a specific key and value", value: "assoc / assocPath" },
  {
    label: "replace a specific value based on custom logic",
    value: "lens / lensProp / lensPath"
  },
  { label: "replace specific values based on custom logic", value: "evolve" },
  { label: "know if a specific key is present", value: "has / hasIn" },
  {
    label: "know if a specific key has a specific value",
    value: "propEq / pathEq"
  },
  {
    label: "know if a specific key's value satisfies a custom predicate",
    value: "propSat}isfies / pathSatisfies"
  },
  { label: "know if specific keys have specific values", value: "whereEq" },
  {
    label: "know if specific keys' values satisfy custom predicates",
    value: "where"
  },
  { label: "list all the keys", value: "keys / keysIn" },
  { label: "list all the values", value: "values / valuesIn" },
  { label: "convert to a list of pairs", value: "toPairs / toPairsIn" },
  {
    label: "know if two objects share the same key and value",
    value: "eqProps"
  },
  { label: "create an object with a single key and value", value: "objOf" },
  { label: "create an object with multiple keys and values", value: "zipObj" },
  { label: "clone an object", value: "clone" },
  { label: "transform an object", value: "applySpec" },
  { label: "merge two objects into one object", value: "merge" },
  {
    label:
      "merge two objects into one object based on custom duplicate key logic",
    value: "mergeWith"
  },
  { label: "merge more than two objects into one object", value: "mergeAll" }
];

export const functionOptions = [
  { label: " combine functions", value: "compose / pipe" },
  { label: "combine promise returning functions", value: "composeP / pipeP" },
  { label: "curry a function", value: "curry" },
  { label: "partially apply a function", value: "partial / partialRight" },
  { label: "uncurry a function", value: "uncurry" },
  { label: "swap the argument order", value: "flip" },
  { label: "apply a list of arguments", value: "apply" },
  {
    label:
      "apply multiple functions to a single value and merge the results somehow",
    value: "converge"
  },
  { label: "transform a function's arguments", value: "useWith" },
  {
    label: "apply a list of functions to each argument and collect the results",
    value: "juxt"
  },
  {
    label: "create a variadic function from one that takes an array",
    value: "unapply"
  },
  { label: "restrict the number of accepted arguments to 1", value: "unary" },
  { label: "restrict the number of accepted arguments to 2", value: "binary" },
  {
    label: "restrict the number of accepted arguments to specific number",
    value: "nAry"
  },
  { label: "return the supplied argument unchanged", value: "identity" },
  { label: "turn a method into a function", value: "invoker" },
  { label: "invoke a function only once", value: "once" },
  { label: "inspect values without affecting them", value: "tap" },
  { label: "bind to a specific context", value: "bind" },
  { label: "lift a function", value: "lift / liftN" },
  { label: "memoize", value: "memoize" }
];

export const logicOptions = [
  {
    label: "apply a function based on conditional logic",
    value: "ifElse / cond / unless / when"
  },
  { label: "negate a value", value: "not" },
  { label: "know if either of two values are truthy", value: "or" },
  { label: "know if two values are truthy", value: "and" },
  { label: "invert a predicate function", value: "complement" },
  {
    label: "know if a value satisfies at least one of two predicates",
    value: "	either"
  },
  { label: "know if a value satisfies two predicates", value: "both" },
  {
    label: "know if a value satisfies at least one of a list of predicates",
    value: "anyPass"
  },
  {
    label: "know if a value satisfies at every one of a list of predicates",
    value: "allPass"
  },
  { label: "produce an empty value", value: "empty" },
  { label: "know if a value is empty", value: "isEmpty" }
];

export const relationOptions = [
  { label: "compare for value equality", value: "equals" },
  { label: "compare for reference equality", value: "identical" },
  { label: "know if a value is less than another", value: "lt" },
  { label: "know if a value is less than or equal to another", value: "lte" },
  { label: "know if a value is greater than another", value: "gt" },
  {
    label: "know if a value is greater than or equal to another",
    value: "gte"
  },
  { label: "find the smallest of two values", value: "min" },
  {
    label: "find the smallest of two values based on custom logi",
    value: "minBy"
  },
  { label: "find the largest of two values", value: "max" },
  {
    label: "find the largest of two values based on custom logic",
    value: "maxBy"
  }
];

export const mathsOptions = [
  { label: "increment a number by one	", value: "inc" },
  { label: "decrement a number by one	", value: "dec" },
  { label: "add two numbers	", value: "add" },
  { label: "ubtract one number from another	", value: "subtract" },
  { label: "multiply two numbers	", value: "multiply" },
  { label: "divide one number by another	", value: "divide" },
  { label: "negate a number	", value: "negate" },
  {
    label: "divide one number by another and get the remainder	",
    value: "modulo / mathMod"
  }
];

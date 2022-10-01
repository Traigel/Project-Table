# Project-Table

---

## Server doc

### Request:

`GET` /data

- `&page=1` default value 1 / not necessary
- `&pageCount=5` default value 5 / not necessary
- `&search=name` value search / not necessary
- `&column=title` search column / type [title, quantity, distance] / not necessary
- `&condition=equals` search condition / type [equals, contains, more, less] / not necessary

### Response:

```ts
type ResponseType = {
    arrData: DataType[]
    totalCountData: number // amount of elements
    page: number // selected page
    pageCount: number // number of elements per page
}

type DataType = {
    id: number
    date: string
    title: string
    quantity: number
    distance: number
}
```

---

## GitHub commits

type: description

The types will be like this:

1. `feat`  - - added a new function to the code
2. `fix` - - fixed a bug in the code
3. `style` - - added styles
4. `refactor` - - refactored something
5. `test`  - - created a test
6. `info`  - - commit to check something, unimportant changes that do not affect the project

EXAMPLE:

test: create unit test for profile reducer

style: change styles for login component
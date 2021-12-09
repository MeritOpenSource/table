# Table Component

The `Table` component displays the data given in an accessible `<table>`.

### Props

- `data` contains an array of objects. All items should have the same keys. Supported types for values are `number` and `string`.

## Features

### Sorting

- By default, the Table is sorted by the first column
- When any heading is clicked, it will sort the table by that column. If the same heading is clicked an additional time, it will sort in the opposite direction.

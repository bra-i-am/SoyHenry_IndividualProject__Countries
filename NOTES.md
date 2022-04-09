# NOTES

## API

### Models

1. Activity Model
   - [ ] _Name_ is set to be **unique**
   - [ ] _Season_ is set to be a **season** or **any**

### Routes routers

1. getCountries
   - [ ] _Name_ is gotten through query.

# CLIENT

## Redux

### Reducers

1. Countries reducer
   - [ ] State countries, countriesAux and regionsFiltered will be charged with **GET_COUNTRIES** starting
   - [ ] **FILTER_REGION** will charge countries and regionsFiltered with the continent required
   - [ ] **FILTER_ACTIVITY** will be set to "All" when **FILTER_REGION** suffer any change; this will only work with the REGIONS FILTERED
   - [ ] **ORDER** is gonna exist only if state.countries !== "string"; will receive "name" or "population". If this change, SORT will change to 'asc'
   - [ ] **SORT** is gonna exist only if state.countries !== "string"; will receive "asc" or "desc"

## Loaders on

1. Landing Page on button disabled
2. Search Bar on button RESET
3. Create activity on full render

## Errors

1. **countries** are the ones that are displayed; if a search failed, this will be a _string_

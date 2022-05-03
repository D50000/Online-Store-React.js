import { PAGINATION_QUERY } from '../components/Pagination';

export default function paginationField() {
  return {
    keyArgs: false, // Setup Apollo keys myself.
    read(existing = [], { args, cache }) {
      // console.log({ existing, args, cache });
      const { skip, first } = args;

      // Read the detail of items on the page from the cache.
      const data = cache.readQuery({ query: PAGINATION_QUERY });
      const count = data?._allProductsMeta?.count;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first);

      // Check if we have existing items.
      const items = existing.slice(skip, skip + first).filter((item) => item);

      // On the last page.
      if (items.length && items.length !== first && page === pages) {
        return items;
      }
      // No item, fetch it from the DB.
      if (items.length !== first) {
        return false;
      }
      if (items.length) {
        return items;
      }

      // Fallback to network
      return false;
    },
    // Apollo fetch back the data will run merge()
    merge(existing, incoming, { args }) {
      const { skip, first } = args;

      // Calculate the item need to update.
      const merged = existing ? existing.slice(0) : [];
      for (let i = skip; i < skip + incoming.length; i + 1) {
        merged[i] = incoming[i - skip];
      }
      return merged;
    },
  };
}

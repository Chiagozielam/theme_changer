import { InMemoryCache } from '@apollo/client';
import { darkMode } from './reactivities/theme';

// Here ,let's define our type and field poliies for our reactive variable.

export default new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        darkMode: {
          read() {
            return darkMode();
          }
        }
      }
    }
  }
})
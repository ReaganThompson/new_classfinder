// Import the wordnet library
const wordnet = require('wordnet');

// Define a function that takes a search query and expands it with synonyms
async function expandQueryWithSynonyms(query) {
  // Create an empty array to store the expanded query
  const expandedQuery = [];

  // Loop through each word in the query
  for (let i = 0; i < query.length; i++) {
    const word = query[i];

    // Look up synonyms for the current word using WordNet
    const synonyms = await new Promise((resolve, reject) => {
      wordnet.lookup(word, (err, definitions) => {
        if (err) {
          reject(err);
        } else {
            const synonyms = definitions
            .filter((d) => d.pos === 'a' || d.pos === 's' || d.pos === 'r' || d.pos === 'n')
            .flatMap((d) => d.synonyms)
            .filter((s) => s !== word);

            resolve(synonyms);
        }
      });
    });

    // Add the original word and its synonyms to the expanded query
    expandedQuery.push(word, ...synonyms);
  }

  return expandedQuery;
}

// Example usage
const query = ['scientifically', 'accurate'];
const expandedQuery = await expandQueryWithSynonyms(query);
console.log(expandedQuery);
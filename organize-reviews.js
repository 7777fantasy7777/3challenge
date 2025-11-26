const fs = require('fs');

// Read the file
const data = fs.readFileSync('review.json', 'utf8');

// Fix the numeric keys to be quoted
const fixed = data.replace(/^(\s*)(\d+):\s*\{/gm, '$1"$2": {');

// Parse the fixed data
const wrapped = `{${fixed}}`;
const parsed = new Function('return ' + wrapped)();

// Collect all reviews from all sections
const allReviews = [];
Object.keys(parsed).forEach(key => {
  if (parsed[key] && parsed[key].reviews && Array.isArray(parsed[key].reviews)) {
    allReviews.push(...parsed[key].reviews);
  }
});

// Remove duplicates by ID
const uniqueReviews = Array.from(
  new Map(allReviews.map(r => [r.id, r])).values()
);

// Sort by createdAt (newest first)
uniqueReviews.sort((a, b) => b.createdAt - a.createdAt);

// Create organized structure
const organized = {
  totalCount: uniqueReviews.length,
  reviews: uniqueReviews
};

// Write back to file with proper formatting
fs.writeFileSync('review.json', JSON.stringify(organized, null, 2), 'utf8');



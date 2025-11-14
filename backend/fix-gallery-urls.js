const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Fix gallery URLs in database
const fixUrls = () => {
  const baseUrl = 'https://backend.prabanjamjewellery.com';
  
  // Update localhost URLs
  const query1 = `UPDATE gallery SET image_url = REPLACE(image_url, 'http://localhost:5001', '${baseUrl}')`;
  
  // Update undefined URLs
  const query2 = `UPDATE gallery SET image_url = REPLACE(image_url, 'undefined', '${baseUrl}')`;
  
  db.query(query1, (err, result) => {
    if (err) {
      console.error('Error updating localhost URLs:', err);
    } else {
      console.log('Fixed localhost URLs:', result.affectedRows, 'rows updated');
    }
    
    db.query(query2, (err, result) => {
      if (err) {
        console.error('Error updating undefined URLs:', err);
      } else {
        console.log('Fixed undefined URLs:', result.affectedRows, 'rows updated');
      }
      
      // Show final results
      db.query('SELECT id, title, image_url FROM gallery', (err, results) => {
        if (!err) {
          console.log('Final gallery URLs:');
          results.forEach(row => {
            console.log(`${row.id}: ${row.title} -> ${row.image_url}`);
          });
        }
        db.end();
      });
    });
  });
};

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to database, fixing URLs...');
  fixUrls();
});
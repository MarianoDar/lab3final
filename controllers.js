const db = require('./db');

exports.getAllLibros = (req, res) => {
  db.query('SELECT * FROM libros', (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

exports.getLibroById = (req, res) => {
  const libroId = req.params.id;
  db.query('SELECT * FROM libros WHERE id = ?', [libroId], (err, result) => {
    if (err) throw err;
    res.json(result[0]);
  });
};

exports.addLibro = (req, res) => {
  const { titulo, autor, genero, ano_publicacion, num_paginas } = req.body;
  db.query(
    'INSERT INTO libros (titulo, autor, genero, ano_publicacion, num_paginas) VALUES (?, ?, ?, ?, ?)',
    [titulo, autor, genero, ano_publicacion, num_paginas],
    (err, result) => {
      if (err) throw err;
      res.json({ mensaje: 'Libro agregado correctamente' });
    }
  );
};

exports.updateLibro = (req, res) => {
  const libroId = req.params.id;
  const { titulo, autor, genero, ano_publicacion, num_paginas } = req.body;
  db.query(
    'UPDATE libros SET titulo=?, autor=?, genero=?, ano_publicacion=?, num_paginas=? WHERE id=?',
    [titulo, autor, genero, ano_publicacion, num_paginas, libroId],
    (err, result) => {
      if (err) throw err;
      res.json({ mensaje: 'Libro actualizado correctamente' });
    }
  );
};

exports.deleteLibro = (req, res) => {
  const libroId = req.params.id;
  db.query('DELETE FROM libros WHERE id=?', [libroId], (err, result) => {
    if (err) throw err;
    res.json({ mensaje: 'Libro eliminado correctamente' });
  });
};

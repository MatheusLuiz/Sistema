app.post('/logout', (req, res) => {
    // Lógica de logout, por exemplo, destruir a sessão
    req.session.destroy((err) => {
      if (err) {
        return res.redirect('/');
      }
      res.clearCookie('connect.sid');
      res.redirect('/login');
    });
  });
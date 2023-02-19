function httpGetGameStars(req, res) {
  return res.status(200).json({
    message: "Everything has gone well!",
  });
}

export default httpGetGameStars;

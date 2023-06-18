const collectibleApi = async (req, res) => {
  const query = req.query.id;

  const totalSupply = 9999;

  if (parseInt(query) <= totalSupply) {
    let metadata = {};
    metadata = {
      name: `Eihwaz Loyalty NFT #${query}`,
      description:
        "Ezt a korlátozott számú NFT-t azok a játékosok kapják akik a korai elköteleződéssel segítenek a rendszer stabilitását biztosítani. Szerezz be egy NFT-t és jutalomként kedvezményt kapsz. Amit felhasználhatsz a „Play and Earn” játékban.\n\n A Loyalty NFT elégetése után, három NFT-t kapsz jutalmul amiért támogattad a rendszer fejlesztését. Egy Gold PASS egy Utility BOX NFT, ami később egy random Utility NFT-t tartalmaz. Valamint egy Futhark NFT-t, amihez egy külön játékot is szerveztünk.\n\nLearn more: [docs.tipont.com](https://docs.tipont.com)",
      image: "ipfs://QmTWt8YHuTPfQzJ2Q4U2eXHEWS7nKQWA7S5YTa2nATXv8U",
      external_url: `https://tipont.com/`,
      attributes: [
        {
          trait_type: "Level",
          value: 1,
        },
        {
          trait_type: "Server",
          value: "Eihwaz",
        },
      ],
    };

    res.statusCode = 200;
    res.json(metadata);
  } else {
    res.statuscode = 404;
    res.json({ error: "The collectible you requested is out of range" });
  }
};

export default collectibleApi;

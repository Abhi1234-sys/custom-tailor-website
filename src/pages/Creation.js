function Creation() {

  const videos = [
    "5CnAZMdbFuI",
    "U3jg77PhUsc",
    "2J-iabg-ETU",
    "paBbdqg_22w",
    "fEYZX2-Ly9A",
    "Kf1mEy9ai7M",
    "pCRpX6IMh2s",
    "cIel4C6JOfg",
    "G1yyFhjbULw",
    "GBdakX0bQJA",
    "LlwFW0LC24c",
    "MrZBk8XE1No",
    "xTGDbbU21_k",
    "anIPviMfI3E",
    "wvvPxwopBpg",
    "b89JM2l9ezY",
    "2lpDH_amaRw"
  ];

  const phoneNumber = "9851167574"; // 🔥 put your number

  return (
    <div className="creation">

      <h1>My Creations</h1>

      <p className="creation-text">
        Every design is crafted with love, precision, and attention to detail.
        Each blouse tells a unique story of style, elegance, and confidence.
      </p>

      <div className="video-list">
        {videos.map((id, index) => (
          <div key={index} className="video-card">

            <iframe
              src={`https://www.youtube.com/embed/${id}`}
              title={`Video ${index + 1}`}
              allowFullScreen
            ></iframe>

            {/* ✅ WhatsApp Button */}
            <a
              href={`https://wa.me/${phoneNumber}?text=Hi, I saw your design video and want to book stitching service.`}
              target="_blank"
              rel="noreferrer"
            >
              <button className="whatsapp-btn">
                Book on WhatsApp
              </button>
            </a>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Creation;
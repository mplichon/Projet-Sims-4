package sims.model;

public enum TypeAspiration {
	AMOUR("Amour", "https://luniversims.fr/uploads/monthly_2022_03/519512640_AspirationAmour.png.3950b0862a04029c48c94e487e5afefc.png"),
	CONNAISSANCE("Connaissance", "https://luniversims.fr/uploads/monthly_2022_03/1376323011_AspirationsConnaissances.png.5e1104658667cf986203ced4c1cdf0a1.png"),
	CREATIVITE("Créativité", "https://luniversims.fr/uploads/monthly_2022_03/1283756511_AspirationsCrativit.png.ac089d7adfc21827bda38783f3222266.png"),
	DEVIANCE("Déviance", "https://luniversims.fr/uploads/monthly_2022_03/2050094866_AspirationsDviance.png.505fbf5d134ab1ea2790883d021cab60.png"),
	FAMILLE("Famille", "https://luniversims.fr/uploads/monthly_2022_03/1856001947_AspirationsFamille.png.9bb73ba822bf2df1502c5e927fc8536d.png"),
	FORTUNE("Fortune", "https://luniversims.fr/uploads/monthly_2022_03/1578241406_AspirationsFortune.png.63e60a2ccff5d30254c91a7ac51da89c.png"),
	NATURE("Nature", "https://luniversims.fr/uploads/monthly_2022_03/618543432_AspirationNature.png.837dfdd437440bc0601cab8b4bdee65d.png"),
	NOURRITURE("Nourriture", "https://luniversims.fr/uploads/monthly_2022_03/380909586_AspirationsNourriture.png.f829f636154745abd0762fea69c0aaac.png"),
	POPULARITE("Popularité", "https://luniversims.fr/uploads/monthly_2022_03/826273757_AspirationsPopularit.png.ae235ce4bbbbb8e5ceb1a32d327e0728.png"),
	SPORT("Sport", "https://luniversims.fr/uploads/monthly_2022_03/1780343017_AspirationsSport.png.a19271ed8295657286ff2bcc3de31c12.png"),
	LIEU("Lieu", "https://luniversims.fr/uploads/monthly_2022_03/1644100463_AspirationsLieu.png.e6b8e40e1b9d9ec65133d6cb54b378a8.png"),
	ANIMAL("Animal", "https://luniversims.fr/uploads/monthly_2022_03/76895547_AspirationAnimaux.png.b074d98a4c46c797fe477c6264985bba.png"),
	BIEN_ETRE("Bien-être", "https://luniversims.fr/uploads/monthly_2022_03/1657950884_AspirationsBien-tre.png.2bc884e12c1ecf26e052ddb399d95115.png"),
	STAR_WARS("Star Wars", "https://luniversims.fr/uploads/monthly_2022_03/2073632694_AspirationsStarWars.png.4cde26250f3ee1bbc9e78a31c5c1b8a1.png"),
	LYCANTHROPIE("Lycanthropie", null),
	FEE("Fée", "https://luniversims.fr/uploads/monthly_2025_07/image.png.28430b10ef63179430fca0c99bcf3202.png"),
	
	ADO("Ado", null),
	
	CREATIVITE_ENFANT("Créativité (enfant)", "https://luniversims.fr/uploads/monthly_2022_03/1508255428_AspirationsCrativit.png.d3985e052a3d3304052a39d0a6bea277.png"),
	FACULTES_MENTALES("Facultés mentales", "https://luniversims.fr/uploads/monthly_2022_03/894759774_AspirationsFacultsMentale.png.3f2a5437ca70904a122178c84658aaa5.png"),
	FACULTES_MOTRICES("Facultés motrices", "https://luniversims.fr/uploads/monthly_2022_03/374051787_AspirationsFacultsMotrices.png.f64b6662a8ab6aa63a467bccce7606fe.png"),
	FACULTES_SOCIALES("Facultés sociales", "https://luniversims.fr/uploads/monthly_2022_03/231129896_AspirationsFacultsSociales.png.2495b74bf75747789b1c56f3470534bb.png"),
	POLYVALENCE("Polyvalence", "https://luniversims.fr/uploads/monthly_2023_03/image.png.44b4d54e3803f7cdc91f3431d974ebc8.png");
	
	// Attributs
	private final String nom;
	private final String img;
	
	
	// Constructeurs
	private TypeAspiration(String nom, String img) {
		this.nom = nom;
		this.img = img;
	}


	// Getters
	public String getNom() {
		return nom;
	}

	public String getImg() {
		return img;
	}
}
